
//make a nextjs nodemailer endpoint

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body
        console.log(process.env.EMAIL)
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
            from: "saad7@bu.edu",
            to: "saad7@bu.edu",
            subject: `Message From ${name}`,
            text: message + ' | Sent from: ' + email,
            html: `<div>${message}</div><p>Sent from:
        ${email}</p>`,
        }

        transporter.sendMail(mailData, function (err, info) {
            if (err) console.log(err)
            else console.log(info)
        })
    }

}
