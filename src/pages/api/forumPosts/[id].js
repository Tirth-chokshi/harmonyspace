import dbConnect from '@/lib/dbConnect';
import ForumPost from '@/pages/api/forumPosts/create.js';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const forumPost = await ForumPost.findById(id).populate('author community comments.author');
        if (!forumPost) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: forumPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const forumPost = await ForumPost.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!forumPost) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: forumPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedForumPost = await ForumPost.deleteOne({ _id: id });
        if (!deletedForumPost) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
