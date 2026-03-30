"use client";

import React, { useState } from "react";

const categories = ["All", "Campus", "Events", "Classrooms"] as const;
type Category = typeof categories[number];

const photos = [
  { id: 1, category: "Campus", url: "https://placehold.co/600x400/0F172A/FFFFFF?text=Campus+1" },
  { id: 2, category: "Campus", url: "https://placehold.co/600x400/0F172A/FFFFFF?text=Campus+2" },
  { id: 3, category: "Campus", url: "https://placehold.co/600x400/0F172A/FFFFFF?text=Campus+3" },
  { id: 4, category: "Events", url: "https://placehold.co/600x400/2563EB/FFFFFF?text=Events+1" },
  { id: 5, category: "Events", url: "https://placehold.co/600x400/2563EB/FFFFFF?text=Events+2" },
  { id: 6, category: "Events", url: "https://placehold.co/600x400/2563EB/FFFFFF?text=Events+3" },
  { id: 7, category: "Classrooms", url: "https://placehold.co/600x400/475569/FFFFFF?text=Classroom+1" },
  { id: 8, category: "Classrooms", url: "https://placehold.co/600x400/475569/FFFFFF?text=Classroom+2" },
  { id: 9, category: "Classrooms", url: "https://placehold.co/600x400/475569/FFFFFF?text=Classroom+3" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const filteredPhotos = activeTab === "All" ? photos : photos.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen bg-surface-cloud pb-20">
      <section className="bg-brand-slate py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white">Gallery</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-sm ${
                activeTab === cat
                  ? "bg-brand-indigo text-white shadow-md border border-brand-indigo"
                  : "bg-surface-white text-sys-muted border border-surface-border hover:border-brand-indigo/30 hover:text-brand-indigo"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="bg-surface-white rounded-xl overflow-hidden shadow-sm border border-surface-border group">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={photo.url} alt={photo.category} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
