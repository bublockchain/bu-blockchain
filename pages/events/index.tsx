import React from "react";
import s from "./events.module.scss";
import Link from "next/link";

export default function Events() {

    const events = [
/*         {
            name: "BUB x Community Labs",
            desc: "Hear from Community Labs and their young entrepreneurial venture, with the founders being in their early 20s! Food provided.",
            date: "11/29/23",
            action: "rsvp",
            link: "https://lu.ma/0kxllyp7"
        }, */
        {
            name: "BUB x Hedera: Careers in Blockchain",
            desc: "Come to our final general meeting, sponsored by Hedera, to hear from a panel of current web3 professionals from several disciplines. Come learn from those acting as changemakers in the space with us! Food provided.",
            date: "12/06/23",
            action: "rsvp",
            link: "https://lu.ma/ekpp7z6e"
        },
        {
            name: "BUB: Media Day x EOY Event",
            desc: "Join us for our final event of the Fall semester: a club press shoot and dinner, on us!",
            date: "12/09/23",
            action: "rsvp",
            link: "https://lu.ma/04n2gsnx"
        },
        {
            name: "BU Blockchain: Towards a Brighter Future",
            desc: "",
            date: "03/24/24",
            action: "rsvp",
            link: "https://lu.ma/18hka43f",
        },
        /*         {
                    name: "Web3 Portfolio Workshop",
                    desc: "Learn how to build a web3 portfolio",
                    date: "10/25/23",
                    action: "rsvp",
                    link: "https://lu.ma/sj054m3f"
                  }, */
/*         {
            name: "BUB: Boba, Friends, Crypto Fireside",
            desc: "Share a cup of boba with BU Blockchain while we announce our brand-new initiatives and do a “Why Web3” workshop! RSVP required for boba. ",
            date: "11/01/23",
            action: "rsvp",
            link: "https://lu.ma/ifykxd2g"
        }, */
/*         {
            name: "BU Blockchain x Fidelity",
            desc: "Join BU Blockchain and Fidelity to talk about the intersection between tradfi and the web3 space",
            date: "11/08/23",
            action: "rsvp",
            link: "https://lu.ma/b2y5d5jn"
        },
        {
            name: "Welcome to the NEAR Year",
            desc: "Join us as we introduce our flagship sponsor, NEAR Protocol, and onboard everyone to the ecosystem. This workshop is suited for all kinds of experiences. Pizza and snacks provided, bring a laptop!",
            date: "11/15/23",
            action: "rsvp",
            link: "https://lu.ma/3r76o54y"
        } */
        /*         {
                    name: "Polygon Workshop",
                    desc: "CDS B62, 7-8 PM",
                    date: "10/04/2023",
                }, */
        /*         {
                    name: "David Berlind, Editor-in-Chief at Blockchain Journal",
                    desc: "Food and merch provided!",
                    date: "10/11/2023 - CDS B62, 7-8 PM",
                    action: "rsvp",
                    link: "https://lu.ma/vixvzd99"
        
                }, */
        /*         {
                    name: "Smart Contract Workshop",
                    desc: "Where code meets the blockchain",
                    date: "10/17/23 - 125 Western Ave",
                    action: "rsvp",
                    link: "https://partiful.com/e/szjckyqsxQPTbtgOAst7"
                }, */
        /*         {
                    name: "Vechain x EasyA hackathon",
                    desc: "Early Access!",
                    date: "10/07/2023",
                    action: "rsvp",
                    link: "https://www.eventbrite.co.uk/e/vechain-x-easya-hackathon-early-access-7-8-october-win-30000-tickets-705875361207?aff=oddtdtcreator"
                }, */
        /*         {
                    name: "Boston Hacks",
                    desc: "Bostons biggest hackathon",
                    date: "10/20/2023",
                    action: "rsvp",
                    link: "https://bostonhacks.io/"
                }, */

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