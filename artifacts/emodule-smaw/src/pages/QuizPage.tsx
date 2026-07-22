import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "wouter";
import { modulesData } from "@/data/modules";
import { useProgress } from "@/contexts/ProgressContext";
import { ChevronLeft, CheckCircle, AlertTriangle, ArrowRight, RotateCcw } from "lucide-react";

export default function QuizPage() {
  const { id } = useParams();
  const moduleId = parseInt(id || "0", 10);
  const moduleData = modulesData.find(m => m.id === moduleId);
  const { completeModule, isModuleUnlocked } = useProgress();
  const [, setLocation] = useLocation();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (moduleId && !isModuleUnlocked(moduleId)) {
      setLocation("/materi");
    }
  }, [moduleId, isModuleUnlocked, setLocation]);

  if (!moduleData) return null;

  // Placeholder quiz data
  const questions = [
    { id: 1, text: "[Pertanyaan 1 Placeholder] Apa langkah pertama sebelum memulai pengelasan?" },
    { id: 2, text: "[Pertanyaan 2 Placeholder] Berapa sudut kemiringan elektroda yang ideal?" },
    { id: 3, text: "[Pertanyaan 3 Placeholder] Bagaimana cara mengidentifikasi cacat las undercut?" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate grading (placeholder logic: pretend they got 100% or random pass)
    const simulatedScore = 85; // Fixed score for placeholder purposes
    setScore(simulatedScore);
    setHasSubmitted(true);
    completeModule(moduleId, simulatedScore);
  };

  const handleRetry = () => {
    setHasSubmitted(false);
    setSelectedAnswers({});
    setScore(0);
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full pb-12">
      <Link href={`/materi/modul/${moduleId}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary w-fit transition-colors">
        <ChevronLeft className="w-4 h-4" /> Kembali ke Materi
      </Link>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Kuis: {moduleData.title}
        </h1>
        <p className="text-muted-foreground mb-8 pb-4 border-b border-border">
          Jawab semua pertanyaan di bawah ini. Anda harus mencapai nilai 75 untuk lulus.
        </p>

        {!hasSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {questions.map((q, idx) => (
              <div key={q.id} className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">
                  {idx + 1}. {q.text}
                </h3>
                <div className="space-y-3 pl-4 border-l-2 border-primary/20">
                  {["A", "B", "C", "D"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors bg-background">
                      <input 
                        type="radio" 
                        name={`q-${q.id}`} 
                        value={opt}
                        className="w-4 h-4 text-primary bg-background border-border accent-primary focus:ring-primary"
                        required
                        checked={selectedAnswers[q.id] === opt}
                        onChange={() => setSelectedAnswers(prev => ({ ...prev, [q.id]: opt }))}
                      />
                      <span className="text-foreground">[Pilihan Jawaban {opt} Placeholder]</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-border mt-8">
              <button 
                type="submit" 
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                Kumpulkan Jawaban
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-8 space-y-6 animate-in fade-in zoom-in duration-300">
            {score >= 75 ? (
              <>
                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">Selamat, Anda Lulus!</h2>
                  <p className="text-xl text-muted-foreground">Nilai Anda: <span className="text-primary font-bold">{score}</span></p>
                </div>
                <p className="text-foreground/80 max-w-md">
                  Anda telah menguasai materi modul ini. Anda sekarang dapat melanjutkan ke modul berikutnya.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="/materi" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors inline-block">
                    Kembali ke Alur
                  </Link>
                  {moduleId < 8 && (
                    <Link href={`/materi/modul/${moduleId + 1}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md inline-flex">
                      Modul Selanjutnya <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="w-24 h-24 rounded-full bg-destructive/20 flex items-center justify-center border border-destructive/50">
                  <AlertTriangle className="w-12 h-12 text-destructive" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">Belum Lulus</h2>
                  <p className="text-xl text-muted-foreground">Nilai Anda: <span className="text-destructive font-bold">{score}</span></p>
                </div>
                <p className="text-foreground/80 max-w-md">
                  Anda harus mencapai nilai minimal 75 untuk melanjutkan. Silakan pelajari ulang materi dan coba lagi.
                </p>
                <div className="flex gap-4 mt-4">
                  <button 
                    onClick={handleRetry}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <RotateCcw className="w-4 h-4" /> Coba Lagi
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
