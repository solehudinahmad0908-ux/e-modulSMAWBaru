import { useState } from "react";
import { Printer } from "lucide-react";
import logoCUI from "@/assets/logo-cui-nobg.png";
import logoUPI from "@/assets/logo-upi-nobg.png";
import jobsheetImg from "@/assets/jobsheet-image1.png";

/* ─── Print styles injected into <head> ──────────────────────────────────── */
const PRINT_CSS = `
@media print {
  @page { size: A4 portrait; margin: 10mm; }
  body * { visibility: hidden; }
  #jobsheet-print, #jobsheet-print * { visibility: visible; }
  #jobsheet-print { position: fixed; inset: 0; }
  .no-print { display: none !important; }
  .js-border { border-color: #000 !important; }
  .js-row { background: transparent !important; }
  input[type="checkbox"] { print-color-adjust: exact; }
}
`;

function injectPrintCSS() {
  if (document.getElementById("jobsheet-print-css")) return;
  const style = document.createElement("style");
  style.id = "jobsheet-print-css";
  style.textContent = PRINT_CSS;
  document.head.appendChild(style);
}

/* ─── Checklist row ─────────────────────────────────────────────────────── */
function CheckRow({
  no, label, checked, onToggle,
}: { no: number; label: string; checked: boolean; onToggle: () => void }) {
  return (
    <tr className="border-b border-border/50 last:border-0 js-row">
      <td className="px-2 py-1 text-center text-xs w-6 text-muted-foreground">{no}</td>
      <td className="px-2 py-1 text-xs text-foreground/90 leading-snug">{label}</td>
      <td className="px-2 py-1 text-center w-8">
        <button onClick={onToggle} className="w-3.5 h-3.5 border border-foreground/50 rounded-sm mx-auto flex items-center justify-center"
          style={{ background: checked ? '#F57C00' : 'transparent' }}>
          {checked && <span className="text-white text-[8px] font-black leading-none">✓</span>}
        </button>
      </td>
      <td className="px-2 py-1 text-center w-8">
        <div className="w-3.5 h-3.5 border border-foreground/50 rounded-sm mx-auto"
          style={{ background: !checked ? 'rgba(150,150,150,0.15)' : 'transparent' }} />
      </td>
    </tr>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function Jobsheet() {
  injectPrintCSS();

  /* checklist state */
  const stored = (k: string, n: number): boolean[] => {
    try { return JSON.parse(localStorage.getItem(k) || "null") || Array(n).fill(false); }
    catch { return Array(n).fill(false); }
  };
  const [cl, setCl] = useState<boolean[]>(stored("js_cl", 8));
  const toggle = (i: number) => {
    const next = cl.map((v, idx) => idx === i ? !v : v);
    setCl(next);
    localStorage.setItem("js_cl", JSON.stringify(next));
  };

  return (
    <div className="flex flex-col items-center gap-4 pb-12">

      {/* Print button */}
      <div className="no-print flex justify-end w-full max-w-[794px]">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Cetak / Simpan PDF
        </button>
      </div>

      {/* ── A4 Document ─────────────────────────────────────────────────── */}
      <div
        id="jobsheet-print"
        className="w-[794px] bg-white text-black font-sans text-[11px] leading-snug border-2 border-black js-border"
        style={{ fontFamily: "'Arial', sans-serif" }}
      >

        {/* ══ 1. HEADER ═══════════════════════════════════════════════════ */}
        <div className="flex border-b-2 border-black js-border">
          {/* Logos */}
          <div className="flex items-center justify-center gap-3 px-4 py-2 border-r-2 border-black js-border w-28">
            <img src={logoCUI} alt="CUI" className="h-9 object-contain" />
            <img src={logoUPI} alt="UPI" className="h-9 object-contain" />
          </div>
          {/* Title block */}
          <div className="flex-1 flex flex-col items-center justify-center py-2 px-4">
            <p className="font-black text-base tracking-wide uppercase">PT. Coppalt Utama Indomelt</p>
            <p className="font-bold text-[10px] tracking-widest uppercase text-gray-600">Workshop Fabrikasi</p>
          </div>
          {/* Doc code */}
          <div className="flex flex-col items-center justify-center px-4 border-l-2 border-black js-border w-28 text-center">
            <p className="font-bold text-[9px] text-gray-500 uppercase">Kode Dok.</p>
            <p className="font-black text-sm">TW-01</p>
            <p className="text-[9px] text-gray-500">Rev. 00</p>
          </div>
        </div>

        {/* ══ 2. JUDUL ════════════════════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border text-center py-2 bg-orange-50">
          <p className="font-black text-[13px] tracking-wide uppercase">
            Job Sheet Praktik Tack Weld
          </p>
          <p className="text-[10px] text-gray-600">Proses: Shielded Metal Arc Welding (SMAW) — Sambungan T-Joint — Posisi 1F (Flat Fillet)</p>
        </div>

        {/* ══ 3. IDENTITAS JOB ════════════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border">
          <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border">
            <p className="font-black text-[10px] uppercase tracking-wider">Identitas Job</p>
          </div>
          <div className="grid grid-cols-4 divide-x divide-black/30">
            {[
              ["Material", "Mild Steel SS400"],
              ["Ketebalan", "6 mm"],
              ["Elektroda", "AWS E6013 Ø2,6 mm"],
              ["Arus Las", "70–90 Ampere"],
            ].map(([label, value]) => (
              <div key={label} className="px-3 py-1.5">
                <p className="text-[9px] text-gray-500 uppercase">{label}</p>
                <p className="font-bold text-[11px]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 4. TUJUAN PRAKTIK ═══════════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border">
          <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border">
            <p className="font-black text-[10px] uppercase tracking-wider">Tujuan Praktik</p>
          </div>
          <div className="px-4 py-1.5 grid grid-cols-2 gap-x-6">
            {[
              "Membaca gambar kerja.",
              "Menyiapkan material sesuai spesifikasi.",
              "Melakukan penyetelan mesin SMAW.",
              "Melakukan tack weld sesuai SOP.",
              "Melakukan pemeriksaan visual hasil tack weld.",
            ].map((t, i) => (
              <div key={t} className="flex items-start gap-1">
                <span className="font-bold shrink-0">{i + 1}.</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 5. GAMBAR KERJA ═════════════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border">
          <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border flex items-center justify-between">
            <p className="font-black text-[10px] uppercase tracking-wider">Gambar Kerja — TW-01</p>
            <p className="text-[9px] text-gray-500">Skala: Tidak skala — referensi fabrikasi</p>
          </div>
          <div className="flex justify-center items-center py-2 px-4" style={{ minHeight: "320px" }}>
            <img
              src={jobsheetImg}
              alt="Gambar Kerja Tack Weld T-Joint TW-01"
              className="max-h-[310px] object-contain"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>

        {/* ══ 6. LANGKAH KERJA ════════════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border">
          <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border">
            <p className="font-black text-[10px] uppercase tracking-wider">Langkah Kerja</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-black/30">
            {/* Persiapan */}
            <div className="px-3 py-1.5">
              <p className="font-bold text-[10px] text-orange-700 mb-1">A. Persiapan</p>
              {[
                "Menggunakan APD lengkap.",
                "Membaca gambar kerja.",
                "Menyiapkan material sesuai ukuran.",
                "Membersihkan permukaan material.",
                "Menyusun benda kerja sesuai gambar.",
                "Memeriksa kesikuan (siku baja).",
                "Menjepit menggunakan C-Clamp.",
              ].map((t, i) => (
                <div key={t} className="flex items-start gap-1 mb-0.5">
                  <span className="shrink-0 text-gray-400">{i + 1}.</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            {/* Pengaturan + Pelaksanaan */}
            <div className="px-3 py-1.5">
              <p className="font-bold text-[10px] text-orange-700 mb-1">B. Pengaturan Mesin</p>
              {[
                "Pasang elektroda E6013 Ø2,6 mm.",
                "Atur arus 70–90 A.",
                "Pasang kabel massa ke benda kerja.",
              ].map((t, i) => (
                <div key={t} className="flex items-start gap-1 mb-0.5">
                  <span className="shrink-0 text-gray-400">{i + 1}.</span>
                  <span>{t}</span>
                </div>
              ))}
              <p className="font-bold text-[10px] text-orange-700 mt-2 mb-1">C. Pelaksanaan Tack Weld</p>
              {[
                "Nyalakan mesin las.",
                "Posisikan elektroda 70–80° terhadap benda kerja.",
                "Tack weld pada ujung pertama (10–20 mm).",
                "Tack weld pada ujung kedua (10–20 mm).",
                "Tambahkan tack tengah bila diperlukan.",
                "Bersihkan terak (palu terak + sikat baja).",
              ].map((t, i) => (
                <div key={t} className="flex items-start gap-1 mb-0.5">
                  <span className="shrink-0 text-gray-400">{i + 1}.</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            {/* Standar Kompetensi */}
            <div className="px-3 py-1.5">
              <p className="font-bold text-[10px] text-orange-700 mb-1">D. Standar Kompetensi</p>
              <p className="text-[9px] text-gray-500 mb-1">Peserta kompeten apabila:</p>
              {[
                "Material sesuai gambar kerja.",
                "Kesikuan sambungan terjaga.",
                "Panjang tack weld 10–20 mm.",
                "Slag dibersihkan.",
                "Pemeriksaan visual dilakukan.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-1 mb-0.5">
                  <span className="text-orange-600 font-bold shrink-0">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ 7. CHECKLIST PEMERIKSAAN ════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border">
          <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border">
            <p className="font-black text-[10px] uppercase tracking-wider">Checklist Pemeriksaan Hasil Tack Weld</p>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/30 js-row bg-gray-50">
                <th className="px-2 py-1 text-center text-[9px] font-bold w-6">No</th>
                <th className="px-2 py-1 text-left text-[9px] font-bold">Aspek Pemeriksaan</th>
                <th className="px-2 py-1 text-center text-[9px] font-bold w-8">Ya</th>
                <th className="px-2 py-1 text-center text-[9px] font-bold w-8">Belum</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Menggunakan APD secara lengkap",
                "Material sesuai ukuran pada gambar kerja",
                "Posisi sambungan T-Joint benar",
                "Kesikuan sambungan 90°",
                "Panjang tack weld 10–20 mm",
                "Permukaan tack weld rapi (tidak retak, tidak berpori)",
                "Slag telah dibersihkan",
                "Area kerja bersih setelah praktik",
              ].map((label, i) => (
                <CheckRow key={label} no={i + 1} label={label} checked={cl[i]} onToggle={() => toggle(i)} />
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ 8. PENILAIAN + CATATAN ══════════════════════════════════════ */}
        <div className="border-b-2 border-black js-border flex divide-x-2 divide-black js-border" style={{ minHeight: "100px" }}>
          {/* Penilaian */}
          <div className="w-[45%]">
            <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border">
              <p className="font-black text-[10px] uppercase tracking-wider">Komponen Penilaian</p>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-black/30 bg-gray-50">
                  <th className="px-2 py-0.5 text-left text-[9px] font-bold">Komponen</th>
                  <th className="px-2 py-0.5 text-center text-[9px] font-bold w-14">Bobot</th>
                  <th className="px-2 py-0.5 text-center text-[9px] font-bold w-14">Nilai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/20">
                {[
                  ["Persiapan kerja", "20"],
                  ["Penggunaan APD", "10"],
                  ["Penyusunan benda kerja", "15"],
                  ["Pelaksanaan tack weld", "35"],
                  ["Pemeriksaan hasil", "20"],
                ].map(([k, b]) => (
                  <tr key={k}>
                    <td className="px-2 py-0.5 text-[10px]">{k}</td>
                    <td className="px-2 py-0.5 text-center text-[10px] font-mono">{b}</td>
                    <td className="px-2 py-0.5 text-center text-[10px] text-gray-300">____</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-black/40 font-bold bg-orange-50">
                  <td className="px-2 py-0.5 text-[10px] font-black">Total</td>
                  <td className="px-2 py-0.5 text-center text-[10px] font-black">100</td>
                  <td className="px-2 py-0.5 text-center text-[10px] text-gray-300">____</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Catatan Pembimbing */}
          <div className="flex-1">
            <div className="px-3 py-1 bg-gray-100 border-b border-black/30 js-border">
              <p className="font-black text-[10px] uppercase tracking-wider">Catatan Pembimbing</p>
            </div>
            <div className="px-3 py-2 h-full">
              <div className="border border-dashed border-gray-300 rounded h-[74px] w-full" />
            </div>
          </div>
        </div>

        {/* ══ 9. TANDA TANGAN ═════════════════════════════════════════════ */}
        <div className="grid grid-cols-3 divide-x-2 divide-black js-border">
          {[
            ["Peserta PKL", "Mengetahui"],
            ["Pembimbing Industri", "Menyetujui"],
            ["Instruktur", "Mengesahkan"],
          ].map(([role, sub]) => (
            <div key={role} className="px-3 py-1.5 text-center">
              <p className="font-bold text-[9px] text-gray-500 uppercase">{sub}</p>
              <p className="font-black text-[10px] mb-1">{role}</p>
              <div className="border border-dashed border-gray-300 rounded h-12 mb-1" />
              <div className="flex flex-col gap-0.5 text-[9px] text-left">
                <div className="flex gap-1"><span className="text-gray-400">Nama</span><span>: ________________________</span></div>
                <div className="flex gap-1"><span className="text-gray-400">Tgl</span><span>: ________________________</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* End A4 document */}
    </div>
  );
}
