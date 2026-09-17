import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TechNix3DWorld: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 180);
    camera.position.set(0, 3.8, 15);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x93c5fd, 1.1));
    const key = new THREE.PointLight(0x38bdf8, 22, 42);
    key.position.set(0, 7, 5);
    scene.add(key);
    const fill = new THREE.PointLight(0x34d399, 12, 35);
    fill.position.set(-10, 1, -5);
    scene.add(fill);

    const world = new THREE.Group();
    scene.add(world);

    // A floating architectural "operating system" core.
    const core = new THREE.Group();
    core.position.y = 0.7;
    world.add(core);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(3.2, 3.8, 0.45, 64),
      new THREE.MeshStandardMaterial({ color: 0x071525, metalness: 0.95, roughness: 0.16, transparent: true, opacity: 0.92 })
    );
    base.position.y = -2.15;
    core.add(base);

    const tower = new THREE.Mesh(
      new THREE.CylinderGeometry(1.45, 2.25, 3.9, 8),
      new THREE.MeshStandardMaterial({ color: 0x0b2034, metalness: 0.92, roughness: 0.12, transparent: true, opacity: 0.9 })
    );
    tower.position.y = -0.25;
    tower.rotation.y = Math.PI / 8;
    core.add(tower);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 3),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 2.2, metalness: 0.25, roughness: 0.05 })
    );
    inner.position.y = 2.45;
    core.add(inner);

    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.62, 2),
      new THREE.MeshBasicMaterial({ color: 0x7dd3fc, wireframe: true, transparent: true, opacity: 0.48 })
    );
    shell.position.copy(inner.position);
    core.add(shell);

    [2.1, 2.65, 3.2].forEach((r, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, i === 1 ? 0.035 : 0.018, 8, 160),
        new THREE.MeshBasicMaterial({ color: i === 1 ? 0x34d399 : 0x38bdf8, transparent: true, opacity: 0.62 - i * 0.1 })
      );
      ring.rotation.x = i * 0.54 + 0.75;
      ring.rotation.z = i * 0.63;
      ring.userData.speed = i % 2 ? -0.004 : 0.006;
      core.add(ring);
    });

    // Stylised Africa-like continental mass: deliberately abstract, used as a brand motif rather than a geographic map.
    const continent = new THREE.Shape();
    continent.moveTo(-2.2, 2.3);
    continent.lineTo(-1.25, 2.65);
    continent.lineTo(-0.25, 2.3);
    continent.lineTo(0.85, 1.45);
    continent.lineTo(1.35, 0.35);
    continent.lineTo(0.95, -0.75);
    continent.lineTo(0.45, -1.9);
    continent.lineTo(-0.05, -3.0);
    continent.lineTo(-0.7, -2.35);
    continent.lineTo(-1.0, -1.35);
    continent.lineTo(-1.8, -0.45);
    continent.lineTo(-2.15, 0.7);
    continent.lineTo(-2.65, 1.45);
    continent.closePath();
    const africa = new THREE.Mesh(
      new THREE.ExtrudeGeometry(continent, { depth: 0.08, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.04, bevelSegments: 2 }),
      new THREE.MeshStandardMaterial({ color: 0x0e7490, emissive: 0x075985, emissiveIntensity: 0.55, metalness: 0.45, roughness: 0.3, transparent: true, opacity: 0.32, side: THREE.DoubleSide })
    );
    africa.scale.set(0.95, 0.95, 1);
    africa.position.set(6.0, 1.4, -3.0);
    africa.rotation.set(-0.25, 0.3, -0.08);
    world.add(africa);

    const nodes = [
      [-4.7, 1.2, 0.5], [4.8, 2.0, -0.2], [-5.0, -2.0, -1.2], [5.0, -2.2, -1.0], [0, -3.8, -0.8],
    ];
    const lines: THREE.Line[] = [];
    const packets: Array<{ mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; t: number; speed: number }> = [];

    nodes.forEach((p, i) => {
      const node = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.24, 2),
        new THREE.MeshStandardMaterial({ color: i === 1 ? 0x34d399 : 0x38bdf8, emissive: i === 1 ? 0x059669 : 0x0284c7, emissiveIntensity: 1.8, metalness: 0.4, roughness: 0.08 })
      );
      node.position.set(p[0], p[1], p[2]);
      world.add(node);

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.4, 0),
        new THREE.Vector3(p[0] * 0.32, p[1] + 2.1, p[2] - 1),
        new THREE.Vector3(p[0] * 0.72, p[1] + 0.6, p[2] - 0.3),
        new THREE.Vector3(p[0], p[1], p[2]),
      ]);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(70));
      const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: i === 1 ? 0x34d399 : 0x38bdf8, transparent: true, opacity: 0.18 }));
      world.add(line);
      lines.push(line);

      const packet = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), new THREE.MeshBasicMaterial({ color: i === 1 ? 0x6ee7b7 : 0x7dd3fc }));
      world.add(packet);
      packets.push({ mesh: packet, curve, t: i * 0.17, speed: 0.0012 + i * 0.00013 });
    });

    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 11 + Math.random() * 28;
      const a = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(a) * radius;
      positions[i * 3 + 1] = -8 + Math.random() * 25;
      positions[i * 3 + 2] = Math.sin(a) * radius - 8;
    }
    const stars = new THREE.BufferGeometry();
    stars.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    world.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.045, transparent: true, opacity: 0.55 })));

    let tx = 0; let ty = 0; let cx = 0; let cy = 0;
    const pointer = (e: PointerEvent) => {
      if (reduced) return;
      const r = mount.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 0.9;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 0.45;
    };
    const leave = () => { tx = 0; ty = 0; };
    mount.addEventListener('pointermove', pointer);
    mount.addEventListener('pointerleave', leave);

    const resize = () => {
      const w = Math.max(mount.clientWidth, 1); const h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false);
    };
    const observer = new ResizeObserver(resize); observer.observe(mount); resize();

    const clock = new THREE.Clock(); let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!reduced) {
        cx += (ty - cx) * 0.025; cy += (tx - cy) * 0.025;
        world.rotation.x = cx * 0.24;
        world.rotation.y = cy * 0.18 + Math.sin(t * 0.12) * 0.035;
        core.rotation.y += 0.0028;
        inner.rotation.x += 0.004; inner.rotation.y -= 0.006;
        shell.rotation.x -= 0.002; shell.rotation.z += 0.003;
        core.children.forEach((child) => { if (child.userData.speed) child.rotation.z += child.userData.speed; });
        packets.forEach((packet) => { packet.t = (packet.t + packet.speed) % 1; packet.mesh.position.copy(packet.curve.getPointAt(packet.t)); });
        africa.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); mount.removeEventListener('pointermove', pointer); mount.removeEventListener('pointerleave', leave);
      scene.traverse((o) => {
        const obj = o as THREE.Mesh | THREE.Line | THREE.Points;
        if ('geometry' in obj && obj.geometry) obj.geometry.dispose();
        if ('material' in obj && obj.material) {
          const m = obj.material; if (Array.isArray(m)) m.forEach((x) => x.dispose()); else m.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="tnx-world-canvas" aria-hidden="true" />;
};

export default TechNix3DWorld;
