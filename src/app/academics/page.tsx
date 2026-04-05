import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Academics | Vidyanikethan High School",
  description: "Explore our comprehensive CBSE curriculum and foundation programs.",
};

export default function AcademicsPage() {
  const levels = [
    { id: "01", title: "Pre-Primary", grades: "Nursery, LKG, UKG", image: "/images/academics/pre-primary.jpg", desc: "A warm, stimulating environment focusing on foundational literacy, numeracy, and social skills through play-way methods." },
    { id: "02", title: "Primary", grades: "Grade 1 to 5", image: "/images/academics/primary.jpg", desc: "Laying a strong academic base with an interactive CBSE curriculum that encourages curiosity and creative thinking." },
    { id: "03", title: "Middle School", grades: "Grade 6 to 7", image: "/images/academics/middle-school.jpg", desc: "Transitioning to focused subject-based learning while emphasizing conceptual clarity and practical application." },
    { id: "04", title: "Secondary", grades: "Grade 8 to 10", image: "/images/academics/secondary.jpg", desc: "Rigorous preparation for board exams alongside competitive foundation courses, shaping analytical and critical thinking." },
  ];

  return (
    <div className="bg-surface-cloud min-h-screen pt-20 flex flex-col">
      <section className="bg-brand-slate py-20 px-4 text-center border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white tracking-tight mb-4">Academics</h1>
          <div className="h-[3px] w-8 bg-brand-indigo mx-auto mb-6 rounded-full"></div>
          <p className="text-brand-indigo font-bold uppercase tracking-widest text-sm">Curriculum &amp; Programs</p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-sys-primary mb-6 tracking-tight">Comprehensive CBSE Framework</h2>
        <p className="text-sys-body text-lg leading-relaxed font-medium">
          Our academic structure is strictly aligned with CBSE guidelines. We utilize a blend of traditional teaching methodologies and modern digital pedagogy to create an engaging learning atmosphere.
        </p>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto bg-surface-white border-t border-surface-border flex-1 rounded-t-[3rem]">
        <div className="text-center mb-16 pt-8">
          <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">Educational Stages</div>
          <h2 className="text-3xl md:text-4xl font-bold text-sys-primary mb-5 tracking-tight">Our School Levels</h2>
          <div className="h-[3px] w-8 bg-brand-indigo mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto pb-24">
          {levels.map((level) => (
            <div key={level.id} className="bg-surface-white border border-surface-border rounded-xl flex flex-col shadow-sm group hover:-translate-y-1 hover:border-brand-indigo hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] bg-surface-cloud border-b border-surface-border relative overflow-hidden">
                <Image
                  src={level.image}
                  alt={level.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 relative flex-1 flex flex-col">
                <div className="text-2xl font-bold text-brand-indigo/30 mb-4 font-serif tracking-widest group-hover:text-brand-indigo/50 transition-colors">{level.id}.</div>
                <h3 className="text-xl font-bold text-sys-primary mb-1 tracking-tight">{level.title}</h3>
                <p className="text-brand-indigo text-xs font-bold uppercase tracking-widest mb-4 mt-1 bg-brand-indigo/10 w-max px-2 py-1 rounded-md">{level.grades}</p>
                <p className="text-sys-body text-sm leading-relaxed font-medium mt-auto">{level.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-brand-indigo py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight uppercase">
            Specialized IIT &amp; NEET Foundation
          </h2>
          <div className="h-[2px] w-16 bg-brand-amber mx-auto mb-8 rounded-full"></div>
          <p className="text-white/90 font-medium text-lg md:text-xl leading-relaxed">
            Exclusive integrated foundation program for Grades VI to IX, designed to build strong analytical skills and prepare students early for elite competitive examinations.
          </p>
        </div>
      </section>
    </div>
  );
}
