import React from "react";

import s from "./team.module.scss";

import {FaEnvelope, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Team() {

    const team = [
        {
            name: "Isabelle Ki",
            title: "President",
            avatar: "/isabelle.png",
            email: "isabelle@bublockchain.xyz"
        },
        {
            name: "Alysa Zhao",
            title: "Vice President",
            avatar: "/alysa.png",
        },
        {
            name: "Daniel Lung",
            title: "VP of administration",
            avatar: "/daniel.png",
            email: "daniel@bublockchain.xyz"
        },
        {
            name: "Sachin Thapa",
            title: "VP of finance",
            avatar: "/sachin.png",
            email: "sachin@bublockchain.xyz"
        },
        {
            name: "Saad N.",
            title: "VP of technology",
            avatar: "/saad.png",
            email: "tech@bublockchain.xyz"
        },
        {
            name: "Wes A. Jorgensen",
            title: "VP of innovation",
            avatar: "/wes.png",
            email: "wes@bublockchain.xyz"
        },
        {
            name: "Akemi & Melissa",
            title: "CO-VPs of social events",
            avatar: "",
            email: "akemi@bublockchain.xyz "
        },
        {
            name: "Noah Kim",
            title: "Director of design",
            avatar: "/noah.png"
        },
        {
            name: "Salem Gebru",
            title: "Director of marketing",
            avatar: "/salem.png",
            email: 'salem@bublockchain.xyz'
        },
        {
            name: "Dana",
            title: "Director of outreach", 
            avatar: "/melanie.png",
            email: "dana@bublockchain.xyz"
        },
        {
            name: "Sahir Doshi",
            title: "Advisor",
            avatar: "/sahir.png"
        },
        {
            name: "Cameron Asadi",
            title: "Advisor",
            avatar: "/cameron.png"
        }
    ]

    return (
        <div>
            <div className={s.team}>
{/*                 <h2>our team:</h2> */}
                {
                    team.map((member, i) => {
                        return (
                            <div className={s.member}>
                                {/* <div className={s.avatar}></div> */}
                                <div className={s.details}>
                                    <div className={s.name}>{member.name}</div>
                                    <div className={s.title}>{member.title}</div>
                                    <div className={s.socials}>
                                        {/* <FaLinkedin className={s.icon} />
                                        <FaTwitter className={s.icon} /> */}
                                        {
                                            member.email ? <a href={`mailto:${member.email}`}><FaEnvelope className={s.icon} /></a> : null
                                        }
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