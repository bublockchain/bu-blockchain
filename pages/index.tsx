import Head from 'next/head'
import Image from 'next/image'
import { Inter, Roboto, Oxygen_Mono } from 'next/font/google'
// add helvetica neue
import s from '@/styles/index.module.scss'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import Ascii from '@/components/ascii/ascii';
import Link from 'next/link';

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

  const eventmap = [
    {
      name: "Vechain x EasyA Hacks",
      date: "10/07/23",
      action: "rsvp",
      link: "https://www.eventbrite.co.uk/e/vechain-x-easya-hackathon-early-access-7-8-october-win-30000-tickets-705875361207?aff=oddtdtcreator"
    },
    {
      name: "David Berlind, Editor-in-Chief at Blockchain Journal",
      date: "10/11/23 - CDS B62",
      action: "rsvp",
      link: "https://lu.ma/vixvzd99"
    },
    {
      name: "Smart Contract Workshop",
      date: "10/17/23 - CDS B62",
      action: "rsvp",
      link: "https://partiful.com/e/szjckyqsxQPTbtgOAst7"
    },
    {
      name: 'Boston Hacks',
      date: '11/18/23',
      action: 'rsvp',
      link: 'https://bostonhacks.io/'
    },
    /*     {
          name: 'BU Blockchain Gala',
          date: '12/10/2023',
          action: 'rsvp',
          link: 'https://www.google.com'
        } */
  ]

  const partners = [
    {
      name: "hedera",
      link: "/hedera.png"
    },
    {
      name: "bnb chain",
      link: "/bnbchain.jpg",
    },
    {
      name: "near foundation",
      link: "/near.jpeg"
    },
    /*     {
          name: "186 ventures",
          link: "/186.png"
        }, */
    {
      name: "circle",
      link: "/circle.png"
    },
    {
      name: "fidelity investments",
      link: "/fidelity.png"
    },
    {
      name: "chainlink",
      link: "/chain.png"
    },
    /*     {
          name: "algorand",
          link: "/algorand.png"
        } */

  ]

  return (
    <>
      <Head>
        <title>BU Blockchain</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bublogo.ico" />
      </Head>
      <div className={`${oxygen_mono.className}`}>
        <div className={s.content}>
          <h2><span>BU's</span> student run blockchain and distributed technology club. supporting research & innovation in web3.0</h2>
          <div className={s.location}>Center for Computing & Data Sciences, 665 Commonwealth Ave, B62, Boston, MA 02215, USA</div>

          <Link href="https://lu.ma/vhseoio4"><button className={s.join}>join us</button></Link>

          <div className={s.events}>
            <h3>upcoming events</h3>

            {
              eventmap.map((event, i) => {
                return (
                  <div className={s.event} key={i}>
                    <div className={s.dot}>
                      <div className={s.point}>%</div>
                    </div>
                    <div className={s.details}>
                      {event.name}
                      <div className={s.date}>{event.date}</div>
                    </div>
                    <div className={s.action}>
                      {
                        event.link && <Link href={event.link}><button>rsvp</button></Link>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={s.partners}>
            <h3>our partners</h3>
            <div className={s.list}>
              {
                partners.map((partner, i) => {
                  return (
                    <div className={s.partner} key={i}>
                      <Image src={partner.link} alt={partner.name} width={500} height={500} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        {/* <div className={s.graphic}>
            <Ascii />
          </div> */}
      </div>
    </>
  )
}
