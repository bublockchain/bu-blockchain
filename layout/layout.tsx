import Navbar from "./navbar/navbar"

import s from './layout.module.scss'
import Ascii from "@/components/ascii/ascii"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className={s.main}>
                <section className={s.content}>
                    {children}
                </section>
                <section className={s.graphic}>
                    <Ascii />
                </section>
            </main>
        </>
    )
}