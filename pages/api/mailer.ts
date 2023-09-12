
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
                pass: process.env.PASSWORD,
            },
            secure: true,
        })

        const mailData = {
            from: "BOSTONUNIVERSITYBLOCKCHAIN@GMAIL.COM",
            to: process.env.TO_EMAIL,
            subject: `bubmsg | ${subject}`,
            text: message + ' | Sent from: ' + email,
            html: 
                ` 
                    <div>${message}</div>
                    <br>
                    <div>Sent from:${email}</div>
                `,
        }

        transporter.sendMail(mailData, function (err, info) {
            if (err) console.log(err)
            else console.log(info)
        })
    }

}
