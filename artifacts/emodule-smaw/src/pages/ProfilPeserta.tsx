import { useProgress } from "@/contexts/ProgressContext";
import { useLocation } from "wouter";
import {
  User, CheckCircle2, Lock, Clock, Award,
  BookOpen, ClipboardCheck, FileText, RotateCcw,
  ChevronRight,
} from "lucide-react";

const MODULE_TITLES: Record<number, string> = {
  1: "Keselamatan dan Kesehatan Kerja (K3)",
  2: "Alat Pelindung Diri (APD)",
  3: "Pengenalan Peralatan Kerja Pengelasan",
  4: "Membaca Gambar Kerja",
  5: "Penggunaan Alat Ukur",
  6: "Dasar-Dasar Pengelasan SMAW",
  7: "Teknik Dasar Tack Weld",
  8: "Pemeriksaan Hasil Tack Weld",
};

function scoreColor(score: number | null) {
  if (score === null) return "text-muted-foreground";
  if (score >= 90) return "text-green-400";
  if (score >= 75) return "text-green-500";
  if (score >= 60) return "text-yellow-400";
  return "text-red-400";
}

function scoreLabel(score: number | null) {
  if (score === null) return "–";
  if (score >= 90) return "Sangat Baik";
  if (score >= 75) return "Kompeten";
  if (score >= 60) return "Cukup";
  return "Belum Kompeten";
}

function gradeColor(score: number | null) {
  if (score === null) return "bg-muted/30 border-border text-muted-foreground";
  if (score >= 75) return "bg-green-500/10 border-green-500/30 text-green-400";
  return "bg-red-500/10 border-red-500/30 text-red-400";
}

export default function ProfilPeserta() {
  const { progress, resetProgress } = useProgress();
  const [, navigate] = useLocation();

  const totalModules = 8;
  const completedCount = progress.completedModules.length;
  const overallPct = Math.round(progress.overallProgress);

  const handleReset = () => {
    if (window.confirm("Reset semua progres? Nama Anda tetap tersimpan.")) {
      resetProgress();
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full pb-12">
      {/* Page header */}
      <div>
        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Profil Peserta</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Rekam Jejak Aktivitas</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Seluruh riwayat belajar dan pencapaian Anda di E-Modul Pengelasan SMAW.
        </p>
      </div>

      {/* Identity card */}
      <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-sm">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
          <User className="w-10 h-10 text-primary" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-0.5">Peserta PKL</p>
          <h2 className="text-2xl font-extrabold text-foreground">
            {progress.participantName || <span className="italic text-muted-foreground">Nama belum diisi</span>}
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">E-Modul Pengelasan SMAW — PT. Coppalt Utama Indomelt</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              {completedCount}/{totalModules} Modul Selesai
            </span>
            {progress.evaluasiCompleted && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                <Award className="w-3.5 h-3.5" />
                Evaluasi Lulus
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Overall progress */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-foreground">Progres Keseluruhan</h3>
          <span className="text-2xl font-extrabold text-primary">{overallPct}%</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700"
            style={{ width: `${overallPct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0%</span>
          <span>Target: 100%</span>
        </div>
      </div>

      {/* Module progress table */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground">Progress Modul Materi</h3>
        </div>
        <div className="divide-y divide-border">
          {Array.from({ length: 8 }, (_, i) => i + 1).map((id) => {
            const score = progress.moduleScores[id] ?? null;
            const done = progress.completedModules.includes(id);
            const unlocked = id === 1 || (progress.completedModules.includes(id - 1) && (progress.moduleScores[id - 1] || 0) >= 75);

            return (
              <div
                key={id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-muted/20 transition-colors cursor-pointer group"
                onClick={() => unlocked && navigate(`/materi/modul/${id}`)}
              >
                {/* Status icon */}
                <div className="flex-shrink-0">
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : unlocked ? (
                    <Clock className="w-5 h-5 text-primary" />
                  ) : (
                    <Lock className="w-5 h-5 text-muted-foreground/40" />
                  )}
                </div>

                {/* Number badge */}
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold flex-shrink-0 border ${
                    done
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : unlocked
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-muted/30 border-border text-muted-foreground/40"
                  }`}
                >
                  {id}
                </span>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${
                      unlocked ? "text-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {MODULE_TITLES[id]}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {done ? "Selesai" : unlocked ? "Belum selesai" : "Terkunci"}
                  </p>
                </div>

                {/* Score */}
                <div className="flex-shrink-0 text-right">
                  {score !== null ? (
                    <div>
                      <p className={`text-lg font-extrabold ${scoreColor(score)}`}>{score}</p>
                      <p className={`text-xs font-medium ${scoreColor(score)}`}>{scoreLabel(score)}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground/40 font-medium">–</p>
                  )}
                </div>

                {unlocked && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Evaluasi */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center gap-2">
          <ClipboardCheck className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground">Evaluasi Akhir</h3>
        </div>
        <div
          className="flex items-center gap-4 px-6 py-5 hover:bg-muted/20 transition-colors cursor-pointer group"
          onClick={() => navigate("/evaluasi")}
        >
          <div
            className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${gradeColor(
              progress.evaluasiScore
            )}`}
          >
            <Award className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm">Evaluasi Keseluruhan Materi</p>
            <p className="text-xs text-muted-foreground mt-0.5">30 soal pilihan ganda · Nilai minimal lulus: 75</p>
          </div>
          <div className="flex-shrink-0 text-right">
            {progress.evaluasiScore !== null ? (
              <div>
                <p className={`text-2xl font-extrabold ${scoreColor(progress.evaluasiScore)}`}>
                  {progress.evaluasiScore}
                </p>
                <p className={`text-xs font-medium ${scoreColor(progress.evaluasiScore)}`}>
                  {scoreLabel(progress.evaluasiScore)}
                </p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground font-medium">Belum dikerjakan</p>
            )}
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </div>

      {/* Jobsheet */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground">Jobsheet Praktik</h3>
        </div>
        <div
          className="flex items-center gap-4 px-6 py-5 hover:bg-muted/20 transition-colors cursor-pointer group"
          onClick={() => navigate("/jobsheet")}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm">Job Sheet TW-01 — Tack Weld T-Joint Posisi 1F</p>
            <p className="text-xs text-muted-foreground mt-0.5">Lembar kerja praktik pengelasan SMAW</p>
          </div>
          <span className="flex-shrink-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
            Lihat
          </span>
          <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </div>

      {/* Reset */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-foreground mb-1">Reset Progres</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Hapus seluruh data progres modul, kuis, dan evaluasi. Nama Anda akan tetap tersimpan.
          Tindakan ini tidak dapat dibatalkan.
        </p>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-destructive/40 text-destructive text-sm font-bold hover:bg-destructive/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Semua Progres
        </button>
      </div>
    </div>
  );
}
