import React from "react";

import s from "./team.module.scss";

import {FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Team() {

    const team = [
        {
            name: "Isabelle Ki",
            title: "President",
            avatar: "/isabelle.png"
        },
        {
            name: "Alysa Zhao",
            title: "Vice President",
            avatar: "/alysa.png"
        }
    ]

    return (
        <div>
            <div className={s.team}>
                <h2>our team:</h2>
                {
                    team.map((member, i) => {
                        return (
                            <div className={s.member}>
                                <div className={s.avatar}></div>
                                <div className={s.details}>
                                    <div className={s.name}>{member.name}</div>
                                    <div className={s.title}>{member.title}</div>
                                    <div className={s.socials}>
                                        <FaLinkedin className={s.icon} />
                                        <FaTwitter className={s.icon} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                    
            </div>
        </div>
    )
}