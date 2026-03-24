import { MonitorPlay, Monitor, Trophy, Stethoscope, Cctv, Palette } from "lucide-react";
import React from "react";

const facilities = [
  {
    title: "Digital Classroom",
    description: "Smart boards and tech-enabled learning for every grade.",
    icon: MonitorPlay,
  },
  {
    title: "Computer Lab",
    description: "Hands-on computer education from primary school onwards.",
    icon: Monitor,
  },
  {
    title: "Indoor & Outdoor Games",
    description: "Dedicated sports areas for physical development and teamwork.",
    icon: Trophy,
  },
  {
    title: "Medical Checkup",
    description: "Regular health checkups to ensure every child's wellbeing.",
    icon: Stethoscope,
  },
  {
    title: "CCTV Coverage",
    description: "24/7 campus surveillance for a safe and secure environment.",
    icon: Cctv,
  },
  {
    title: "Activity Based Learning",
    description: "Experiential learning beyond textbooks and classrooms.",
    icon: Palette,
  },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-ivory pb-20">
      {/* Hero Banner */}
      <section className="bg-charcoal py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">Our Facilities</h1>
          <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
            Everything your child needs to learn, grow and thrive — under one roof.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-sm border border-warm-border p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{fac.title}</h3>
                <p className="text-stone leading-relaxed">
                  {fac.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
