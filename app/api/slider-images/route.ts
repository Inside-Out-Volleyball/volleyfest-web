import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

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

    return NextResponse.json({ images: sortedUrls });
  } catch (error) {
    console.error('Failed to fetch slider images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
