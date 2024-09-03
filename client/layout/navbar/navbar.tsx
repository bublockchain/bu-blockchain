import React from "react";

import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Oxygen_Mono } from "next/font/google";
import { useRouter } from "next/router";

const oxygen_mono = Oxygen_Mono({
    subsets: ['latin'],
    weight: '400'
})

interface Props {
    setopened: (opened: boolean) => void
}

export default function Navbar(
    { setopened }: Props
) {

    const router = useRouter()

    const linkmap = [

        {
            name: "About",
            link: "/about"
        },
        {
            name: "Hackathon",
            link: "/hackathon"
        },
        {
            name: "Initiatives",
            link: "/initiatives"
        },
        {
            name: "Resources",
            link: "/resources"
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

    function handleMenu() {

        const cover = document.querySelector(`.${s.cover}`) as HTMLElement
        const hamburger = document.querySelector(`.${s.hamburger}`) as HTMLElement
        const navbar = document.querySelector(`.${s.navbar}`) as HTMLElement

        if (cover.style.display === 'flex') {
            setopened(false)
            cover.style.display = 'none'
            hamburger.style.transform = 'rotate(0deg)'
            navbar.style.height = 'auto'
        } else {
            setopened(true)
            cover.style.display = 'flex'
            hamburger.style.transform = 'rotate(90deg)'
            navbar.style.height = '100vh'
        }
    }

    const bba = router.pathname.includes("hackathon")

    return (
        <nav className={`${s.navbar} ${oxygen_mono.className}`}>
            <div className={s.regular}>
                <Link className={s.logo} href={'/'}>
                    <Image src="/bublogo.png" alt="BU Blockchain" width={48} height={48} />
                </Link>
                {
                    !bba && (
                        <Link className={s.bu} href={'/'}>
                            Boston University Blockchain
                        </Link>
                    )
                }
                {
                    bba && (
                        <>
                            <div className={s.dot}>{"⋅"}</div>
                            <Link className={s.logo} href={'https://bostonblockchainassociation.com'}>
                                <Image src="/bba.svg" alt="BBA" width={28} height={28} />
                            </Link>
                        </>
                    )
                }
        
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

                <div className={s.mobile}>
                    <div className={s.hamburger} onClick={handleMenu}>
                        <div className={s.bar}></div>
                        <div className={s.bar}></div>
                        <div className={s.bar}></div>
                    </div>
                </div>
            </div>

            <div className={s.cover}>
                {
                    linkmap.map((link, i) => {
                        return (
                            <Link key={i} href={link.link} className={s.link}
                                onClick={handleMenu}
                            >
                                {link.name}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}