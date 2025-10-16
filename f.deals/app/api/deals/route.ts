// app/api/deals/route.ts
import { NextResponse } from 'next/server';
import { MOCK_DEALS } from '@/lib/constants';

// This comment explains the data flow for this API route.
// This route acts as a backend endpoint. Components call this to get flight deal data.
// In a real application, this would fetch data from a database or a third-party API.
export async function GET() {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // The data flows from our mock constants to the client as a JSON response.
    return NextResponse.json(MOCK_DEALS);
  } catch (error) {
    console.error('[DEALS_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}