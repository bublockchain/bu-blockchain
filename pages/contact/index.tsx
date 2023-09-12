import React, { useState } from "react";
import axios from "axios";
import s from "./contact.module.scss";
import useContactForm from "./useContactForm";

export default function Contact() {

    const { values, handleChange } = useContactForm();
    const [responseMessage, setResponseMessage] = useState(
        { isSuccessful: false, message: '' });

    async function sendmail(email: string, subject: string, message: string, name: string) {
        return axios({
            method: 'post',
            url: '/api/mailer',
            data: {
                email: email,
                subject: subject,
                message: message,
                name: name,
            },
        });
    };

    async function submit(e: any) {
        console.log(e)
        e.preventDefault();
        try {
            const req = await sendmail(
                values.email,
                values.subject,
                values.message,
                values.name,
            );
            if (req && req.status === 250) {
                setResponseMessage(
                    { isSuccessful: true, message: 'Thank you for your message.' });
            }
        } catch (e) {
            console.log(e);
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
        }
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
                        id='name'
                        onChange={handleChange}
                        value={values.name}
                    ></input>
                    <input
                        placeholder="email"
                        required
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                    ></input>
                    <input
                        placeholder="subject"
                        required
                        type="text"
                        id="subject"
                        onChange={handleChange}
                        value={values.subject}
                    ></input>
                    <textarea
                        placeholder="message"
                        id="message"
                        required
                        onChange={handleChange}
                        value={values.message}
                    ></textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}
