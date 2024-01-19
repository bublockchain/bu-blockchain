import React from "react";
import s from "./events.module.scss";
import Link from "next/link";
import { InferGetStaticPropsType } from "next";

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
    const events: Event[] = raw["docs"].reverse()
    console.log(events)

    return {
        props: {
            events,
        },
        revalidate: 60, // In seconds
    }
}

export default function Events({events}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <div>
            {
                events.map((event) => (
                    <div className={s.event}>
                        <h2>{event.title}</h2>
                        <div className={s.sub}>{event.description}</div>
                        <div className={s.date}>{new Date(event.date).toLocaleString()}</div>
                        {
                            event.link && <Link href={event.link}><button>rsvp</button></Link>
                        }
                    </div>
                ))
            }
        </div>
    )
}