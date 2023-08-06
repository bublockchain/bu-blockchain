import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// add helvetica neue
import s from '@/styles/index.module.scss'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import Ascii from '@/components/ascii/ascii';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <>
      <Head>
        <title>BU Blockchain</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${s.main} ${inter.className}`}>
        <div className={s.intro}>
          <div className={s.content}>
          </div>

          <div className={s.graphic}>
            <Ascii />
          </div>
        </div>
      </main>
    </>
  )
}
