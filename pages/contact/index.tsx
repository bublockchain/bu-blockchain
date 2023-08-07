import React from "react";

import s from "./contact.module.scss";

export default function Contact() {

    async function submit(e: any) {
        console.log(e)
    }

    return (
        <div>
            <div className={s.contact}>
                <h2>contact us:</h2>
                <form className={s.details}
                    onSubmit={submit}
                >
                    <input
                        placeholder="full name"
                        required
                        type="text"
                    ></input>
                    <input
                        placeholder="email"
                        required
                        type="email"
                    ></input>
                    <input
                        placeholder="subject"
                        required
                        type="text"
                    ></input>
                    <textarea
                        placeholder="message"
                        required
                    ></textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}