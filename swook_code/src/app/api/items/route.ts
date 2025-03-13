import { NextResponse } from 'next/server';
import { getDB } from '@/utils/db';

// heres what this does
// calls getDB() to get db connection
// runs sql query to fetch 10 items
// returns json
// if error returns 500 response 


export async function GET() {
  try {
    console.log('API route: Attempting to connect to database');
    const db = getDB();
    console.log('API route: Database connection successful');
    
    console.log('API route: Running query to fetch items');
    const items = db.prepare('SELECT * FROM items LIMIT 10').all();
    console.log('API route: Query results:', items);
    
    return NextResponse.json({ items });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items', details: String(error) },
      { status: 500 }
    );
  }
}