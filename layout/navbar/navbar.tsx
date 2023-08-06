import React from "react";

import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

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
        {
            name: "Research",
            link: "/research"
        },
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
        <nav className={s.navbar}>
            <div className={s.logo}>
                <Image src="/bublogo.png" alt="BU Blockchain" width={48} height={48} />
            </div>
            <div className={s.bu}>
                Boston University Blockchain
            </div>
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