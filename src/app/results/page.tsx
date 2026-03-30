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
    <div className="bg-surface-cloud min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-brand-slate py-20 px-4 text-center border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-white tracking-tight mb-4">Our Results</h1>
          <div className="h-[3px] w-8 bg-brand-indigo mx-auto mb-6 rounded-full"></div>
          <p className="text-brand-indigo font-bold uppercase tracking-widest text-sm">Academic Excellence</p>
        </div>
      </section>

      {/* Big Stat — Minimalist Emerald Accent */}
      <section className="bg-surface-white py-24 px-4 text-center border-b border-surface-border">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center justify-center p-4 bg-brand-emerald/10 rounded-2xl mb-8 border border-brand-emerald/20 shadow-sm">
            <Award className="w-10 h-10 text-brand-emerald" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-sys-primary mb-6 tracking-tighter">
            <span className="text-brand-emerald">100%</span> Results
          </h2>
          <p className="text-sys-muted uppercase tracking-widest font-bold text-xl md:text-2xl mb-10">
            SSC Board Exams 2025
          </p>
          <div className="inline-block bg-surface-cloud border border-surface-border px-10 py-5 rounded-2xl shadow-sm">
            <span className="text-3xl text-sys-primary font-bold block sm:inline">49 out of 49 </span>
            <span className="text-xl text-sys-muted font-medium ml-2">Students Passed</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
        
        {/* Top 3 Scorers */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">Hall of Fame</div>
            <h3 className="text-3xl md:text-4xl font-bold text-sys-primary mb-5 tracking-tight">Top Performers</h3>
            <div className="h-[3px] w-8 bg-brand-indigo mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {topScorers.map((scorer, i) => (
              <div key={i} className="bg-surface-white border border-surface-border rounded-xl p-10 text-center relative shadow-sm group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-indigo text-surface-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-white/20 shadow-sm">
                  {scorer.rank}
                </div>
                <div className="w-16 h-16 mx-auto bg-surface-cloud border border-surface-border rounded-full flex items-center justify-center mb-6 text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white group-hover:border-brand-indigo transition-colors duration-300">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-sys-primary mb-2">{scorer.name}</h4>
                <p className="text-3xl font-bold text-brand-emerald font-serif">{scorer.score}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown Row */}
        <div className="bg-brand-slate rounded-2xl border border-white/10 p-12 max-w-5xl mx-auto mb-20 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-indigo/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-2xl font-bold text-surface-white mb-4 tracking-tight">Score Breakdown</h3>
            <div className="h-[2px] w-12 bg-brand-amber mx-auto rounded-full"></div>
          </div>
          
          <div className="relative z-10 grid sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="text-center pt-8 sm:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">21</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Students Secured 500+</span>
            </div>
            <div className="text-center pt-8 sm:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">22</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Students Secured 400+</span>
            </div>
            <div className="text-center pt-8 sm:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">06</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Students Secured 350+</span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-12">
          <p className="text-2xl md:text-3xl font-bold text-sys-primary/80 italic font-serif leading-relaxed">
            &ldquo;We transform potential into <span className="text-brand-indigo">excellence</span>.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
