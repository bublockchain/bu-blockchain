import React from "react";

import s from './resources.module.scss';
import Link from "next/link";

export default function Resources() {

    return (
        <div className={s.initiatives}>
            {/* 
                <h2>Initiatives:</h2>
                <div className={s.divider}></div> 
            */}
            <div className={s.resources}>
                <h2>NEAR campus:</h2>
                <div className={s.sub}>
                    The integration of the blockchain operating system represents a significant leap forward in simplifying the development 
                    of smart contracts by obviating the necessity for programmers to delve into intricate smart contract languages. This
                    breakthrough greatly enhances operability and user-friendliness. Our collaboration with Near Protocol further cements 
                    our commitment to shaping the future of Web3 right here at Boston University
                    <br /><br />
                    <Link href={"https://docs.near.org/concepts/welcome"}>ready to learn NEAR? start here.</Link> <br />
                    <Link href={"https://docs.near.org/bos"}>ready to build on NEAR?</Link><br />
                    <Link href={"https://docs.near.org/concepts/web3/intro"}>bring your web2 knowledge to web3.</Link> <br />
                    <Link href={"https://docs.near.org/develop/integrate/welcome"}>building Dapps on/with NEAR</Link> <br />
                    <Link href={"https://near.zulipchat.com/"}>Questions? ask here.</Link>
                </div>
            </div>
            <div className={s.town}>
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
        </div>
    )
}