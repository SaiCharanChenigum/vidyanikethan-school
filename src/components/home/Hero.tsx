"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { SplitText } from "@/components/ui/SplitText";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  parentName: z.string().min(2, "Parent name is required"),
  phone: z.string().regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit Indian mobile number (starting with 6/7/8/9)"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  grade: z.string().min(1, "Please select a grade"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Hero() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast({ title: "Enquiry Submitted Successfully!", description: "We have received your details and will contact you soon." });
      reset();
    } catch (_err) {
      toast({ title: "Submission Failed", description: "There was an error saving your enquiry. Please try again.", variant: "destructive" });
    }
  };

  return (
    <section className="relative overflow-hidden text-surface-white min-h-[90vh] flex items-center pt-8 pb-20 lg:pt-0 lg:pb-32 bg-brand-slate">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none"></div>
      
      {/* Background Animation Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] rounded-full bg-brand-indigo/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-amber/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] left-[25%] w-[35%] h-[35%] rounded-full bg-brand-indigo/5 blur-[100px]"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6 bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20 shadow-sm"
            >
              Admissions Open for 2025-26
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-[1.1] font-bold tracking-tight text-surface-white uppercase">
              <SplitText text="Sai Teja's Vidyanikethan" />
              <span className="text-brand-indigo block mt-2">
                <SplitText text="High School" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-surface-cloud/80 mb-8 italic border-l-2 border-brand-indigo pl-4 py-1 font-serif"
            >
              &ldquo;A Glow of Delight on Your Child&apos;s Face&rdquo;
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="text-base text-surface-cloud/70 mb-10 max-w-lg leading-relaxed font-medium"
            >
              Empowering students with comprehensive education, ethical values, and integrated development for a brighter tomorrow.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/admissions" 
                className="inline-flex justify-center items-center rounded-lg bg-brand-amber px-8 py-3.5 text-sm uppercase tracking-widest font-bold text-white transition-all hover:bg-[#D97706] shadow-sm group"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex justify-center items-center rounded-lg border border-surface-white/20 bg-transparent px-8 py-3.5 text-sm uppercase tracking-widest font-semibold text-surface-white hover:bg-surface-white/5 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden relative shadow-2xl">
              
              <div className="border-b border-white/10 px-6 py-6 bg-black/20 text-center">
                <h3 className="text-xl font-bold tracking-tight text-surface-white uppercase">Admission Enquiry</h3>
                <div className="h-[2px] w-12 bg-brand-indigo mx-auto mt-4 mb-2"></div>
                <p className="text-surface-cloud/60 text-xs tracking-wider uppercase font-semibold">Get in touch with our team</p>
              </div>
              
              <div className="relative p-6 pt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="studentName" className="block text-xs uppercase tracking-widest font-bold text-surface-cloud/60 mb-2">Student Name</label>
                    <input {...register("studentName")} className="block w-full rounded-md border border-white/10 bg-white/5 focus:bg-white/10 px-3 py-3 text-surface-white placeholder-white/30 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all font-medium text-sm" placeholder="Enter student's name" />
                    {errors.studentName && <p className="mt-1 text-xs text-red-400">{errors.studentName.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="parentName" className="block text-xs uppercase tracking-widest font-bold text-surface-cloud/60 mb-2">Parent Name</label>
                    <input {...register("parentName")} className="block w-full rounded-md border border-white/10 bg-white/5 focus:bg-white/10 px-3 py-3 text-surface-white placeholder-white/30 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all font-medium text-sm" placeholder="Enter parent's name" />
                    {errors.parentName && <p className="mt-1 text-xs text-red-400">{errors.parentName.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-bold text-surface-cloud/60 mb-2">Phone</label>
                      <input {...register("phone")} maxLength={10} inputMode="numeric" className="block w-full rounded-md border border-white/10 bg-white/5 focus:bg-white/10 px-3 py-3 text-surface-white placeholder-white/30 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all font-medium text-sm" placeholder="10-digit mobile number" onChange={(e) => { const digits = e.target.value.replace(/\D/g, '').slice(0, 10); e.target.value = digits; return register('phone').onChange(e); }} />
                      {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="grade" className="block text-xs uppercase tracking-widest font-bold text-surface-cloud/60 mb-2">Grade</label>
                      <select {...register("grade")} className="block w-full rounded-md border border-white/10 bg-brand-slate focus:bg-brand-slate px-3 py-3 text-surface-white focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all font-medium text-sm">
                        <option value="">Select</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                      </select>
                      {errors.grade && <p className="mt-1 text-xs text-red-400">{errors.grade.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-surface-cloud/60 mb-2">Email (Optional)</label>
                    <input {...register("email")} type="email" className="block w-full rounded-md border border-white/10 bg-white/5 focus:bg-white/10 px-3 py-3 text-surface-white placeholder-white/30 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all font-medium text-sm" placeholder="Email address" />
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full rounded-lg bg-brand-amber px-4 py-3.5 text-sm uppercase tracking-widest font-bold text-white hover:bg-[#D97706] focus:outline-none disabled:opacity-70 transition-all mt-4 shadow-sm">
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
