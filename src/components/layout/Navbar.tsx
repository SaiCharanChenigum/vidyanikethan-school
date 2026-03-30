"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Results", href: "/results" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full text-cream shadow-sm border-b border-white/5 transition-all duration-300 ${scrolled ? "bg-[rgba(10,22,40,0.92)] backdrop-blur-lg" : "bg-navy-midnight"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-row items-center gap-3 group">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm">
                <Image
                  src="/images/logo.png"
                  alt="Vidyanikethan Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold tracking-tight text-lg text-cream leading-tight">
                  Vidyanikethan
                </span>
                <span className="text-[10px] font-medium tracking-widest text-gold-crest uppercase leading-tight">
                  CBSE &middot; Nursery to Class X
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 lg:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative py-2 text-sm font-medium transition-colors hover:text-gold-crest overflow-hidden group text-[rgba(248,246,240,0.4)] uppercase tracking-wide"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-crest transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-[7px] bg-gold-flame px-6 py-2.5 text-sm font-bold tracking-wide text-white hover:bg-[#E0850A] focus:outline-none transition-all duration-300 uppercase"
            >
              Admissions Open
            </Link>
          </div>
          
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cream hover:text-gold-crest focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy-midnight border-b border-white/5">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-3 text-sm font-medium uppercase tracking-widest text-cream hover:bg-white/5 hover:text-gold-crest transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="mt-6 block w-full text-center rounded-[7px] bg-gold-flame px-5 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#E0850A] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admissions Open
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
