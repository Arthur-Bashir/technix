import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowUpRight, Cloud, Database, Globe2, ShieldCheck, Smartphone, Workflow } from 'lucide-react';

interface NodeDefinition {
  label: string;
  short: string;
  position: THREE.Vector3;
  color: number;
}

const nodeDefinitions: NodeDefinition[] = [
  { label: 'Blantyre', short: 'Business', position: new THREE.Vector3(-4.2, 1.0, 2.0), color: 0x38bdf8 },
  { label: 'Lilongwe', short: 'Operations', position: new THREE.Vector3(4.0, 1.4, 1.6), color: 0x34d399 },
  { label: 'Web & Portals', short: 'Digital', position: new THREE.Vector3(3.8, 0.1, -3.0), color: 0x60a5fa },
  { label: 'Data & Backup', short: 'Protected', position: new THREE.Vector3(-3.7, 0.0, -3.2), color: 0xa78bfa },
  { label: 'Field & Mobile', short: 'Connected', position: new THREE.Vector3(0.0, 1.0, 4.4), color: 0xf59e0b },
];

const disposeObject = (object: THREE.Object3D) => {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points) {
      child.geometry.dispose();
      const material = child.material;
      if (Array.isArray(material)) material.forEach((m) => m.dispose());
      else material.dispose();
    }
  });
};

export const TechEcosystemVisual3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const width = container.clientWidth || 620;
    const height = container.clientHeight || 520;
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
    camera.position.set(10.5, 7.0, 15.5);
    camera.lookAt(0, 1.0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x020617, 1.45));
    const keyLight = new THREE.DirectionalLight(0x7dd3fc, 2.2);
    keyLight.position.set(7, 12, 8);
    scene.add(keyLight);
    const greenLight = new THREE.PointLight(0x34d399, 2.2, 16);
    greenLight.position.set(-5, 3, 4);
    scene.add(greenLight);

    const world = new THREE.Group();
    scene.add(world);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(7.8, 8.2, 0.18, 64),
      new THREE.MeshPhysicalMaterial({ color: 0x07111f, metalness: 0.85, roughness: 0.25, transparent: true, opacity: 0.86 })
    );
    platform.position.y = -1.05;
    world.add(platform);

    const platformRing = new THREE.Mesh(
      new THREE.TorusGeometry(7.35, 0.025, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.45 })
    );
    platformRing.rotation.x = Math.PI / 2;
    platformRing.position.y = -0.92;
    world.add(platformRing);

    const core = new THREE.Group();
    core.position.y = 0.45;
    world.add(core);

    const coreBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.75, 2.05, 1.1, 32),
      new THREE.MeshPhysicalMaterial({ color: 0x0b1a2c, metalness: 0.88, roughness: 0.18, transparent: true, opacity: 0.92 })
    );
    core.add(coreBase);

    for (let i = 0; i < 3; i += 1) {
      const layer = new THREE.Mesh(
        new THREE.BoxGeometry(2.55 - i * 0.12, 0.28, 2.55 - i * 0.12),
        new THREE.MeshStandardMaterial({ color: 0x14263b, metalness: 0.85, roughness: 0.2 })
      );
      layer.position.y = -0.2 + i * 0.43;
      core.add(layer);
      const indicator = new THREE.Mesh(
        new THREE.BoxGeometry(1.7, 0.035, 0.035),
        new THREE.MeshBasicMaterial({ color: i === 1 ? 0x34d399 : 0x38bdf8 })
      );
      indicator.position.set(0, layer.position.y, 1.29 - i * 0.06);
      core.add(indicator);
    }

    const energy = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 2),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 1.1, metalness: 0.15, roughness: 0.08 })
    );
    energy.position.y = 2.1;
    core.add(energy);

    const energyWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.92, 2),
      new THREE.MeshBasicMaterial({ color: 0x7dd3fc, wireframe: true, transparent: true, opacity: 0.55 })
    );
    energyWire.position.copy(energy.position);
    core.add(energyWire);

    const orbitRings: THREE.Mesh[] = [];
    [1.2, 1.48].forEach((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.025, 8, 96),
        new THREE.MeshBasicMaterial({ color: index === 0 ? 0x38bdf8 : 0x34d399, transparent: true, opacity: 0.72 })
      );
      ring.position.y = 2.1;
      ring.rotation.x = index === 0 ? Math.PI / 2.7 : Math.PI / 2.1;
      ring.rotation.z = index * 0.8;
      core.add(ring);
      orbitRings.push(ring);
    });

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(3.05, 28, 20),
      new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.12 })
    );
    globe.position.y = 0.75;
    world.add(globe);

    const globeEquator = new THREE.Mesh(
      new THREE.TorusGeometry(3.05, 0.018, 6, 128),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.28 })
    );
    globeEquator.rotation.x = Math.PI / 2;
    globeEquator.position.y = 0.75;
    world.add(globeEquator);

    const packets: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    nodeDefinitions.forEach((node, index) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(node.position);
      world.add(nodeGroup);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.72, 0.9, 0.18, 24),
        new THREE.MeshStandardMaterial({ color: 0x102237, metalness: 0.75, roughness: 0.24 })
      );
      base.position.y = -0.35;
      nodeGroup.add(base);

      const beacon = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.38, 1),
        new THREE.MeshStandardMaterial({ color: node.color, emissive: node.color, emissiveIntensity: 0.72, metalness: 0.35, roughness: 0.12 })
      );
      beacon.position.y = 0.05;
      nodeGroup.add(beacon);
      nodeMeshes.push(beacon);

      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.62, 0.018, 8, 48),
        new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.62 })
      );
      halo.rotation.x = Math.PI / 2;
      halo.position.y = -0.08;
      nodeGroup.add(halo);

      const start = new THREE.Vector3(0, 1.35, 0);
      const end = new THREE.Vector3(node.position.x, node.position.y + 0.05, node.position.z);
      const mid = new THREE.Vector3(node.position.x * 0.52, 2.45 + index * 0.08, node.position.z * 0.52);
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);

      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 40, 0.018, 6, false),
        new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.32 })
      );
      world.add(tube);

      const packet = new THREE.Mesh(
        new THREE.SphereGeometry(0.085, 10, 10),
        new THREE.MeshBasicMaterial({ color: node.color })
      );
      world.add(packet);
      packets.push({ mesh: packet, curve, progress: index / nodeDefinitions.length, speed: 0.0008 + index * 0.00012 });
    });

    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 7 + Math.random() * 6;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = -0.2 + Math.random() * 7;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0x60a5fa, size: 0.035, transparent: true, opacity: 0.4 }));
    world.add(particles);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion) return;
      const rect = container.getBoundingClientRect();
      targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.32;
      targetX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.18;
    };
    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const nextWidth = entry.contentRect.width;
      const nextHeight = entry.contentRect.height;
      if (!nextWidth || !nextHeight) return;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    });
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!reducedMotion) {
        currentX += (targetX - currentX) * 0.035;
        currentY += (targetY - currentY) * 0.035;
        world.rotation.x = currentX;
        world.rotation.y = currentY + Math.sin(elapsed * 0.18) * 0.035;
        energy.rotation.x += 0.004;
        energy.rotation.y += 0.006;
        energyWire.rotation.x -= 0.002;
        energyWire.rotation.y -= 0.004;
        orbitRings[0].rotation.z += 0.008;
        orbitRings[1].rotation.z -= 0.005;
        globe.rotation.y += 0.0008;
        particles.rotation.y -= 0.00035;

        nodeMeshes.forEach((mesh, index) => {
          const pulse = 1 + Math.sin(elapsed * 2.2 + index) * 0.08;
          mesh.scale.set(pulse, pulse, pulse);
        });

        packets.forEach((packet) => {
          packet.progress += packet.speed;
          if (packet.progress > 1) packet.progress = 0;
          packet.mesh.position.copy(packet.curve.getPointAt(packet.progress));
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      disposeObject(scene);
      renderer.dispose();
      if (renderer.domElement.parentElement === container) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-[430px] sm:h-[500px] lg:h-[540px] overflow-hidden select-none">
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" aria-label="Interactive 3D TechNix technology ecosystem" />

      <div className="absolute top-5 left-5 sm:top-7 sm:left-7 pointer-events-none">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1.5 backdrop-blur-xl shadow-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-200">TechNix Digital Infrastructure</span>
        </div>
      </div>

      <div className="absolute right-5 top-5 sm:right-7 sm:top-7 pointer-events-none hidden sm:block">
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Globe2 className="h-3.5 w-3.5 text-sky-400" />
            Africa Connected
          </div>
          <div className="mt-1 text-xs font-semibold text-white">Build • Connect • Protect</div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex flex-wrap gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Cloud className="h-3.5 w-3.5 text-sky-400" /> Cloud & Hosting</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Workflow className="h-3.5 w-3.5 text-emerald-400" /> Business Systems</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Database className="h-3.5 w-3.5 text-violet-400" /> Data & Backup</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><Smartphone className="h-3.5 w-3.5 text-amber-400" /> Mobile & Field</div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/70 px-2.5 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Secure by Design</div>
      </div>

      <div className="absolute bottom-20 right-5 sm:right-7 pointer-events-none hidden md:block">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400"><ArrowUpRight className="h-3 w-3 text-sky-400" /> Move your cursor to explore</div>
      </div>
    </div>
  );
};
