"use client";

import React, { useState } from "react";
import { photos } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  
  // Extract unique categories dynamically, always keep 'All' first
  const categories = ["All", ...Array.from(new Set(photos.map(p => p.category)))];
  
  const filteredPhotos = activeTab === "All" ? photos : photos.filter((p) => p.category === activeTab);
  
  // Pagination Logic
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPhotos = filteredPhotos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleTabChange = (cat: string) => {
    setActiveTab(cat);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-surface-cloud pb-20">
      <section className="bg-brand-slate py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white">Gallery</h1>
          <p className="text-surface-white/70 mt-4 max-w-2xl mx-auto text-lg">
            A visual journey through the events, celebrations, and campus life at Vidyanikethan High School.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
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

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentPhotos.map((photo) => (
            <div key={photo.id} className="bg-surface-white rounded-xl overflow-hidden shadow-sm border border-surface-border group relative">
              <div className="aspect-[4/3] overflow-hidden bg-brand-slate/5">
                <img 
                  src={photo.url} 
                  alt={`Gallery Image ${photo.id}`} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Overlay with Category Tag */}
              <div className="absolute top-4 right-4 bg-brand-slate/80 backdrop-blur-sm text-surface-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-sys-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-indigo hover:text-white hover:border-brand-indigo transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-sys-primary font-bold text-sm tracking-widest">
              PAGE {currentPage} OF {totalPages}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-sys-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-indigo hover:text-white hover:border-brand-indigo transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
