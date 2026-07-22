import { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "wouter";
import { modulesData } from "@/data/modules";
import { quizData } from "@/data/quizData";
import { useProgress } from "@/contexts/ProgressContext";
import {
  ChevronLeft, CheckCircle, AlertTriangle, ArrowRight,
  RotateCcw, CheckCircle2, XCircle, Clock, FileQuestion,
} from "lucide-react";

export default function QuizPage() {
  const { id } = useParams();
  const moduleId = parseInt(id || "0", 10);
  const moduleData = modulesData.find(m => m.id === moduleId);
  const quiz = quizData.find(q => q.moduleId === moduleId);
  const { completeModule, isModuleUnlocked } = useProgress();
  const [, setLocation] = useLocation();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [correctCount, setCorrectCount] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (moduleId && !isModuleUnlocked(moduleId)) {
      setLocation("/materi");
    }
  }, [moduleId, isModuleUnlocked, setLocation]);

  if (!moduleData || !quiz) return null;

  const questions = quiz.questions;
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let correct = 0;
    for (const q of questions) {
      if (selectedAnswers[q.id] === q.answer) correct++;
    }
    const calculatedScore = Math.round((correct / totalQuestions) * 100);
    setCorrectCount(correct);
    setScore(calculatedScore);
    setHasSubmitted(true);
    completeModule(moduleId, calculatedScore);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleRetry = () => {
    setHasSubmitted(false);
    setSelectedAnswers({});
    setScore(0);
    setCorrectCount(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full pb-12">
      <Link
        href={`/materi/modul/${moduleId}`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary w-fit transition-colors text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali ke Materi
      </Link>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
            Evaluasi Modul {moduleId}
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-extrabold text-foreground mb-1">
          {moduleData.title}
        </h1>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-4 mt-3 pb-5 border-b border-border text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <FileQuestion className="w-4 h-4" />
            {totalQuestions} soal pilihan ganda
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Nilai minimal lulus: <span className="text-primary font-semibold ml-1">75</span>
          </span>
          {!hasSubmitted && (
            <span className="ml-auto font-medium text-foreground">
              Terjawab:{" "}
              <span className={answeredCount === totalQuestions ? "text-green-500" : "text-primary"}>
                {answeredCount}
              </span>
              /{totalQuestions}
            </span>
          )}
        </div>

        {!hasSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-7 space-y-10">
            {questions.map((q, idx) => (
              <div key={q.id} className="space-y-4">
                <h3 className="font-semibold text-base text-foreground leading-relaxed">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold mr-2 flex-shrink-0">
                    {idx + 1}
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
                          required
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

            {/* Submit */}
            <div className="pt-6 border-t border-border">
              {answeredCount < totalQuestions && (
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Masih ada <span className="text-primary font-semibold">{totalQuestions - answeredCount} soal</span> yang belum dijawab.
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
                score >= 75
                  ? "bg-green-500/5 border-green-500/30"
                  : "bg-destructive/5 border-destructive/30"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-5 ${
                  score >= 75
                    ? "bg-green-500/20 border-2 border-green-500/50"
                    : "bg-destructive/20 border-2 border-destructive/50"
                }`}
              >
                {score >= 75 ? (
                  <CheckCircle className="w-12 h-12 text-green-500" />
                ) : (
                  <AlertTriangle className="w-12 h-12 text-destructive" />
                )}
              </div>

              <h2 className="text-3xl font-extrabold text-foreground mb-1">
                {score >= 75 ? "Selamat, Anda Lulus!" : "Belum Lulus"}
              </h2>
              <div className="flex items-baseline gap-1 mt-1 mb-3">
                <span
                  className={`text-5xl font-extrabold ${
                    score >= 75 ? "text-green-500" : "text-destructive"
                  }`}
                >
                  {score}
                </span>
                <span className="text-muted-foreground text-lg">/ 100</span>
              </div>

              <div className="flex gap-6 text-sm mb-4">
                <span className="flex items-center gap-1.5 text-green-500 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> {correctCount} benar
                </span>
                <span className="flex items-center gap-1.5 text-destructive font-medium">
                  <XCircle className="w-4 h-4" /> {totalQuestions - correctCount} salah
                </span>
              </div>

              <p className="text-foreground/75 max-w-sm text-sm">
                {score >= 75
                  ? "Anda telah menguasai materi modul ini dengan baik. Lanjutkan ke modul berikutnya."
                  : "Nilai minimum kelulusan adalah 75. Pelajari kembali materi dan coba lagi."}
              </p>
            </div>

            {/* Answer review */}
            <h3 className="text-base font-bold text-foreground mb-4">Pembahasan Jawaban</h3>
            <div className="space-y-5">
              {questions.map((q, idx) => {
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
                        <span className="mr-1 text-muted-foreground">{idx + 1}.</span>
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
                              <span className="ml-auto text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full flex-shrink-0">
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
                Alur Pembelajaran
              </Link>
              {score >= 75 && moduleId < 8 && (
                <Link
                  href={`/materi/modul/${moduleId + 1}`}
                  className="ml-auto flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md inline-flex"
                >
                  Modul Selanjutnya <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {score >= 75 && moduleId === 8 && (
                <Link
                  href="/"
                  className="ml-auto flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md inline-flex"
                >
                  Selesai <CheckCircle className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
