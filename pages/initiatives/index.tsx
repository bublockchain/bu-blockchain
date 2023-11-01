import React from "react";

import s from './initiatives.module.scss'

export default function Initiatives() {

    return (
        <div className={s.initiatives}>
            {/* <h2>Initiatives:</h2>
            <div className={s.divider}></div> */}
            <div className={s.wiblock}>
                <h2>wiblock - women in blockchain:</h2>
                <div className={s.sub}>WiBlock is a non-profit organization focused on
                    bridging the gap between female college
                    students and professionals in the web3 industry.
                    BU's WiBlock Hub offers education, and career
                    development opportunities for all blockchain-
                    related roles. Their goal is to create a safe
                    space for college women to learn and connect
                    with industry experts, addressing the disconnect
                    and lack of female representation often
                    associated with the web3 industry.</div>
            </div>
            <div className={s.town}>
                <h2>hackathons - BU blockchain around town:</h2>
                <div className={s.sub}>We are proud to have won our first three hackathons at first
                    place, each, with the development of a builder subgroup in BU
                    Blockchain. The hackathon team is open to all, and we plan to
                    encourage collaboration. This may include sponsoring certain
                    talented builders' travel costs who have continued to impress us
                    through the year. We also encourage non-technical
                    participation through ideathons held jointly by hackathons.</div>
            </div>
            <div className={s.town}>
                <h2>co-innovation and
                    collaboration:</h2>
                <div className={s.sub}>Ability to collaborate with
                    students and on research,
                    insights and fostering
                    innovation. This can yield novel
                    applications, advancements in
                    technology, and mutually
                    beneficial outcomes.</div>
            </div>
            <div className={s.town}>
                <h2>recruitment and talent
                    acquisition:</h2>
                <div className={s.sub}>Ability to connect with our talent
                    pool & receive resumes for any
                    work opportunity as well as to
                    create a talent pipeline for any
                    initiative, open or closed-source.</div>
            </div>
            <div className={s.town}>
                <h2>product development and
                    brand exposure</h2>
                <div className={s.sub}>Provides opportunity to test
                    solutions and gain student
                    insight, while also enhancing
                    brand visibility, thought
                    leadership, and potential
                    opportunities through
                    university engagement.</div>
            </div>
            <div className={s.town}>
                <h2>club ethos</h2>
                <div className={s.sub}>
                    we see a future where financial, economic, and social justice are all at
                    the forefront of our global society. We see a future where, regardless of
                    cost, knowledge barriers, and other supposed societal restrictions, all
                    of our members have an equal opportunity to succeed. As such, we do not
                    believe in restrictive processes for membership such as interviews or
                    dues, and aim to make any costs associated with travel, merchandise, or
                    other aspects of the club as low as we possibly can, but the goal is to
                    make it all at no-cost to our members. We see this is an investment
                    into the future of our organization and the overall web3 space, as we
                    want our organization to welcome any curious person with open arms
                    and help them unleash their full potential with Boston University Blockchain.</div>
            </div>
            {/* <div className={s.divider}></div>
            <h2>what BU blockchain offers:</h2>
            <div className={s.offers}>
                <div className={s.offer}>
                    <h3>co-innovation and
                        collaboration</h3>
                    <div>Ability to collaborate with
                        students and on research,
                        insights and fostering
                        innovation. This can yield novel
                        applications, advancements in
                        technology, and mutually
                        beneficial outcomes.</div>
                </div>

            </div> */}
        </div>
    )
}