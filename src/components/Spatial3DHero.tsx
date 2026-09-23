import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  ShieldCheck, 
  Globe2, 
  Mail, 
  Server, 
  AlertTriangle, 
  Shield, 
  Code2, 
  Sparkles, 
  RefreshCw, 
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface Spatial3DHeroProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
  onSelectSection: (sectionId: string) => void;
}

interface InfrastructurePillar {
  id: string;
  name: string;
  badge: string;
  pillarCategory: string;
  sectionId: string;
  serviceTitle: string;
  priceNote: string;
  businessImpact: string;
  specs: string[];
  cameraTarget: { x: number; y: number; z: number };
  cameraLook: { x: number; y: number; z: number };
  color: number;
  icon: React.ElementType;
}

const INFRASTRUCTURE_PILLARS: InfrastructurePillar[] = [
  {
    id: 'overview',
    name: 'Digital Backbone',
    badge: 'Malawi & African Cloud',
    pillarCategory: 'End-to-End Ecosystem',
    sectionId: 'solutions',
    serviceTitle: 'Full Digital Transformation',
    priceNote: 'Tailored Enterprise & SME Solutions',
    businessImpact: 'Unifies web, email, cloud hosting, internal systems and rapid on-site IT support into one reliable partner.',
    specs: ['Blantyre HQ & Lilongwe Hubs', 'Local Kwacha Billing', 'Zero Overseas Hiring Headache'],
    cameraTarget: { x: 0, y: 5.2, z: 16.5 },
    cameraLook: { x: 0, y: 0.5, z: 0 },
    color: 0x38bdf8,
    icon: Cpu,
  },
  {
    id: 'web',
    name: 'Business Websites',
    badge: 'Digital Storefront',
    pillarCategory: 'Digital Presence',
    sectionId: 'business-website',
    serviceTitle: 'Business Starter Website',
    priceNote: 'Starting from MK 199,000',
    businessImpact: 'Turns casual visitors into paying customers with high-speed mobile loading, SEO visibility, and WhatsApp ordering.',
    specs: ['Optimized for Airtel & TNM speeds', 'Mobile-first responsive UX', 'Direct WhatsApp & Call triggers'],
    cameraTarget: { x: -6.2, y: 3.2, z: 7.2 },
    cameraLook: { x: -4.2, y: 1.2, z: 1.5 },
    color: 0x38bdf8,
    icon: Globe2,
  },
  {
    id: 'email',
    name: 'Enterprise Email',
    badge: 'Branded Inboxes',
    pillarCategory: 'Professional Identity',
    sectionId: 'business-email',
    serviceTitle: 'Business Domain Email',
    priceNote: 'From MK 45,000 / inbox / year',
    businessImpact: 'Eliminates untrusted @gmail.com addresses. Fully secured with SPF, DKIM, and enterprise anti-phishing protection.',
    specs: ['name@yourbusiness.mw setup', 'Outlook, Apple Mail & Webmail sync', 'Spam & impersonation defense'],
    cameraTarget: { x: 6.2, y: 3.4, z: 6.8 },
    cameraLook: { x: 4.4, y: 1.3, z: 1.4 },
    color: 0x34d399,
    icon: Mail,
  },
  {
    id: 'cloud',
    name: 'Cloud & Hosting',
    badge: '99.9% Uptime Datacenter',
    pillarCategory: 'Core Infrastructure',
    sectionId: 'hosting-domains',
    serviceTitle: 'Cloud Hosting & Domain Setup',
    priceNote: 'From MK 65,000 / year',
    businessImpact: 'High-availability SSD hosting for .mw and international domains with automated off-site daily backups and SSL certificates.',
    specs: ['SSD NVMe Storage', '.mw & .com domain registration', 'Automated nightly snapshots'],
    cameraTarget: { x: 0.2, y: 3.2, z: 10.5 },
    cameraLook: { x: 0, y: 0.8, z: 0 },
    color: 0x818cf8,
    icon: Server,
  },
  {
    id: 'software',
    name: 'Software Solutions',
    badge: 'Custom Portals & Field Sync',
    pillarCategory: 'Business Process Automation',
    sectionId: 'software-solutions',
    serviceTitle: 'Custom Software Solution',
    priceNote: 'Scope-based transparent quote',
    businessImpact: 'Replaces error-prone manual spreadsheets with custom web portals, field data collection, and local Airtel/TNM mobile money APIs.',
    specs: ['Field-to-HQ offline sync', 'Role-based access permissions', 'Airtel Money & Mpamba API ready'],
    cameraTarget: { x: -5.4, y: 1.8, z: -1.2 },
    cameraLook: { x: -3.8, y: -0.2, z: -3.2 },
    color: 0xa78bfa,
    icon: Code2,
  },
  {
    id: 'rescue',
    name: 'IT Rescue & Care',
    badge: 'Emergency Support & SLA',
    pillarCategory: 'Rapid Response & Retainer',
    sectionId: 'it-rescue',
    serviceTitle: 'Emergency IT Rescue Support',
    priceNote: 'Immediate triage in Blantyre & Lilongwe',
    businessImpact: 'Instant disaster recovery for down servers, hacked sites, broken emails, or computer failure with fast physical and remote dispatch.',
    specs: ['Blantyre & Lilongwe physical response', 'Secure remote screen intervention', 'Preventative TechNix Care maintenance'],
    cameraTarget: { x: 5.6, y: 2.2, z: -1.4 },
    cameraLook: { x: 3.9, y: 0.2, z: -3.0 },
    color: 0xf87171,
    icon: AlertTriangle,
  },
];

export const Spatial3DHero: React.FC<Spatial3DHeroProps> = ({
  onOpenQuote,
  onOpenHealthCheck,
  onOpenITRescue,
  onSelectSection,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPillarId, setSelectedPillarId] = useState<string>('overview');
  const [isRotatingManually, setIsRotatingManually] = useState(false);

  // Active selected pillar
  const activePillar = INFRASTRUCTURE_PILLARS.find((p) => p.id === selectedPillarId) || INFRASTRUCTURE_PILLARS[0];

  // Camera lerp targets
  const targetCameraPos = useRef(new THREE.Vector3(0, 5.2, 16.5));
  const targetCameraLook = useRef(new THREE.Vector3(0, 0.5, 0));

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePillarSelect = (pillarId: string) => {
    setSelectedPillarId(pillarId);
    const pillar = INFRASTRUCTURE_PILLARS.find((p) => p.id === pillarId);
    if (!pillar) {
      targetCameraPos.current.set(0, 5.2, 16.5);
      targetCameraLook.current.set(0, 0.5, 0);
      return;
    }
    targetCameraPos.current.set(pillar.cameraTarget.x, pillar.cameraTarget.y, pillar.cameraTarget.z);
    targetCameraLook.current.set(pillar.cameraLook.x, pillar.cameraLook.y, pillar.cameraLook.z);
  };

  const handleResetCamera = () => {
    handlePillarSelect('overview');
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 5.2, 16.5);
    camera.lookAt(0, 0.5, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mount.appendChild(renderer.domElement);

    // 2. Cinematic Lighting
    scene.add(new THREE.AmbientLight(0xcfd8dc, 1.1));

    const keySun = new THREE.DirectionalLight(0x38bdf8, 3.2);
    keySun.position.set(10, 16, 12);
    scene.add(keySun);

    const rimLight = new THREE.DirectionalLight(0x34d399, 2.0);
    rimLight.position.set(-12, -4, -10);
    scene.add(rimLight);

    const blanGlow = new THREE.PointLight(0x38bdf8, 2.5, 14);
    blanGlow.position.set(-3.5, 0.5, 2.2);
    scene.add(blanGlow);

    const lilGlow = new THREE.PointLight(0x34d399, 2.5, 14);
    lilGlow.position.set(3.5, 0.5, 2.2);
    scene.add(lilGlow);

    // 3. World Group
    const world = new THREE.Group();
    scene.add(world);

    // -------------------------------------------------------------
    // BASE INFRASTRUCTURE FOUNDATION (Hexagonal Backbone Grid)
    // -------------------------------------------------------------
    const gridHelper = new THREE.GridHelper(24, 28, 0x0284c7, 0x1e293b);
    gridHelper.position.y = -2.8;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.3;
    world.add(gridHelper);

    // Outer Glow Ring (Fiber Optic Ring of Southern Africa)
    const fiberRing = new THREE.Mesh(
      new THREE.TorusGeometry(9.2, 0.035, 8, 120),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 })
    );
    fiberRing.rotation.x = Math.PI / 2;
    fiberRing.position.y = -2.75;
    world.add(fiberRing);

    // Secondary Emerald Security Perimeter Ring
    const perimeterRing = new THREE.Mesh(
      new THREE.TorusGeometry(10.5, 0.02, 8, 120),
      new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.25 })
    );
    perimeterRing.rotation.x = Math.PI / 2;
    perimeterRing.position.y = -2.78;
    world.add(perimeterRing);

    // -------------------------------------------------------------
    // REGIONAL HUBS: BLANTYRE HQ & LILONGWE OPERATIONS
    // -------------------------------------------------------------
    const createLocalHub = (x: number, z: number, colorHex: number, name: string) => {
      const hubGroup = new THREE.Group();
      hubGroup.position.set(x, -2.6, z);

      // Base Pillar Platform
      const basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.4, 0.35, 32),
        new THREE.MeshStandardMaterial({
          color: 0x0a192f,
          metalness: 0.85,
          roughness: 0.2,
        })
      );
      hubGroup.add(basePlatform);

      // Glowing Ground Target Ring
      const targetRing = new THREE.Mesh(
        new THREE.RingGeometry(1.3, 1.45, 32),
        new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
      );
      targetRing.rotation.x = -Math.PI / 2;
      targetRing.position.y = 0.2;
      hubGroup.add(targetRing);

      // Vertical Telemetry Transmission Pillar
      const antenna = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.2, 1.8, 16),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.1 })
      );
      antenna.position.y = 1.1;
      hubGroup.add(antenna);

      // Transmitter Beacon
      const transmitter = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshStandardMaterial({
          color: colorHex,
          emissive: colorHex,
          emissiveIntensity: 1.8,
        })
      );
      transmitter.position.y = 2.1;
      hubGroup.add(transmitter);

      // Pulsing Radar Rings
      const radarRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.65, 0.02, 6, 32),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.7 })
      );
      radarRing.rotation.x = Math.PI / 2;
      radarRing.position.y = 2.1;
      hubGroup.add(radarRing);

      world.add(hubGroup);
      return { hubGroup, radarRing, transmitter };
    };

    const blantyreHub = createLocalHub(-4.5, 3.2, 0x38bdf8, 'Blantyre');
    const lilongweHub = createLocalHub(4.5, 3.2, 0x34d399, 'Lilongwe');

    // High-Speed Fiber Optic Backbone Connecting Blantyre <-> Lilongwe
    const localBackboneCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.5, -0.5, 3.2),
      new THREE.Vector3(0, 0.6, 4.0),
      new THREE.Vector3(4.5, -0.5, 3.2),
    ]);
    const localBackboneTube = new THREE.Mesh(
      new THREE.TubeGeometry(localBackboneCurve, 40, 0.035, 8, false),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 })
    );
    world.add(localBackboneTube);

    // -------------------------------------------------------------
    // 1. CENTRAL ENTERPRISE DATACENTER / CLOUD BLADE TOWER
    // -------------------------------------------------------------
    const datacenterGroup = new THREE.Group();
    datacenterGroup.position.set(0, 0.3, 0);
    world.add(datacenterGroup);

    // Black High-Precision Server Rack Cabinet
    const rackCabinet = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 4.2, 1.8),
      new THREE.MeshStandardMaterial({
        color: 0x050c17,
        metalness: 0.95,
        roughness: 0.1,
      })
    );
    datacenterGroup.add(rackCabinet);

    // Server Blade Slots with Glowing LED Activity Lights
    const bladeLEDs: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const yPos = -1.5 + i * 0.75;

      // Blade Front Face Plate
      const bladeFace = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 0.55, 0.05),
        new THREE.MeshStandardMaterial({
          color: 0x0f1f38,
          metalness: 0.8,
          roughness: 0.25,
        })
      );
      bladeFace.position.set(0, yPos, 0.93);
      datacenterGroup.add(bladeFace);

      // Status Bar
      const statusMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.06, 0.06),
        new THREE.MeshBasicMaterial({
          color: i === 4 ? 0x38bdf8 : 0x34d399,
        })
      );
      statusMesh.position.set(0, yPos, 0.96);
      datacenterGroup.add(statusMesh);

      // Multi-color blinking Activity LEDs
      for (let j = 0; j < 4; j++) {
        const led = new THREE.Mesh(
          new THREE.SphereGeometry(0.04, 8, 8),
          new THREE.MeshBasicMaterial({
            color: j % 2 === 0 ? 0x38bdf8 : 0x34d399,
          })
        );
        led.position.set(-0.8 + j * 0.18, yPos - 0.15, 0.97);
        datacenterGroup.add(led);
        bladeLEDs.push(led);
      }
    }

    // Cloud Holographic Halo above Datacenter (Uptime & Backup SLA)
    const cloudRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.03, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.7 })
    );
    cloudRing.rotation.x = Math.PI / 2.2;
    cloudRing.position.set(0, 2.7, 0);
    datacenterGroup.add(cloudRing);

    const cloudOrb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.65, 2),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 1.4,
        roughness: 0.1,
        metalness: 0.3,
        wireframe: true,
      })
    );
    cloudOrb.position.set(0, 2.7, 0);
    datacenterGroup.add(cloudOrb);

    // -------------------------------------------------------------
    // 2. MODERN WEB PLATFORM / STOREFRONT (Business Websites)
    // -------------------------------------------------------------
    const webPlatformGroup = new THREE.Group();
    webPlatformGroup.position.set(-4.5, 1.2, 1.5);
    world.add(webPlatformGroup);

    // 3D Glass Device / Floating Display Frame
    const monitorFrame = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 1.7, 0.1),
      new THREE.MeshStandardMaterial({
        color: 0x0a1628,
        metalness: 0.8,
        roughness: 0.2,
      })
    );
    webPlatformGroup.add(monitorFrame);

    // Glowing Web Screen
    const monitorScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 1.5),
      new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0369a1,
        emissiveIntensity: 0.8,
      })
    );
    monitorScreen.position.z = 0.06;
    webPlatformGroup.add(monitorScreen);

    // Web Layout Wireframe Elements (Header bar, Hero block, Action button)
    const webHeaderBar = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.16, 0.02),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    webHeaderBar.position.set(0, 0.55, 0.08);
    webPlatformGroup.add(webHeaderBar);

    const webHeroBlock = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.6, 0.02),
      new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.7 })
    );
    webHeroBlock.position.set(-0.4, 0.05, 0.08);
    webPlatformGroup.add(webHeroBlock);

    const webCTAButton = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.22, 0.03),
      new THREE.MeshBasicMaterial({ color: 0x34d399 })
    );
    webCTAButton.position.set(0.65, -0.4, 0.08);
    webPlatformGroup.add(webCTAButton);

    // -------------------------------------------------------------
    // 3. ENTERPRISE EMAIL & CRYPTO SECURITY SHIELD (Business Email)
    // -------------------------------------------------------------
    const emailShieldGroup = new THREE.Group();
    emailShieldGroup.position.set(4.5, 1.3, 1.5);
    world.add(emailShieldGroup);

    // 3D Dimensional Mail Envelope
    const mailBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 1.4, 0.15),
      new THREE.MeshStandardMaterial({
        color: 0x0f2942,
        metalness: 0.85,
        roughness: 0.15,
      })
    );
    emailShieldGroup.add(mailBody);

    // Envelope Flap Triangles
    const flapGeo = new THREE.ConeGeometry(1.0, 0.6, 3);
    const flapMesh = new THREE.Mesh(
      flapGeo,
      new THREE.MeshStandardMaterial({
        color: 0x34d399,
        emissive: 0x059669,
        emissiveIntensity: 0.9,
      })
    );
    flapMesh.rotation.z = Math.PI;
    flapMesh.rotation.y = Math.PI / 6;
    flapMesh.position.set(0, 0.25, 0.1);
    emailShieldGroup.add(flapMesh);

    // Security Verification Shield Ring (DKIM / SPF)
    const emailSecurityRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.5, 0.03, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.75 })
    );
    emailSecurityRing.position.set(0, 0, 0.05);
    emailShieldGroup.add(emailSecurityRing);

    // -------------------------------------------------------------
    // 4. CUSTOM SOFTWARE & FIELD MOBILE TERMINAL (Software Solutions)
    // -------------------------------------------------------------
    const softwareGroup = new THREE.Group();
    softwareGroup.position.set(-4.0, -0.2, -3.2);
    world.add(softwareGroup);

    // 3D Mobile / Field Workstation Tablet
    const tabletBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 2.3, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.9, roughness: 0.15 })
    );
    softwareGroup.add(tabletBody);

    const tabletScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.25, 2.05),
      new THREE.MeshStandardMaterial({
        color: 0x581c87,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.9,
      })
    );
    tabletScreen.position.z = 0.05;
    softwareGroup.add(tabletScreen);

    // Software Data Pipelines Bars
    for (let k = 0; k < 3; k++) {
      const codeBar = new THREE.Mesh(
        new THREE.BoxGeometry(0.95, 0.15, 0.02),
        new THREE.MeshBasicMaterial({ color: 0xc084fc })
      );
      codeBar.position.set(0, 0.6 - k * 0.45, 0.07);
      softwareGroup.add(codeBar);
    }

    // -------------------------------------------------------------
    // 5. IT RESCUE EMERGENCY RADAR BEACON (Rapid Response & Care)
    // -------------------------------------------------------------
    const rescueBeaconGroup = new THREE.Group();
    rescueBeaconGroup.position.set(4.0, 0.1, -3.0);
    world.add(rescueBeaconGroup);

    // Emergency Lifeline Radar Dome
    const rescueDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0xdc2626,
        emissiveIntensity: 1.2,
        transparent: true,
        opacity: 0.75,
      })
    );
    rescueDome.position.y = -0.3;
    rescueBeaconGroup.add(rescueDome);

    // Rotating Emergency Sweep Ring
    const rescueSweepRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.025, 6, 36),
      new THREE.MeshBasicMaterial({ color: 0xf87171, transparent: true, opacity: 0.85 })
    );
    rescueSweepRing.rotation.x = Math.PI / 2;
    rescueSweepRing.position.y = 0.4;
    rescueBeaconGroup.add(rescueSweepRing);

    // -------------------------------------------------------------
    // REAL-TIME DATA HIGHWAYS & PACKET STREAMS
    // -------------------------------------------------------------
    // Connecting Central Datacenter to Web Platform, Email, Software, and Rescue
    interface DataHighway {
      tube: THREE.Mesh;
      packet: THREE.Mesh;
      curve: THREE.CatmullRomCurve3;
      t: number;
      speed: number;
    }

    const highways: DataHighway[] = [];

    const createHighway = (
      start: THREE.Vector3,
      mid: THREE.Vector3,
      end: THREE.Vector3,
      colorHex: number,
      speed: number
    ) => {
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 36, 0.02, 6, false),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.35 })
      );
      world.add(tube);

      const packet = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 10, 10),
        new THREE.MeshBasicMaterial({ color: colorHex })
      );
      world.add(packet);

      highways.push({ tube, packet, curve, t: Math.random(), speed });
    };

    // 1. Cloud -> Web Platform
    createHighway(
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(-2.2, 2.2, 0.8),
      new THREE.Vector3(-4.5, 1.2, 1.5),
      0x38bdf8,
      0.0018
    );

    // 2. Cloud -> Enterprise Email
    createHighway(
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(2.2, 2.2, 0.8),
      new THREE.Vector3(4.5, 1.3, 1.5),
      0x34d399,
      0.0019
    );

    // 3. Cloud -> Custom Software Terminal
    createHighway(
      new THREE.Vector3(0, 0.5, 0),
      new THREE.Vector3(-2.0, 0.8, -1.8),
      new THREE.Vector3(-4.0, -0.2, -3.2),
      0xa78bfa,
      0.0015
    );

    // 4. Cloud -> IT Rescue Hub
    createHighway(
      new THREE.Vector3(0, 0.5, 0),
      new THREE.Vector3(2.0, 0.8, -1.6),
      new THREE.Vector3(4.0, 0.1, -3.0),
      0xf87171,
      0.0022
    );

    // 5. Blantyre Hub -> Cloud Datacenter
    createHighway(
      new THREE.Vector3(-4.5, -0.6, 3.2),
      new THREE.Vector3(-2.4, -0.5, 1.6),
      new THREE.Vector3(0, 0.3, 0),
      0x38bdf8,
      0.0021
    );

    // 6. Lilongwe Hub -> Cloud Datacenter
    createHighway(
      new THREE.Vector3(4.5, -0.6, 3.2),
      new THREE.Vector3(2.4, -0.5, 1.6),
      new THREE.Vector3(0, 0.3, 0),
      0x34d399,
      0.0021
    );

    // Constellation Ambient Tech Particles
    const starCount = 140;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const radius = 7 + Math.random() * 15;
      const angle = Math.random() * Math.PI * 2;
      starPos[i * 3] = Math.cos(angle) * radius;
      starPos[i * 3 + 1] = -3 + Math.random() * 12;
      starPos[i * 3 + 2] = Math.sin(angle) * radius - 2;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });
    world.add(new THREE.Points(starGeo, starMat));

    // Pointer Interaction (Orbit & Parallax)
    let pointerX = 0;
    let pointerY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let manualRotY = 0;
    let manualRotX = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsRotatingManually(true);
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.4;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.25;

      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        manualRotY += deltaX * 0.004;
        manualRotX += deltaY * 0.0025;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsRotatingManually(false), 600);
    };

    mount.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);
    handleResize();

    // Render Animation Loop
    let animId: number;
    const clock = new THREE.Clock();
    const currentCameraPos = new THREE.Vector3().copy(camera.position);
    const currentCameraLook = new THREE.Vector3(0, 0.5, 0);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!reducedMotion) {
        // Blinking blade LEDs
        bladeLEDs.forEach((led, idx) => {
          const visible = Math.sin(elapsed * 6 + idx) > -0.2;
          led.visible = visible;
        });

        // Cloud halo rotation
        cloudRing.rotation.z += 0.005;
        cloudOrb.rotation.y += 0.008;

        // Web platform gentle hover
        webPlatformGroup.position.y = 1.2 + Math.sin(elapsed * 1.8) * 0.06;
        webPlatformGroup.rotation.y = 0.2 + Math.sin(elapsed * 0.8) * 0.03;

        // Email shield hover
        emailShieldGroup.position.y = 1.3 + Math.sin(elapsed * 1.6 + 1) * 0.06;
        emailSecurityRing.rotation.z += 0.01;

        // Software terminal hover
        softwareGroup.position.y = -0.2 + Math.sin(elapsed * 1.5 + 2) * 0.05;

        // Rescue beacon sweep
        rescueSweepRing.rotation.z += 0.025;

        // Blantyre & Lilongwe radar pulses
        blantyreHub.radarRing.scale.setScalar(1 + (Math.sin(elapsed * 3) + 1) * 0.2);
        lilongweHub.radarRing.scale.setScalar(1 + (Math.cos(elapsed * 3) + 1) * 0.2);

        // Data highway packet flow
        highways.forEach((hw) => {
          hw.t = (hw.t + hw.speed) % 1;
          hw.packet.position.copy(hw.curve.getPointAt(hw.t));
        });

        // World continuous gentle drift and user rotation
        world.rotation.y += (manualRotY + pointerX - world.rotation.y) * 0.05 + 0.0008;
        world.rotation.x += (manualRotX + pointerY - world.rotation.x) * 0.05;
      }

      // Smooth camera interpolation towards selected node target
      currentCameraPos.lerp(targetCameraPos.current, 0.04);
      currentCameraLook.lerp(targetCameraLook.current, 0.04);
      camera.position.copy(currentCameraPos);
      camera.lookAt(currentCameraLook);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      mount.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else if (obj.material) {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const ActiveIcon = activePillar.icon;

  return (
    <section 
      id="hero-spatial-3d" 
      className="relative overflow-hidden bg-slate-950 text-white min-h-[760px] lg:min-h-[860px] flex flex-col justify-between border-b border-slate-800"
    >
      {/* Dynamic Deep Space Gradients & Tech Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(14,165,233,0.22),transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-600/12 blur-[160px] rounded-full pointer-events-none" />

      {/* 3D WebGL African Digital Infrastructure Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        title="Interactive African Digital Infrastructure (Drag to orbit, click pillars below to inspect)"
      />

      {/* Foreground Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 w-full flex-1 flex flex-col justify-between pointer-events-none">
        
        {/* Top Header & Main Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-left pointer-events-auto">
            
            {/* Identity & Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/90 rounded-full px-4 py-1.5 text-xs sm:text-sm text-slate-200 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold tracking-wide">TechNix Africa • Digital Infrastructure Partner</span>
              <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">| BLANTYRE & LILONGWE</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.07] text-balance">
              Technology That Moves <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Your Business Forward.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              We engineer, deploy and support the digital systems African businesses and organisations rely on every single day — from high-speed websites and professional email to custom software and emergency IT rescue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix, I would like to consult on digital systems for our business.')}
                className="flex items-center space-x-2 px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm rounded-xl border border-slate-700 backdrop-blur-md transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Talk to TechNix</span>
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix, reaching out directly on WhatsApp.')}
                className="flex items-center space-x-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer"
                title="Direct WhatsApp chat"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Operational Commitments */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Local Engineers in Blantyre & Lilongwe</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Transparent Malawi Kwacha (MK) Pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">We Stay With You Long-Term</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Infrastructure Telemetry HUD */}
          <div className="lg:col-span-5 pointer-events-auto space-y-3">
            
            {/* Live Interactive Telemetry Card */}
            <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 p-5 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    3D Infrastructure Inspector
                  </span>
                </div>
                
                <button 
                  onClick={handleResetCamera}
                  className="text-[11px] text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer transition-colors"
                  title="Reset 3D camera to overview"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset View</span>
                </button>
              </div>

              {/* Node Metadata Display */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      {activePillar.pillarCategory} • {activePillar.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {activePillar.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activePillar.businessImpact}
                </p>

                {/* Key Technical Specs */}
                <div className="space-y-1.5 pt-1">
                  {activePillar.specs.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <Zap className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Deep Dive Link */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">
                    {activePillar.priceNote}
                  </span>
                  <button
                    onClick={() => onSelectSection(activePillar.sectionId)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Direct Action */}
              <div className="pt-1 flex gap-2">
                <button
                  onClick={() => onOpenQuote(activePillar.serviceTitle)}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer text-center shadow-md shadow-blue-600/20"
                >
                  Request Quote for {activePillar.name}
                </button>
              </div>
            </div>

            {/* 3D Orbit Control Hint */}
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>Drag to inspect 3D infrastructure • Click pillars to focus camera</span>
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">
                {isRotatingManually ? 'ORBITING' : 'READY'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Pillar Selectors & Verified Institutional Proof */}
        <div className="pt-8 space-y-4 pointer-events-auto">
          
          {/* Pillar Switcher Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0 flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5 text-blue-400 mr-1" />
              <span>Infrastructure Stack:</span>
            </span>
            {INFRASTRUCTURE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => handlePillarSelect(pillar.id)}
                  className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30'
                      : 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  <span>{pillar.name}</span>
                </button>
              );
            })}
          </div>

          {/* Institutional Trust Badges Bar */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Trusted Technical Partner for: PACT Malawi • Malawi Red Cross Society • Save the Children Initiatives</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenHealthCheck}
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 cursor-pointer flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1" />
                <span>Free 2-Minute Digital Health Check</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
