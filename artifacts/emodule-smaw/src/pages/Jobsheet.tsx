import { useState } from "react";
import { Printer } from "lucide-react";
import logoCUI from "@/assets/logo-cui-nobg.png";
import logoUPI from "@/assets/logo-upi-nobg.png";
import jobsheetImg from "@/assets/jobsheet-image1.png";

/* ── Print CSS ─────────────────────────────────────────────────────────────
   A4 = 210 × 297 mm. Margin 8mm tiap sisi → usable 194 × 281 mm.
   Dokumen didesain 190mm lebar agar ada sedikit ruang bersih.            */
const PRINT_CSS = `
@media print {
  @page {
    size: A4 portrait;
    margin: 8mm 10mm;
  }
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }
  body * { visibility: hidden; }
  #js-doc, #js-doc * {
    visibility: visible;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  #js-doc {
    position: fixed;
    top: 0; left: 0;
    width: 190mm;
    font-size: 8.5pt !important;
    border: 1.5pt solid #000 !important;
  }
  .no-print { display: none !important; }
}
`;

function injectPrintCSS() {
  if (document.getElementById("js-print-css")) return;
  const s = document.createElement("style");
  s.id = "js-print-css";
  s.textContent = PRINT_CSS;
  document.head.appendChild(s);
}

/* ── Konstanta warna ───────────────────────────────────────────────────── */
const BDR  = "border border-[#1a1a1a]";
const BDR2 = "border-2 border-[#1a1a1a]";
const HDR  = "bg-[#e8e8e8] px-3 py-[3px] border-b border-[#1a1a1a]";

/* ── CheckRow ──────────────────────────────────────────────────────────── */
function CheckRow({ no, label, checked, onToggle }:
  { no: number; label: string; checked: boolean; onToggle: () => void }) {
  return (
    <tr className={`${no % 2 === 0 ? "bg-[#fafafa]" : "bg-white"} border-b border-[#d0d0d0] last:border-0`}>
      <td className="px-2 py-[3px] text-center text-[10px] text-gray-500 w-5 border-r border-[#d0d0d0]">{no}</td>
      <td className="px-3 py-[3px] text-[10px] text-gray-800 border-r border-[#d0d0d0]">{label}</td>
      <td className="py-[3px] text-center w-10 border-r border-[#d0d0d0]">
        <button
          onClick={onToggle}
          className="w-4 h-4 border border-[#555] rounded-[2px] mx-auto flex items-center justify-center transition-colors"
          style={{ background: checked ? "#E65100" : "white" }}
        >
          {checked && <span className="text-white font-black" style={{ fontSize: 9 }}>✓</span>}
        </button>
      </td>
      <td className="py-[3px] text-center w-10">
        <div
          className="w-4 h-4 border border-[#bbb] rounded-[2px] mx-auto flex items-center justify-center"
          style={{ background: !checked ? "#f0f0f0" : "white" }}
        >
          {!checked && <span className="text-gray-400 font-bold" style={{ fontSize: 9 }}>—</span>}
        </div>
      </td>
    </tr>
  );
}

/* ── Main ──────────────────────────────────────────────────────────────── */
export default function Jobsheet() {
  injectPrintCSS();

  const load = (k: string, n: number): boolean[] => {
    try { return JSON.parse(localStorage.getItem(k) || "null") ?? Array(n).fill(false); }
    catch { return Array(n).fill(false); }
  };
  const [cl, setCl] = useState<boolean[]>(load("js_cl2", 8));
  const toggle = (i: number) => {
    const next = cl.map((v, idx) => idx === i ? !v : v);
    setCl(next); localStorage.setItem("js_cl2", JSON.stringify(next));
  };

  return (
    <div className="flex flex-col items-center gap-3 pb-12">

      {/* ── Tombol Cetak ─────────────────────────────────────────────── */}
      <div className="no-print w-full max-w-[794px] flex justify-end">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow"
        >
          <Printer className="w-4 h-4" />
          Cetak / Simpan PDF
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DOKUMEN A4
      ══════════════════════════════════════════════════════════════ */}
      <div
        id="js-doc"
        className={`w-[794px] bg-white text-black ${BDR2}`}
        style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11 }}
      >

        {/* ①  HEADER ─────────────────────────────────────────────────── */}
        <div className={`flex border-b-2 border-[#1a1a1a]`}>
          {/* Logos */}
          <div className={`flex items-center justify-center gap-2 px-3 py-2 border-r-2 border-[#1a1a1a] w-[100px] shrink-0`}>
            <img src={logoCUI} alt="CUI" className="h-10 w-auto object-contain" />
            <img src={logoUPI} alt="UPI" className="h-10 w-auto object-contain" />
          </div>
          {/* Nama instansi */}
          <div className="flex-1 flex flex-col items-center justify-center py-2">
            <p className="font-black text-[14px] tracking-wide">PT. COPPALT UTAMA INDOMELT</p>
            <p className="text-[10px] tracking-[0.15em] text-gray-600 font-semibold">WORKSHOP FABRIKASI</p>
          </div>
          {/* Kode dokumen */}
          <div className={`flex flex-col items-center justify-center text-center px-3 py-2 border-l-2 border-[#1a1a1a] w-[90px] shrink-0`}>
            <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Kode Dok.</p>
            <p className="font-black text-[15px] leading-none mt-0.5">TW-01</p>
            <p className="text-[8px] text-gray-400 mt-0.5">Rev. 00 / 2025</p>
          </div>
        </div>

        {/* ②  JUDUL ───────────────────────────────────────────────────── */}
        <div className="text-center py-[5px] border-b-2 border-[#1a1a1a] bg-[#fff3e0]">
          <p className="font-black text-[12px] tracking-wider uppercase">JOB SHEET PRAKTIK TACK WELD</p>
          <p className="text-[9px] text-gray-600 mt-0.5">
            Proses: Shielded Metal Arc Welding (SMAW) &nbsp;|&nbsp; Sambungan T-Joint &nbsp;|&nbsp; Posisi 1F (Flat Fillet)
          </p>
        </div>

        {/* ③  IDENTITAS JOB ───────────────────────────────────────────── */}
        <div className="border-b-2 border-[#1a1a1a]">
          <div className={HDR}>
            <span className="font-black text-[9px] uppercase tracking-widest">Identitas Job</span>
          </div>
          <div className="grid grid-cols-5 border-t-0">
            {[
              ["Material", "Mild Steel SS400"],
              ["Ketebalan", "6 mm"],
              ["Elektroda", "AWS E6013 Ø2,6 mm"],
              ["Arus Las", "70–90 Ampere"],
              ["Durasi", "±60 Menit"],
            ].map(([label, value], i) => (
              <div
                key={label}
                className={`px-3 py-[5px] ${i < 4 ? "border-r border-[#1a1a1a]" : ""}`}
              >
                <p className="text-[8px] text-gray-500 uppercase font-semibold tracking-wide">{label}</p>
                <p className="font-bold text-[11px] mt-[1px]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ④  TUJUAN PRAKTIK ──────────────────────────────────────────── */}
        <div className="border-b-2 border-[#1a1a1a]">
          <div className={HDR}>
            <span className="font-black text-[9px] uppercase tracking-widest">Tujuan Praktik</span>
          </div>
          <div className="px-4 py-[5px] grid grid-cols-2 gap-x-8 gap-y-0.5">
            {[
              "Membaca gambar kerja.",
              "Menyiapkan material sesuai spesifikasi.",
              "Melakukan penyetelan mesin SMAW.",
              "Melakukan tack weld sesuai SOP.",
              "Melakukan pemeriksaan visual hasil tack weld.",
            ].map((t, i) => (
              <div key={t} className="flex items-start gap-1.5 text-[10px]">
                <span className="font-bold text-gray-500 shrink-0 w-3">{i + 1}.</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ⑤  GAMBAR KERJA ────────────────────────────────────────────── */}
        <div className="border-b-2 border-[#1a1a1a]">
          <div className={`${HDR} flex items-center justify-between`}>
            <span className="font-black text-[9px] uppercase tracking-widest">Gambar Kerja — TW-01</span>
            <span className="text-[8px] text-gray-500 italic">Skala: Tidak skala — hanya referensi fabrikasi</span>
          </div>
          <div className="flex justify-center items-center py-2 bg-white" style={{ height: 268 }}>
            <img
              src={jobsheetImg}
              alt="Gambar Kerja T-Joint TW-01"
              style={{ maxHeight: 256, maxWidth: "92%", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* ⑥  LANGKAH KERJA ───────────────────────────────────────────── */}
        <div className="border-b-2 border-[#1a1a1a]">
          <div className={HDR}>
            <span className="font-black text-[9px] uppercase tracking-widest">Langkah Kerja</span>
          </div>
          <div className="grid grid-cols-3 divide-x divide-[#1a1a1a]">
            {/* A. Persiapan */}
            <div className="px-3 py-[5px]">
              <p className="font-black text-[9px] text-[#E65100] uppercase tracking-wide mb-1">A. Persiapan</p>
              {[
                "Gunakan APD secara lengkap.",
                "Baca gambar kerja.",
                "Siapkan material sesuai ukuran.",
                "Bersihkan permukaan material.",
                "Susun benda kerja sesuai gambar.",
                "Periksa kesikuan (siku baja).",
                "Jepit menggunakan C-Clamp.",
              ].map((t, i) => (
                <div key={i} className="flex gap-1.5 text-[10px] mb-[2px]">
                  <span className="text-gray-400 shrink-0 w-3">{i + 1}.</span>
                  <span className="leading-snug">{t}</span>
                </div>
              ))}
            </div>
            {/* B+C */}
            <div className="px-3 py-[5px]">
              <p className="font-black text-[9px] text-[#E65100] uppercase tracking-wide mb-1">B. Pengaturan Mesin</p>
              {[
                "Pasang elektroda E6013 Ø2,6 mm.",
                "Atur arus 70–90 A.",
                "Pasang kabel massa ke benda kerja.",
              ].map((t, i) => (
                <div key={i} className="flex gap-1.5 text-[10px] mb-[2px]">
                  <span className="text-gray-400 shrink-0 w-3">{i + 1}.</span>
                  <span className="leading-snug">{t}</span>
                </div>
              ))}
              <p className="font-black text-[9px] text-[#E65100] uppercase tracking-wide mt-2 mb-1">C. Pelaksanaan</p>
              {[
                "Nyalakan mesin las.",
                "Posisikan elektroda 70–80° ke benda kerja.",
                "Tack weld ujung pertama (10–20 mm).",
                "Tack weld ujung kedua (10–20 mm).",
                "Tambahkan tack tengah bila perlu.",
                "Bersihkan terak (palu terak + sikat).",
              ].map((t, i) => (
                <div key={i} className="flex gap-1.5 text-[10px] mb-[2px]">
                  <span className="text-gray-400 shrink-0 w-3">{i + 1}.</span>
                  <span className="leading-snug">{t}</span>
                </div>
              ))}
            </div>
            {/* D. Standar */}
            <div className="px-3 py-[5px]">
              <p className="font-black text-[9px] text-[#E65100] uppercase tracking-wide mb-1">D. Standar Kompetensi</p>
              <p className="text-[9px] text-gray-500 italic mb-1">Peserta dinyatakan kompeten apabila:</p>
              {[
                "Material sesuai gambar kerja.",
                "Kesikuan sambungan terjaga (90°).",
                "Panjang tack weld 10–20 mm.",
                "Slag telah dibersihkan.",
                "Pemeriksaan visual dilakukan.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-1.5 text-[10px] mb-[2px]">
                  <span className="text-[#E65100] font-black shrink-0">✓</span>
                  <span className="leading-snug">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ⑦  CHECKLIST PEMERIKSAAN ───────────────────────────────────── */}
        <div className="border-b-2 border-[#1a1a1a]">
          <div className={HDR}>
            <span className="font-black text-[9px] uppercase tracking-widest">Checklist Pemeriksaan Hasil Tack Weld</span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#1a1a1a]">
                <th className="px-2 py-[3px] text-center text-[9px] font-bold w-5 border-r border-[#1a1a1a]">No</th>
                <th className="px-3 py-[3px] text-left text-[9px] font-bold border-r border-[#1a1a1a]">Aspek Pemeriksaan</th>
                <th className="py-[3px] text-center text-[9px] font-bold w-10 border-r border-[#1a1a1a]">Ya</th>
                <th className="py-[3px] text-center text-[9px] font-bold w-10">Belum</th>
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

        {/* ⑧  PENILAIAN + CATATAN ─────────────────────────────────────── */}
        <div className={`flex border-b-2 border-[#1a1a1a]`}>
          {/* Penilaian */}
          <div className="border-r-2 border-[#1a1a1a]" style={{ width: "42%" }}>
            <div className={HDR}>
              <span className="font-black text-[9px] uppercase tracking-widest">Komponen Penilaian</span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f0f0] border-b border-[#1a1a1a]">
                  <th className="px-3 py-[2px] text-left text-[9px] font-bold border-r border-[#d0d0d0]">Komponen</th>
                  <th className="px-2 py-[2px] text-center text-[9px] font-bold w-12 border-r border-[#d0d0d0]">Bobot</th>
                  <th className="px-2 py-[2px] text-center text-[9px] font-bold w-16">Nilai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persiapan kerja", "20"],
                  ["Penggunaan APD", "10"],
                  ["Penyusunan benda kerja", "15"],
                  ["Pelaksanaan tack weld", "35"],
                  ["Pemeriksaan hasil", "20"],
                ].map(([k, b], i) => (
                  <tr key={k} className={`border-b border-[#d0d0d0] ${i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}`}>
                    <td className="px-3 py-[3px] text-[10px] border-r border-[#d0d0d0]">{k}</td>
                    <td className="px-2 py-[3px] text-center text-[10px] font-mono border-r border-[#d0d0d0]">{b}</td>
                    <td className="px-2 py-[3px] text-center text-[10px] text-gray-300">___</td>
                  </tr>
                ))}
                <tr className="bg-[#fff3e0] border-t border-[#1a1a1a]">
                  <td className="px-3 py-[3px] text-[10px] font-black border-r border-[#d0d0d0]">Total</td>
                  <td className="px-2 py-[3px] text-center text-[10px] font-black border-r border-[#d0d0d0]">100</td>
                  <td className="px-2 py-[3px] text-center text-[10px] text-gray-300">___</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Catatan Pembimbing */}
          <div className="flex-1 flex flex-col">
            <div className={HDR}>
              <span className="font-black text-[9px] uppercase tracking-widest">Catatan Pembimbing</span>
            </div>
            <div className="flex-1 p-2">
              <div
                className="w-full h-full rounded border border-dashed border-gray-300"
                style={{ minHeight: 72 }}
              />
            </div>
          </div>
        </div>

        {/* ⑨  TANDA TANGAN ────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 divide-x-2 divide-[#1a1a1a]">
          {[
            ["Peserta PKL",          "Mengetahui"],
            ["Pembimbing Industri",  "Menyetujui"],
            ["Instruktur",           "Mengesahkan"],
          ].map(([role, sub]) => (
            <div key={role} className="px-4 py-2 text-center">
              <p className="text-[8px] text-gray-500 uppercase tracking-wider font-semibold">{sub},</p>
              <p className="font-black text-[10px] mb-2">{role}</p>
              <div
                className="border border-dashed border-gray-300 rounded mx-auto mb-2"
                style={{ height: 48 }}
              />
              <div className="text-left space-y-[2px]">
                <div className="flex text-[9px]">
                  <span className="text-gray-500 w-9 shrink-0">Nama</span>
                  <span>: ____________________________</span>
                </div>
                <div className="flex text-[9px]">
                  <span className="text-gray-500 w-9 shrink-0">Tgl</span>
                  <span>: ____________________________</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>{/* end #js-doc */}
    </div>
  );
}
