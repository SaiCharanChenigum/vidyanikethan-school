import { Metadata } from "next";
import { Award, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Results | Vidyanikethan High School",
  description: "View the outstanding academic achievements and SSC board results of our students.",
};

export default function ResultsPage() {
  const topScorers = [
    { name: "Soniya Thakur", score: "10.0", rank: "1st" },
    { name: "K. Maheswar", score: "9.8", rank: "2nd" },
    { name: "P. Sri Harsha", score: "9.8", rank: "2nd" },
    { name: "V. Hemanth Kumar", score: "9.7", rank: "3rd" },
    { name: "M. Srinithya", score: "9.7", rank: "3rd" },
    { name: "D. Jahnavi", score: "9.5", rank: "4th" },
    { name: "K. Jashwanth", score: "9.5", rank: "4th" },
    { name: "P. Likitha", score: "9.5", rank: "4th" },
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
            SSC Board Exams 2024
          </p>
          <div className="inline-block bg-surface-cloud border border-surface-border px-10 py-5 rounded-2xl shadow-sm">
            <span className="text-3xl text-sys-primary font-bold block sm:inline">56 out of 56 </span>
            <span className="text-xl text-sys-muted font-medium ml-2">Students Passed</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto">

        {/* Top Scorers */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block text-[11px] font-bold tracking-widest text-brand-indigo uppercase mb-4">Hall of Fame</div>
            <h3 className="text-3xl md:text-4xl font-bold text-sys-primary mb-5 tracking-tight">Top Performers</h3>
            <div className="h-[3px] w-8 bg-brand-indigo mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {topScorers.map((scorer, i) => (
              <div key={i} className="bg-surface-white border border-surface-border rounded-xl p-6 text-center relative shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand-indigo/30 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-indigo text-surface-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                  {scorer.rank}
                </div>
                <div className="w-12 h-12 mx-auto bg-surface-cloud border border-surface-border rounded-full flex items-center justify-center mb-4 text-brand-indigo transition-colors duration-300">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-sys-primary mb-1 uppercase tracking-tight">{scorer.name}</h4>
                <p className="text-2xl font-bold text-brand-emerald font-serif">{scorer.score}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown Row */}
        <div className="bg-brand-slate rounded-2xl border border-white/10 p-12 max-w-6xl mx-auto mb-20 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10 text-center mb-12">
            <h3 className="text-2xl font-bold text-surface-white mb-4 tracking-tight">GPA Breakdown</h3>
            <div className="h-[2px] w-12 bg-brand-amber mx-auto rounded-full"></div>
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-6 gap-8 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-white/10">

            <div className="text-center pt-8 lg:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">01</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Secured 10.0</span>
            </div>

            <div className="text-center pt-8 lg:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">02</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Secured 9.8</span>
            </div>

            <div className="text-center pt-8 lg:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">02</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Secured 9.7</span>
            </div>

            <div className="text-center pt-8 lg:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">09</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Secured 9.5</span>
            </div>

            <div className="text-center pt-8 lg:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">11</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Secured 9.0+</span>
            </div>

            <div className="text-center pt-8 lg:pt-0">
              <span className="block text-4xl md:text-5xl font-bold text-surface-white font-serif mb-3">31</span>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-[10px] md:text-xs">Secured 8.0+</span>
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
