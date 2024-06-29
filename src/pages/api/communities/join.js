// pages/api/communities/join.js
import { JoinCommunity } from '@/lib/action.js';
import DB from '@/lib/dbConnect';

export async function POST(req, res) {
    await DB();
    return JoinCommunity(req, res);
}
