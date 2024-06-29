import { Login } from '@/lib/action.js';
import DB from '@/lib/utils.js';

export default async function handler(req, res) {
  await DB(); // Ensure DB connection is established
  if (req.method === 'POST') {
    await Login(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
