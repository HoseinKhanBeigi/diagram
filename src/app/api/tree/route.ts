import { NextResponse } from 'next/server';

// GET handler
export async function GET() {
  try {
    const response = await fetch('https://pdf-production-00ea.up.railway.app', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tree data from external source' },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you can process the incoming data
    // For example, save it to a database
    
    return NextResponse.json(
      { message: 'Tree data received successfully', data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process tree data' },
      { status: 500 }
    );
  }
} 