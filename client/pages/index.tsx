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
import { InferGetStaticPropsType } from 'next';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})
const oxygen_mono = Oxygen_Mono({
  subsets: ['latin'],
  weight: '400'
})

type Event = {
  id: string,
  title: string,
  description: string,
  date: string,
  link: string,
  createdAt: string,
  updatedAt: string
}

export async function getStaticProps() {
  const res = await fetch('https://bublockchain.up.railway.app/api/event?limit=100')
  const raw = await res.json()
  //sort by date, filter any in the past
  const events: Event[] = raw["docs"].sort((a: Event, b: Event) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  }).filter((event: Event) => {
    return new Date(event.date).getTime() > new Date().getTime()
  })
  console.log(events)

  return {
      props: {
          events,
      },
      revalidate: 60, // In seconds
  }
}

export default function Home({events}: InferGetStaticPropsType<typeof getStaticProps>) {


  const partners = [
    {
      name: "near foundation",
      link: "campus.svg"
    },
    {
      name: "hedera",
      link: "/hedera.png"
    },
    {
      name: "bnb chain",
      link: "/bnbchain.jpg",
    },
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
          <div className={s.location}>Center for Computing & Data Sciences, 665 Commonwealth Ave, 464, Boston, MA 02215, USA</div>

          <Link href="https://lu.ma/user/bublockchain"><button className={s.join}>join us</button></Link>

          <div className={s.events}>
            <h3>upcoming events</h3>

            {
              events.map((event, i) => {
                return (
                  <div className={s.event} key={i}>
                    <div className={s.dot}>
                      <div className={s.point}>%</div>
                    </div>
                    <div className={s.details}>
                      {event.title}
                      <div className={s.date}>{new Date(event.date).toLocaleDateString()}</div>
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
