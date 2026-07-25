import { Link } from "wouter";
import {
  ShieldCheck, HardHat, Wrench, FileText,
  Ruler, Zap, Hammer, ClipboardCheck,
} from "lucide-react";
import weldingHero from "@/assets/welding-hero.jpg";
import logoCui from "@/assets/logo-cui-nobg.png";
import logoUpi from "@/assets/logo-upi-nobg.png";
import fotoPenyusun from "@/assets/foto-penyusun.png";
import fotoPembimbing1 from "@/assets/foto-pembimbing1.png";
import fotoPembimbing2 from "@/assets/foto-pembimbing2.png";

const MODULES = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Keselamatan dan Kesehatan Kerja (K3)",
    desc: "Prinsip K3, rambu bahaya, prosedur darurat, dan budaya kerja aman di lingkungan industri pengelasan.",
  },
  {
    id: 2,
    icon: HardHat,
    title: "Alat Pelindung Diri (APD)",
    desc: "Jenis, fungsi, cara pemakaian, dan perawatan APD yang wajib digunakan selama kegiatan pengelasan.",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Pengenalan Peralatan Kerja Pengelasan",
    desc: "Fungsi dan penggunaan mesin las, holder, kabel las, palu terak, dan peralatan pendukung lainnya.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Membaca Gambar Kerja",
    desc: "Cara membaca title block, pandangan gambar, dimensi, simbol las, dan gambar kerja sambungan T-Joint.",
  },
  {
    id: 5,
    icon: Ruler,
    title: "Penggunaan Alat Ukur",
    desc: "Penggunaan meteran, jangka sorong, dan siku baja untuk memastikan dimensi benda kerja sesuai spesifikasi.",
  },
  {
    id: 6,
    icon: Zap,
    title: "Dasar-Dasar Pengelasan SMAW",
    desc: "Prinsip kerja SMAW, jenis arus, klasifikasi elektroda E6013, posisi 1F, dan parameter pengelasan.",
  },
  {
    id: 7,
    icon: Hammer,
    title: "Teknik Dasar Tack Weld",
    desc: "Pengertian, tujuan, persiapan, dan langkah pelaksanaan tack weld pada sambungan T-Joint posisi 1F.",
  },
  {
    id: 8,
    icon: ClipboardCheck,
    title: "Pemeriksaan Hasil Tack Weld",
    desc: "Kriteria hasil tack weld yang baik, identifikasi cacat visual, dan prosedur inspeksi sesuai standar perusahaan.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 flex-1">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl min-h-[480px] flex items-center justify-center p-8">
        <div className="absolute inset-0 z-0">
          <img
            src={weldingHero}
            alt="Welder at work"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
        </div>
        
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-2">
            <img
              src={logoCui}
              alt="Logo CUI"
              className="h-20 w-20 object-contain drop-shadow-lg"
            />
            <div className="w-px h-14 bg-white/30" />
            <img
              src={logoUpi}
              alt="Logo UPI"
              className="h-14 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            E-Modul Pengelasan <span className="text-primary">SMAW</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Standar Kompetensi PT Coppal Utama Indomelt (CUI)
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="/pendahuluan" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 inline-block">
              Mulai Belajar
            </Link>
          </div>
        </div>
      </div>

      {/* Module Overview */}
      <div className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Alur Pembelajaran</p>
            <h2 className="text-2xl font-extrabold text-foreground">8 Modul Pembelajaran</h2>
          </div>
          <Link
            href="/materi"
            className="text-sm font-semibold text-primary hover:underline underline-offset-4 flex-shrink-0"
          >
            Lihat semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Modul {mod.id}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm leading-snug mb-1">{mod.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Identity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {/* Penyusun — with real photo */}
        <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors shadow-sm">
          <img
            src={fotoPenyusun}
            alt="Ahmad Solehudin"
            className="w-24 h-24 rounded-full object-cover object-top border-2 border-primary/40 shadow-md"
          />
          <div>
            <h3 className="font-bold text-foreground text-lg">Penyusun</h3>
            <p className="text-primary font-medium mt-1">Ahmad Solehudin</p>
            <p className="text-sm text-muted-foreground">Pendidikan Teknik Mesin</p>
            <p className="text-sm text-muted-foreground">Universitas Pendidikan Indonesia</p>
          </div>
        </div>

        {/* Pembimbing I */}
        <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors shadow-sm">
          <img
            src={fotoPembimbing1}
            alt="Dr. H. Purnawan, S.Pd., M.T."
            className="w-24 h-24 rounded-full object-cover object-top border-2 border-primary/40 shadow-md"
          />
          <div>
            <h3 className="font-bold text-foreground text-lg">Pembimbing I</h3>
            <p className="text-primary font-medium mt-1">Dr. H. Purnawan, S.Pd., M.T.</p>
            <p className="text-sm text-muted-foreground">Dosen Pembimbing I</p>
          </div>
        </div>

        {/* Pembimbing II */}
        <div className="bg-card border border-border p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors shadow-sm">
          <img
            src={fotoPembimbing2}
            alt="Asep Hadian Sasmita, S.Pd., M.Pd."
            className="w-24 h-24 rounded-full object-cover object-top border-2 border-primary/40 shadow-md"
          />
          <div>
            <h3 className="font-bold text-foreground text-lg">Pembimbing II</h3>
            <p className="text-primary font-medium mt-1">Asep Hadian Sasmita, S.Pd., M.Pd.</p>
            <p className="text-sm text-muted-foreground">Dosen Pembimbing II</p>
          </div>
        </div>
      </div>
    </div>
  );
}
