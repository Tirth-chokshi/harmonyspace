// src/pages/api/communities/index.js
import DB from '@/lib/dbConnect';
import { CommunityModel } from '@/lib/models.js';

export default async function handler(req, res) {
    await DB();

    if (req.method === 'GET') {
        try {
            const communities = await CommunityModel.find({});
            if (communities.length === 0) {
                return res.status(404).json({ success: false, message: 'No communities found' });
            }
            return res.status(200).json({ success: true, communities });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Error fetching communities' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, description } = req.body;
            if (!name) {
                return res.status(400).json({ success: false, message: "Name is required" });
            }

            const newCommunity = new CommunityModel({
                name,
                description,
                // creator: 'defaultCreatorId', // Optionally set a default creator ID if needed
                // members: ['defaultCreatorId'] // Optionally set default members if needed
            });

            await newCommunity.save();

            return res.status(201).json({ success: true, message: "Community created successfully", community: newCommunity });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
