import { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero3DCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLightRed = new THREE.PointLight(0xef4444, 4, 20);
    pointLightRed.position.set(3, 3, 4);
    scene.add(pointLightRed);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLightCyan.position.set(-3, -2, 3);
    scene.add(pointLightCyan);

    // 3. Central 3D Developer Structure Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Crystalline Core (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0xef4444,
      emissive: 0x881337,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.7,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Outer Geodesic Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xff3b5c,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerWireframe = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerWireframe);

    // Orbital Ring 1 (API & Workflow Orbit)
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.8,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // Orbital Ring 2 (Architecture Orbit)
    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xbe185d,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.8,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    coreGroup.add(ring2);

    // Floating Data Particle Constellation
    const particleCount = prefersReducedMotion ? 120 : 350;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Distribute in a spherical cloud around the core
      const radius = 2.8 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      scales[i / 3] = Math.random() * 0.04 + 0.02;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // 4. Mouse Tracking & Parallax Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      // Normalized coordinates (-1 to 1)
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 5. Visibility / Viewport Observer (pause rendering when scrolled away)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 6. Resize Handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize, { passive: true });

    // 7. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      if (!prefersReducedMotion) {
        // Continuous rotation
        coreGroup.rotation.y += delta * 0.35;
        coreGroup.rotation.x += delta * 0.2;

        innerCore.rotation.y -= delta * 0.5;
        innerCore.rotation.z += delta * 0.3;

        ring1.rotation.z += delta * 0.4;
        ring2.rotation.z -= delta * 0.35;

        particleCloud.rotation.y += delta * 0.08;
        particleCloud.rotation.x -= delta * 0.04;
      }

      // Parallax tilt on mouse movement
      coreGroup.rotation.x = THREE.MathUtils.lerp(
        coreGroup.rotation.x,
        targetY * 0.45,
        0.05
      );
      coreGroup.rotation.y = THREE.MathUtils.lerp(
        coreGroup.rotation.y,
        targetX * 0.55,
        0.05
      );

      // Subtle vertical floating motion
      coreGroup.position.y = Math.sin(elapsed * 0.9) * 0.12;

      // Dynamic light movement tracking mouse
      pointLightRed.position.x = targetX * 4 + 2;
      pointLightRed.position.y = targetY * 4 + 2;

      pointLightCyan.position.x = -targetX * 4 - 2;
      pointLightCyan.position.y = -targetY * 4 - 2;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85 dark:opacity-90"
      aria-hidden="true"
    />
  );
};

export default Hero3DCanvas;

