import type { NextApiRequest, NextApiResponse } from 'next'
import { sql } from "@vercel/postgres";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json({ error: 'Email is required' });
            }

            // Insert the email into the interest table
            await sql`
        INSERT INTO interest (email)
        VALUES (${email})
        ON CONFLICT (email) DO NOTHING;
        `;

            return res.status(200).json({ message: 'Email added successfully' });
        } catch (error) {
            console.error('Error updating interest table:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}