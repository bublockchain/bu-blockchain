import React from "react";
import s from "./events.module.scss";
import Link from "next/link";

export default function Events() {

    const events = [
/*         {
            name: "Polygon Workshop",
            desc: "CDS B62, 7-8 PM",
            date: "10/04/2023",
        }, */
        {
            name: "David Berlind, Editor-in-Chief at Blockchain Journal",
            desc: "Food and merch provided!",
            date: "10/11/2023 - CDS B62, 7-8 PM",

        },
        {
            name: "Smart Contract Workshop",
            desc: "Where code meets the blockchain",
            date: "10/17/23 - CDS B62",
        },
/*         {
            name: "Vechain x EasyA hackathon",
            desc: "Early Access!",
            date: "10/07/2023",
            action: "rsvp",
            link: "https://www.eventbrite.co.uk/e/vechain-x-easya-hackathon-early-access-7-8-october-win-30000-tickets-705875361207?aff=oddtdtcreator"
        }, */
        {
            name: "Boston Hacks",
            desc: "Bostons biggest hackathon",
            date: "10/20/2023",
            action: "rsvp",
            link: "https://bostonhacks.io/"
        },

    ]

    return (
        <div>
            {
                events.map((event) => (
                    <div className={s.event}>
                        <h2>{event.name}</h2>
                        <div className={s.sub}>{event.desc}</div>
                        <div className={s.date}>{event.date}</div>
                        {
                            event.action && <Link href={event.link}><button>{event.action}</button></Link>
                        }
                    </div>
                ))
            }
        </div>
    )
}