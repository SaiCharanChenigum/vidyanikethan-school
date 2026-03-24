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
  phone: z.string().min(10, "Valid phone number is required"),
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

      if (!res.ok) throw new Error("Database submission failed");

      if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          { student_name: data.studentName, parent_name: data.parentName, phone: data.phone, email: data.email || "Not provided", grade: data.grade, message: data.message || "No message", to_email: "scvidyanikethan@gmail.com" },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      }

      toast({ title: "Enquiry Submitted Successfully!", description: "We have received your details and will contact you soon." });
      reset();
    } catch (error) {
      toast({ title: "Submission Failed", description: "There was an error saving your enquiry. Please try again.", variant: "destructive" });
    }
  };

  return (
    <section className="relative overflow-hidden text-cream min-h-[90vh] flex items-center pt-8 pb-20 lg:pt-0 lg:pb-32 bg-charcoal">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-semibold tracking-widest text-soft-gold uppercase mb-6"
            >
              Admissions Open for 2024-25
              <div className="h-[2px] w-8 bg-gold mt-2"></div>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-[1.1] font-bold tracking-tight">
              <SplitText text="Sai Teja's Vidyanikethan" />
              <span className="text-gold block mt-2">
                <SplitText text="High School" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-stone mb-8 italic border-l-2 border-gold pl-4 py-1 font-serif"
            >
              "A Glow of Delight on Your Child's Face"
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="text-base text-cream/70 mb-10 max-w-lg leading-relaxed font-normal"
            >
              Empowering students with comprehensive education, ethical values, and integrated development for a brighter tomorrow. Join an institution built on trust and academic excellence.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/admissions" 
                className="inline-flex justify-center items-center rounded-none bg-gold px-8 py-3.5 text-sm uppercase tracking-widest font-semibold text-charcoal transition-all hover:bg-opacity-90 group"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex justify-center items-center rounded-none border border-warm-border/30 bg-transparent px-8 py-3.5 text-sm uppercase tracking-widest font-semibold text-cream hover:border-gold hover:text-gold transition-all"
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
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-none border border-white/10 overflow-hidden relative shadow-2xl">
              
              <div className="border-b border-white/10 px-6 py-6 bg-black/20 text-center">
                <h3 className="text-xl font-bold tracking-tight text-cream uppercase">Admission Enquiry</h3>
                <div className="h-[2px] w-12 bg-gold mx-auto mt-4 mb-2"></div>
                <p className="text-stone text-xs tracking-wider uppercase">Get in touch with our team</p>
              </div>
              
              <div className="relative p-6 pt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="studentName" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-2">Student Name</label>
                    <input {...register("studentName")} className="block w-full rounded-none border border-white/10 bg-black/20 focus:bg-white/5 px-3 py-3 text-cream placeholder-stone/50 focus:outline-none focus:border-gold transition-all font-medium text-sm" placeholder="Enter student's name" />
                    {errors.studentName && <p className="mt-1 text-xs text-red-400">{errors.studentName.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="parentName" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-2">Parent Name</label>
                    <input {...register("parentName")} className="block w-full rounded-none border border-white/10 bg-black/20 focus:bg-white/5 px-3 py-3 text-cream placeholder-stone/50 focus:outline-none focus:border-gold transition-all font-medium text-sm" placeholder="Enter parent's name" />
                    {errors.parentName && <p className="mt-1 text-xs text-red-400">{errors.parentName.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-2">Phone</label>
                      <input {...register("phone")} className="block w-full rounded-none border border-white/10 bg-black/20 focus:bg-white/5 px-3 py-3 text-cream placeholder-stone/50 focus:outline-none focus:border-gold transition-all font-medium text-sm" placeholder="Mobile number" />
                      {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="grade" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-2">Grade</label>
                      <select {...register("grade")} className="block w-full rounded-none border border-white/10 bg-charcoal focus:bg-charcoal px-3 py-3 text-cream focus:outline-none focus:border-gold transition-all font-medium text-sm">
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
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-2">Email (Optional)</label>
                    <input {...register("email")} type="email" className="block w-full rounded-none border border-white/10 bg-black/20 focus:bg-white/5 px-3 py-3 text-cream placeholder-stone/50 focus:outline-none focus:border-gold transition-all font-medium text-sm" placeholder="Email address" />
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full rounded-none bg-gold px-4 py-3.5 text-sm uppercase tracking-widest font-bold text-charcoal hover:bg-opacity-90 focus:outline-none disabled:opacity-70 transition-all mt-4">
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
