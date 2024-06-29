// pages/api/forumPosts/create.js
import dbConnect from '@/lib/dbConnect';
import { ForumPost } from '@/lib/models';


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const forumPost = new ForumPost(req.body);
      await forumPost.save();
      res.status(201).json(forumPost);
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
