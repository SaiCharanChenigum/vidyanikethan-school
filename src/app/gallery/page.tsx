"use client";

import React, { useState } from "react";

const categories = ["All", "Campus", "Events", "Classrooms"] as const;
type Category = typeof categories[number];

const photos = [
  { id: 1, category: "Campus", url: "https://placehold.co/600x400/0F2254/F0EBD8?text=Campus+1" },
  { id: 2, category: "Campus", url: "https://placehold.co/600x400/0F2254/F0EBD8?text=Campus+2" },
  { id: 3, category: "Campus", url: "https://placehold.co/600x400/0F2254/F0EBD8?text=Campus+3" },
  { id: 4, category: "Events", url: "https://placehold.co/600x400/1B3A8C/F0EBD8?text=Events+1" },
  { id: 5, category: "Events", url: "https://placehold.co/600x400/1B3A8C/F0EBD8?text=Events+2" },
  { id: 6, category: "Events", url: "https://placehold.co/600x400/1B3A8C/F0EBD8?text=Events+3" },
  { id: 7, category: "Classrooms", url: "https://placehold.co/600x400/081640/F0EBD8?text=Classroom+1" },
  { id: 8, category: "Classrooms", url: "https://placehold.co/600x400/081640/F0EBD8?text=Classroom+2" },
  { id: 9, category: "Classrooms", url: "https://placehold.co/600x400/081640/F0EBD8?text=Classroom+3" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredPhotos =
    activeTab === "All"
      ? photos
      : photos.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen bg-pearl pb-20">
      {/* Hero Banner */}
      <section className="bg-navy-deep py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cream">Gallery</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === cat
                  ? "bg-gold-crest text-navy-deep"
                  : "bg-pearl text-slate hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border group"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
