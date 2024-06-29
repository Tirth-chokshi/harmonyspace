// src/pages/api/profile/index.js
import { authenticate } from '@/middleware/auth';
import dbConnect from '@/app/lib/dbConnect';
import User from '@/app/model/User';

async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const user = await User.findById(req.userId).select('-password');
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching profile' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { interests, goals, commStyle } = req.body;
      const user = await User.findByIdAndUpdate(
        req.userId,
        { interests, goals, commStyle, profileComplete: true },
        { new: true }
      ).select('-password');
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating profile' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export default authenticate(handler);