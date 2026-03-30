import { Metadata } from "next";
import { Award, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Results | Vidyanikethan High School",
  description: "View the outstanding academic achievements and SSC board results of our students.",
};

export default function ResultsPage() {
  const topScorers = [
    { name: "A. Keerthana", score: "557/600", rank: "1st" },
    { name: "Dokka Pallavi", score: "548/600", rank: "2nd" },
    { name: "Rajan Kumar Sharma", score: "546/600", rank: "3rd" },
  ];

  return (
    <div className="bg-offwhite min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-navy-midnight py-20 px-4 text-center border-y border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4">Our Results</h1>
        <div className="h-[3px] w-8 bg-gold-crest mx-auto mb-6"></div>
        <p className="text-gold-crest font-semibold uppercase tracking-widest text-sm">Academic Excellence</p>
      </section>

      {/* Big Stat — Emerald */}
      <section className="bg-emerald py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 border border-white/15">
            <Award className="w-8 h-8 text-emerald-tint" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-emerald-tint mb-6 tracking-tighter">
            100% Results
          </h2>
          <p className="text-emerald-tint uppercase tracking-widest font-bold text-xl md:text-2xl mb-8">
            SSC Board Exams 2025
          </p>
          <div className="inline-block bg-white/10 border border-white/15 px-8 py-4 rounded-lg">
            <span className="text-2xl text-white font-bold block sm:inline">49 out of 49 </span>
            <span className="text-xl text-white/70 font-medium">Students Passed</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
        
        {/* Top 3 Scorers */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block text-[11px] font-bold tracking-widest text-slate uppercase mb-4">Hall of Fame</div>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-midnight mb-5 tracking-tight">Top Performers</h3>
            <div className="h-[3px] w-8 bg-gold-crest mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {topScorers.map((scorer, i) => (
              <div key={i} className="bg-white border border-border border-l-[3px] border-l-emerald p-8 text-center relative group hover:-translate-y-0.5 transition-transform duration-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy-midnight text-gold-crest text-xs font-bold tracking-widest uppercase px-4 py-1.5 border border-border">
                  {scorer.rank}
                </div>
                <div className="w-16 h-16 mx-auto bg-emerald-tint border border-border rounded-full flex items-center justify-center mb-6 text-emerald group-hover:bg-emerald group-hover:text-white group-hover:border-emerald transition-colors duration-300">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-navy-midnight mb-2">{scorer.name}</h4>
                <p className="text-2xl font-bold text-emerald font-serif">{scorer.score}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown Row */}
        <div className="bg-white border border-border p-12 max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-navy-midnight mb-4 tracking-tight">Score Breakdown</h3>
            <div className="h-[2px] w-12 bg-gold-crest mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="text-center pt-8 sm:pt-0">
              <span className="block text-4xl font-bold text-navy-midnight font-serif mb-2">21</span>
              <span className="text-slate font-bold uppercase tracking-widest text-[10px] md:text-xs">Students Secured 500+</span>
            </div>
            <div className="text-center pt-8 sm:pt-0">
              <span className="block text-4xl font-bold text-navy-midnight font-serif mb-2">22</span>
              <span className="text-slate font-bold uppercase tracking-widest text-[10px] md:text-xs">Students Secured 400+</span>
            </div>
            <div className="text-center pt-8 sm:pt-0">
              <span className="block text-4xl font-bold text-navy-midnight font-serif mb-2">06</span>
              <span className="text-slate font-bold uppercase tracking-widest text-[10px] md:text-xs">Students Secured 350+</span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-12">
          <p className="text-2xl md:text-3xl font-bold text-navy-midnight italic font-serif leading-relaxed">
            &ldquo;విద్యానికేతన్ — Our students, our pride.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
