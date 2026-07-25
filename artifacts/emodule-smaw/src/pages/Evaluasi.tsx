import { useState, useRef } from "react";
import { CheckCircle2, XCircle, Clock, FileQuestion, RotateCcw, AlertTriangle, ArrowRight, CheckCircle, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { useProgress } from "@/contexts/ProgressContext";

// ── Data ──────────────────────────────────────────────────────────────────────

type Option = { key: string; text: string };
type Question = { id: number; text: string; options: Option[]; answer: string };
type Section = { label: string; title: string; questions: Question[] };

const SECTIONS: Section[] = [
  {
    label: "A",
    title: "Profil Perusahaan",
    questions: [
      {
        id: 1,
        text: "PT. Coppalt Utama Indomelt bergerak di bidang ....",
        options: [
          { key: "A", text: "Otomotif" },
          { key: "B", text: "Manufaktur logam" },
          { key: "C", text: "Perdagangan" },
          { key: "D", text: "Elektronik" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "PT. Coppalt Utama Indomelt didirikan pada tahun ....",
        options: [
          { key: "A", text: "1995" },
          { key: "B", text: "1997" },
          { key: "C", text: "1998" },
          { key: "D", text: "2000" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Salah satu bidang usaha PT. Coppalt Utama Indomelt adalah ....",
        options: [
          { key: "A", text: "Pembuatan tekstil" },
          { key: "B", text: "Investment Casting" },
          { key: "C", text: "Perakitan komputer" },
          { key: "D", text: "Produksi makanan" },
        ],
        answer: "B",
      },
    ],
  },
  {
    label: "B",
    title: "Keselamatan dan Kesehatan Kerja (K3)",
    questions: [
      {
        id: 4,
        text: "Tujuan utama penerapan K3 di lingkungan kerja adalah ....",
        options: [
          { key: "A", text: "Mempercepat pekerjaan" },
          { key: "B", text: "Mengurangi biaya produksi" },
          { key: "C", text: "Melindungi pekerja dari kecelakaan kerja" },
          { key: "D", text: "Mengurangi jumlah pekerja" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Berikut yang merupakan potensi bahaya pada proses SMAW adalah ....",
        options: [
          { key: "A", text: "Debu kayu" },
          { key: "B", text: "Sengatan listrik" },
          { key: "C", text: "Air hujan" },
          { key: "D", text: "Bau cat" },
        ],
        answer: "B",
      },
      {
        id: 6,
        text: "Sebelum memulai pekerjaan pengelasan, pekerja harus ....",
        options: [
          { key: "A", text: "Menyalakan mesin terlebih dahulu" },
          { key: "B", text: "Menggunakan APD lengkap" },
          { key: "C", text: "Membersihkan hasil las" },
          { key: "D", text: "Mengganti elektroda" },
        ],
        answer: "B",
      },
      {
        id: 7,
        text: "Rambu keselamatan yang menunjukkan adanya bahaya disebut ....",
        options: [
          { key: "A", text: "Rambu perintah" },
          { key: "B", text: "Rambu larangan" },
          { key: "C", text: "Rambu kondisi aman" },
          { key: "D", text: "Rambu peringatan" },
        ],
        answer: "D",
      },
      {
        id: 8,
        text: "Fungsi utama helm las adalah ....",
        options: [
          { key: "A", text: "Melindungi kepala dari benturan" },
          { key: "B", text: "Melindungi wajah dan mata dari radiasi las" },
          { key: "C", text: "Melindungi tangan" },
          { key: "D", text: "Melindungi kaki" },
        ],
        answer: "B",
      },
    ],
  },
  {
    label: "C",
    title: "Alat Pelindung Diri (APD)",
    questions: [
      {
        id: 9,
        text: "APD yang digunakan untuk melindungi sistem pernapasan adalah ....",
        options: [
          { key: "A", text: "Safety shoes" },
          { key: "B", text: "Sarung tangan" },
          { key: "C", text: "Masker" },
          { key: "D", text: "Helm las" },
        ],
        answer: "C",
      },
      {
        id: 10,
        text: "Sebelum digunakan, APD harus ....",
        options: [
          { key: "A", text: "Dicuci" },
          { key: "B", text: "Dipinjam" },
          { key: "C", text: "Diperiksa kelayakannya" },
          { key: "D", text: "Dicat" },
        ],
        answer: "C",
      },
      {
        id: 11,
        text: "Penggunaan APD merupakan bagian dari penerapan ....",
        options: [
          { key: "A", text: "ISO" },
          { key: "B", text: "SOP" },
          { key: "C", text: "K3" },
          { key: "D", text: "QC" },
        ],
        answer: "C",
      },
    ],
  },
  {
    label: "D",
    title: "Pengenalan Peralatan Kerja",
    questions: [
      {
        id: 12,
        text: "Fungsi holder elektroda adalah ....",
        options: [
          { key: "A", text: "Menjepit benda kerja" },
          { key: "B", text: "Menjepit elektroda dan menghantarkan arus" },
          { key: "C", text: "Membersihkan terak" },
          { key: "D", text: "Mengukur material" },
        ],
        answer: "B",
      },
      {
        id: 13,
        text: "Alat yang digunakan untuk membersihkan terak adalah ....",
        options: [
          { key: "A", text: "Meteran" },
          { key: "B", text: "Palu terak" },
          { key: "C", text: "Ragum" },
          { key: "D", text: "Tang" },
        ],
        answer: "B",
      },
      {
        id: 14,
        text: "Sebelum digunakan, kabel las harus dipastikan ....",
        options: [
          { key: "A", text: "Berwarna hitam" },
          { key: "B", text: "Panjang" },
          { key: "C", text: "Tidak terkelupas" },
          { key: "D", text: "Dililit" },
        ],
        answer: "C",
      },
    ],
  },
  {
    label: "E",
    title: "Membaca Gambar Kerja & Pengukuran",
    questions: [
      {
        id: 15,
        text: "Fungsi utama gambar kerja adalah ....",
        options: [
          { key: "A", text: "Menghias benda kerja" },
          { key: "B", text: "Pedoman proses fabrikasi" },
          { key: "C", text: "Menentukan harga material" },
          { key: "D", text: "Menentukan jumlah pekerja" },
        ],
        answer: "B",
      },
      {
        id: 16,
        text: "Material yang digunakan pada praktik tack weld adalah ....",
        options: [
          { key: "A", text: "Aluminium" },
          { key: "B", text: "Stainless Steel" },
          { key: "C", text: "Mild Steel SS400" },
          { key: "D", text: "Besi cor" },
        ],
        answer: "C",
      },
      {
        id: 17,
        text: "Simbol las yang digunakan pada praktik tack weld adalah ....",
        options: [
          { key: "A", text: "Square Groove" },
          { key: "B", text: "Single V Groove" },
          { key: "C", text: "Fillet Weld" },
          { key: "D", text: "Plug Weld" },
        ],
        answer: "C",
      },
      {
        id: 18,
        text: "Alat ukur yang digunakan untuk memeriksa kesikuan adalah ....",
        options: [
          { key: "A", text: "Meteran" },
          { key: "B", text: "Jangka sorong" },
          { key: "C", text: "Siku baja" },
          { key: "D", text: "Mistar gulung" },
        ],
        answer: "C",
      },
      {
        id: 19,
        text: "Sebelum tack weld dilakukan, sudut sambungan harus diperiksa sebesar ....",
        options: [
          { key: "A", text: "45°" },
          { key: "B", text: "60°" },
          { key: "C", text: "75°" },
          { key: "D", text: "90°" },
        ],
        answer: "D",
      },
      {
        id: 20,
        text: "Ketelitian pengukuran bertujuan untuk ....",
        options: [
          { key: "A", text: "Mengurangi kualitas" },
          { key: "B", text: "Menghindari kesalahan fabrikasi" },
          { key: "C", text: "Mempercepat pengelasan" },
          { key: "D", text: "Menghemat elektroda" },
        ],
        answer: "B",
      },
    ],
  },
  {
    label: "F",
    title: "Dasar-Dasar Pengelasan SMAW",
    questions: [
      {
        id: 21,
        text: "SMAW merupakan singkatan dari ....",
        options: [
          { key: "A", text: "Shielded Metal Arc Welding" },
          { key: "B", text: "Standard Metal Arc Welding" },
          { key: "C", text: "Steel Manual Arc Welding" },
          { key: "D", text: "Shield Machine Arc Welding" },
        ],
        answer: "A",
      },
      {
        id: 22,
        text: "Elektroda yang digunakan pada praktik awal adalah ....",
        options: [
          { key: "A", text: "E7018" },
          { key: "B", text: "E6010" },
          { key: "C", text: "E6013" },
          { key: "D", text: "E7024" },
        ],
        answer: "C",
      },
      {
        id: 23,
        text: "Posisi pengelasan yang digunakan pada praktik tack weld adalah ....",
        options: [
          { key: "A", text: "2F" },
          { key: "B", text: "3F" },
          { key: "C", text: "1F" },
          { key: "D", text: "4F" },
        ],
        answer: "C",
      },
      {
        id: 24,
        text: "Cacat las yang disebabkan oleh arus terlalu besar adalah ....",
        options: [
          { key: "A", text: "Porositas" },
          { key: "B", text: "Undercut" },
          { key: "C", text: "Slag Inclusion" },
          { key: "D", text: "Lack of Fusion" },
        ],
        answer: "B",
      },
    ],
  },
  {
    label: "G",
    title: "Teknik Dasar Tack Weld",
    questions: [
      {
        id: 25,
        text: "Tujuan utama tack weld adalah ....",
        options: [
          { key: "A", text: "Menambah ketebalan pelat" },
          { key: "B", text: "Menahan posisi benda kerja sebelum pengelasan penuh" },
          { key: "C", text: "Membersihkan logam" },
          { key: "D", text: "Mengurangi arus las" },
        ],
        answer: "B",
      },
      {
        id: 26,
        text: "Panjang tack weld yang dianjurkan adalah ....",
        options: [
          { key: "A", text: "5–10 mm" },
          { key: "B", text: "10–20 mm" },
          { key: "C", text: "20–30 mm" },
          { key: "D", text: "30–40 mm" },
        ],
        answer: "B",
      },
      {
        id: 27,
        text: "Sebelum tack weld dilakukan, permukaan logam harus ....",
        options: [
          { key: "A", text: "Dicat" },
          { key: "B", text: "Dibersihkan" },
          { key: "C", text: "Dipanaskan" },
          { key: "D", text: "Dipoles" },
        ],
        answer: "B",
      },
      {
        id: 28,
        text: "Pemeriksaan hasil tack weld dilakukan setelah ....",
        options: [
          { key: "A", text: "Material dipotong" },
          { key: "B", text: "Terak dibersihkan" },
          { key: "C", text: "Mesin dimatikan" },
          { key: "D", text: "Elektroda diganti" },
        ],
        answer: "B",
      },
      {
        id: 29,
        text: "Salah satu kriteria hasil tack weld yang baik adalah ....",
        options: [
          { key: "A", text: "Banyak percikan" },
          { key: "B", text: "Terdapat retak" },
          { key: "C", text: "Posisi benda kerja sesuai gambar kerja" },
          { key: "D", text: "Tack weld sangat panjang" },
        ],
        answer: "C",
      },
      {
        id: 30,
        text: "Jika ditemukan porositas pada tack weld, tindakan yang tepat adalah ....",
        options: [
          { key: "A", text: "Menambah arus" },
          { key: "B", text: "Membiarkannya" },
          { key: "C", text: "Membersihkan material dan menggunakan elektroda kering" },
          { key: "D", text: "Mengurangi panjang tack weld" },
        ],
        answer: "C",
      },
    ],
  },
];

const ALL_QUESTIONS: Question[] = SECTIONS.flatMap(s => s.questions);
const TOTAL = ALL_QUESTIONS.length;
const PASS = 75;

function gradeLabel(score: number) {
  if (score >= 90) return { text: "Sangat Baik", color: "text-green-400" };
  if (score >= 75) return { text: "Kompeten", color: "text-green-500" };
  if (score >= 60) return { text: "Cukup", color: "text-yellow-400" };
  return { text: "Belum Kompeten", color: "text-red-400" };
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Evaluasi() {
  const { completeEvaluasi } = useProgress();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let correct = 0;
    for (const q of ALL_QUESTIONS) {
      if (selectedAnswers[q.id] === q.answer) correct++;
    }
    const s = Math.round((correct / TOTAL) * 100);
    setCorrectCount(correct);
    setScore(s);
    setHasSubmitted(true);
    completeEvaluasi(s);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleRetry = () => {
    setHasSubmitted(false);
    setSelectedAnswers({});
    setScore(0);
    setCorrectCount(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const passed = score >= PASS;

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full pb-12">
      {/* Back link */}
      <Link
        href="/materi"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary w-fit transition-colors text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali ke Materi
      </Link>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
            Evaluasi Akhir
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold text-foreground mb-1">
          Evaluasi Keseluruhan Materi Pengelasan SMAW
        </h1>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-4 mt-3 pb-5 border-b border-border text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <FileQuestion className="w-4 h-4" />
            {TOTAL} soal pilihan ganda
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Nilai minimal lulus: <span className="text-primary font-semibold ml-1">{PASS}</span>
          </span>
          {!hasSubmitted && (
            <span className="ml-auto font-medium text-foreground">
              Terjawab:{" "}
              <span className={answeredCount === TOTAL ? "text-green-500" : "text-primary"}>
                {answeredCount}
              </span>
              /{TOTAL}
            </span>
          )}
        </div>

        {!hasSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-7 space-y-10">
            {SECTIONS.map((section, si) => (
              <div key={section.label} className={si > 0 ? "pt-8 border-t border-border" : ""}>
                {/* Section divider */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-extrabold flex-shrink-0">
                    {section.label}
                  </span>
                  <h2 className="text-base font-bold text-foreground">{section.title}</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="space-y-8">
                  {section.questions.map((q) => (
                    <div key={q.id} className="space-y-4">
                      <h3 className="font-semibold text-base text-foreground leading-relaxed flex gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold mr-1 flex-shrink-0 mt-0.5">
                          {q.id}
                        </span>
                        {q.text}
                      </h3>
                      <div className="space-y-2.5 pl-9">
                        {q.options.map(opt => {
                          const isSelected = selectedAnswers[q.id] === opt.key;
                          return (
                            <label
                              key={opt.key}
                              className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                                isSelected
                                  ? "border-primary bg-primary/10 shadow-sm"
                                  : "border-border hover:border-primary/40 hover:bg-muted/30 bg-background"
                              }`}
                            >
                              <input
                                type="radio"
                                name={`q-${q.id}`}
                                value={opt.key}
                                checked={isSelected}
                                onChange={() =>
                                  setSelectedAnswers(prev => ({ ...prev, [q.id]: opt.key }))
                                }
                                className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
                              />
                              <span className="flex gap-2 text-foreground leading-snug">
                                <span className="font-bold text-primary flex-shrink-0">{opt.key}.</span>
                                {opt.text}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Submit */}
            <div className="pt-6 border-t border-border">
              {answeredCount < TOTAL && (
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Masih ada <span className="text-primary font-semibold">{TOTAL - answeredCount} soal</span> yang belum dijawab.
                </p>
              )}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:bg-primary/90 transition-colors shadow-md disabled:opacity-50"
              >
                Kumpulkan Jawaban
              </button>
            </div>
          </form>
        ) : (
          <div ref={resultRef} className="mt-8">
            {/* Score card */}
            <div
              className={`flex flex-col items-center text-center py-10 px-6 rounded-2xl border mb-8 ${
                passed
                  ? "bg-green-500/5 border-green-500/30"
                  : "bg-destructive/5 border-destructive/30"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-5 ${
                  passed
                    ? "bg-green-500/20 border-2 border-green-500/50"
                    : "bg-destructive/20 border-2 border-destructive/50"
                }`}
              >
                {passed ? (
                  <CheckCircle className="w-12 h-12 text-green-500" />
                ) : (
                  <AlertTriangle className="w-12 h-12 text-destructive" />
                )}
              </div>

              <h2 className="text-3xl font-extrabold text-foreground mb-1">
                {passed ? "Selamat, Anda Lulus!" : "Belum Lulus"}
              </h2>
              <div className="flex items-baseline gap-1 mt-1 mb-3">
                <span className={`text-5xl font-extrabold ${passed ? "text-green-500" : "text-destructive"}`}>
                  {score}
                </span>
                <span className="text-muted-foreground text-lg">/ 100</span>
              </div>

              <div className="flex gap-6 text-sm mb-4">
                <span className="flex items-center gap-1.5 text-green-500 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> {correctCount} benar
                </span>
                <span className="flex items-center gap-1.5 text-destructive font-medium">
                  <XCircle className="w-4 h-4" /> {TOTAL - correctCount} salah
                </span>
              </div>

              <p className="text-foreground/75 max-w-sm text-sm">
                {passed
                  ? "Anda telah menguasai keseluruhan materi Pengelasan SMAW. Lanjutkan ke Job Sheet Praktik."
                  : "Nilai minimum kelulusan adalah 75. Pelajari kembali materi dan coba lagi."}
              </p>
            </div>

            {/* Answer review */}
            <h3 className="text-base font-bold text-foreground mb-4">Pembahasan Jawaban</h3>

            {SECTIONS.map((section, si) => (
              <div key={section.label} className={si > 0 ? "mt-8 pt-6 border-t border-border" : ""}>
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-primary-foreground text-xs font-extrabold flex-shrink-0">
                    {section.label}
                  </span>
                  <h4 className="text-sm font-bold text-foreground">{section.title}</h4>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="space-y-4">
                  {section.questions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.answer;
                    return (
                      <div
                        key={q.id}
                        className={`rounded-xl border p-5 ${
                          isCorrect ? "border-green-500/30 bg-green-500/5" : "border-destructive/30 bg-destructive/5"
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                          )}
                          <p className="font-semibold text-foreground leading-snug text-sm">
                            <span className="mr-1 text-muted-foreground">{q.id}.</span>
                            {q.text}
                          </p>
                        </div>
                        <div className="space-y-1.5 pl-8">
                          {q.options.map(opt => {
                            const isAnswer = opt.key === q.answer;
                            const isUserPick = opt.key === selected;
                            return (
                              <div
                                key={opt.key}
                                className={`flex items-start gap-2 px-3 py-2 rounded-lg text-sm ${
                                  isAnswer
                                    ? "bg-green-500/15 text-green-400 font-semibold"
                                    : isUserPick && !isCorrect
                                    ? "bg-destructive/15 text-destructive line-through"
                                    : "text-muted-foreground"
                                }`}
                              >
                                <span className="font-bold flex-shrink-0">{opt.key}.</span>
                                <span>{opt.text}</span>
                                {isAnswer && (
                                  <span className="ml-auto text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap">
                                    Jawaban Benar
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/70 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Coba Lagi
              </button>
              <Link
                href="/materi"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/70 transition-colors inline-block"
              >
                Daftar Materi
              </Link>
              {passed && (
                <Link
                  href="/jobsheet"
                  className="ml-auto flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md inline-flex"
                >
                  Lanjut ke Job Sheet <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
