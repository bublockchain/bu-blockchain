import React from "react";
import { InferGetStaticPropsType } from 'next'

import s from "./team.module.scss";

import {FaEnvelope, FaLinkedin, FaTwitter} from "react-icons/fa";

type Member = {
    id: string,
    name: string,
    position: string,
    email: string,
    createdAt: string,
    updatedAt: string
}

export async function getStaticProps() {
    const res = await fetch('https://bublockchain.up.railway.app/api/member?limit=100')
    const raw = await res.json()
    const members: Member[] = raw["docs"].reverse()
    console.log(members)

    return {
        props: {
            members,
        },
        revalidate: 60, // In seconds
    }
}

export default function Team({members}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <div>
            <div className={s.team}>
{/*                 <h2>our team:</h2> */}
                {
                    members.map((member, i) => {
                        return (
                            <div className={s.member} key={member.id}>
                                {/* <div className={s.avatar}></div> */}
                                <div className={s.details}>
                                    <div className={s.name}>{member.name}</div>
                                    <div className={s.title}>{member.position}</div>
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