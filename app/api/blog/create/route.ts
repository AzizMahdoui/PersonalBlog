import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const result = await sql`SELECT * FROM blogs ORDER BY created_at DESC`;
        return NextResponse.json({ blogs: result.rows });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { title, slug, description, content } = await request.json();
        const result = await sql`
            INSERT INTO blogs (title, slug, description, content)
            VALUES (${title}, ${slug}, ${description}, ${content})
            RETURNING *
        `;
        return NextResponse.json({ blog: result.rows[0] }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}