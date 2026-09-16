import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ShieldCheck, Cloud, Server, Cpu, Database, Laptop, Smartphone } from 'lucide-react';

export const TechEcosystemVisual3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNodeInfo, setActiveNodeInfo] = useState<string>('Core Cloud Infrastructure');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth || 540;
    const height = container.clientHeight || 460;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(16, 14, 18);
    camera.lookAt(0, 1.5, 0);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // If WebGL fails, fallback will render
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x60a5fa, 2.0);
    dirLight.position.set(12, 20, 10);
    scene.add(dirLight);

    const bluePoint = new THREE.PointLight(0x38bdf8, 3.5, 25);
    bluePoint.position.set(0, 4, 0);
    scene.add(bluePoint);

    const emeraldPoint = new THREE.PointLight(0x34d399, 2.5, 20);
    emeraldPoint.position.set(-6, 2, 4);
    scene.add(emeraldPoint);

    // Root Group for interactive rotation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Base Grid Platform (Subtle connected grid)
    const gridHelper = new THREE.GridHelper(18, 18, 0x2563eb, 0x1e293b);
    gridHelper.position.y = -0.5;
    rootGroup.add(gridHelper);

    // 2. Translucent Base Foundation Disk
    const baseDiskGeo = new THREE.CylinderGeometry(8.5, 8.5, 0.2, 32);
    const baseDiskMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.7,
      roughness: 0.2,
      metalness: 0.8,
    });
    const baseDisk = new THREE.Mesh(baseDiskGeo, baseDiskMat);
    baseDisk.position.y = -0.6;
    rootGroup.add(baseDisk);

    // 3. Central Core Cloud & Server Tower
    const serverGroup = new THREE.Group();
    serverGroup.position.set(0, 0.5, 0);

    // Layered Server Blades
    for (let i = 0; i < 3; i++) {
      const bladeGeo = new THREE.BoxGeometry(2.4, 0.4, 2.4);
      const bladeMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.85,
        roughness: 0.25,
      });
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.y = i * 0.65;
      serverGroup.add(blade);

      // Neon indicator bar on front edge
      const barGeo = new THREE.BoxGeometry(1.8, 0.08, 0.06);
      const barMat = new THREE.MeshBasicMaterial({
        color: i === 1 ? 0x34d399 : 0x38bdf8,
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(0, i * 0.65, 1.21);
      serverGroup.add(bar);
    }

    // Glowing Central Core Sphere hovering above server tower
    const coreSphereGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const coreSphereMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.2,
    });
    const coreSphere = new THREE.Mesh(coreSphereGeo, coreSphereMat);
    coreSphere.position.set(0, 2.8, 0);
    serverGroup.add(coreSphere);

    // Orbital ring around core
    const ringGeo = new THREE.TorusGeometry(1.3, 0.03, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.8 });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 3;
    serverGroup.add(orbitRing);

    rootGroup.add(serverGroup);

    // 4. Regional Commercial Node Hubs
    // Node definitions: [x, y, z, label, colorHex, iconType]
    const nodesData = [
      { x: -4.5, y: 0.5, z: 3.2, label: 'Blantyre Commercial Hub', color: 0x38bdf8, type: 'hub' },
      { x: 4.8, y: 0.8, z: 2.5, label: 'Lilongwe Operations Node', color: 0x34d399, type: 'hub' },
      { x: -3.8, y: 1.2, z: -4.0, label: 'Enterprise Database & Backup', color: 0x818cf8, type: 'db' },
      { x: 4.2, y: 1.0, z: -3.5, label: 'Business Web & Portal System', color: 0x38bdf8, type: 'web' },
      { x: 0.0, y: 0.6, z: 5.5, label: 'Mobile & Field PWA Sync', color: 0xf59e0b, type: 'mobile' },
    ];

    const nodeMeshes: THREE.Mesh[] = [];
    const connectionCurves: THREE.CatmullRomCurve3[] = [];
    const dataPackets: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[] = [];

    nodesData.forEach((nodeInfo) => {
      // Node pedestal
      const pedestalGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.25, 20);
      const pedestalMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.7,
        roughness: 0.3,
      });
      const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
      pedestal.position.set(nodeInfo.x, nodeInfo.y - 0.2, nodeInfo.z);
      rootGroup.add(pedestal);

      // Node beacon core
      const beaconGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.45, 16);
      const beaconMat = new THREE.MeshStandardMaterial({
        color: nodeInfo.color,
        emissive: nodeInfo.color,
        emissiveIntensity: 0.6,
        metalness: 0.4,
        roughness: 0.2,
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(nodeInfo.x, nodeInfo.y + 0.15, nodeInfo.z);
      rootGroup.add(beacon);
      nodeMeshes.push(beacon);

      // Floating indicator ring
      const haloGeo = new THREE.RingGeometry(0.55, 0.65, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: nodeInfo.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI / 2;
      halo.position.set(nodeInfo.x, nodeInfo.y + 0.4, nodeInfo.z);
      rootGroup.add(halo);

      // 5. Curved Connection Path from Central Hub to Node
      const pStart = new THREE.Vector3(0, 1.2, 0);
      const pMid = new THREE.Vector3(
        nodeInfo.x * 0.5,
        Math.max(nodeInfo.y, 1.2) + 1.2,
        nodeInfo.z * 0.5
      );
      const pEnd = new THREE.Vector3(nodeInfo.x, nodeInfo.y + 0.3, nodeInfo.z);

      const curve = new THREE.CatmullRomCurve3([pStart, pMid, pEnd]);
      connectionCurves.push(curve);

      // Tube line
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.03, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.35,
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      rootGroup.add(tube);

      // Moving glowing data packet
      const packetGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const packetMat = new THREE.MeshBasicMaterial({
        color: nodeInfo.color,
      });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      rootGroup.add(packet);

      dataPackets.push({
        mesh: packet,
        curve,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.003,
      });
    });

    // 6. Subtle background constellation network points (African business ecosystem context)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 45;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 22;
      starPos[i * 3 + 1] = Math.random() * 6 - 0.5;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.09,
      transparent: true,
      opacity: 0.5,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    rootGroup.add(starPoints);

    // Mouse movement interaction (subtle controlled tilt)
    let targetRotY = 0;
    let targetRotX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.35;
      targetRotX = y * 0.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Gentle baseline rotation
        rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05 + 0.0015;
        rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

        // Core sphere subtle breathing
        coreSphere.position.y = 2.8 + Math.sin(elapsed * 2) * 0.12;
        orbitRing.rotation.z += 0.015;
        orbitRing.rotation.x = Math.PI / 3 + Math.sin(elapsed * 1.5) * 0.1;

        // Animate data packets along curves
        dataPackets.forEach((packet) => {
          packet.progress += packet.speed;
          if (packet.progress > 1) packet.progress = 0;
          const pos = packet.curve.getPointAt(packet.progress);
          packet.mesh.position.copy(pos);
        });

        // Rotate node indicator rings
        nodeMeshes.forEach((beacon, idx) => {
          beacon.scale.y = 1 + Math.sin(elapsed * 3 + idx) * 0.08;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] flex items-center justify-center select-none">
      {/* Three.js Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Technology Ecosystem (Hover to explore)"
      />

      {/* Capability Cards - Modern, restrained, supporting business message */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-lg text-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-xs font-semibold tracking-wide">Build • Connect • Support</span>
        </div>
      </div>

      {/* Capability Indicators overlaying bottom edges */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
          <Server className="w-3.5 h-3.5 text-blue-400" />
          <span>Digital Systems: <strong>Connected & Secure</strong></span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Engineering Presence: <strong>Blantyre & Lilongwe</strong></span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none hidden sm:block">
        <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-right">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Capability Reach</span>
          <span className="text-sm font-black text-blue-400">Malawi → Africa</span>
        </div>
      </div>
    </div>
  );
};
