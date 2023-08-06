import { Inter } from 'next/font/google'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';




import s from './ascii.module.scss'


export default function Ascii() {
    let rendered = false;
    let camera: any, controls, scene: any, renderer, effect: AsciiEffect;
    let sphere: { position: { y: number; }; rotation: { x: number; z: number; }; }, plane;
    const start = Date.now();

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (rendered) return;
        console.log('rendering')
        if (typeof window == 'undefined') {
            return;
        }

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.y = 150;
        camera.position.z = 400;

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0, 0, 0);

        const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
        pointLight1.position.set(500, 500, 500);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
        pointLight2.position.set(- 500, - 500, - 500);
        scene.add(pointLight2);

        sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
        scene.add(sphere);

        /* plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
        plane.position.y = - 200;
        plane.rotation.x = - Math.PI / 2;
        scene.add(plane); */

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
        effect.setSize(window.innerWidth / 2.2, window.innerHeight / 2.2);
        effect.domElement.style.color = 'white';
        effect.domElement.style.backgroundColor = 'black';

        containerRef.current?.appendChild(effect.domElement);

        /* controls = new TrackballControls( camera, effect.domElement ); */

        function render() {
            const timer = Date.now() - start;
            sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
            sphere.rotation.x = timer * 0.0003;
            sphere.rotation.z = timer * 0.0002;


            /* controls.update(); */
            effect.render(scene, camera);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        animate();

        rendered = true;

    }, [rendered]);

    return (
        <div ref={containerRef} className={s.ascii}/>
    )
}