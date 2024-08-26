// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const query = url.searchParams.get('query');

  if (query) {
    const res = await fetch(`https://api.weatherstack.com/current?access_key=62c51f6ae7537064b303b979a370b0bd&query=${query}`);
    const data = await res.json();
    console.log(data);

    return NextResponse.json(data);;
  }

  return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
}
