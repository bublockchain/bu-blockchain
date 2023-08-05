import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.scss'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let rendered = false;
  let camera, controls, scene, renderer, effect;
	let sphere, plane;
  const start = Date.now();

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {

      const width = window.innerWidth || 2;
      const height = window.innerHeight || 2;

      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.y = 150;
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0, 0, 0 );

      const pointLight1 = new THREE.PointLight( 0xffffff, 3, 0, 0 );
      pointLight1.position.set( 500, 500, 500 );
      scene.add( pointLight1 );

      const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
      pointLight2.position.set( - 500, - 500, - 500 );
      scene.add( pointLight2 );

      sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
      scene.add( sphere );

      plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
      plane.position.y = - 200;
      plane.rotation.x = - Math.PI / 2;
      scene.add( plane );

      renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );

      effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
      effect.setSize( window.innerWidth, window.innerHeight );
      effect.domElement.style.color = 'white';
      effect.domElement.style.backgroundColor = 'black';

      containerRef.current?.appendChild(effect.domElement);

      controls = new TrackballControls( camera, effect.domElement );

      function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function render() {
				const timer = Date.now() - start;
				sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
				sphere.rotation.x = timer * 0.0003;
				sphere.rotation.z = timer * 0.0002;

        
				controls.update();
				effect.render( scene, camera );
			}

      animate();

    }
  }, []);

  return (
    <>
      <Head>
        <title>BU Blockchain</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242637/TrackballProjectorDetector.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242637/AsciiEffect.js"></script>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div ref={containerRef}  />
      </main>
    </>
  )
}
