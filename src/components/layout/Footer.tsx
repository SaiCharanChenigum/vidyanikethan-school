import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
    <footer className="bg-brand-slate text-white pt-20 pb-10 relative">
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm bg-white p-1">
                <Image
                  src="/images/logo.png"
                  alt="Vidyanikethan Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg text-white leading-tight">
                  Sai Teja&apos;s Vidyanikethan
                </span>
                <span className="text-[10px] font-bold tracking-widest text-brand-indigo uppercase leading-tight mt-0.5">
                  Nursery to Class X
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium max-w-sm">
              Empowering students with comprehensive education, ethical values, and integrated development for a brighter tomorrow. Join an institution built on trust and academic excellence.
            </p>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-indigo transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="h-[2px] w-2 bg-white/20 group-hover:bg-brand-indigo group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-white/40">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm font-medium">
                <MapPin className="h-5 w-5 text-brand-indigo shrink-0 mt-0.5" />
                <a href="https://www.google.com/maps/place/Vidyaniketan+High+School/@17.5333357,78.2639684,15z/data=!4m6!3m5!1s0x3bcbf2eb10de2f23:0x5e2cd8e39f33e341!8m2!3d17.5333306!4d78.2665433!16s%2Fg%2F124t0lm8m?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-brand-indigo transition-colors flex items-center gap-1 group text-left">
                  J.P. Colony, Road No. 1, Patancheru, Sangareddy Dist - 502319
                  <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm font-medium">
                <Phone className="h-4 w-4 text-brand-indigo shrink-0" />
                <span>+91 98485 91617, 89782 61617</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm font-medium">
                <Mail className="h-4 w-4 text-brand-indigo shrink-0" />
                <a href="mailto:scvidyanikethan@gmail.com" className="hover:text-brand-indigo transition-colors">scvidyanikethan@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-white/40">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/saiteja.vidyanikethanhighschool?rdid=KtbvMYQDl6knJsir&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18XssUyKRZ%2F#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-lg text-white/60 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://www.instagram.com/vidyanikethan_official?igsh=MW91bHc5ZWQwNGdrMw%3D%3D" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-lg text-white/60 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="https://youtube.com/@saitejasvidyanikethanhighs7510?si=jtsqVSd_C8I-34oA" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-lg text-white/60 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="https://wa.me/919848591617" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-lg text-white/60 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300">
                <FaWhatsapp className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Sai Teja&apos;s Vidyanikethan High School. All Rights Reserved.
          </p>
          <div className="text-white/40 text-xs font-medium">
            Designed with excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
