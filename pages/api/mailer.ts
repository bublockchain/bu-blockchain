
//make a nextjs nodemailer endpoint

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body
        console.log(process.env.EMAIL)
        console.log(process.env.PASSWORD)
        console.log(req.body)

        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD,
            },
            secure: true,
        })

        const mailData = {
            from: "BOSTONUNIVERSITYBLOCKCHAIN@GMAIL.COM",
            to: process.env.TO_EMAIL,
            subject: `bubmsg | ${subject}`,
            text: message + ' | from: ' + name + " | " + email,
            html: 
                ` 
                    <div>${message}</div>
                    <br>
                    <div>From: ${name} | ${email}</div>
                `,
        }

        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                console.log(err)
                res.status(500).send('Something went wrong.')
            }
            else {
                console.log(info)
                res.status(200).send('Thank you for your message. We will get back to you soon.')
            }
        })
    }

}
