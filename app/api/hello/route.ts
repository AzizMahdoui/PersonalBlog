import { NextResponse, NextRequest } from 'next/server';

type ResponseData = {
    message: string
  }
  export default async function GET(
    req: NextRequest,
  ) {
   const message:string =  JSON.stringify({message:"Hello"})
    return new NextResponse(message,{
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(message, 'utf-8'),
          },
    })
  }