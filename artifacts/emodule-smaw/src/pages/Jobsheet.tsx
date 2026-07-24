import { useState } from "react";
import { Printer, CheckSquare, Square, ClipboardList, Wrench, ShieldCheck, Star } from "lucide-react";
import logoCUI from "@/assets/logo-cui-nobg.png";
import jobsheetImg from "@/assets/jobsheet-image1.png";

/* ── Print CSS ─────────────────────────────────────────────────────────────
   Dua halaman A4:
   • Halaman 1 — Header, Identitas, Tujuan, Gambar Kerja
   • Halaman 2 — Langkah Kerja, Checklist, Penilaian, TTD              */
const PRINT_CSS = `
@media print {
  @page { size: A4 portrait; margin: 8mm 10mm; }
  html, body { margin: 0 !important; padding: 0 !important; background: white !important; }
  body * { visibility: hidden; }
  #js-print, #js-print * {
    visibility: visible;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  #js-print { display: block !important; position: fixed; top: 0; left: 0; width: 190mm; }
  .no-print { display: none !important; }
  .page-break { page-break-after: always; break-after: page; }
}
`;

function injectPrintCSS() {
  if (document.getElementById("js-print-css")) return;
  const s = document.createElement("style");
  s.id = "js-print-css";
  s.textContent = PRINT_CSS;
  document.head.appendChild(s);
}

/* ── Penilaian mapping ─────────────────────────────────────────────────── */
// Indeks checklist → komponen penilaian
// 0: Menggunakan APD           → Penggunaan APD (10)
// 1: Membaca gambar kerja      → Persiapan kerja /2 (10)
// 2: Material sesuai ukuran    → Persiapan kerja /2 (10)
// 3: Posisi sambungan benar    → Penyusunan benda kerja (15)
// 4: Tack weld sesuai ukuran   → Pelaksanaan tack weld /2 (18)
// 5: Tack weld rapi            → Pelaksanaan tack weld /2 (17)
// 6: Tidak terdapat cacat      → Pemeriksaan hasil /2 (10)
// 7: Area kerja bersih         → Pemeriksaan hasil /2 (10)
const KOMPONEN = [
  { label: "Persiapan kerja",         bobot: 20, items: [1, 2] },
  { label: "Penggunaan APD",          bobot: 10, items: [0]    },
  { label: "Penyusunan benda kerja",  bobot: 15, items: [3]    },
  { label: "Pelaksanaan tack weld",   bobot: 35, items: [4, 5] },
  { label: "Pemeriksaan hasil",       bobot: 20, items: [6, 7] },
];

const CHECKLIST_ITEMS = [
  "Menggunakan APD",
  "Membaca gambar kerja",
  "Material sesuai ukuran",
  "Posisi sambungan benar",
  "Tack weld sesuai ukuran",
  "Tack weld rapi",
  "Tidak terdapat cacat",
  "Area kerja bersih",
];

/* Inspeksi visual setelah proses tack weld selesai */
const INSPEKSI_ITEMS = [
  "Posisi benda kerja sesuai gambar kerja",
  "Kesikuan sambungan 90°",
  "Tack weld rapi dan seragam",
  "Tidak terdapat retak (crack) pada tack weld",
  "Tidak terdapat porositas pada tack weld",
  "Layak dilanjutkan ke pengelasan penuh",
];

function scoreOf(cl: boolean[], komponen: typeof KOMPONEN[0]) {
  const checked = komponen.items.filter(i => cl[i]).length;
  return Math.round((checked / komponen.items.length) * komponen.bobot);
}

/* ── Shared header style ───────────────────────────────────────────────── */
const PH = "px-3 py-[3px] bg-[#e8e8e8] border-b border-[#1a1a1a] font-black text-[9px] uppercase tracking-widest";
const BD = "border border-[#1a1a1a]";

/* ════════════════════════════════════════════════════════════════════════ */
export default function Jobsheet() {
  injectPrintCSS();

  const load = (k: string, n: number): boolean[] => {
    try { return JSON.parse(localStorage.getItem(k) || "null") ?? Array(n).fill(false); }
    catch { return Array(n).fill(false); }
  };
  const [cl, setCl] = useState<boolean[]>(load("js_cl3", 8));
  const toggle = (i: number) => {
    const next = cl.map((v, idx) => idx === i ? !v : v);
    setCl(next); localStorage.setItem("js_cl3", JSON.stringify(next));
  };

  const [ins, setIns] = useState<boolean[]>(load("js_ins", 6));
  const toggleIns = (i: number) => {
    const next = ins.map((v, idx) => idx === i ? !v : v);
    setIns(next); localStorage.setItem("js_ins", JSON.stringify(next));
  };
  const insCount = ins.filter(Boolean).length;

  const scores = KOMPONEN.map(k => scoreOf(cl, k));
  const total  = scores.reduce((a, b) => a + b, 0);
  const pct    = cl.filter(Boolean).length;

  /* ── grade label ── */
  const grade = total >= 90 ? { label: "Sangat Baik", color: "text-emerald-500" }
    : total >= 75 ? { label: "Kompeten",   color: "text-primary"     }
    : total >= 60 ? { label: "Cukup",      color: "text-yellow-500"  }
    :               { label: "Belum Kompeten", color: "text-red-500" };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full pb-12">

      {/* ── Tombol Cetak ─────────────────────────────────────────────────── */}
      <div className="no-print flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Job Sheet Praktik Tack Weld</h1>
          <p className="text-sm text-muted-foreground">Kode: TW-01 · PT. Coppalt Utama Indomelt</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow"
        >
          <Printer className="w-4 h-4" />
          Cetak / Simpan PDF (2 hal.)
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          TAMPILAN E-MODUL (layar)
      ══════════════════════════════════════════════════════════════════ */}
      <div className="no-print flex flex-col gap-5">

        {/* Identitas Job */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-primary/10 px-5 py-2 border-b border-border flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-primary" />
            <span className="font-bold text-sm text-foreground uppercase tracking-wide">Identitas Job</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-border text-sm">
            {[["Material","Mild Steel SS400"],["Ketebalan","6 mm"],["Elektroda","AWS E6013 Ø2,6 mm"],["Arus Las","70–90 A"],["Durasi","±60 Menit"]].map(([l,v])=>(
              <div key={l} className="px-4 py-3">
                <p className="text-muted-foreground text-xs">{l}</p>
                <p className="font-bold text-foreground mt-0.5">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tujuan + Standar Kompetensi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-secondary/50 px-5 py-2 border-b border-border">
              <span className="font-bold text-sm uppercase tracking-wide">Tujuan Praktik</span>
            </div>
            <ol className="px-5 py-3 space-y-1.5 text-sm list-decimal list-inside text-foreground/85">
              {["Membaca gambar kerja.","Menyiapkan material sesuai spesifikasi.","Melakukan penyetelan mesin SMAW.","Melakukan tack weld sesuai SOP.","Melakukan pemeriksaan visual hasil tack weld."].map(t=><li key={t}>{t}</li>)}
            </ol>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-primary/10 px-5 py-2 border-b border-primary/30">
              <span className="font-bold text-sm uppercase tracking-wide text-primary">Standar Kompetensi</span>
            </div>
            <ul className="px-5 py-3 space-y-1.5 text-sm text-foreground/85">
              {["Menyiapkan material sesuai gambar kerja.","Menjaga kesikuan sambungan (90°).","Melakukan tack weld 10–20 mm.","Membersihkan slag.","Melakukan pemeriksaan visual."].map(t=>(
                <li key={t} className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gambar Kerja */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-secondary/50 px-5 py-2 border-b border-border flex items-center justify-between">
            <span className="font-bold text-sm uppercase tracking-wide">Gambar Kerja — TW-01</span>
            <span className="text-xs text-muted-foreground italic">Skala: Tidak skala — referensi fabrikasi</span>
          </div>
          <div className="flex justify-center p-4 bg-white/5">
            <img src={jobsheetImg} alt="Gambar Kerja T-Joint TW-01" className="max-h-72 object-contain rounded" />
          </div>
        </div>

        {/* Langkah Kerja */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-secondary/50 px-5 py-2 border-b border-border flex items-center gap-2">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="font-bold text-sm uppercase tracking-wide">Langkah Kerja</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { title:"A. Persiapan", items:["Gunakan APD secara lengkap.","Baca gambar kerja.","Siapkan material sesuai ukuran.","Bersihkan permukaan material.","Susun benda kerja sesuai gambar.","Periksa kesikuan (siku baja).","Jepit menggunakan C-Clamp."] },
              { title:"B. Pengaturan & Pelaksanaan", items:["Pasang elektroda E6013 Ø2,6 mm.","Atur arus 70–90 A.","Pasang kabel massa ke benda kerja.","Nyalakan mesin las.","Posisikan elektroda 70–80°.","Tack weld ujung pertama (10–20 mm).","Tack weld ujung kedua (10–20 mm).","Tambahkan tack tengah bila perlu.","Bersihkan terak (palu + sikat baja)."] },
              { title:"D. Standar Kompetensi", items:["Material sesuai gambar kerja.","Kesikuan sambungan terjaga (90°).","Panjang tack weld 10–20 mm.","Slag telah dibersihkan.","Pemeriksaan visual dilakukan."] },
            ].map(col=>(
              <div key={col.title} className="px-4 py-3">
                <p className="font-bold text-xs text-primary uppercase tracking-wide mb-2">{col.title}</p>
                <ol className="space-y-1 text-sm text-foreground/80 list-decimal list-inside">
                  {col.items.map(t=><li key={t}>{t}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist + Penilaian */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Checklist — 3 cols */}
          <div className="lg:col-span-3 bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-secondary/50 px-5 py-2 border-b border-border flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-bold text-sm uppercase tracking-wide">Checklist Pemeriksaan</span>
              <span className="ml-auto text-xs text-muted-foreground">{pct}/8 terpenuhi</span>
            </div>
            <div className="divide-y divide-border">
              {CHECKLIST_ITEMS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => toggle(i)}
                  className="flex items-center gap-3 w-full px-5 py-2.5 text-left hover:bg-secondary/30 transition-colors group"
                >
                  <span className="shrink-0">
                    {cl[i]
                      ? <CheckSquare className="w-4 h-4 text-primary" />
                      : <Square className="w-4 h-4 text-muted-foreground group-hover:text-primary/60 transition-colors" />}
                  </span>
                  <span className={`text-sm transition-colors ${cl[i] ? "line-through text-muted-foreground" : "text-foreground/90"}`}>
                    <span className="text-muted-foreground text-xs mr-1.5">{i + 1}.</span>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Penilaian Otomatis — 2 cols */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="bg-secondary/50 px-5 py-2 border-b border-border flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span className="font-bold text-sm uppercase tracking-wide">Penilaian Otomatis</span>
            </div>

            {/* Score ring */}
            <div className="flex flex-col items-center justify-center py-4 border-b border-border">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#F57C00" strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - total / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-black text-foreground">{total}</span>
                  <span className="text-[9px] text-muted-foreground leading-none">/100</span>
                </div>
              </div>
              <p className={`font-bold text-sm mt-1.5 ${grade.color}`}>{grade.label}</p>
            </div>

            {/* Per-komponen */}
            <div className="flex-1 divide-y divide-border">
              {KOMPONEN.map((k, idx) => {
                const s = scores[idx];
                const pctBar = k.bobot > 0 ? (s / k.bobot) * 100 : 0;
                return (
                  <div key={k.label} className="px-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-foreground/80">{k.label}</span>
                      <span className="text-xs font-mono font-bold text-foreground">{s}<span className="text-muted-foreground">/{k.bobot}</span></span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${pctBar}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Inspeksi Visual Setelah Tack Weld */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-secondary/50 px-5 py-2 border-b border-border flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-sm uppercase tracking-wide">Inspeksi Visual Setelah Tack Weld</span>
            <span className="ml-auto text-xs text-muted-foreground">{insCount}/6 terpenuhi</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {INSPEKSI_ITEMS.map((label, i) => (
              <button
                key={label}
                onClick={() => toggleIns(i)}
                className="flex items-center gap-3 w-full px-5 py-2.5 text-left hover:bg-secondary/30 transition-colors group border-b border-border last:border-0 sm:last:border-0"
              >
                <span className="shrink-0">
                  {ins[i]
                    ? <CheckSquare className="w-4 h-4 text-emerald-500" />
                    : <Square className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500/60 transition-colors" />}
                </span>
                <span className={`text-sm transition-colors ${ins[i] ? "line-through text-muted-foreground" : "text-foreground/90"}`}>
                  <span className="text-muted-foreground text-xs mr-1.5">{i + 1}.</span>
                  {label}
                </span>
              </button>
            ))}
          </div>
          {insCount === 6 && (
            <div className="px-5 py-2 bg-emerald-500/10 border-t border-emerald-500/20 text-center">
              <span className="text-xs font-bold text-emerald-500">✓ Semua aspek inspeksi terpenuhi — benda kerja layak dilanjutkan ke pengelasan penuh</span>
            </div>
          )}
        </div>

        {/* Tanda Tangan */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-secondary/50 px-5 py-2 border-b border-border">
            <span className="font-bold text-sm uppercase tracking-wide">Pengesahan</span>
          </div>
          <div className="grid grid-cols-3 divide-x divide-border px-2 py-4">
            {[["Peserta PKL","Mengetahui"],["Pembimbing Industri","Menyetujui"],["Instruktur","Mengesahkan"]].map(([role,sub])=>(
              <div key={role} className="text-center px-4">
                <p className="text-xs text-muted-foreground">{sub},</p>
                <p className="font-bold text-sm text-foreground mb-3">{role}</p>
                <div className="border border-dashed border-border rounded h-14 mb-2" />
                <p className="text-xs text-muted-foreground">Nama: ________________</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tgl: ________________</p>
              </div>
            ))}
          </div>
        </div>
      </div>{/* end no-print */}


      {/* ══════════════════════════════════════════════════════════════════
          PRINT LAYOUT — 2 HALAMAN A4 (tersembunyi di layar)
      ══════════════════════════════════════════════════════════════════ */}
      <div id="js-print" style={{ display: "none", fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, color: "#000" }}>

        {/* ▌HALAMAN 1 — Header · Identitas · Tujuan · Gambar Kerja ─────── */}
        <div className="page-break" style={{ width: "190mm", background: "white" }}>

          {/* Header */}
          <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #111", marginBottom: 0 }}>
            <tbody>
              <tr>
                {/* Logo */}
                <td style={{ width: 80, padding: "6px 10px", borderRight: "2px solid #111", textAlign: "center", verticalAlign: "middle" }}>
                  <img src={logoCUI} alt="CUI" style={{ height: 40, objectFit: "contain" }} />
                </td>
                {/* Nama */}
                <td style={{ textAlign: "center", padding: "6px 10px", verticalAlign: "middle" }}>
                  <div style={{ fontWeight: 900, fontSize: 14, letterSpacing: "0.05em" }}>PT. COPPALT UTAMA INDOMELT</div>
                  <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.12em", fontWeight: 700, marginTop: 2 }}>WORKSHOP FABRIKASI</div>
                </td>
                {/* Kode */}
                <td style={{ width: 80, padding: "6px 10px", borderLeft: "2px solid #111", textAlign: "center", verticalAlign: "middle" }}>
                  <div style={{ fontSize: 8, color: "#666", fontWeight: 700, textTransform: "uppercase" }}>Kode Dok.</div>
                  <div style={{ fontWeight: 900, fontSize: 16, lineHeight: 1.1 }}>TW-01</div>
                  <div style={{ fontSize: 8, color: "#888", marginTop: 1 }}>Rev. 00 / 2025</div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Judul */}
          <div style={{ border: "2px solid #111", borderTop: 0, background: "#fff3e0", textAlign: "center", padding: "5px 10px" }}>
            <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>JOB SHEET PRAKTIK TACK WELD</div>
            <div style={{ fontSize: 9, color: "#555", marginTop: 2 }}>
              Proses: Shielded Metal Arc Welding (SMAW) &nbsp;|&nbsp; Sambungan T-Joint &nbsp;|&nbsp; Posisi 1F (Flat Fillet)
            </div>
          </div>

          {/* Identitas */}
          <div style={{ border: "2px solid #111", borderTop: 0 }}>
            <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em" }}>Identitas Job</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  {[["Material","Mild Steel SS400"],["Ketebalan","6 mm"],["Elektroda","AWS E6013 Ø2,6 mm"],["Arus Las","70–90 Ampere"],["Durasi","±60 Menit"]].map(([l,v],i)=>(
                    <td key={l} style={{ padding: "5px 10px", borderRight: i<4?"1px solid #ccc":"none", verticalAlign:"top" }}>
                      <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", fontWeight: 700 }}>{l}</div>
                      <div style={{ fontWeight: 700, fontSize: 11, marginTop: 1 }}>{v}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tujuan */}
          <div style={{ border: "2px solid #111", borderTop: 0 }}>
            <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em" }}>Tujuan Praktik</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "5px 14px", verticalAlign: "top", width: "50%" }}>
                    {["1. Membaca gambar kerja.","3. Melakukan penyetelan mesin SMAW.","5. Melakukan pemeriksaan visual hasil tack weld."].map(t=>(
                      <div key={t} style={{ fontSize: 10, marginBottom: 3 }}>{t}</div>
                    ))}
                  </td>
                  <td style={{ padding: "5px 14px", verticalAlign: "top" }}>
                    {["2. Menyiapkan material sesuai spesifikasi.","4. Melakukan tack weld sesuai SOP."].map(t=>(
                      <div key={t} style={{ fontSize: 10, marginBottom: 3 }}>{t}</div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Gambar Kerja */}
          <div style={{ border: "2px solid #111", borderTop: 0 }}>
            <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Gambar Kerja — TW-01</span>
              <span style={{ fontSize: 8, color: "#777", fontStyle: "italic", fontWeight: 400 }}>Skala: Tidak skala — referensi fabrikasi</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "8px", background: "white", height: 200 }}>
              <img src={jobsheetImg} alt="Gambar Kerja" style={{ maxHeight: 192, maxWidth: "90%", objectFit: "contain" }} />
            </div>
          </div>

        </div>{/* end page 1 */}


        {/* ▌HALAMAN 2 — Langkah · Checklist · Penilaian · TTD ─────────── */}
        <div style={{ width: "190mm", background: "white" }}>

          {/* Langkah Kerja */}
          <div style={{ border: "2px solid #111" }}>
            <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em" }}>Langkah Kerja</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  {/* A. Persiapan */}
                  <td style={{ padding: "5px 10px", borderRight: "1px solid #1a1a1a", verticalAlign: "top", width: "33%" }}>
                    <div style={{ fontWeight: 900, fontSize: 9, color: "#E65100", textTransform: "uppercase", marginBottom: 4 }}>A. Persiapan</div>
                    {["Gunakan APD secara lengkap.","Baca gambar kerja.","Siapkan material sesuai ukuran.","Bersihkan permukaan material.","Susun benda kerja sesuai gambar.","Periksa kesikuan (siku baja).","Jepit menggunakan C-Clamp."].map((t,i)=>(
                      <div key={i} style={{ display:"flex", gap:4, fontSize:10, marginBottom:2 }}>
                        <span style={{ color:"#999", minWidth:14 }}>{i+1}.</span><span>{t}</span>
                      </div>
                    ))}
                  </td>
                  {/* B+C */}
                  <td style={{ padding: "5px 10px", borderRight: "1px solid #1a1a1a", verticalAlign: "top", width: "33%" }}>
                    <div style={{ fontWeight: 900, fontSize: 9, color: "#E65100", textTransform: "uppercase", marginBottom: 4 }}>B. Pengaturan Mesin</div>
                    {["Pasang elektroda E6013 Ø2,6 mm.","Atur arus 70–90 A.","Pasang kabel massa ke benda kerja."].map((t,i)=>(
                      <div key={i} style={{ display:"flex", gap:4, fontSize:10, marginBottom:2 }}>
                        <span style={{ color:"#999", minWidth:14 }}>{i+1}.</span><span>{t}</span>
                      </div>
                    ))}
                    <div style={{ fontWeight: 900, fontSize: 9, color: "#E65100", textTransform: "uppercase", margin: "6px 0 4px" }}>C. Pelaksanaan Tack Weld</div>
                    {["Nyalakan mesin las.","Posisikan elektroda 70–80°.","Tack weld ujung pertama (10–20 mm).","Tack weld ujung kedua (10–20 mm).","Tambahkan tack tengah bila perlu.","Bersihkan terak (palu + sikat baja)."].map((t,i)=>(
                      <div key={i} style={{ display:"flex", gap:4, fontSize:10, marginBottom:2 }}>
                        <span style={{ color:"#999", minWidth:14 }}>{i+1}.</span><span>{t}</span>
                      </div>
                    ))}
                  </td>
                  {/* D */}
                  <td style={{ padding: "5px 10px", verticalAlign: "top" }}>
                    <div style={{ fontWeight: 900, fontSize: 9, color: "#E65100", textTransform: "uppercase", marginBottom: 4 }}>D. Standar Kompetensi</div>
                    <div style={{ fontSize: 9, color: "#777", marginBottom: 4, fontStyle:"italic" }}>Peserta dinyatakan kompeten apabila:</div>
                    {["Material sesuai gambar kerja.","Kesikuan sambungan terjaga (90°).","Panjang tack weld 10–20 mm.","Slag telah dibersihkan.","Pemeriksaan visual dilakukan."].map(t=>(
                      <div key={t} style={{ display:"flex", gap:4, fontSize:10, marginBottom:2 }}>
                        <span style={{ color:"#E65100", fontWeight:900 }}>✓</span><span>{t}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Checklist */}
          <div style={{ border: "2px solid #111", borderTop: 0 }}>
            <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em" }}>Checklist Pemeriksaan Hasil Tack Weld</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f0f0f0", borderBottom: "1px solid #111" }}>
                  <th style={{ padding: "3px 8px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 22, borderRight: "1px solid #ccc" }}>No</th>
                  <th style={{ padding: "3px 10px", textAlign: "left", fontSize: 9, fontWeight: 700, borderRight: "1px solid #ccc" }}>Aspek Pemeriksaan</th>
                  <th style={{ padding: "3px 6px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 36, borderRight: "1px solid #ccc" }}>Ya</th>
                  <th style={{ padding: "3px 6px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 36 }}>Belum</th>
                </tr>
              </thead>
              <tbody>
                {CHECKLIST_ITEMS.map((label, i) => (
                  <tr key={label} style={{ background: i%2===0?"white":"#fafafa", borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "3px 8px", textAlign: "center", fontSize: 10, color: "#777", borderRight: "1px solid #ccc" }}>{i+1}</td>
                    <td style={{ padding: "3px 10px", fontSize: 10, borderRight: "1px solid #ccc" }}>{label}</td>
                    <td style={{ padding: "3px 6px", textAlign: "center", borderRight: "1px solid #ccc" }}>
                      <div style={{ width: 14, height: 14, border: "1px solid #555", borderRadius: 2, margin: "0 auto", background: cl[i] ? "#E65100" : "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {cl[i] && <span style={{ color: "white", fontSize: 9, fontWeight: 900, lineHeight: 1 }}>✓</span>}
                      </div>
                    </td>
                    <td style={{ padding: "3px 6px", textAlign: "center" }}>
                      <div style={{ width: 14, height: 14, border: "1px solid #bbb", borderRadius: 2, margin: "0 auto", background: !cl[i] ? "#f0f0f0" : "white" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Inspeksi Visual */}
          <div style={{ border: "2px solid #111", borderTop: 0 }}>
            <div style={{ background: "#e8f5e9", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1b5e20" }}>Inspeksi Visual Setelah Tack Weld</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f0f0f0", borderBottom: "1px solid #111" }}>
                  <th style={{ padding: "3px 8px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 22, borderRight: "1px solid #ccc" }}>No</th>
                  <th style={{ padding: "3px 10px", textAlign: "left", fontSize: 9, fontWeight: 700, borderRight: "1px solid #ccc" }}>Aspek Inspeksi</th>
                  <th style={{ padding: "3px 6px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 36, borderRight: "1px solid #ccc" }}>Ya</th>
                  <th style={{ padding: "3px 6px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 36 }}>Tidak</th>
                </tr>
              </thead>
              <tbody>
                {INSPEKSI_ITEMS.map((label, i) => (
                  <tr key={label} style={{ background: i%2===0?"white":"#fafafa", borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "3px 8px", textAlign: "center", fontSize: 10, color: "#777", borderRight: "1px solid #ccc" }}>{i+1}</td>
                    <td style={{ padding: "3px 10px", fontSize: 10, borderRight: "1px solid #ccc" }}>{label}</td>
                    <td style={{ padding: "3px 6px", textAlign: "center", borderRight: "1px solid #ccc" }}>
                      <div style={{ width: 14, height: 14, border: "1px solid #2e7d32", borderRadius: 2, margin: "0 auto", background: ins[i] ? "#2e7d32" : "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {ins[i] && <span style={{ color: "white", fontSize: 9, fontWeight: 900, lineHeight: 1 }}>✓</span>}
                      </div>
                    </td>
                    <td style={{ padding: "3px 6px", textAlign: "center" }}>
                      <div style={{ width: 14, height: 14, border: "1px solid #bbb", borderRadius: 2, margin: "0 auto", background: !ins[i] ? "#f0f0f0" : "white" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Penilaian + Catatan */}
          <div style={{ display: "flex", border: "2px solid #111", borderTop: 0 }}>
            {/* Penilaian */}
            <div style={{ width: "45%", borderRight: "2px solid #111" }}>
              <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em" }}>Komponen Penilaian</div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f0f0f0", borderBottom: "1px solid #ccc" }}>
                    <th style={{ padding: "2px 8px", textAlign: "left", fontSize: 9, fontWeight: 700, borderRight: "1px solid #ccc" }}>Komponen</th>
                    <th style={{ padding: "2px 6px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 40, borderRight: "1px solid #ccc" }}>Bobot</th>
                    <th style={{ padding: "2px 6px", textAlign: "center", fontSize: 9, fontWeight: 700, width: 46 }}>Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {KOMPONEN.map((k, idx) => (
                    <tr key={k.label} style={{ borderBottom: "1px solid #ddd", background: idx%2===0?"white":"#fafafa" }}>
                      <td style={{ padding: "3px 8px", fontSize: 10, borderRight: "1px solid #ccc" }}>{k.label}</td>
                      <td style={{ padding: "3px 6px", textAlign: "center", fontSize: 10, fontFamily: "monospace", borderRight: "1px solid #ccc" }}>{k.bobot}</td>
                      <td style={{ padding: "3px 6px", textAlign: "center", fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: scores[idx] > 0 ? "#E65100" : "#ccc" }}>
                        {scores[idx] > 0 ? scores[idx] : "—"}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ background: "#fff3e0", borderTop: "2px solid #111" }}>
                    <td style={{ padding: "3px 8px", fontSize: 10, fontWeight: 900, borderRight: "1px solid #ccc" }}>Total</td>
                    <td style={{ padding: "3px 6px", textAlign: "center", fontSize: 10, fontWeight: 900, fontFamily: "monospace", borderRight: "1px solid #ccc" }}>100</td>
                    <td style={{ padding: "3px 6px", textAlign: "center", fontSize: 11, fontWeight: 900, fontFamily: "monospace", color: total > 0 ? "#E65100" : "#ccc" }}>
                      {total > 0 ? total : "—"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Catatan */}
            <div style={{ flex: 1 }}>
              <div style={{ background: "#e8e8e8", padding: "3px 10px", borderBottom: "1px solid #111", fontWeight: 900, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em" }}>Catatan Pembimbing</div>
              <div style={{ padding: 8, height: 80 }}>
                <div style={{ width: "100%", height: "100%", border: "1px dashed #bbb", borderRadius: 4 }} />
              </div>
            </div>
          </div>

          {/* Tanda Tangan */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "2px solid #111", borderTop: 0 }}>
            {[["Peserta PKL","Mengetahui"],["Pembimbing Industri","Menyetujui"],["Instruktur","Mengesahkan"]].map(([role,sub],i)=>(
              <div key={role} style={{ padding: "6px 12px", textAlign: "center", borderRight: i<2?"2px solid #111":"none" }}>
                <div style={{ fontSize: 8, color: "#666", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>{sub},</div>
                <div style={{ fontWeight: 900, fontSize: 10, marginBottom: 8 }}>{role}</div>
                <div style={{ height: 44, border: "1px dashed #bbb", borderRadius: 4, marginBottom: 6 }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 9, color: "#555", marginBottom: 2 }}>Nama&nbsp;: ____________________________</div>
                  <div style={{ fontSize: 9, color: "#555" }}>Tgl&nbsp;&nbsp;&nbsp;&nbsp;: ____________________________</div>
                </div>
              </div>
            ))}
          </div>

        </div>{/* end page 2 */}
      </div>{/* end #js-print */}

    </div>
  );
}
