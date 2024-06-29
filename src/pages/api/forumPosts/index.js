// pages/api/forumPosts/index.js
import dbConnect from '@/lib/dbConnect';
import ForumPost from '@/pages/api/forumPosts/create.js';


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const forumPosts = await ForumPost.find().populate('author community comments.author');
      res.status(200).json(forumPosts);
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
