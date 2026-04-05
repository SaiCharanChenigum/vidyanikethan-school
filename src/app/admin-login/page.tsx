"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-slate flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-brand-indigo/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-amber/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
          </div>
          <h1 className="text-white font-bold text-xl tracking-tight">Vidyanikethan</h1>
          <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Admin Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-brand-indigo/20 flex items-center justify-center">
              <Lock className="h-5 w-5 text-brand-indigo" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Secure Access</h2>
              <p className="text-white/40 text-xs">Administrator authentication required</p>
            </div>
          </div>

          {error && (
            <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm font-medium">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-white/40 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 focus:bg-white/10 px-4 py-3 pr-12 text-white placeholder-white/20 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full mt-2 rounded-lg bg-brand-indigo px-4 py-3.5 text-sm uppercase tracking-widest font-bold text-white hover:bg-indigo-600 focus:outline-none disabled:opacity-50 transition-all shadow-sm"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          This is a restricted area. Unauthorized access is prohibited.
        </p>
      </div>
    </main>
  );
}
