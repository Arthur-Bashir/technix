import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Cloud, Database, Globe2, ShieldCheck, Smartphone, Workflow } from 'lucide-react';

const NODE_DATA = [
  { label: 'BLANTYRE', sub: 'Business', x: -4.4, y: 0.1, z: 2.3, color: 0x38bdf8 },
  { label: 'LILONGWE', sub: 'Operations', x: 4.3, y: 0.1, z: 1.8, color: 0x34d399 },
  { label: 'WEB', sub: 'Digital presence', x: 4.0, y: 0.1, z: -3.0, color: 0x60a5fa },
  { label: 'DATA', sub: 'Protected systems', x: -3.9, y: 0.1, z: -3.0, color: 0xa78bfa },
  { label: 'MOBILE', sub: 'Field connectivity', x: 0, y: 0.1, z: 4.7, color: 0xf59e0b },
];

const disposeScene = (scene: THREE.Scene) => {
  scene.traverse((object) => {
    if (!(object instanceof THREE.Mesh) && !(object instanceof THREE.Line) && !(object instanceof THREE.Points)) return;
    object.geometry.dispose();
    const material = object.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else material.dispose();
  });
};

export const TechEcosystemVisual3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(11, 8.5, 16.5);
    camera.lookAt(0, 1.1, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xbfe7ff, 0x020617, 1.35));
    const key = new THREE.DirectionalLight(0x7dd3fc, 2.8);
    key.position.set(5, 12, 8);
    scene.add(key);
    const rim = new THREE.PointLight(0x34d399, 2.5, 18);
    rim.position.set(-6, 3, 4);
    scene.add(rim);

    const stage = new THREE.Group();
    scene.add(stage);

    // Atmospheric floor.
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(8.3, 64),
      new THREE.MeshBasicMaterial({ color: 0x071525, transparent: true, opacity: 0.82 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.15;
    stage.add(floor);

    const floorGrid = new THREE.GridHelper(16, 32, 0x1d4ed8, 0x0f2742);
    floorGrid.position.y = -1.1;
    floorGrid.material.transparent = true;
    floorGrid.material.opacity = 0.2;
    stage.add(floorGrid);

    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(7.55, 0.025, 8, 160),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 })
    );
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = -1.04;
    stage.add(outerRing);

    // Large translucent infrastructure sphere creates the visual silhouette.
    const globe = new THREE.Group();
    globe.position.y = 0.65;
    stage.add(globe);
    const globeShell = new THREE.Mesh(
      new THREE.SphereGeometry(3.8, 36, 24),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.075 })
    );
    globe.add(globeShell);
    for (let i = 0; i < 5; i += 1) {
      const latitude = new THREE.Mesh(
        new THREE.TorusGeometry(3.8 * Math.cos((-0.7 + i * 0.35)), 0.012, 6, 96),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0x34d399 : 0x60a5fa, transparent: true, opacity: 0.12 })
      );
      latitude.rotation.x = Math.PI / 2;
      latitude.rotation.z = 0.22;
      latitude.position.y = Math.sin(-0.7 + i * 0.35) * 3.8;
      globe.add(latitude);
    }

    // Central architectural core.
    const core = new THREE.Group();
    core.position.y = 0.35;
    stage.add(core);

    const plinth = new THREE.Mesh(
      new THREE.CylinderGeometry(1.9, 2.25, 0.5, 48),
      new THREE.MeshPhysicalMaterial({ color: 0x0c1b2d, metalness: 0.92, roughness: 0.2, transparent: true, opacity: 0.94 })
    );
    plinth.position.y = -0.55;
    core.add(plinth);

    const tower = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 2.2, 1.7),
      new THREE.MeshPhysicalMaterial({ color: 0x10263b, metalness: 0.9, roughness: 0.16, transparent: true, opacity: 0.9 })
    );
    tower.position.y = 0.5;
    core.add(tower);

    for (let i = 0; i < 4; i += 1) {
      const slit = new THREE.Mesh(
        new THREE.BoxGeometry(1.25, 0.045, 0.025),
        new THREE.MeshBasicMaterial({ color: i === 2 ? 0x34d399 : 0x38bdf8 })
      );
      slit.position.set(0, -0.25 + i * 0.42, 0.87);
      core.add(slit);
    }

    const coreOrb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.66, 3),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 1.4, metalness: 0.15, roughness: 0.08 })
    );
    coreOrb.position.y = 2.0;
    core.add(coreOrb);

    const coreWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.9, 2),
      new THREE.MeshBasicMaterial({ color: 0x7dd3fc, wireframe: true, transparent: true, opacity: 0.6 })
    );
    coreWire.position.copy(coreOrb.position);
    core.add(coreWire);

    const orbiters: THREE.Mesh[] = [];
    [1.15, 1.42, 1.7].forEach((radius, i) => {
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.018, 8, 96),
        new THREE.MeshBasicMaterial({ color: i === 1 ? 0x34d399 : 0x38bdf8, transparent: true, opacity: 0.68 - i * 0.1 })
      );
      orbit.rotation.x = Math.PI / (2.25 + i * 0.35);
      orbit.rotation.z = i * 0.65;
      orbit.position.y = 2.0;
      core.add(orbit);
      orbiters.push(orbit);
    });

    // Data lanes: multiple curves per node give the network visual density.
    const packets: Array<{ mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; t: number; speed: number }> = [];
    NODE_DATA.forEach((node, index) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(node.x, 0, node.z);
      stage.add(nodeGroup);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.85, 0.18, 32),
        new THREE.MeshStandardMaterial({ color: 0x102237, metalness: 0.8, roughness: 0.2 })
      );
      base.position.y = -0.65;
      nodeGroup.add(base);

      const beacon = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.34, 1),
        new THREE.MeshStandardMaterial({ color: node.color, emissive: node.color, emissiveIntensity: 0.9, metalness: 0.35, roughness: 0.1 })
      );
      beacon.position.y = -0.12;
      nodeGroup.add(beacon);

      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.62, 0.018, 8, 48),
        new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.65 })
      );
      halo.rotation.x = Math.PI / 2;
      halo.position.y = -0.42;
      nodeGroup.add(halo);

      const end = new THREE.Vector3(node.x, node.y ?? 0.1, node.z);
      const start = new THREE.Vector3(0, 1.35, 0);
      for (let lane = 0; lane < 2; lane += 1) {
        const bend = lane === 0 ? 0.25 : -0.25;
        const curve = new THREE.CatmullRomCurve3([
          start,
          new THREE.Vector3(node.x * 0.32 + bend, 2.1 + index * 0.08, node.z * 0.32),
          new THREE.Vector3(node.x * 0.72 - bend, 1.0, node.z * 0.72),
          end,
        ]);
        const laneMesh = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 42, lane === 0 ? 0.014 : 0.009, 6, false),
          new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: lane === 0 ? 0.3 : 0.14 })
        );
        stage.add(laneMesh);

        const packet = new THREE.Mesh(
          new THREE.SphereGeometry(lane === 0 ? 0.075 : 0.05, 10, 10),
          new THREE.MeshBasicMaterial({ color: node.color })
        );
        stage.add(packet);
        packets.push({ mesh: packet, curve, t: (index * 0.18 + lane * 0.42) % 1, speed: 0.0009 + index * 0.00009 + lane * 0.00015 });
      }
    });

    // Constellation points are spatially distributed rather than a generic star field.
    const pointCount = 120;
    const pointPositions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i += 1) {
      const r = 5 + Math.random() * 8;
      const a = Math.random() * Math.PI * 2;
      pointPositions[i * 3] = Math.cos(a) * r;
      pointPositions[i * 3 + 1] = -0.4 + Math.random() * 8;
      pointPositions[i * 3 + 2] = Math.sin(a) * r;
    }
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    stage.add(new THREE.Points(pointGeometry, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.035, transparent: true, opacity: 0.5 })));

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion) return;
      const rect = mount.getBoundingClientRect();
      targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.42;
      targetX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.24;
    };
    const resetPointer = () => { targetX = 0; targetY = 0; };
    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerleave', resetPointer);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      if (!reducedMotion) {
        currentX += (targetX - currentX) * 0.035;
        currentY += (targetY - currentY) * 0.035;
        stage.rotation.x = currentX;
        stage.rotation.y = currentY + Math.sin(time * 0.14) * 0.025;
        globe.rotation.y += 0.0006;
        coreOrb.rotation.x += 0.004;
        coreOrb.rotation.y += 0.006;
        coreWire.rotation.x -= 0.002;
        coreWire.rotation.y -= 0.004;
        orbiters.forEach((ring, i) => { ring.rotation.z += i % 2 ? -0.006 : 0.008; });
        packets.forEach((packet) => {
          packet.t += packet.speed;
          if (packet.t > 1) packet.t = 0;
          packet.mesh.position.copy(packet.curve.getPointAt(packet.t));
        });
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerleave', resetPointer);
      disposeScene(scene);
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative h-[430px] sm:h-[510px] lg:h-[560px] w-full overflow-hidden select-none">
      <div ref={mountRef} className="absolute inset-0 cursor-crosshair" aria-label="Interactive TechNix digital infrastructure visualization" />

      <div className="absolute left-5 top-5 sm:left-7 sm:top-7 pointer-events-none">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1.5 backdrop-blur-xl shadow-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-200">Digital infrastructure</span>
        </div>
      </div>

      <div className="absolute right-5 top-5 hidden sm:block pointer-events-none">
        <div className="rounded-2xl border border-white/10 bg-slate-950/65 px-3.5 py-3 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400"><Globe2 className="h-3.5 w-3.5 text-sky-400" /> Africa connected</div>
          <div className="mt-1 text-xs font-semibold text-white">Blantyre • Lilongwe • Beyond</div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex flex-wrap gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/72 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Cloud className="h-3.5 w-3.5 text-sky-400" /> Cloud & Hosting</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/72 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Workflow className="h-3.5 w-3.5 text-emerald-400" /> Business Systems</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/72 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Database className="h-3.5 w-3.5 text-violet-400" /> Data & Backup</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/72 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Smartphone className="h-3.5 w-3.5 text-amber-400" /> Mobile & Field</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/72 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Secure by design</div>
      </div>
    </div>
  );
};
