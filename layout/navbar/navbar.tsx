import React from "react";

import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Oxygen_Mono } from "next/font/google";

const oxygen_mono = Oxygen_Mono({
    subsets: ['latin'],
    weight: '400'
  })

export default function Navbar() {

    const linkmap = [

        {
            name: "About",
            link: "/about"
        },
        {
            name: "Initiatives",
            link: "/initiatives"
        },
/*         {
            name: "Research",
            link: "/research"
        }, */
        {
            name: "Events",
            link: "/events"
        },
        {
            name: "Team",
            link: "/team"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    return (
        <nav className={`${s.navbar} ${oxygen_mono.className}`}>
            <Link className={s.logo} href={'/'}>
                <Image src="/bublogo.png" alt="BU Blockchain" width={48} height={48} />
            </Link>
            <Link className={s.bu} href={'/'}>
                Boston University Blockchain
            </Link>
            <div className={s.space}>

            </div>
            <div className={s.links}>
                {
                    linkmap.map((link, i) => {
                        return (
                            <Link key={i} href={link.link} className={s.link}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}