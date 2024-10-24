// app/api/proxyApi/route.ts
import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

export async function GET() {

  try {
    // Fetch data from external API, passing in the API key server-side
    const response = await fetch(`${process.env.NEXT_PUBLIC_UNMARSHAL_API_URL_V1}/partisiablockchain/00/latest-transactions?auth_key=${process.env.UNMARSHAL_API_KEY}`);

    if (!response.ok) {
      return NextResponse.json({ error: response.statusText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
