import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Results", href: "/results" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-ink text-cream pt-20 pb-10 relative border-t border-[rgba(212,168,67,0.2)]">
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm">
                <Image
                  src="/images/logo.png"
                  alt="Vidyanikethan Logo"
                  width={44}
                  height={44}
                  className="object-contain"
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
            <p className="text-[rgba(248,246,240,0.3)] text-sm leading-relaxed mb-6 font-medium max-w-sm">
              Empowering students with comprehensive education, ethical values, and integrated development for a brighter tomorrow.
            </p>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-gold-crest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[rgba(248,246,240,0.3)] hover:text-gold-crest transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="h-[1px] w-2 bg-[rgba(248,246,240,0.3)] group-hover:bg-gold-crest group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-gold-crest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[rgba(248,246,240,0.3)] text-sm font-medium">
                <MapPin className="h-5 w-5 text-gold-crest shrink-0 mt-0.5" />
                <span>J.P. Colony, Road No. 1, Patancheru, Sangareddy Dist - 502319</span>
              </li>
              <li className="flex items-center gap-3 text-[rgba(248,246,240,0.3)] text-sm font-medium">
                <Phone className="h-4 w-4 text-gold-crest shrink-0" />
                <span>+91 98485 91617, 89782 61617</span>
              </li>
              <li className="flex items-center gap-3 text-[rgba(248,246,240,0.3)] text-sm font-medium">
                <Mail className="h-4 w-4 text-gold-crest shrink-0" />
                <a href="mailto:scvidyanikethan@gmail.com" className="hover:text-gold-crest transition-colors">scvidyanikethan@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-gold-crest">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-sm text-[rgba(248,246,240,0.3)] hover:bg-gold-crest hover:text-navy-midnight hover:border-gold-crest transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-sm text-[rgba(248,246,240,0.3)] hover:bg-gold-crest hover:text-navy-midnight hover:border-gold-crest transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-sm text-[rgba(248,246,240,0.3)] hover:bg-gold-crest hover:text-navy-midnight hover:border-gold-crest transition-all duration-300">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(212,168,67,0.2)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[rgba(248,246,240,0.2)] text-xs font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Sai Teja&apos;s Vidyanikethan High School. All Rights Reserved.
          </p>
          <div className="text-[rgba(248,246,240,0.2)] text-xs font-medium">
            Designed with excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
