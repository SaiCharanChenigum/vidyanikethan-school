import { BookOpen, Atom, GraduationCap, MonitorPlay, Palette, ShieldCheck, Target, Eye } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vidyanikethan High School",
  description: "Learn about the history, vision, and mission of Sai Teja's Vidyanikethan High School.",
};

export default function AboutPage() {
  const reasons = [
    { title: "CBSE Curriculum", icon: BookOpen },
    { title: "IIT & NEET Foundation", icon: Atom },
    { title: "Certified Teachers", icon: GraduationCap },
    { title: "Digital Classrooms", icon: MonitorPlay },
    { title: "Activity Based Learning", icon: Palette },
    { title: "Safe Environment", icon: ShieldCheck },
  ];

  return (
    <div className="bg-surface-cloud min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-slate py-20 px-4 text-center border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white tracking-tight mb-4">About Us</h1>
          <div className="h-[3px] w-8 bg-brand-indigo mx-auto mb-6 rounded-full"></div>
          <p className="text-brand-indigo font-bold uppercase tracking-widest text-sm">Discover Our Heritage &amp; Values</p>
        </div>
      </section>

      {/* School Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">Our Journey</div>
            <h2 className="text-3xl md:text-4xl font-bold text-sys-primary mb-5 tracking-tight">A Legacy of Excellence</h2>
            <div className="h-[3px] w-8 bg-brand-indigo mb-8 rounded-full"></div>
            <p className="text-sys-body text-lg leading-relaxed font-medium mb-6">
              Established with a vision to provide quality education in a nurturing environment, Sai Teja&apos;s Vidyanikethan High School has consistently set benchmarks in academic and holistic development.
            </p>
            <p className="text-sys-body text-lg leading-relaxed font-medium">
              Over the years, we have grown into a premier institution that not only emphasizes rigorous CBSE curriculum but also focuses on instilling strong moral values, discipline, and a sense of responsibility.
            </p>
          </div>
          <div className="aspect-video bg-surface-white rounded-xl border border-surface-border p-2 shadow-sm">
            <img 
              src="/images/Full_campus.jpg" 
              alt="Vidyanikethan Campus" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-white border-y border-surface-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand-slate text-surface-white p-12 rounded-xl relative flex flex-col justify-center items-start shadow-xl border border-white/10 group hover:-translate-y-1 transition-transform duration-300">
              <Eye className="w-10 h-10 text-brand-indigo mb-8" />
              <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-brand-indigo">Our Vision</h3>
              <p className="leading-relaxed text-surface-cloud/90 font-medium text-lg">
                To be a center of excellence that nurtures intellectual curiosity, fosters creativity, and empowers students to become compassionate, responsible global citizens.
              </p>
            </div>
            <div className="bg-brand-indigo text-surface-white p-12 rounded-xl relative flex flex-col justify-center items-start shadow-xl border border-white/20 group hover:-translate-y-1 transition-transform duration-300">
              <Target className="w-10 h-10 text-brand-amber mb-8" />
              <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-brand-amber">Our Mission</h3>
              <p className="leading-relaxed text-surface-white/90 font-medium text-lg">
                To provide a dynamic and inclusive learning environment that blends the rigorous CBSE curriculum with modern teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">The Vidyanikethan Edge</div>
          <h2 className="text-3xl md:text-4xl font-bold text-sys-primary mb-5 tracking-tight">Why Choose Us</h2>
          <div className="h-[3px] w-8 bg-brand-indigo mx-auto rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-surface-white rounded-xl border border-surface-border p-8 flex items-center gap-6 shadow-sm hover:border-brand-indigo hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-surface-cloud rounded-xl border border-surface-border flex items-center justify-center text-sys-primary group-hover:bg-brand-indigo group-hover:border-brand-indigo group-hover:text-white transition-colors duration-300">
                <reason.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sys-primary uppercase tracking-wider text-sm">{reason.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
