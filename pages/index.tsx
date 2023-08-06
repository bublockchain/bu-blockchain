import Head from 'next/head'
import Image from 'next/image'
import { Inter, Roboto, Oxygen_Mono} from 'next/font/google'
// add helvetica neue
import s from '@/styles/index.module.scss'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import Ascii from '@/components/ascii/ascii';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})
const oxygen_mono = Oxygen_Mono({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {

  

  return (
    <>
      <Head>
        <title>BU Blockchain</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${s.main} ${oxygen_mono.className}`}>
        <div className={s.intro}>
          <div className={s.content}>
            <h2><span>BU's</span> student ran blockchain and distributed technology club. supporting research & innovation in web3.0</h2>
            <div className={s.events}>
              <h3>upcoming events</h3>
            </div>
          </div>

          <div className={s.graphic}>
            <Ascii />
          </div>
        </div>
      </main>
    </>
  )
}
