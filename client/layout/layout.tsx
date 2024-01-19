import Navbar from "./navbar/navbar"
import { Inter, Roboto, Oxygen_Mono } from 'next/font/google'
const oxygen_mono = Oxygen_Mono({
    subsets: ['latin'],
    weight: '400'
})
import s from './layout.module.scss'
import Ascii from "@/components/ascii/ascii"
import { useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {

    let [opened, setOpened] = useState(false)

    return (
        <>
            <Navbar setopened={
                setOpened
            }/>
            {
                !opened ?
                    <main className={`${oxygen_mono.className} ${s.main}`}>
                        <section className={s.content}>
                            {children}
                        </section>
                        <section className={s.graphic}>
                            <Ascii />
                        </section>
                    </main>
                    : ""
            }
        </>
    )
}