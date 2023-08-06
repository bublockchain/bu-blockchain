import React from "react";

import s from "./about.module.scss";
import { Inter, Roboto, Oxygen_Mono } from 'next/font/google'
const oxygen_mono = Oxygen_Mono({
    subsets: ['latin'],
    weight: '400'
})

export default function About() {
    return (
        <div className={`${s.about} ${oxygen_mono.className}`}>
            <div className={s.mission}>
                <h2>our mission:</h2>
                <div className={s.sub}>we are an inclusive, multifaceted community dedicated to equal
                    education in the web3 space. We aim to foster creativity, build a
                    diverse network, and shape a decentralized future together.
                    Through research, development, and building companies - BU
                    Blockchain aims to act as a springboard for all students to
                    unleash their potential in the field.</div>
            </div>
            <div className={s.vision}>
                <h2>our vision:</h2>
                <div className={s.sub}>we see a decentralized future for all that allows
                    for equal opportunity to create and innovate on
                    any chain, regardless of a person's field of
                    experience, gender identity, race, or origin. We
                    plan to aid all members in their intellectual
                    pursuits in the Web3 field - while simultaneously
                    connecting them to opportunities both near and
                    far, that stimulate their personal growth and
                    development through speaker events, workshops,
                    hackathons, and our women in blockchain
                    (WiBlock) initiative.</div>
            </div>
            <div className={s.collaboration}>
                <h2>collaboration:</h2>
                <div className={s.sub}>
                    We pride ourselves on collaboration and
                    diplomacy with other university organizations,
                    which has opened many doors for us in terms
                    of working across the aisle and our reputation
                    as a well-respected organization.
                </div>

            </div>
        </div>
    )
}