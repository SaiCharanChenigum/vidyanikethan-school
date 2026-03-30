import { MonitorPlay, Monitor, Trophy, Stethoscope, Cctv, Palette } from "lucide-react";
import React from "react";

const facilities = [
  { title: "Digital Classroom", description: "Smart boards and tech-enabled learning for every grade.", icon: MonitorPlay },
  { title: "Computer Lab", description: "Hands-on computer education from primary school onwards.", icon: Monitor },
  { title: "Indoor & Outdoor Games", description: "Dedicated sports areas for physical development and teamwork.", icon: Trophy },
  { title: "Medical Checkup", description: "Regular health checkups to ensure every child's wellbeing.", icon: Stethoscope },
  { title: "CCTV Coverage", description: "24/7 campus surveillance for a safe and secure environment.", icon: Cctv },
  { title: "Activity Based Learning", description: "Experiential learning beyond textbooks and classrooms.", icon: Palette },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-surface-cloud pb-20">
      <section className="bg-brand-slate py-24 px-6 md:px-12 text-center relative overflow-hidden text-surface-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
          <p className="text-lg md:text-xl text-surface-white/70 max-w-2xl mx-auto">
            Everything your child needs to learn, grow and thrive — under one roof.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div key={idx} className="bg-surface-white rounded-xl shadow-sm border border-surface-border p-8 hover:shadow-lg hover:-translate-y-1 hover:border-brand-indigo transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-surface-cloud border border-surface-border flex items-center justify-center mb-6 group-hover:bg-brand-indigo group-hover:border-brand-indigo group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-indigo group-hover:text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-sys-primary mb-3">{fac.title}</h3>
                <p className="text-sys-body leading-relaxed">{fac.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
