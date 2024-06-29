
import { UpdateProfile } from '@/lib/action.js';
import DB from '@/lib/dbConnect';

export async function POST(req) {
    await DB(); 
    return UpdateProfile(req);
}

export async function GET() {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
    });
}