// src/pages/api/auth/register.js
import { Register } from '@/app/action';
import dbConnect from '@/app/lib/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect();
    return Register(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}