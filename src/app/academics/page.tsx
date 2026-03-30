import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Vidyanikethan High School",
  description: "Explore our comprehensive CBSE curriculum and foundation programs.",
};

export default function AcademicsPage() {
  const levels = [
    {
      id: "01",
      title: "Pre-Primary",
      grades: "Nursery, LKG, UKG",
      desc: "A warm, stimulating environment focusing on foundational literacy, numeracy, and social skills through play-way methods.",
    },
    {
      id: "02",
      title: "Primary",
      grades: "Grade 1 to 5",
      desc: "Laying a strong academic base with an interactive CBSE curriculum that encourages curiosity and creative thinking.",
    },
    {
      id: "03",
      title: "Middle School",
      grades: "Grade 6 to 7",
      desc: "Transitioning to focused subject-based learning while emphasizing conceptual clarity and practical application.",
    },
    {
      id: "04",
      title: "Secondary",
      grades: "Grade 8 to 10",
      desc: "Rigorous preparation for board exams alongside competitive foundation courses, shaping analytical and critical thinking.",
    },
  ];

  return (
    <div className="bg-pearl min-h-screen pt-20 flex flex-col">
      {/* Hero Banner */}
      <section className="bg-navy-deep py-20 px-4 text-center border-y border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4">Academics</h1>
        <div className="h-[3px] w-12 bg-gold-crest mx-auto mb-6"></div>
        <p className="text-gold-crest font-semibold uppercase tracking-widest text-sm">Curriculum &amp; Programs</p>
      </section>

      {/* Intro */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-deep mb-6 tracking-tight">
          Comprehensive CBSE Framework
        </h2>
        <p className="text-slate text-lg leading-relaxed font-medium">
          Our academic structure is strictly aligned with the Central Board of Secondary Education (CBSE) guidelines. We utilize a blend of traditional teaching methodologies and modern digital pedagogy to create an engaging learning atmosphere. From foundational early years to the crucial board exam preparations, our curriculum is engineered to foster intelligence, resilience, and adaptability.
        </p>
      </section>

      {/* School Levels Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto bg-white border-t border-border flex-1">
        <div className="text-center mb-16">
          <div className="inline-block text-[11px] font-bold tracking-widest text-slate uppercase mb-4">
            Educational Stages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-5 tracking-tight">
            Our School Levels
          </h2>
          <div className="h-[3px] w-12 bg-gold-crest mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto pb-24">
          {levels.map((level) => (
            <div key={level.id} className="bg-white border border-border flex flex-col group hover:-translate-y-1 hover:border-gold-crest hover:shadow-xl hover:shadow-navy-deep/5 transition-all duration-300">
              <div className="aspect-[4/3] bg-pearl border-b border-border p-4 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply"></div>
                <span className="text-slate text-xs font-bold tracking-widest uppercase z-10">Image</span>
              </div>
              <div className="p-8 relative flex-1 flex flex-col">
                <div className="text-2xl font-bold text-gold-crest/40 mb-4 font-serif tracking-widest">
                  {level.id}.
                </div>
                <h3 className="text-xl font-bold text-navy-deep mb-1 tracking-tight">{level.title}</h3>
                <p className="text-gold-crest text-xs font-bold uppercase tracking-widest mb-4">{level.grades}</p>
                <p className="text-slate text-sm leading-relaxed font-medium mt-auto">
                  {level.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IIT & NEET Foundation Banner */}
      <section className="w-full bg-gold-crest py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-4 tracking-tight uppercase">
            Specialized IIT &amp; NEET Foundation
          </h2>
          <div className="h-[2px] w-16 bg-navy-deep/20 mx-auto mb-6"></div>
          <p className="text-navy-deep font-bold text-lg md:text-xl">
            Exclusive integrated foundation program for Grades VI to IX, designed to build strong analytical skills and prepare students early for elite competitive examinations.
          </p>
        </div>
      </section>
    </div>
  );
}
