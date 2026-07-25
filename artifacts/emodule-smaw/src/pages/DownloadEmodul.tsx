import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, Download, CheckCircle2, Lock, FileText, BookOpen, Printer } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { moduleRichContents, type ContentItem } from "@/data/moduleRichContent";
import { modulesData } from "@/data/modules";
import { docImages } from "@/assets/docImages";
import logoCui from "@/assets/logo-cui-nobg.png";
import logoUpi from "@/assets/logo-upi-nobg.png";

// ── Pendahuluan data (mirrored from Pendahuluan.tsx) ──────────────────────────

const DESKRIPSI = [
  "E-modul Pengelasan Shielded Metal Arc Welding (SMAW) disusun sebagai media pembelajaran bagi peserta Praktik Kerja Lapangan (PKL) di PT. Coppalt Utama Indomelt. Penyusunan e-modul ini bertujuan untuk menyediakan panduan belajar mandiri yang sistematis dan terstruktur bagi peserta PKL dalam mempersiapkan diri sebelum terlibat langsung dalam kegiatan produksi.",
  "Materi dalam e-modul disusun berdasarkan hasil analisis kebutuhan yang diperoleh melalui observasi dan wawancara dengan pihak perusahaan, serta mengacu pada standar kompetensi pengelasan yang berlaku. Selain menyajikan materi pembelajaran, e-modul ini juga dilengkapi dengan evaluasi pembelajaran dan job sheet praktik sebagai sarana untuk mengukur pemahaman serta kesiapan peserta PKL.",
];

const TUJUAN_ITEMS = [
  "Memahami profil serta budaya kerja di PT. Coppalt Utama Indomelt.",
  "Menerapkan prinsip Keselamatan dan Kesehatan Kerja (K3) selama kegiatan praktik.",
  "Menggunakan Alat Pelindung Diri (APD) sesuai dengan ketentuan perusahaan.",
  "Mengidentifikasi fungsi dan penggunaan peralatan kerja pengelasan.",
  "Membaca gambar kerja sederhana sebagai acuan proses fabrikasi.",
  "Menggunakan alat ukur dasar secara benar.",
  "Memahami prinsip dasar proses pengelasan SMAW.",
  "Melaksanakan teknik dasar tack weld sesuai prosedur kerja.",
  "Melakukan pemeriksaan hasil tack weld berdasarkan standar kualitas perusahaan.",
];

const CAPAIAN_ITEMS = [
  "Menjelaskan aturan dasar keselamatan kerja di lingkungan perusahaan.",
  "Menggunakan APD sesuai jenis pekerjaan yang dilakukan.",
  "Mengidentifikasi peralatan pengelasan beserta fungsinya.",
  "Membaca gambar kerja sederhana untuk pekerjaan fabrikasi.",
  "Menggunakan alat ukur dasar dengan benar.",
  "Menjelaskan prinsip kerja proses pengelasan SMAW.",
  "Melaksanakan tack weld sesuai prosedur yang berlaku.",
  "Memeriksa hasil tack weld berdasarkan aspek kualitas visual sebelum pekerjaan dilanjutkan ke tahap produksi.",
];

const PETUNJUK_ITEMS = [
  "Pelajari setiap materi secara berurutan sesuai dengan urutan yang telah disusun dalam e-modul.",
  "Bacalah tujuan pembelajaran pada setiap materi sebelum memulai proses belajar agar memahami kompetensi yang harus dicapai.",
  "Perhatikan dengan saksama setiap penjelasan, ilustrasi, gambar, dan contoh yang disajikan.",
  "Setelah menyelesaikan setiap materi, kerjakan evaluasi yang tersedia untuk mengukur tingkat pemahaman.",
  "Peserta dinyatakan dapat melanjutkan ke materi berikutnya apabila telah mencapai nilai minimal (KKM) yang ditetapkan, yaitu 75.",
  "Apabila hasil evaluasi belum mencapai nilai minimal, peserta diwajibkan mempelajari kembali materi tersebut dan mengerjakan evaluasi ulang.",
  "Jika mengalami kesulitan, peserta dapat berdiskusi atau berkonsultasi dengan pembimbing, instruktur, atau mentor di perusahaan.",
  "Setelah seluruh materi dan evaluasi berhasil diselesaikan, peserta melaksanakan Job Sheet Praktik Tack Weld.",
];

const PRASYARAT_ITEMS = [
  "Telah terdaftar sebagai peserta Praktik Kerja Lapangan (PKL) di PT. Coppalt Utama Indomelt.",
  "Mengikuti pengarahan awal mengenai tata tertib dan budaya kerja perusahaan.",
  "Memiliki kondisi fisik yang sehat sehingga dapat mengikuti kegiatan praktik dengan aman.",
  "Bersedia mematuhi seluruh peraturan keselamatan kerja yang berlaku di perusahaan.",
  "Memiliki pengetahuan dasar mengenai proses manufaktur atau pengelasan yang diperoleh selama pembelajaran di sekolah atau perguruan tinggi.",
];

const PROFIL = {
  sejarah:
    "PT. Coppalt Utama Indomelt merupakan perusahaan manufaktur yang bergerak di bidang pengecoran logam (metal casting), permesinan (machining), serta pembuatan mold and dies. Perusahaan didirikan pada tahun 1998 oleh para insinyur berpengalaman di bidang pengecoran logam dan terus berkembang menjadi salah satu perusahaan foundry terkemuka di Indonesia.",
  visi: '"To become the best foundry company in the world by providing better technical solutions to our customers."',
  bidangUsaha: [
    "Metal Casting: Sand Casting, Disamatic Casting, Investment Casting",
    "Machining (permesinan presisi)",
    "Mold and Dies (pembuatan cetakan)",
    "Pembuatan komponen logam ferro dan non-ferro",
  ],
  fasilitas: [
    "Tungku peleburan (Induction Furnace)",
    "Mesin CNC, Mesin Bubut, Mesin Frais, Mesin Bor, Mesin Gerinda",
    "Mesin Las dan Peralatan Inspeksi Kualitas",
  ],
};

// ── Print CSS ─────────────────────────────────────────────────────────────────

const PRINT_CSS = `
@media screen {
  #emodul-pdf { display: none; }
}
@media print {
  @page { size: A4 portrait; margin: 20mm 22mm; }
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }
  body * { visibility: hidden !important; }
  #emodul-pdf {
    display: block !important;
    visibility: visible !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    background: white !important;
    color: #1a1a1a !important;
    font-family: 'Times New Roman', Times, serif;
    font-size: 11pt;
    line-height: 1.65;
  }
  #emodul-pdf * { visibility: visible !important; }
  .pdf-cover { page-break-after: always !important; }
  .pdf-page-break { page-break-before: always !important; }
  .pdf-avoid { page-break-inside: avoid !important; }
  img {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
`;

// ── Styles ────────────────────────────────────────────────────────────────────

const S = {
  body: { fontFamily: "'Times New Roman', Times, serif", fontSize: '11pt', color: '#1a1a1a', lineHeight: '1.65' } as React.CSSProperties,
  h1: { fontSize: '18pt', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 6px', textAlign: 'center' as const },
  h2: { fontSize: '14pt', fontWeight: 'bold', color: '#c45c00', margin: '18px 0 6px', borderBottom: '2px solid #c45c00', paddingBottom: '4px' },
  h3: { fontSize: '12pt', fontWeight: 'bold', color: '#1a1a1a', margin: '12px 0 5px' },
  p: { fontSize: '11pt', lineHeight: '1.65', margin: '6px 0', textAlign: 'justify' as const },
  ul: { margin: '5px 0 5px 20px', padding: 0 },
  li: { fontSize: '11pt', lineHeight: '1.65', margin: '3px 0' },
  figcap: { textAlign: 'center' as const, fontSize: '10pt', color: '#555', fontStyle: 'italic', marginTop: '4px' },
  figcapSrc: { display: 'block', fontSize: '9pt', color: '#777' },
  infobox: { margin: '10px 0', borderLeft: '4px solid #c45c00', background: '#fff8f0', padding: '10px 14px' },
  infoboxTitle: { fontWeight: 'bold', fontSize: '11pt', margin: '0 0 4px', color: '#c45c00' },
  infoboxText: { fontSize: '10pt', lineHeight: '1.5', margin: 0 },
  table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: '10pt', margin: '4px 0' },
  th: { border: '1px solid #aaa', padding: '5px 8px', textAlign: 'left' as const, fontWeight: 'bold', background: '#f0f0f0' },
  td: { border: '1px solid #aaa', padding: '5px 8px' },
  tdAlt: { border: '1px solid #aaa', padding: '5px 8px', background: '#f9f9f9' },
  checklist: { margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px', padding: '10px 14px' },
  checklistTitle: { fontWeight: 'bold', fontSize: '11pt', margin: '0 0 6px' },
  videoPH: { margin: '10px 0', border: '1px dashed #ccc', padding: '10px 14px', color: '#888', fontStyle: 'italic', fontSize: '10pt', borderRadius: '4px' },
  divider: { borderBottom: '1px solid #e0e0e0', margin: '14px 0 10px' },
  sectionLabel: { display: 'inline-block', background: '#c45c00', color: 'white', fontWeight: 'bold', fontSize: '10pt', padding: '2px 10px', borderRadius: '3px', marginBottom: '4px' },
};

// ── Content item renderer ─────────────────────────────────────────────────────

function PrintItem({ item, idx }: { item: ContentItem; idx: number }) {
  switch (item.kind) {
    case 'heading':
      return <h3 style={S.h3}>{item.text}</h3>;

    case 'para':
      return <p style={S.p}>{item.text}</p>;

    case 'bullets':
      return (
        <ul style={S.ul}>
          {item.items.map((t, i) => (
            <li key={i} style={S.li}>{t}</li>
          ))}
        </ul>
      );

    case 'image': {
      const src = docImages[item.file];
      if (!src) return null;
      return (
        <figure style={{ margin: '12px 0', pageBreakInside: 'avoid' }} className="pdf-avoid">
          <img src={src} alt={item.caption} style={{ maxWidth: '80%', display: 'block', margin: '0 auto', border: '1px solid #ddd' }} />
          <figcaption style={S.figcap}>
            {item.caption}
            {item.source && <span style={S.figcapSrc}>Sumber: {item.source}</span>}
          </figcaption>
        </figure>
      );
    }

    case 'gallery':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '10px 0', pageBreakInside: 'avoid' }} className="pdf-avoid">
          {item.images.map((img, i) => {
            const src = docImages[img.file];
            if (!src) return null;
            return (
              <figure key={i} style={{ margin: 0, textAlign: 'center', flex: '1 1 45%' }}>
                <img src={src} alt={img.caption} style={{ maxWidth: '100%', maxHeight: '110px', objectFit: 'contain', border: '1px solid #ddd' }} />
                {img.caption && <figcaption style={{ ...S.figcap, fontSize: '9pt' }}>{img.caption}</figcaption>}
              </figure>
            );
          })}
        </div>
      );

    case 'table':
      return (
        <div style={{ margin: '10px 0', pageBreakInside: 'avoid' }} className="pdf-avoid">
          {item.caption && <p style={{ fontSize: '10pt', fontStyle: 'italic', marginBottom: '4px', color: '#555' }}>{item.caption}</p>}
          <table style={S.table}>
            <thead>
              <tr>
                {item.cols.map((col, i) => <th key={i} style={S.th}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={ri % 2 === 1 ? S.tdAlt : S.td}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'infobox':
      return (
        <div style={S.infobox} className="pdf-avoid">
          <p style={S.infoboxTitle}>{item.title}</p>
          <p style={S.infoboxText}>{item.text}</p>
        </div>
      );

    case 'checklist':
      return (
        <div style={S.checklist} className="pdf-avoid">
          <p style={S.checklistTitle}>{item.title}</p>
          <ul style={S.ul}>
            {item.items.map((t, i) => (
              <li key={i} style={{ ...S.li, listStyleType: 'circle' }}>☐ {t}</li>
            ))}
          </ul>
        </div>
      );

    case 'video':
      return (
        <div style={S.videoPH}>
          📹 Video pembelajaran tersedia secara digital di platform E-Modul Pengelasan SMAW.
        </div>
      );

    default:
      return null;
  }
}

// ── Main component ────────────────────────────────────────────────────────────

export default function DownloadEmodul() {
  const { progress } = useProgress();
  const allDone = progress.completedModules.length >= 8;

  useEffect(() => {
    if (document.getElementById("emodul-pdf-css")) return;
    const s = document.createElement("style");
    s.id = "emodul-pdf-css";
    s.textContent = PRINT_CSS;
    document.head.appendChild(s);
    return () => { document.getElementById("emodul-pdf-css")?.remove(); };
  }, []);

  return (
    <>
      {/* ── Screen UI ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full pb-12">
        <Link
          href="/materi"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary w-fit transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" /> Kembali ke Materi
        </Link>

        {/* Header */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Unduh Dokumen</p>
            <h1 className="text-2xl font-extrabold text-foreground">E-Modul Pengelasan SMAW</h1>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Dokumen PDF berisi <strong className="text-foreground">Pendahuluan</strong> dan seluruh{" "}
              <strong className="text-foreground">8 Modul Materi</strong> lengkap dengan gambar, tabel, dan ringkasan setiap modul.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" /> 8 Modul</span>
            <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-primary" /> Format A4</span>
            <span className="flex items-center gap-1.5"><Printer className="w-4 h-4 text-primary" /> Print / Save PDF</span>
          </div>
        </div>

        {/* Module completion status */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-bold text-foreground">Status Penyelesaian Modul</h2>
            <span className="text-sm font-semibold text-primary">
              {progress.completedModules.length}/8 Selesai
            </span>
          </div>
          <div className="divide-y divide-border">
            {modulesData.map((mod) => {
              const done = progress.completedModules.includes(mod.id);
              const score = progress.moduleScores[mod.id] ?? null;
              return (
                <div key={mod.id} className="flex items-center gap-3 px-6 py-3">
                  {done ? (
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  ) : (
                    <Lock className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                  )}
                  <span className={`flex-1 text-sm ${done ? "text-foreground" : "text-muted-foreground/50"}`}>
                    Modul {mod.id} — {mod.title}
                  </span>
                  {score !== null && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      score >= 75 ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                    }`}>
                      {score}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Download button */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          {!allDone && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 mb-5 text-sm">
              <span className="text-yellow-400 font-bold flex-shrink-0 mt-0.5">⚠</span>
              <p className="text-yellow-300/90 leading-relaxed">
                Dokumen tetap dapat diunduh sebelum semua modul diselesaikan.
                Namun disarankan untuk menyelesaikan seluruh materi terlebih dahulu agar dokumen yang diunduh mencerminkan keseluruhan konten yang telah dipelajari.
              </p>
            </div>
          )}
          <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5 hover:shadow-primary/25"
          >
            <Download className="w-5 h-5" />
            {allDone ? "Unduh E-Modul PDF (Semua Modul Selesai)" : "Unduh E-Modul PDF"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Gunakan browser dialog "Save as PDF" pada dialog cetak yang muncul untuk menyimpan file PDF.
          </p>
        </div>
      </div>

      {/* ── Print-only content ────────────────────────────────────────────────── */}
      <div id="emodul-pdf" style={{ ...S.body, background: 'white', padding: 0 }}>

        {/* ── COVER PAGE ────────────────────────────────────────────────────── */}
        <div className="pdf-cover" style={{ minHeight: '277mm', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20mm 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginBottom: '28px' }}>
            <img src={logoCui} alt="Logo CUI" style={{ height: '80px', objectFit: 'contain' }} />
            <div style={{ width: '1px', height: '60px', background: '#ccc' }} />
            <img src={logoUpi} alt="Logo UPI" style={{ height: '65px', objectFit: 'contain' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '12pt', color: '#555', margin: '0 0 8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>E-Modul Pembelajaran</p>
            <h1 style={{ ...S.h1, fontSize: '26pt', marginBottom: '6px' }}>PENGELASAN SMAW</h1>
            <p style={{ fontSize: '13pt', color: '#c45c00', fontWeight: 'bold', margin: '0 0 16px' }}>Shielded Metal Arc Welding</p>
            <div style={{ width: '60px', height: '3px', background: '#c45c00', margin: '0 auto 16px' }} />
            <p style={{ fontSize: '11pt', color: '#444', margin: '0', fontStyle: 'italic' }}>
              Standar Kompetensi PT. Coppalt Utama Indomelt (CUI)
            </p>
          </div>

          <div style={{ marginTop: '40px', borderTop: '1px solid #ddd', paddingTop: '20px', width: '80%' }}>
            <p style={{ fontSize: '10pt', color: '#555', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Penyusun</p>
            <p style={{ fontSize: '12pt', fontWeight: 'bold', margin: '0 0 2px' }}>Ahmad Solehudin</p>
            <p style={{ fontSize: '10pt', color: '#555', margin: '0 0 16px' }}>Pendidikan Teknik Mesin, Universitas Pendidikan Indonesia</p>

            <p style={{ fontSize: '10pt', color: '#555', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Pembimbing</p>
            <p style={{ fontSize: '10pt', margin: '0 0 2px' }}>Dr. H. Purnawan, S.Pd., M.T.</p>
            <p style={{ fontSize: '10pt', margin: '0 0 16px' }}>Asep Hadian Sasmita, S.Pd., M.Pd.</p>

            <p style={{ fontSize: '10pt', color: '#555', margin: '16px 0 0' }}>Bandung, 2026</p>
          </div>
        </div>

        {/* ── PENDAHULUAN ───────────────────────────────────────────────────── */}
        <div className="pdf-page-break">
          <h2 style={{ ...S.h2, fontSize: '16pt' }}>PENDAHULUAN</h2>

          <h3 style={S.h3}>A. Deskripsi E-Modul</h3>
          {DESKRIPSI.map((p, i) => <p key={i} style={S.p}>{p}</p>)}

          <h3 style={{ ...S.h3, marginTop: '14px' }}>B. Tujuan Pembelajaran</h3>
          <p style={S.p}>Setelah mempelajari e-modul ini, peserta diharapkan mampu:</p>
          <ol style={{ ...S.ul, listStyleType: 'decimal' }}>
            {TUJUAN_ITEMS.map((t, i) => <li key={i} style={S.li}>{t}</li>)}
          </ol>

          <h3 style={{ ...S.h3, marginTop: '14px' }}>C. Capaian Pembelajaran</h3>
          <p style={S.p}>Setelah menyelesaikan seluruh materi, peserta mampu menunjukkan kompetensi sebagai berikut:</p>
          <ol style={{ ...S.ul, listStyleType: 'decimal' }}>
            {CAPAIAN_ITEMS.map((t, i) => <li key={i} style={S.li}>{t}</li>)}
          </ol>

          <h3 style={{ ...S.h3, marginTop: '14px' }}>D. Petunjuk Penggunaan E-Modul</h3>
          <p style={S.p}>Agar proses pembelajaran berlangsung secara optimal, peserta diharapkan mengikuti petunjuk berikut:</p>
          <ol style={{ ...S.ul, listStyleType: 'decimal' }}>
            {PETUNJUK_ITEMS.map((t, i) => <li key={i} style={S.li}>{t}</li>)}
          </ol>

          <h3 style={{ ...S.h3, marginTop: '14px' }}>E. Prasyarat Pembelajaran</h3>
          <ul style={{ ...S.ul, listStyleType: 'disc' }}>
            {PRASYARAT_ITEMS.map((t, i) => <li key={i} style={S.li}>{t}</li>)}
          </ul>

          <h3 style={{ ...S.h3, marginTop: '14px' }}>F. Profil Perusahaan — PT. Coppalt Utama Indomelt</h3>
          <p style={{ ...S.p, fontWeight: 'bold', marginBottom: '2px' }}>Sejarah Singkat</p>
          <p style={S.p}>{PROFIL.sejarah}</p>
          <p style={{ ...S.p, fontWeight: 'bold', marginBottom: '2px', marginTop: '10px' }}>Visi Perusahaan</p>
          <p style={{ ...S.p, fontStyle: 'italic', borderLeft: '3px solid #c45c00', paddingLeft: '10px', color: '#444' }}>{PROFIL.visi}</p>
          <p style={{ ...S.p, fontWeight: 'bold', marginBottom: '2px', marginTop: '10px' }}>Bidang Usaha</p>
          <ul style={{ ...S.ul, listStyleType: 'disc' }}>
            {PROFIL.bidangUsaha.map((t, i) => <li key={i} style={S.li}>{t}</li>)}
          </ul>
          <p style={{ ...S.p, fontWeight: 'bold', marginBottom: '2px', marginTop: '10px' }}>Fasilitas Produksi</p>
          <ul style={{ ...S.ul, listStyleType: 'disc' }}>
            {PROFIL.fasilitas.map((t, i) => <li key={i} style={S.li}>{t}</li>)}
          </ul>
        </div>

        {/* ── MODULES 1–8 ──────────────────────────────────────────────────── */}
        {moduleRichContents.map((mod) => {
          const modData = modulesData.find(m => m.id === mod.id);
          if (!modData) return null;
          return (
            <div key={mod.id} className="pdf-page-break">
              {/* Module header */}
              <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid #c45c00' }}>
                <span style={S.sectionLabel}>MODUL {mod.id}</span>
                <h2 style={{ ...S.h2, border: 'none', padding: 0, margin: '4px 0 0', fontSize: '15pt' }}>
                  {modData.title}
                </h2>
              </div>

              {/* Content items */}
              {mod.items.map((item, idx) => (
                <PrintItem key={idx} item={item} idx={idx} />
              ))}
            </div>
          );
        })}

        {/* ── FOOTER note ──────────────────────────────────────────────────── */}
        <div style={{ marginTop: '30px', paddingTop: '12px', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '9pt', color: '#888' }}>
          E-Modul Pengelasan SMAW — PT. Coppalt Utama Indomelt (CUI) — Universitas Pendidikan Indonesia, 2026
        </div>
      </div>
    </>
  );
}
