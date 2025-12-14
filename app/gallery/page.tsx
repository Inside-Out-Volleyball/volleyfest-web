"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";

export default function GalleryIndexPage() {
  const [years, setYears] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setYears(data.years || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load gallery years:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <PageHeader
        title="Photo Gallery"
        subtitle="Browse photos from past tournaments"
      />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center text-gray-500">Loading galleries...</div>
        ) : years.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No galleries available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {years.map((year) => (
              <Link
                key={year}
                href={`/gallery/${year}`}
                className="block bg-white border-2 border-blue-200 rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {year}
                </div>
                <div className="text-gray-600 group-hover:text-blue-700 transition-colors">
                  View Photos →
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
