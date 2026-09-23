import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  Globe2, 
  Mail, 
  Server, 
  AlertTriangle, 
  Shield, 
  Code2, 
  RefreshCw, 
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Smartphone,
  Network,
  Users,
  BarChart3,
  Lock,
  Radio,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface Spatial3DHeroProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
  onSelectSection: (sectionId: string) => void;
}

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  badge: string;
  sectionId: string;
  serviceTitle: string;
  priceNote: string;
  businessImpact: string;
  specs: string[];
  cameraTarget: { x: number; y: number; z: number };
  cameraLook: { x: number; y: number; z: number };
  colorHex: number;
  icon: React.ElementType;
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'core',
    name: 'TechNix Infrastructure Core',
    category: 'Ecosystem Core',
    badge: 'Integrated Digital Backbone',
    sectionId: 'solutions',
    serviceTitle: 'Full Digital Transformation',
    priceNote: 'Enterprise & SME Solutions',
    businessImpact: 'Unifies web, business software, enterprise email, cloud hosting, field sync, and rapid IT rescue into a single dependable engineering partner.',
    specs: ['Blantyre HQ & Lilongwe Hubs', 'Local Malawi Kwacha (MK) Billing', 'Full Lifecycle Managed IT'],
    cameraTarget: { x: 0, y: 5.5, z: 18.5 },
    cameraLook: { x: 0, y: 0.5, z: 0 },
    colorHex: 0x38bdf8,
    icon: Cpu,
  },
  {
    id: 'business-systems',
    name: 'Business Systems',
    category: 'Process Automation',
    badge: 'Custom Portals & ERP',
    sectionId: 'software-solutions',
    serviceTitle: 'Custom Software Solution',
    priceNote: 'Transparent milestone scope',
    businessImpact: 'Replaces error-prone paper logs and manual spreadsheets with custom databases, student management, NGO reporting, and inventory systems.',
    specs: ['Role-based access permissions', 'Automated approval workflows', 'Local API integrations'],
    cameraTarget: { x: -6.5, y: 2.2, z: 4.5 },
    cameraLook: { x: -4.2, y: 0.8, z: 1.0 },
    colorHex: 0x818cf8,
    icon: Database,
  },
  {
    id: 'data-analytics',
    name: 'Data & Telemetry',
    category: 'Business Intelligence',
    badge: 'Power BI & KPIs',
    sectionId: 'software-solutions',
    serviceTitle: 'Dashboards & Reporting Platforms',
    priceNote: 'Live executive visibility',
    businessImpact: 'Transforms raw spreadsheets into interactive executive dashboards and 1-click donor compliance reports.',
    specs: ['Automated ETL data pipelines', 'Real-time board KPI charts', 'Export-ready audit reports'],
    cameraTarget: { x: -4.5, y: 4.8, z: -3.5 },
    cameraLook: { x: -2.8, y: 1.5, z: -2.0 },
    colorHex: 0x38bdf8,
    icon: BarChart3,
  },
  {
    id: 'cloud-hosting',
    name: 'Cloud & Hosting',
    category: 'Core Infrastructure',
    badge: '99.9% Datacenter Uptime',
    sectionId: 'hosting-domains',
    serviceTitle: 'Cloud Hosting & Domain Setup',
    priceNote: 'From MK 65,000 / year',
    businessImpact: 'High-availability SSD cloud servers for .mw and international domains with automated daily off-site encrypted backups and SSL.',
    specs: ['NVMe SSD high speed', 'Automated daily snapshots', 'Local Kwacha payments (Airtel/Mpamba/Bank)'],
    cameraTarget: { x: 0, y: 3.5, z: 10.8 },
    cameraLook: { x: 0, y: 0.8, z: 0 },
    colorHex: 0x0ea5e9,
    icon: Server,
  },
  {
    id: 'web-platforms',
    name: 'Web Platforms',
    category: 'Digital Presence',
    badge: 'High-Conversion Storefronts',
    sectionId: 'business-website',
    serviceTitle: 'Business Starter Website',
    priceNote: 'Starting from MK 199,000',
    businessImpact: 'Fast, mobile-friendly websites that establish immediate commercial legitimacy, rank on Google, and capture WhatsApp leads.',
    specs: ['Optimized for Airtel & TNM speeds', 'Direct WhatsApp & Call triggers', 'Google Business & Maps verified'],
    cameraTarget: { x: -5.8, y: 2.8, z: 8.2 },
    cameraLook: { x: -3.8, y: 1.0, z: 2.5 },
    colorHex: 0x38bdf8,
    icon: Globe2,
  },
  {
    id: 'mobile-field',
    name: 'Mobile & Field Sync',
    category: 'Distributed Operations',
    badge: 'Offline-First Applications',
    sectionId: 'software-solutions',
    serviceTitle: 'Field Data Collection System',
    priceNote: 'Resilient remote sync',
    businessImpact: 'Enables field officers and logistics drivers to collect data offline in remote districts with automatic cloud sync upon signal restore.',
    specs: ['Zero-connectivity local caching', 'GPS location & signature capture', 'Airtel Money & Mpamba API ready'],
    cameraTarget: { x: 4.8, y: 2.4, z: 8.5 },
    cameraLook: { x: 3.2, y: 0.9, z: 2.8 },
    colorHex: 0x34d399,
    icon: Smartphone,
  },
  {
    id: 'security-identity',
    name: 'Security & Identity',
    category: 'Enterprise Defense',
    badge: 'Domain Inboxes & Hardening',
    sectionId: 'business-email',
    serviceTitle: 'Business Domain Email',
    priceNote: 'Professional branded inboxes',
    businessImpact: 'Replaces vulnerable @gmail.com addresses with secure name@company.mw emails guarded by SPF, DKIM, and anti-phishing filters.',
    specs: ['Cryptographic email authentication', 'Mobile & Outlook synchronization', 'Anti-ransomware & firewall protection'],
    cameraTarget: { x: 6.2, y: 3.2, z: 4.2 },
    cameraLook: { x: 4.2, y: 1.2, z: 1.2 },
    colorHex: 0x10b981,
    icon: Lock,
  },
  {
    id: 'networks-regional',
    name: 'Regional Networks',
    category: 'Physical Connectivity',
    badge: 'Blantyre HQ & Lilongwe Hub',
    sectionId: 'about',
    serviceTitle: 'Inter-Branch IT Infrastructure',
    priceNote: 'Nationwide support coverage',
    businessImpact: 'High-speed inter-office networking, dual-WAN failover routers, and physical on-site engineering dispatch across Malawi.',
    specs: ['Blantyre Commercial City Centre', 'Lilongwe Capital City Office Park', '2-Hour Physical Dispatch SLA'],
    cameraTarget: { x: 5.5, y: 4.5, z: -3.8 },
    cameraLook: { x: 3.5, y: 1.4, z: -2.0 },
    colorHex: 0x38bdf8,
    icon: Network,
  },
  {
    id: 'it-rescue-people',
    name: 'IT Rescue & People',
    category: 'Rapid Support & SLAs',
    badge: 'Emergency Triage & Retainers',
    sectionId: 'it-rescue',
    serviceTitle: 'Emergency IT Rescue Support',
    priceNote: 'Immediate on-call resolution',
    businessImpact: '24/7 emergency response for down servers, network crashes, malware, and slow computers, backed by ongoing TechNix Care retainers.',
    specs: ['Physical & remote rapid intervention', 'TechNix Care managed IT retainers', 'TechNix Academy practical training'],
    cameraTarget: { x: 0, y: 1.8, z: -6.5 },
    cameraLook: { x: 0, y: 0.2, z: -3.0 },
    colorHex: 0xf87171,
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
  const [selectedNodeId, setSelectedNodeId] = useState<string>('core');
  const [isOrbiting, setIsOrbiting] = useState(false);

  const activeNode = ECOSYSTEM_NODES.find((n) => n.id === selectedNodeId) || ECOSYSTEM_NODES[0];

  const targetCameraPos = useRef(new THREE.Vector3(0, 5.5, 18.5));
  const targetCameraLook = useRef(new THREE.Vector3(0, 0.5, 0));

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    const node = ECOSYSTEM_NODES.find((n) => n.id === nodeId);
    if (!node) {
      targetCameraPos.current.set(0, 5.5, 18.5);
      targetCameraLook.current.set(0, 0.5, 0);
      return;
    }
    targetCameraPos.current.set(node.cameraTarget.x, node.cameraTarget.y, node.cameraTarget.z);
    targetCameraLook.current.set(node.cameraLook.x, node.cameraLook.y, node.cameraLook.z);
  };

  const handleResetCamera = () => {
    handleNodeSelect('core');
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.025);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
    camera.position.set(0, 5.5, 18.5);
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // 2. Cinematic Lighting
    scene.add(new THREE.AmbientLight(0x94a3b8, 1.2));

    const keySun = new THREE.DirectionalLight(0x38bdf8, 3.5);
    keySun.position.set(12, 18, 14);
    scene.add(keySun);

    const rimLight = new THREE.DirectionalLight(0x10b981, 2.2);
    rimLight.position.set(-14, -5, -12);
    scene.add(rimLight);

    const corePointLight = new THREE.PointLight(0x38bdf8, 3.5, 18);
    corePointLight.position.set(0, 1.5, 0);
    scene.add(corePointLight);

    // 3. Central World Group
    const world = new THREE.Group();
    scene.add(world);

    // -------------------------------------------------------------
    // INFRASTRUCTURE FOUNDATION: HEXAGONAL DIGITAL TERRAIN GRID
    // -------------------------------------------------------------
    const gridHelper = new THREE.GridHelper(28, 32, 0x0284c7, 0x0f172a);
    gridHelper.position.y = -3.2;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.35;
    world.add(gridHelper);

    // Outer Concentric Fiber Optic Backbone Rings
    const createFiberRing = (radius: number, colorHex: number, opacity: number, y: number) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.025, 8, 140),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      world.add(ring);
      return ring;
    };

    const ringInner = createFiberRing(7.5, 0x38bdf8, 0.4, -3.15);
    const ringOuter = createFiberRing(11.2, 0x10b981, 0.3, -3.18);
    const ringPerimeter = createFiberRing(14.5, 0x818cf8, 0.2, -3.2);

    // -------------------------------------------------------------
    // REGIONAL NODES: BLANTYRE HQ & LILONGWE OPERATIONS
    // -------------------------------------------------------------
    const createRegionalNode = (x: number, z: number, colorHex: number, label: string) => {
      const group = new THREE.Group();
      group.position.set(x, -3.0, z);

      // Base Pedestal
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.6, 0.4, 32),
        new THREE.MeshStandardMaterial({ color: 0x07111e, metalness: 0.9, roughness: 0.15 })
      );
      group.add(base);

      // Ground Target Halo
      const targetHalo = new THREE.Mesh(
        new THREE.RingGeometry(1.5, 1.7, 32),
        new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
      );
      targetHalo.rotation.x = -Math.PI / 2;
      targetHalo.position.y = 0.22;
      group.add(targetHalo);

      // Telemetry Mast
      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.18, 2.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.95, roughness: 0.1 })
      );
      mast.position.y = 1.3;
      group.add(mast);

      // Beacon Orb
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 16, 16),
        new THREE.MeshStandardMaterial({ color: colorHex, emissive: colorHex, emissiveIntensity: 2.2 })
      );
      beacon.position.y = 2.4;
      group.add(beacon);

      // Pulse Wave
      const pulseRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.75, 0.02, 6, 32),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.75 })
      );
      pulseRing.rotation.x = Math.PI / 2;
      pulseRing.position.y = 2.4;
      group.add(pulseRing);

      world.add(group);
      return { group, pulseRing, beacon };
    };

    const blantyreStation = createRegionalNode(-5.2, 4.2, 0x38bdf8, 'Blantyre HQ');
    const lilongweStation = createRegionalNode(5.2, 4.2, 0x34d399, 'Lilongwe Hub');

    // Inter-City High-Bandwidth Fiber Backbone (Blantyre <-> Lilongwe)
    const regionalFiberCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.2, -0.6, 4.2),
      new THREE.Vector3(0, 0.8, 5.0),
      new THREE.Vector3(5.2, -0.6, 4.2),
    ]);
    const regionalFiberTube = new THREE.Mesh(
      new THREE.TubeGeometry(regionalFiberCurve, 48, 0.04, 8, false),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 })
    );
    world.add(regionalFiberTube);

    // -------------------------------------------------------------
    // 1. TECHNIX CORE: CENTRAL INFRASTRUCTURE MONOLITH & ENERGY HALO
    // -------------------------------------------------------------
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0.8, 0);
    world.add(coreGroup);

    // Outer Gyro Energy Rings
    const gyroRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.035, 12, 80),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 })
    );
    coreGroup.add(gyroRing1);

    const gyroRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.025, 12, 80),
      new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.6 })
    );
    gyroRing2.rotation.x = Math.PI / 3;
    coreGroup.add(gyroRing2);

    const gyroRing3 = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.02, 12, 80),
      new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.5 })
    );
    gyroRing3.rotation.y = Math.PI / 3;
    coreGroup.add(gyroRing3);

    // Central Core Hexagonal Blade Obelisk
    const coreMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 1.1, 3.4, 6),
      new THREE.MeshStandardMaterial({
        color: 0x050c18,
        metalness: 0.95,
        roughness: 0.1,
      })
    );
    coreGroup.add(coreMesh);

    // Core Wireframe Holographic Casing
    const coreWireframe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 1.15, 3.45, 6),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
    );
    coreGroup.add(coreWireframe);

    // Floating Core Crystal
    const coreCrystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.65, 0),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 2.0,
        metalness: 0.2,
        roughness: 0.1,
      })
    );
    coreCrystal.position.y = 2.4;
    coreGroup.add(coreCrystal);

    // -------------------------------------------------------------
    // 2. SURROUNDING SPATIAL TECHNOLOGY NODES
    // -------------------------------------------------------------
    // Node A: Cloud Rack & Server Blades (0, 0, 0 area / upper)
    const serverRackGroup = new THREE.Group();
    serverRackGroup.position.set(0, 0.2, -1.8);
    world.add(serverRackGroup);

    const rackCabinet = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 3.6, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x07111e, metalness: 0.9, roughness: 0.15 })
    );
    serverRackGroup.add(rackCabinet);

    const bladeLEDs: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const y = -1.2 + i * 0.8;
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.55, 0.05),
        new THREE.MeshStandardMaterial({ color: 0x0f2038, metalness: 0.8, roughness: 0.2 })
      );
      blade.position.set(0, y, 0.72);
      serverRackGroup.add(blade);

      for (let j = 0; j < 3; j++) {
        const led = new THREE.Mesh(
          new THREE.SphereGeometry(0.045, 8, 8),
          new THREE.MeshBasicMaterial({ color: j === 0 ? 0x34d399 : 0x38bdf8 })
        );
        led.position.set(-0.6 + j * 0.25, y, 0.76);
        serverRackGroup.add(led);
        bladeLEDs.push(led);
      }
    }

    // Node B: Web Platform Display (-4.2, 1.2, 3.2)
    const webDisplayGroup = new THREE.Group();
    webDisplayGroup.position.set(-4.2, 1.2, 3.2);
    world.add(webDisplayGroup);

    const monitorFrame = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 1.6, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x0a1628, metalness: 0.9, roughness: 0.15 })
    );
    webDisplayGroup.add(monitorFrame);

    const monitorScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, emissive: 0x0369a1, emissiveIntensity: 0.85 })
    );
    monitorScreen.position.z = 0.06;
    webDisplayGroup.add(monitorScreen);

    // Node C: Security Shield & Cryptographic Halo (4.2, 1.3, 3.2)
    const securityGroup = new THREE.Group();
    securityGroup.position.set(4.2, 1.3, 3.2);
    world.add(securityGroup);

    const mailBox = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 1.3, 0.12),
      new THREE.MeshStandardMaterial({ color: 0x0b253a, metalness: 0.85, roughness: 0.2 })
    );
    securityGroup.add(mailBox);

    const securityRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.025, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.8 })
    );
    securityRing.position.z = 0.07;
    securityGroup.add(securityRing);

    // Node D: Custom Software & Database Cubes (-3.8, 0.2, -2.8)
    const softwareGroup = new THREE.Group();
    softwareGroup.position.set(-3.8, 0.2, -2.8);
    world.add(softwareGroup);

    for (let c = 0; c < 3; c++) {
      const dbLayer = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.85, 0.35, 24),
        new THREE.MeshStandardMaterial({ color: 0x1e1b4b, metalness: 0.8, roughness: 0.2 })
      );
      dbLayer.position.y = -0.5 + c * 0.45;
      softwareGroup.add(dbLayer);

      const dbRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.9, 0.02, 6, 32),
        new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.7 })
      );
      dbRing.rotation.x = Math.PI / 2;
      dbRing.position.y = -0.5 + c * 0.45;
      softwareGroup.add(dbRing);
    }

    // Node E: IT Rescue Emergency Radar Beacon (3.8, 0.3, -2.8)
    const rescueGroup = new THREE.Group();
    rescueGroup.position.set(3.8, 0.3, -2.8);
    world.add(rescueGroup);

    const rescueRadarDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0xdc2626,
        emissiveIntensity: 1.3,
        transparent: true,
        opacity: 0.75,
      })
    );
    rescueRadarDome.position.y = -0.3;
    rescueGroup.add(rescueRadarDome);

    const rescueSweep = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.025, 6, 36),
      new THREE.MeshBasicMaterial({ color: 0xf87171, transparent: true, opacity: 0.85 })
    );
    rescueSweep.rotation.x = Math.PI / 2;
    rescueSweep.position.y = 0.35;
    rescueGroup.add(rescueSweep);

    // -------------------------------------------------------------
    // FLOWING DATA HIGHWAYS: LIGHT PACKETS ALONG CONNECTING CURVES
    // -------------------------------------------------------------
    interface DataHighway {
      tube: THREE.Mesh;
      packet: THREE.Mesh;
      curve: THREE.CatmullRomCurve3;
      t: number;
      speed: number;
    }

    const dataHighways: DataHighway[] = [];

    const createHighway = (
      start: THREE.Vector3,
      mid: THREE.Vector3,
      end: THREE.Vector3,
      colorHex: number,
      speed: number
    ) => {
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 32, 0.02, 6, false),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.35 })
      );
      world.add(tube);

      const packet = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 8, 8),
        new THREE.MeshBasicMaterial({ color: colorHex })
      );
      world.add(packet);

      dataHighways.push({ tube, packet, curve, t: Math.random(), speed });
    };

    createHighway(new THREE.Vector3(0, 1.2, 0), new THREE.Vector3(-2.0, 2.0, 1.6), new THREE.Vector3(-4.2, 1.2, 3.2), 0x38bdf8, 0.0022);
    createHighway(new THREE.Vector3(0, 1.2, 0), new THREE.Vector3(2.0, 2.0, 1.6), new THREE.Vector3(4.2, 1.3, 3.2), 0x10b981, 0.0024);
    createHighway(new THREE.Vector3(0, 0.8, 0), new THREE.Vector3(-1.8, 0.9, -1.5), new THREE.Vector3(-3.8, 0.2, -2.8), 0x818cf8, 0.0019);
    createHighway(new THREE.Vector3(0, 0.8, 0), new THREE.Vector3(1.8, 0.9, -1.5), new THREE.Vector3(3.8, 0.3, -2.8), 0xf87171, 0.0025);
    createHighway(new THREE.Vector3(-5.2, -0.6, 4.2), new THREE.Vector3(-2.6, -0.3, 2.0), new THREE.Vector3(0, 0.8, 0), 0x38bdf8, 0.0021);
    createHighway(new THREE.Vector3(5.2, -0.6, 4.2), new THREE.Vector3(2.6, -0.3, 2.0), new THREE.Vector3(0, 0.8, 0), 0x34d399, 0.0021);

    // Constellation Ambient Tech Particles
    const starCount = 180;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const radius = 8 + Math.random() * 16;
      const angle = Math.random() * Math.PI * 2;
      starPos[i * 3] = Math.cos(angle) * radius;
      starPos[i * 3 + 1] = -3 + Math.random() * 14;
      starPos[i * 3 + 2] = Math.sin(angle) * radius - 2;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
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
      setIsOrbiting(true);
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.35;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.2;

      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        manualRotY += deltaX * 0.0035;
        manualRotX += deltaY * 0.002;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsOrbiting(false), 500);
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
        // Gyro core rotations
        gyroRing1.rotation.z += 0.007;
        gyroRing2.rotation.y += 0.006;
        gyroRing3.rotation.x += 0.008;
        coreCrystal.rotation.y += 0.012;
        coreCrystal.rotation.x += 0.006;

        // LEDs blinking
        bladeLEDs.forEach((led, idx) => {
          led.visible = Math.sin(elapsed * 7 + idx) > -0.3;
        });

        // Object hovers
        webDisplayGroup.position.y = 1.2 + Math.sin(elapsed * 1.6) * 0.06;
        securityGroup.position.y = 1.3 + Math.sin(elapsed * 1.4 + 1) * 0.06;
        securityRing.rotation.z += 0.01;
        rescueSweep.rotation.z += 0.028;

        // Blantyre & Lilongwe radar rings
        blantyreStation.pulseRing.scale.setScalar(1 + (Math.sin(elapsed * 3) + 1) * 0.25);
        lilongweStation.pulseRing.scale.setScalar(1 + (Math.cos(elapsed * 3) + 1) * 0.25);

        // Data highways packet animation
        dataHighways.forEach((hw) => {
          hw.t = (hw.t + hw.speed) % 1;
          hw.packet.position.copy(hw.curve.getPointAt(hw.t));
        });

        // World drift
        world.rotation.y += (manualRotY + pointerX - world.rotation.y) * 0.05 + 0.0006;
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

  const ActiveIcon = activeNode.icon;

  return (
    <section 
      id="hero-spatial-3d" 
      className="relative overflow-hidden bg-[#030712] text-white min-h-[820px] lg:min-h-[920px] flex flex-col justify-between border-b border-slate-800/80"
    >
      {/* Deep Space Background & Dynamic Digital Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(14,165,233,0.2),transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none" />

      {/* 3D WebGL African Digital Infrastructure Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        title="Interactive African Digital Infrastructure Command Canvas (Drag to orbit, click ecosystem nodes to inspect)"
      />

      {/* Foreground Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 w-full flex-1 flex flex-col justify-between pointer-events-none">
        
        {/* Top Header & Main Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left pointer-events-auto">
            
            {/* Identity & Location Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-slate-900/90 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs text-slate-200 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold tracking-wide">TechNix Africa • Digital Infrastructure Partner</span>
              <span className="text-slate-500 font-mono text-[10px] hidden sm:inline">| BLANTYRE & LILONGWE</span>
            </div>

            {/* Primary Headline per Directive */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.06] text-balance">
              Technology That Moves <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
                Your Business Forward.
              </span>
            </h1>

            {/* Supporting Message per Directive */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Websites, software, IT support and digital solutions for businesses and organisations across Africa.
            </p>

            {/* Connected Ecosystem Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-slate-300">
              <span className="text-slate-400">CONNECTING:</span>
              {['Business', 'Software', 'Data', 'Cloud', 'People', 'Devices', 'Infrastructure'].map((item) => (
                <span 
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/70 text-sky-300 font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Primary CTAs per Directive */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuote()}
                id="hero-primary-cta"
                className="flex items-center space-x-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-sky-600/30 hover:shadow-sky-500/40 transition-all cursor-pointer border border-sky-400/40"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix, I would like to consult on digital systems for our business.')}
                className="flex items-center space-x-2 px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm rounded-xl border border-slate-700/90 backdrop-blur-md transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Talk to TechNix</span>
              </button>

              <button
                onClick={() => handleWhatsApp('Hello TechNix, reaching out directly on WhatsApp.')}
                className="flex items-center space-x-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                title="Direct WhatsApp chat"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Talk to TechNix on WhatsApp</span>
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
            <div className="rounded-2xl glass-panel-elevated p-5 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800/90 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    INFRASTRUCTURE TOPOLOGY INSPECTOR
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
                  <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-800/40 text-sky-400 flex items-center justify-center shrink-0 shadow-inner">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      {activeNode.category} • {activeNode.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {activeNode.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeNode.businessImpact}
                </p>

                {/* Key Technical Specs */}
                <div className="space-y-1.5 pt-1">
                  {activeNode.specs.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <Zap className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Deep Dive Link */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">
                    {activeNode.priceNote}
                  </span>
                  <button
                    onClick={() => onSelectSection(activeNode.sectionId)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Inspect Layer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Direct Action */}
              <div className="pt-1 flex gap-2">
                <button
                  onClick={() => onOpenQuote(activeNode.serviceTitle)}
                  className="flex-1 py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer text-center shadow-lg shadow-sky-600/20 border border-sky-400/30"
                >
                  Request Quote for {activeNode.name}
                </button>
              </div>
            </div>

            {/* 3D Orbit Control Hint */}
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Drag canvas to orbit 3D space • Click nodes below to target camera</span>
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">
                {isOrbiting ? 'ORBITING' : 'READY'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Node Switcher & Verified Institutional Proof */}
        <div className="pt-8 space-y-4 pointer-events-auto">
          
          {/* Node Switcher Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2 shrink-0 flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5 text-sky-400 mr-1" />
              <span>Infrastructure Stack:</span>
            </span>
            {ECOSYSTEM_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = node.id === selectedNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => handleNodeSelect(node.id)}
                  className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-600/30'
                      : 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  <span>{node.name}</span>
                </button>
              );
            })}
          </div>

          {/* Institutional Trust Badges Bar */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Proven Technical Partner for: PACT Malawi • Malawi Red Cross Society • Save the Children Initiatives</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenHealthCheck}
                className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-2 cursor-pointer flex items-center space-x-1"
              >
                <span>Free 2-Minute Digital Health Check →</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
