import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

// Cache for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  try {
    const { blobs } = await list({
      prefix: 'frontpage-slider/',
      token: process.env.vfest_READ_WRITE_TOKEN,
    });

    // Filter out folder entries and sort by pathname
    const sortedUrls = blobs
      .filter((blob) => !blob.pathname.endsWith('/'))
      .map((blob) => blob.url)
      .sort();

    const response = NextResponse.json({ images: sortedUrls });
    
    // Set cache headers: cache for 1 hour, stale-while-revalidate for 1 day
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    
    return response;
  } catch (error) {
    console.error('Failed to fetch slider images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
