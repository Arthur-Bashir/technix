import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { 
  ArrowRight, 
  MessageSquare, 
  Globe2, 
  Server, 
  Shield, 
  Code2, 
  Sparkles,
  BarChart3,
  Cpu,
  Layers,
  Users,
  Compass,
  CheckCircle2,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { COMPANY_INFO } from '../data/technixData';

interface Spatial3DHeroProps {
  onOpenQuote: (service?: string) => void;
  onOpenHealthCheck: () => void;
  onOpenITRescue: () => void;
  onSelectSection: (sectionId: string) => void;
}

export interface InfrastructureZone {
  id: string;
  index: string;
  name: string;
  stage: string;
  role: string;
  sectionId: string;
  serviceTitle: string;
  startingPrice: string;
  businessOutcome: string;
  highlights: string[];
  cameraPos: { x: number; y: number; z: number };
  cameraLook: { x: number; y: number; z: number };
  accentColor: number;
  icon: React.ElementType;
}

const INFRASTRUCTURE_ZONES: InfrastructureZone[] = [
  {
    id: 'presence',
    index: '01',
    name: 'Business Presence',
    stage: 'Customer Entry & Identity',
    role: 'Websites, domains, and professional brand front-doors that establish legitimacy and capture customer inquiries.',
    sectionId: 'business-website',
    serviceTitle: 'Business Website Starter / Pro',
    startingPrice: 'Starting from MK 199,000',
    businessOutcome: 'Turns anonymous internet searches on Google into verified customer inquiries and immediate WhatsApp sales leads.',
    highlights: [
      'Mobile-optimized for local cellular connectivity',
      'Direct WhatsApp click-to-chat & automated lead routing',
      'Google Maps & local business profile integration',
    ],
    cameraPos: { x: -4.8, y: 2.2, z: 9.8 },
    cameraLook: { x: -3.6, y: 0.8, z: 3.2 },
    accentColor: 0x38bdf8,
    icon: Globe2,
  },
  {
    id: 'systems',
    index: '02',
    name: 'Business Systems',
    stage: 'Operational Automation',
    role: 'Custom databases, portals, and ERP systems that automate manual paperwork and administrative overhead.',
    sectionId: 'software-solutions',
    serviceTitle: 'Custom Software & Operational Systems',
    startingPrice: 'Transparent milestone scope',
    businessOutcome: 'Eliminates lost records, manual calculation mistakes, and hours of administrative paperwork each week.',
    highlights: [
      'Role-based permissions for managers, accountants & staff',
      'Automated invoicing, fee collection & stock reconciliation',
      'Offline-capable data capture with cloud synchronization',
    ],
    cameraPos: { x: -6.4, y: 2.8, z: 2.8 },
    cameraLook: { x: -4.5, y: 1.4, z: -1.6 },
    accentColor: 0x818cf8,
    icon: Code2,
  },
  {
    id: 'intelligence',
    index: '03',
    name: 'Data & Intelligence',
    stage: 'Executive Visibility',
    role: 'Real-time telemetry, Power BI dashboards, and structured reporting for leadership and board decisions.',
    sectionId: 'software-solutions',
    serviceTitle: 'Dashboards & Telemetry Platforms',
    startingPrice: 'Executive reporting scope',
    businessOutcome: 'Gives managing directors and funding donors immediate clarity on performance, revenue, and field indicators.',
    highlights: [
      'Interactive executive dashboards with automated data pipelines',
      'One-click audit reports ready for board reviews & donor compliance',
      'Automated scheduled report distribution via email',
    ],
    cameraPos: { x: -3.2, y: 4.5, z: -0.8 },
    cameraLook: { x: -2.2, y: 2.8, z: -3.8 },
    accentColor: 0x38bdf8,
    icon: BarChart3,
  },
  {
    id: 'infrastructure',
    index: '04',
    name: 'Cloud & Infrastructure',
    stage: 'High-Availability Foundation',
    role: 'Solid-state NVMe cloud servers, high-speed local hosting, and dependable system resilience.',
    sectionId: 'hosting-domains',
    serviceTitle: 'SSD Cloud Hosting & .mw Domains',
    startingPrice: 'From MK 65,000 / year',
    businessOutcome: 'Keeps corporate emails and client portals running continuously with automated offsite data backups.',
    highlights: [
      'Reliable SSD cloud infrastructure',
      'Scheduled off-site automated backups',
      'Local payment convenience in Malawi Kwacha (Airtel/Mpamba/Bank)',
    ],
    cameraPos: { x: 3.8, y: 1.6, z: -0.8 },
    cameraLook: { x: 2.4, y: -0.2, z: -3.8 },
    accentColor: 0x0ea5e9,
    icon: Server,
  },
  {
    id: 'security',
    index: '05',
    name: 'Security & Support',
    stage: 'Defensive Continuity',
    role: 'Branded domain inboxes, cryptographic verification, managed IT care, and emergency breakdown recovery.',
    sectionId: 'business-email',
    serviceTitle: 'Domain Email, Security & IT Rescue',
    startingPrice: 'On-demand & retainer care',
    businessOutcome: 'Shields company communications against phishing and provides instant recovery when technical failures strike.',
    highlights: [
      'SPF, DKIM, and DMARC verified cryptographic email security',
      'TechNix Care managed IT retainers for workstations & Wi-Fi',
      'Rapid emergency IT rescue triage for urgent breakdowns',
    ],
    cameraPos: { x: 6.4, y: 2.8, z: 2.8 },
    cameraLook: { x: 4.5, y: 1.4, z: -1.6 },
    accentColor: 0x10b981,
    icon: Shield,
  },
  {
    id: 'outcomes',
    index: '06',
    name: 'People & Academy',
    stage: 'Human Capital & Capability',
    role: 'Practical hands-on workforce training in Advanced Excel, Power BI, and modern IT operational skills.',
    sectionId: 'technix-academy',
    serviceTitle: 'TechNix Academy Masterclasses',
    startingPrice: 'From MK 95,000 per professional',
    businessOutcome: 'Builds lasting internal capability so your team can confidently operate spreadsheets, dashboards, and modern software.',
    highlights: [
      '100% practical lab exercises with real business datasets',
      'Small cohorts (max 12 professionals) with senior mentors',
      'Tailored corporate on-site workshops across Blantyre & Lilongwe',
    ],
    cameraPos: { x: 4.8, y: 3.2, z: 9.8 },
    cameraLook: { x: 3.6, y: 1.8, z: 3.2 },
    accentColor: 0xf59e0b,
    icon: Users,
  },
];

export const Spatial3DHero: React.FC<Spatial3DHeroProps> = ({
  onOpenQuote,
  onOpenHealthCheck,
  onOpenITRescue,
  onSelectSection,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null);
  const [isOverview, setIsOverview] = useState<boolean>(true);

  // Overview camera parameters
  const masterCameraPos = useMemo(() => new THREE.Vector3(0, 4.6, 17.5), []);
  const masterCameraLook = useMemo(() => new THREE.Vector3(0, 0.6, 0), []);

  const targetCameraPos = useRef(new THREE.Vector3().copy(masterCameraPos));
  const targetCameraLook = useRef(new THREE.Vector3().copy(masterCameraLook));
  const currentCameraLook = useRef(new THREE.Vector3().copy(masterCameraLook));

  const activeZone = INFRASTRUCTURE_ZONES.find((z) => z.id === activeZoneId);

  const handleSelectZone = (zoneId: string | null) => {
    if (!zoneId) {
      setActiveZoneId(null);
      setIsOverview(true);
      targetCameraPos.current.copy(masterCameraPos);
      targetCameraLook.current.copy(masterCameraLook);
      return;
    }
    const zone = INFRASTRUCTURE_ZONES.find((z) => z.id === zoneId);
    if (zone) {
      setActiveZoneId(zoneId);
      setIsOverview(false);
      targetCameraPos.current.set(zone.cameraPos.x, zone.cameraPos.y, zone.cameraPos.z);
      targetCameraLook.current.set(zone.cameraLook.x, zone.cameraLook.y, zone.cameraLook.z);
    }
  };

  const handleResetToOverview = () => {
    handleSelectZone(null);
  };

  const handleWhatsApp = (msg = 'Hello TechNix Africa, I would like to discuss our organisation technology requirements.') => {
    const url = `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isVisible = true;

    // 1. Scene & Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050811, 0.024);

    const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.copy(masterCameraPos);
    camera.lookAt(masterCameraLook);

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
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // 2. Lighting Architecture: Studio Key, Cool Fill, Subtle Warm Rim
    const ambientLight = new THREE.AmbientLight(0xcfd8dc, 0.9);
    scene.add(ambientLight);

    const keySun = new THREE.DirectionalLight(0xf1f5f9, 3.2);
    keySun.position.set(14, 22, 16);
    scene.add(keySun);

    const coolFill = new THREE.DirectionalLight(0x0284c7, 1.6);
    coolFill.position.set(-16, 12, -14);
    scene.add(coolFill);

    const groundBounce = new THREE.DirectionalLight(0x0f172a, 0.8);
    groundBounce.position.set(0, -10, 0);
    scene.add(groundBounce);

    const apexPointLight = new THREE.PointLight(0x0ea5e9, 2.5, 14);
    apexPointLight.position.set(0, 3.8, 0);
    scene.add(apexPointLight);

    // World Group
    const world = new THREE.Group();
    scene.add(world);

    // -------------------------------------------------------------
    // MACRO SCALE: CALM REGIONAL TOPOLOGY & SOUTHERN AFRICAN CORRIDOR
    // -------------------------------------------------------------
    // Calm Infrastructure Terrain Grid
    const groundGrid = new THREE.GridHelper(38, 38, 0x1e293b, 0x090e17);
    groundGrid.position.y = -3.2;
    (groundGrid.material as THREE.Material).transparent = true;
    (groundGrid.material as THREE.Material).opacity = 0.28;
    world.add(groundGrid);

    // Regional Coordinate Lines (Subtle Geographic Framework)
    const createGeoLine = (x1: number, z1: number, x2: number, z2: number, opacity = 0.2) => {
      const pts = [new THREE.Vector3(x1, -3.18, z1), new THREE.Vector3(x2, -3.18, z2)];
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0x334155, transparent: true, opacity });
      const line = new THREE.Line(geom, mat);
      world.add(line);
      return line;
    };

    createGeoLine(-18, 0, 18, 0, 0.25);
    createGeoLine(0, -18, 0, 18, 0.25);
    createGeoLine(-12, -12, 12, 12, 0.15);

    // Operational Anchor 1: Blantyre Commercial Node
    const createOperationalAnchor = (x: number, z: number, colorHex: number, name: string) => {
      const anchorGroup = new THREE.Group();
      anchorGroup.position.set(x, -3.0, z);

      // Matte Graphite Pedestal
      const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.4, 0.4, 24),
        new THREE.MeshStandardMaterial({
          color: 0x090e17,
          roughness: 0.35,
          metalness: 0.8,
        })
      );
      anchorGroup.add(pedestal);

      // Low-profile telemetry ring
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.3, 1.42, 32),
        new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.22;
      anchorGroup.add(ring);

      // Compact architectural marker column
      const col = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 1.8, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 })
      );
      col.position.y = 1.0;
      anchorGroup.add(col);

      // Status Beacon
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.MeshStandardMaterial({ color: colorHex, emissive: colorHex, emissiveIntensity: 1.8 })
      );
      beacon.position.y = 2.0;
      anchorGroup.add(beacon);

      world.add(anchorGroup);
      return anchorGroup;
    };

    const blantyreHub = createOperationalAnchor(-5.8, 3.6, 0x38bdf8, 'Blantyre Commercial Node');
    const lilongweHub = createOperationalAnchor(5.8, 3.6, 0x10b981, 'Lilongwe Operations Hub');

    // Arterial Fiber Backbone Curve (Blantyre <-> Central Infrastructure <-> Lilongwe)
    const backboneCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.8, -1.0, 3.6),
      new THREE.Vector3(-2.8, -0.4, 1.8),
      new THREE.Vector3(0, -0.1, 0),
      new THREE.Vector3(2.8, -0.4, 1.8),
      new THREE.Vector3(5.8, -1.0, 3.6),
    ]);

    const backboneTube = new THREE.Mesh(
      new THREE.TubeGeometry(backboneCurve, 64, 0.035, 8, false),
      new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.45 })
    );
    world.add(backboneTube);

    // -------------------------------------------------------------
    // MESO SCALE: THE CENTRAL ARCHITECTURAL INFRASTRUCTURE MONOLITH
    // "The Modular Engine Connecting the Business"
    // -------------------------------------------------------------
    const coreMonolith = new THREE.Group();
    coreMonolith.position.set(0, 0.2, 0);
    world.add(coreMonolith);

    // 1. Foundation Base Plinth (Heavy Titanium Foundation)
    const basePlinth = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.8, 3.6),
      new THREE.MeshStandardMaterial({
        color: 0x090e17,
        roughness: 0.35,
        metalness: 0.85,
      })
    );
    basePlinth.position.y = -2.6;
    coreMonolith.add(basePlinth);

    // Sub-base ground step
    const subStep = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 0.2, 4.2),
      new THREE.MeshStandardMaterial({ color: 0x050a12, roughness: 0.4, metalness: 0.9 })
    );
    subStep.position.y = -3.0;
    coreMonolith.add(subStep);

    // 2. Corner Structural Support Pillars (Quad Titanium Risers)
    const pillarGeom = new THREE.BoxGeometry(0.35, 5.2, 0.35);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.25,
      metalness: 0.9,
    });

    const pillarOffsets = [
      [-1.4, -1.4],
      [1.4, -1.4],
      [-1.4, 1.4],
      [1.4, 1.4],
    ];

    pillarOffsets.forEach(([px, pz]) => {
      const pMesh = new THREE.Mesh(pillarGeom, pillarMat);
      pMesh.position.set(px, 0.4, pz);
      coreMonolith.add(pMesh);
    });

    // 3. Central Modular Compute & Database Chassis (Tier 1: Lower Infrastructure)
    const rackLower = new THREE.Mesh(
      new THREE.BoxGeometry(2.3, 1.6, 2.3),
      new THREE.MeshStandardMaterial({
        color: 0x0a121e,
        roughness: 0.3,
        metalness: 0.85,
      })
    );
    rackLower.position.y = -1.2;
    coreMonolith.add(rackLower);

    // Subtle horizontal rack blades
    const statusLEDs: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(2.34, 0.22, 2.34),
        new THREE.MeshStandardMaterial({ color: 0x111c2e, roughness: 0.2, metalness: 0.9 })
      );
      blade.position.y = -1.6 + i * 0.4;
      coreMonolith.add(blade);

      // Micro status LEDs on front edge
      const led = new THREE.Mesh(
        new THREE.SphereGeometry(0.025, 8, 8),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x10b981 : 0x38bdf8 })
      );
      led.position.set(-0.8 + i * 0.5, blade.position.y, 1.18);
      coreMonolith.add(led);
      statusLEDs.push(led);
    }

    // 4. Central Smoked Glass Core & Internal Data Bus (Tier 2: Business Logic & Data Engine)
    const glassCore = new THREE.Mesh(
      new THREE.BoxGeometry(2.1, 2.2, 2.1),
      new THREE.MeshStandardMaterial({
        color: 0x071526,
        roughness: 0.1,
        metalness: 0.2,
        transparent: true,
        opacity: 0.75,
      })
    );
    glassCore.position.y = 0.8;
    coreMonolith.add(glassCore);

    // Internal illuminated data column inside the glass
    const innerBusColumn = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 2.4, 16),
      new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0284c7,
        emissiveIntensity: 1.1,
        roughness: 0.2,
        metalness: 0.1,
      })
    );
    innerBusColumn.position.y = 0.8;
    coreMonolith.add(innerBusColumn);

    // Cantilevered Interface Ledges (Tier 3: User Presence & External Gateways)
    const ledgeGeom = new THREE.BoxGeometry(2.7, 0.12, 2.7);
    const ledgeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
      metalness: 0.95,
    });

    const ledge1 = new THREE.Mesh(ledgeGeom, ledgeMat);
    ledge1.position.y = 2.0;
    coreMonolith.add(ledge1);

    const ledge2 = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.1, 2.4),
      ledgeMat
    );
    ledge2.position.y = 2.4;
    coreMonolith.add(ledge2);

    // 5. Monolith Apex Beacon (The TechNix Operational Anchor)
    const apexHousing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 1.1, 0.8, 6),
      new THREE.MeshStandardMaterial({
        color: 0x090e17,
        roughness: 0.25,
        metalness: 0.9,
      })
    );
    apexHousing.position.y = 2.9;
    coreMonolith.add(apexHousing);

    // Breathing Beacon Light Emitter
    const apexBeacon = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.45, 0.45, 16),
      new THREE.MeshStandardMaterial({
        color: 0x0ea5e9,
        emissive: 0x0ea5e9,
        emissiveIntensity: 1.6,
        roughness: 0.1,
      })
    );
    apexBeacon.position.y = 3.4;
    coreMonolith.add(apexBeacon);

    // -------------------------------------------------------------
    // 6 MESO FUNCTIONAL SATELLITES (THE TECHNIX ECOSYSTEM)
    // -------------------------------------------------------------
    const satelliteMeshes: { group: THREE.Group; zoneId: string }[] = [];

    // Helper to build cohesive architectural satellites
    const createSatellite = (
      zoneId: string,
      x: number,
      y: number,
      z: number,
      colorHex: number
    ) => {
      const satGroup = new THREE.Group();
      satGroup.position.set(x, y, z);

      // Base chassis slab
      const chassis = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.25, 1.2),
        new THREE.MeshStandardMaterial({
          color: 0x0b1322,
          roughness: 0.3,
          metalness: 0.85,
        })
      );
      satGroup.add(chassis);

      // Accent border hairline
      const rim = new THREE.Mesh(
        new THREE.BoxGeometry(1.64, 0.04, 1.24),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.7 })
      );
      rim.position.y = 0.12;
      satGroup.add(rim);

      // Visual Feature depending on zone
      if (zoneId === 'presence') {
        // Vertical portal screen
        const screen = new THREE.Mesh(
          new THREE.PlaneGeometry(1.4, 0.9),
          new THREE.MeshStandardMaterial({ color: 0x0284c7, emissive: 0x0369a1, emissiveIntensity: 0.85 })
        );
        screen.position.set(0, 0.6, 0.05);
        satGroup.add(screen);
      } else if (zoneId === 'systems') {
        // Stacked database cylinders
        for (let c = 0; c < 2; c++) {
          const dbCyl = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 0.28, 20),
            new THREE.MeshStandardMaterial({ color: 0x1e1b4b, metalness: 0.85, roughness: 0.25 })
          );
          dbCyl.position.y = 0.3 + c * 0.35;
          satGroup.add(dbCyl);
        }
      } else if (zoneId === 'intelligence') {
        // Elevated telemetry prism
        const prism = new THREE.Mesh(
          new THREE.ConeGeometry(0.45, 0.9, 4),
          new THREE.MeshStandardMaterial({ color: colorHex, emissive: colorHex, emissiveIntensity: 1.2 })
        );
        prism.position.y = 0.6;
        satGroup.add(prism);
      } else if (zoneId === 'infrastructure') {
        // Compact server blade stack
        for (let b = 0; b < 3; b++) {
          const sBlade = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 0.18, 0.9),
            new THREE.MeshStandardMaterial({ color: 0x0f2038, metalness: 0.9, roughness: 0.2 })
          );
          sBlade.position.y = 0.2 + b * 0.24;
          satGroup.add(sBlade);
        }
      } else if (zoneId === 'security') {
        // Defensive identity barrier
        const barrier = new THREE.Mesh(
          new THREE.BoxGeometry(1.3, 0.8, 0.08),
          new THREE.MeshStandardMaterial({ color: 0x064e3b, metalness: 0.85, roughness: 0.2 })
        );
        barrier.position.y = 0.55;
        satGroup.add(barrier);

        const secHalo = new THREE.Mesh(
          new THREE.TorusGeometry(0.55, 0.02, 8, 32),
          new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.85 })
        );
        secHalo.position.set(0, 0.55, 0.06);
        satGroup.add(secHalo);
      } else if (zoneId === 'outcomes') {
        // Academy stepped capability podium
        for (let s = 0; s < 3; s++) {
          const step = new THREE.Mesh(
            new THREE.BoxGeometry(1.4 - s * 0.35, 0.2, 1.0 - s * 0.25),
            new THREE.MeshStandardMaterial({ color: 0x451a03, metalness: 0.7, roughness: 0.3 })
          );
          step.position.y = 0.2 + s * 0.22;
          satGroup.add(step);
        }
      }

      // Discrete Conduit Connecting Satellite back to Core Monolith
      const conduitCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x * 0.88, y * 0.88, z * 0.88),
        new THREE.Vector3(x * 0.45, 0.8, z * 0.45),
        new THREE.Vector3(0, 1.2, 0),
      ]);
      const conduit = new THREE.Mesh(
        new THREE.TubeGeometry(conduitCurve, 24, 0.02, 6, false),
        new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.3 })
      );
      world.add(conduit);

      world.add(satGroup);
      satelliteMeshes.push({ group: satGroup, zoneId });
      return satGroup;
    };

    // Position the 6 satellites at deliberate architectural offsets
    INFRASTRUCTURE_ZONES.forEach((zone) => {
      let x = 0, y = 0, z = 0;
      if (zone.id === 'presence') { x = -4.5; y = 0.4; z = 4.0; }
      else if (zone.id === 'systems') { x = -5.2; y = 1.2; z = -2.0; }
      else if (zone.id === 'intelligence') { x = -2.8; y = 3.2; z = -4.5; }
      else if (zone.id === 'infrastructure') { x = 2.8; y = -0.6; z = -4.5; }
      else if (zone.id === 'security') { x = 5.2; y = 1.2; z = -2.0; }
      else if (zone.id === 'outcomes') { x = 4.5; y = 2.2; z = 3.8; }

      createSatellite(zone.id, x, y, z, zone.accentColor);
    });

    // -------------------------------------------------------------
    // MICRO SCALE: PURPOSEFUL TRANSACTION DATA FLOW PULSES
    // Business Request -> Core Engine -> Business Systems -> Cloud -> Outcomes
    // -------------------------------------------------------------
    const createDataPulse = (colorHex: number) => {
      const pulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 12, 12),
        new THREE.MeshBasicMaterial({ color: colorHex })
      );
      world.add(pulse);
      return pulse;
    };

    const pulseA = createDataPulse(0x38bdf8); // Presence -> Core
    const pulseB = createDataPulse(0x818cf8); // Core -> Systems
    const pulseC = createDataPulse(0x0ea5e9); // Systems -> Infrastructure
    const pulseD = createDataPulse(0x10b981); // Core -> Security / Outcomes

    // Raycaster for clicking 3D nodes
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(world.children, true);

      if (intersects.length > 0) {
        let obj: THREE.Object3D | null = intersects[0].object;
        while (obj && obj !== world) {
          const match = satelliteMeshes.find((s) => s.group === obj);
          if (match) {
            handleSelectZone(match.zoneId);
            return;
          }
          if (obj === coreMonolith) {
            handleSelectZone(null);
            return;
          }
          obj = obj.parent;
        }
      }
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);

    // -------------------------------------------------------------
    // RENDER & CINEMATIC CAMERA DAMPING LOOP
    // -------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(render);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Micro Activity: Subtle breathing of apex beacon
      if (!reducedMotion) {
        const breath = 1.2 + Math.sin(elapsed * 1.5) * 0.4;
        (apexBeacon.material as THREE.MeshStandardMaterial).emissiveIntensity = breath;
        apexPointLight.intensity = 2.0 + Math.sin(elapsed * 1.5) * 0.8;

        // Subtle, slow breathing rotation of world (imperceptible, calm)
        world.rotation.y = Math.sin(elapsed * 0.08) * 0.04;

        // Choreographed Transaction Data Pulses (Discrete, paced motion)
        const tA = (elapsed * 0.35) % 1.0;
        pulseA.position.lerpVectors(
          new THREE.Vector3(-4.5, 0.4, 4.0),
          new THREE.Vector3(0, 1.2, 0),
          tA
        );

        const tB = ((elapsed + 0.25) * 0.35) % 1.0;
        pulseB.position.lerpVectors(
          new THREE.Vector3(0, 1.2, 0),
          new THREE.Vector3(-5.2, 1.2, -2.0),
          tB
        );

        const tC = ((elapsed + 0.5) * 0.35) % 1.0;
        pulseC.position.lerpVectors(
          new THREE.Vector3(-5.2, 1.2, -2.0),
          new THREE.Vector3(2.8, -0.6, -4.5),
          tC
        );

        const tD = ((elapsed + 0.75) * 0.35) % 1.0;
        pulseD.position.lerpVectors(
          new THREE.Vector3(0, 1.2, 0),
          new THREE.Vector3(4.5, 2.2, 3.8),
          tD
        );
      }

      // Smooth cinematic camera damping using exponential decay (frame-rate independent)
      const dampFactor = reducedMotion ? 1.0 : 1.0 - Math.exp(-4.5 * delta);
      camera.position.lerp(targetCameraPos.current, dampFactor);
      currentCameraLook.current.lerp(targetCameraLook.current, dampFactor);
      camera.lookAt(currentCameraLook.current);

      renderer.render(scene, camera);
    };

    // Performance: Pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            clock.start();
            render();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(mount);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;

      // Mobile Framing Adjustments
      if (width < 768) {
        camera.fov = 52;
        masterCameraPos.set(0, 5.8, 20.0);
        if (isOverview) {
          targetCameraPos.current.copy(masterCameraPos);
        }
      } else {
        camera.fov = 40;
        masterCameraPos.set(0, 4.6, 17.5);
        if (isOverview) {
          targetCameraPos.current.copy(masterCameraPos);
        }
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial trigger

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [masterCameraPos, masterCameraLook, isOverview]);

  return (
    <section 
      id="hero-spatial-3d" 
      className="relative min-h-[92vh] lg:min-h-screen w-full bg-[#050811] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 3D WebGL Canvas Layer */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing" 
        aria-hidden="true"
      />

      {/* Measured Contrast Scrim (Ensures 100% WCAG AA text legibility without blocking 3D scene) */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/85 to-transparent pointer-events-none z-10 w-full md:w-3/5 lg:w-1/2" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050811] to-transparent pointer-events-none z-10" 
        aria-hidden="true"
      />

      {/* Primary Hero Typography & Intent Zone (First Viewport Clarity) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-28 pb-6 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          
          {/* Unboxed Kicker (Zero-Pill discipline) */}
          <div className="text-xs font-semibold tracking-wider uppercase text-sky-400 font-mono">
            Digital Infrastructure Partner
          </div>

          {/* HUGE Headline (Tight measure, balanced wrap) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance">
            Technology That Moves Your Business Forward
          </h1>

          {/* MEDIUM Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-balance max-w-xl">
            Websites, software, IT support and digital solutions for businesses and organisations across Africa.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenQuote()}
              id="hero-primary-cta"
              className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 flex items-center space-x-2 cursor-pointer border border-sky-400/40"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleWhatsApp()}
              id="hero-secondary-cta"
              className="px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm rounded-xl transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Talk to TechNix</span>
            </button>

            {!isOverview && (
              <button
                onClick={handleResetToOverview}
                className="px-4 py-3 text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer ml-auto sm:ml-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset View</span>
              </button>
            )}
          </div>

          {/* Unboxed Regional Trust Markers */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-3">
            <span>Blantyre & Lilongwe Hubs</span>
            <span aria-hidden="true">·</span>
            <span>Local MWK Billing</span>
            <span aria-hidden="true">·</span>
            <span>Active Engineering Support</span>
          </div>

        </div>
      </div>

      {/* Interactive Infrastructure Explorer (Progressive Disclosure) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
        
        {/* Floating Active Zone Detail Inspection Panel (Only appears when exploring a specific layer) */}
        {activeZone && (
          <div className="mb-4 max-w-2xl bg-[#090e1a]/95 border border-slate-800/90 rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-1">
                  <span>LAYER {activeZone.index}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300 font-sans">{activeZone.stage}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {activeZone.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl mb-3">
                  {activeZone.role}
                </p>
                <div className="text-xs font-mono font-semibold text-emerald-400 mb-4">
                  {activeZone.startingPrice}
                </div>
              </div>

              <button
                onClick={handleResetToOverview}
                className="text-slate-400 hover:text-white p-1 text-xs font-mono transition-colors shrink-0"
                aria-label="Close details"
              >
                Close ✕
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/80">
              <button
                onClick={() => onOpenQuote(activeZone.serviceTitle)}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Deploy This Module</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleWhatsApp(`Hello TechNix, I would like to inquire about ${activeZone.name}.`)}
                className="px-3.5 py-2 bg-slate-800/90 hover:bg-slate-700 text-emerald-400 border border-slate-700/80 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </button>

              <button
                onClick={() => onSelectSection(activeZone.sectionId)}
                className="text-xs text-slate-400 hover:text-sky-300 font-medium ml-auto flex items-center space-x-1 cursor-pointer"
              >
                <span>View Full Specifications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Segmented Infrastructure Explorer Bar */}
        <div className="bg-[#090e1a]/85 border border-slate-800/80 rounded-2xl p-2 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800/60 mb-1.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Explore Digital Infrastructure Architecture
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Select a tier to inspect camera target
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={() => handleSelectZone(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                isOverview
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Master Overview
            </button>

            {INFRASTRUCTURE_ZONES.map((zone) => {
              const Icon = zone.icon;
              const isSelected = activeZoneId === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => handleSelectZone(zone.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-slate-800 text-sky-400 border border-sky-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-400">{zone.index}</span>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{zone.name}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
