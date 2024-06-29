import { UpdateProfile } from '@/lib/action.js';
import DB from '@/lib/dbConnect';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await DB();
        const response = await UpdateProfile(req);
        res.status(200).json(response);
    } else if (req.method === 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).send(`Method ${req.method} Not Allowed`);
    }
}