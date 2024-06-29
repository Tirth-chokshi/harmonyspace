
import { CreateCommunity, GetCommunities } from '@/lib/action.js';
import DB from '@/lib/dbConnect';

export async function POST(req) {
    await DB();
    return CreateCommunity(req);
}

export async function GET() {
    await DB();
    return GetCommunities();
}

// src/app/api/communities/join/route.js

export async function POST(req) {
    await DB();
    return JoinCommunity(req);
}