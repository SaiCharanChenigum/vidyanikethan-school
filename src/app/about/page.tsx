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
    <div className="bg-ivory min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-charcoal py-20 px-4 text-center border-y border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4">About Us</h1>
        <div className="h-[3px] w-12 bg-gold mx-auto mb-6"></div>
        <p className="text-gold font-semibold uppercase tracking-widest text-sm">Discover Our Heritage & Values</p>
      </section>

      {/* School Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block text-[11px] font-bold tracking-widest text-stone uppercase mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 tracking-tight">
              A Legacy of Excellence
            </h2>
            <div className="h-[3px] w-12 bg-gold mb-8"></div>
            
            <p className="text-stone text-lg leading-relaxed font-medium mb-6">
              Established with a vision to provide quality education in a nurturing environment, Sai Teja's Vidyanikethan High School has consistently set benchmarks in academic and holistic development. Our journey began with a simple belief: every child possesses unique potential that needs the right guidance to flourish.
            </p>
            <p className="text-stone text-lg leading-relaxed font-medium">
              Over the years, we have grown into a premier institution that not only emphasizes rigorous CBSE curriculum but also focuses heavily on instilling strong moral values, discipline, and a sense of responsibility. We pride ourselves on creating future leaders who are ready to face global challenges with confidence.
            </p>
          </div>
          <div className="aspect-video bg-white border border-warm-border p-2 shadow-sm">
            <div className="w-full h-full bg-ivory border border-dashed border-stone/30 flex items-center justify-center text-stone font-bold tracking-widest uppercase text-sm">
              School Campus Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-warm-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-charcoal text-cream p-12 relative flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-300">
              <Eye className="w-10 h-10 text-gold mb-8" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-gold text-sm">Our Vision</h3>
              <p className="leading-relaxed text-cream/90 font-medium">
                To be a center of excellence that nurtures intellectual curiosity, fosters creativity, and empowers students to become compassionate, responsible global citizens driven by ethical values.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-gold text-charcoal p-12 relative flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-300">
              <Target className="w-10 h-10 text-charcoal mb-8" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-charcoal opacity-80 text-sm">Our Mission</h3>
              <p className="leading-relaxed font-semibold">
                To provide a dynamic and inclusive learning environment that blends the rigorous CBSE curriculum with modern teaching methodologies, focusing equally on academic rigor and holistic student development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-[11px] font-bold tracking-widest text-stone uppercase mb-4">
            The Vidyanikethan Edge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5 tracking-tight">
            Why Choose Us
          </h2>
          <div className="h-[3px] w-12 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white border border-warm-border p-8 flex items-center gap-6 hover:border-gold hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-ivory border border-warm-border flex items-center justify-center text-charcoal group-hover:bg-gold group-hover:border-gold group-hover:text-charcoal transition-colors">
                <reason.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {reason.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
