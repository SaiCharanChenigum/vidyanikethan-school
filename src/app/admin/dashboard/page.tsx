"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users, Phone, Mail, GraduationCap, Calendar, LogOut,
  RefreshCw, ChevronDown, ChevronUp, MessageSquare
} from "lucide-react";

type Enquiry = {
  id: number;
  studentName: string;
  parentName: string;
  phone: string;
  email: string | null;
  grade: string;
  message: string | null;
  createdAt: string;
};

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedEnquiry, setExpandedEnquiry] = useState<number | null>(null);
  const [expandedContact, setExpandedContact] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const [eRes, cRes] = await Promise.all([
        fetch("/api/admin/enquiries"),
        fetch("/api/admin/contacts"),
      ]);

      if (eRes.status === 401 || cRes.status === 401) {
        router.push("/admin-login");
        return;
      }

      const [eData, cData] = await Promise.all([eRes.json(), cRes.json()]);
      if (eData.success) setEnquiries(eData.data);
      if (cData.success) setContacts(cData.data);
    } catch {
      setError("Failed to load data. Please refresh.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin-login");
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

  return (
    <main className="min-h-screen bg-surface-cloud">
      {/* Header */}
      <header className="bg-brand-slate border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-brand-indigo/20 flex items-center justify-center">
              <Users className="h-4 w-4 text-brand-indigo" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">Admin Dashboard</span>
              <span className="text-white/30 text-xs ml-2">Vidyanikethan</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchAll} className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
              <RefreshCw className="h-3.5 w-3.5" /> Refresh
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 text-xs font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-red-400/10">
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Enquiries", value: enquiries.length, icon: Users, color: "text-brand-indigo" },
            { label: "Contact Messages", value: contacts.length, icon: MessageSquare, color: "text-purple-400" },
            { label: "This Month (Enq.)", value: enquiries.filter(e => new Date(e.createdAt).getMonth() === new Date().getMonth()).length, icon: Calendar, color: "text-brand-amber" },
            { label: "With Email (Enq.)", value: enquiries.filter(e => e.email).length, icon: Mail, color: "text-emerald-500" },
          ].map((stat, i) => (
            <div key={i} className="bg-surface-white rounded-xl border border-surface-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-sys-muted uppercase tracking-widest font-bold">{stat.label}</p>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-sys-primary">{loading ? "—" : stat.value}</p>
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl text-sm font-medium">{error}</div>
        )}

        {/* ─── Admission Enquiries Table ─── */}
        <div className="bg-surface-white rounded-xl border border-surface-border shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-surface-border flex items-center justify-between">
            <div>
              <h2 className="font-bold text-sys-primary text-lg">Admission Enquiries</h2>
              <p className="text-sys-muted text-xs mt-0.5">All admission form submissions, latest first</p>
            </div>
            <span className="text-xs bg-brand-indigo/10 text-brand-indigo font-bold px-3 py-1 rounded-full">{enquiries.length} Total</span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-40 text-sys-muted text-sm">Loading...</div>
          ) : enquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-2 text-sys-muted">
              <Users className="h-8 w-8 opacity-30" /><p className="text-sm">No enquiries yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface-cloud border-b border-surface-border">
                    {["#", "Student", "Parent", "Email", "Phone", "Grade", "Date", ""].map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-sys-muted whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {enquiries.map((e, idx) => (
                    <>
                      <tr key={e.id} className="hover:bg-surface-cloud/50 transition-colors">
                        <td className="px-4 py-4 text-xs text-sys-muted font-medium">{idx + 1}</td>
                        <td className="px-4 py-4">
                          <p className="font-semibold text-sys-primary text-sm">{e.studentName}</p>
                        </td>
                        <td className="px-4 py-4 text-sm text-sys-body font-medium whitespace-nowrap">{e.parentName}</td>
                        <td className="px-4 py-4">
                          {e.email
                            ? <a href={`mailto:${e.email}`} className="text-xs text-brand-indigo hover:underline flex items-center gap-1"><Mail className="h-3 w-3" />{e.email}</a>
                            : <span className="text-xs text-sys-muted italic">—</span>}
                        </td>
                        <td className="px-4 py-4">
                          <a href={`tel:${e.phone}`} className="text-sm text-brand-indigo font-medium flex items-center gap-1 hover:underline whitespace-nowrap">
                            <Phone className="h-3.5 w-3.5" />{e.phone}
                          </a>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-brand-indigo/10 text-brand-indigo px-2.5 py-1 rounded-full whitespace-nowrap">
                            <GraduationCap className="h-3 w-3" />{e.grade}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-xs text-sys-muted font-medium whitespace-nowrap">{formatDate(e.createdAt)}</td>
                        <td className="px-4 py-4">
                          {e.message && (
                            <button onClick={() => setExpandedEnquiry(expandedEnquiry === e.id ? null : e.id)}
                              className="text-xs text-sys-muted hover:text-brand-indigo flex items-center gap-1 transition-colors">
                              {expandedEnquiry === e.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </button>
                          )}
                        </td>
                      </tr>
                      {expandedEnquiry === e.id && e.message && (
                        <tr key={`emsg-${e.id}`} className="bg-brand-indigo/5">
                          <td colSpan={8} className="px-6 py-4">
                            <p className="text-xs font-bold text-sys-muted uppercase tracking-widest mb-1">Message</p>
                            <p className="text-sm text-sys-body leading-relaxed">{e.message}</p>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ─── Contact Messages Table ─── */}
        <div className="bg-surface-white rounded-xl border border-surface-border shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-surface-border flex items-center justify-between">
            <div>
              <h2 className="font-bold text-sys-primary text-lg">Website Contact Messages</h2>
              <p className="text-sys-muted text-xs mt-0.5">All contact page submissions, latest first</p>
            </div>
            <span className="text-xs bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full">{contacts.length} Total</span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-40 text-sys-muted text-sm">Loading...</div>
          ) : contacts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-2 text-sys-muted">
              <MessageSquare className="h-8 w-8 opacity-30" /><p className="text-sm">No contact messages yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface-cloud border-b border-surface-border">
                    {["#", "Name", "Email", "Phone", "Date", ""].map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-sys-muted whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {contacts.map((c, idx) => (
                    <>
                      <tr key={c.id} className="hover:bg-surface-cloud/50 transition-colors">
                        <td className="px-4 py-4 text-xs text-sys-muted font-medium">{idx + 1}</td>
                        <td className="px-4 py-4">
                          <p className="font-semibold text-sys-primary text-sm">{c.name}</p>
                        </td>
                        <td className="px-4 py-4">
                          <a href={`mailto:${c.email}`} className="text-xs text-brand-indigo hover:underline flex items-center gap-1">
                            <Mail className="h-3 w-3" />{c.email}
                          </a>
                        </td>
                        <td className="px-4 py-4">
                          {c.phone
                            ? <a href={`tel:${c.phone}`} className="text-sm text-brand-indigo font-medium flex items-center gap-1 hover:underline whitespace-nowrap"><Phone className="h-3.5 w-3.5" />{c.phone}</a>
                            : <span className="text-xs text-sys-muted italic">—</span>}
                        </td>
                        <td className="px-4 py-4 text-xs text-sys-muted font-medium whitespace-nowrap">{formatDate(c.createdAt)}</td>
                        <td className="px-4 py-4">
                          <button onClick={() => setExpandedContact(expandedContact === c.id ? null : c.id)}
                            className="text-xs text-sys-muted hover:text-purple-600 flex items-center gap-1 transition-colors">
                            {expandedContact === c.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </button>
                        </td>
                      </tr>
                      {expandedContact === c.id && (
                        <tr key={`cmsg-${c.id}`} className="bg-purple-50/50">
                          <td colSpan={6} className="px-6 py-4">
                            <p className="text-xs font-bold text-sys-muted uppercase tracking-widest mb-1">Message</p>
                            <p className="text-sm text-sys-body leading-relaxed">{c.message}</p>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
