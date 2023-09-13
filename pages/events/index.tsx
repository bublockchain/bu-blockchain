import React from "react";
import s from "./events.module.scss";
import Link from "next/link";

export default function Events() {
    return (
        <div>
            <div className={s.event}>
                <h2>first club meeting</h2>
                <div className={s.sub}>come learn all about BU Blockchain!.</div>
                <Link href="https://lu.ma/vhseoio4"><button>rsvp</button></Link>
            </div>
        </div>
    )
}