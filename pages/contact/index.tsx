import React, { useState } from "react";
import axios from "axios";
import s from "./contact.module.scss";
import useContactForm from "../../util/useContactForm";

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
            if (req && req.status < 400) {
                // show response message for 3 seconds
                setResponseMessage({
                    isSuccessful: true,
                    message: 'Your message has been sent. Thank you!',
                });
                setTimeout(() => {
                    setResponseMessage({
                        isSuccessful: false,
                        message: '',
                    });
                });
            }
        } catch (e) {
            console.log(e);
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
            setTimeout(() => {
                setResponseMessage({
                    isSuccessful: false,
                    message: '',
                });
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

                {
                    responseMessage.message !== '' && 
                    <div className={`${s.response} ${responseMessage.isSuccessful ? s.success : s.failure}`}>
                        {responseMessage.message}
                    </div>
                }
            </div>
        </div>
    )
}
