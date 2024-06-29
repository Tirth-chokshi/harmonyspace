// src/pages/api/communities/user.js
import DB from '@/lib/dbConnect';
import {CommunityModel, UserModel} from '@/lib/models.js'

export default async function handler(req, res) {
    await DB();

    if (req.method === 'GET') {
        const email = req.headers.email; // Assuming the email is passed in the headers
        if (!email) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            const communities = await CommunityModel.find({ creatorId: user._id });
            if (communities.length === 0) {
                return res.status(404).json({ success: false, message: "No communities found" });
            }

            return res.status(200).json({ success: true, communities });
        } catch (error) {
            return res.status(500).json({ success: false, message: "Error fetching communities" });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
