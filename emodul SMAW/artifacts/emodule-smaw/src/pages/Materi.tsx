import { useProgress } from "@/contexts/ProgressContext";
import { modulesData } from "@/data/modules";
import { useLocation, Link } from "wouter";
import { Lock, CheckCircle2, PlayCircle, FileDown, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Materi() {
  const { isModuleUnlocked, progress } = useProgress();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleModuleClick = (moduleId: number, isUnlocked: boolean) => {
    if (!isUnlocked) {
      toast({
        title: "Modul Terkunci",
        description: "Selesaikan modul sebelumnya terlebih dahulu dengan nilai minimal 75.",
        variant: "destructive",
      });
      return;
    }
    setLocation(`/materi/modul/${moduleId}`);
  };

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Alur Pembelajaran</h1>
        <p className="text-muted-foreground text-lg">Pilih modul materi untuk memulai pembelajaran. Modul harus diselesaikan secara berurutan.</p>
      </div>

      <div className="relative border-l-2 border-border ml-4 md:ml-6 pl-6 md:pl-10 flex flex-col gap-8 py-4">
        {modulesData.map((mod, index) => {
          const isUnlocked = isModuleUnlocked(mod.id);
          const isCompleted = progress.completedModules.includes(mod.id);
          const score = progress.moduleScores[mod.id] ?? null;

          return (
            <div 
              key={mod.id} 
              className={`relative bg-card border rounded-xl p-6 transition-all shadow-sm ${
                isUnlocked 
                  ? "border-primary/30 hover:border-primary cursor-pointer hover:shadow-md" 
                  : "border-border opacity-70 cursor-not-allowed bg-secondary/50"
              }`}
              onClick={() => handleModuleClick(mod.id, isUnlocked)}
            >
              {/* Timeline marker */}
              <div className={`absolute -left-[35px] md:-left-[51px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${
                isCompleted ? "bg-green-500" : isUnlocked ? "bg-primary" : "bg-muted"
              }`}>
                {isCompleted ? <CheckCircle2 className="w-3 h-3 text-white" /> : null}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    isUnlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isUnlocked ? <PlayCircle className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                      Modul {mod.id}
                    </h3>
                    <h2 className="text-xl font-bold text-foreground leading-tight">
                      {mod.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start md:self-center bg-background rounded-full px-4 py-2 border border-border">
                  {isCompleted ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-medium">Selesai {score !== null ? `(${score})` : ''}</span>
                    </>
                  ) : isUnlocked ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="text-sm font-medium">Aktif</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Terkunci</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Download banner — muncul hanya setelah semua 8 modul selesai */}
      {progress.completedModules.length === 8 && (
        <div className="bg-card border-2 border-primary/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 shadow-md mt-2">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
            <Star className="w-6 h-6 text-primary fill-primary/20" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-0.5">Selamat! Semua Modul Selesai</p>
            <h3 className="text-lg font-extrabold text-foreground">Unduh E-Modul Pengelasan SMAW</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              Dokumen PDF lengkap berisi Pendahuluan dan seluruh 8 modul materi — siap untuk disimpan dan dijadikan referensi.
            </p>
          </div>
          <Link
            href="/download-emodul"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md flex-shrink-0 whitespace-nowrap"
          >
            <FileDown className="w-4 h-4" /> Unduh PDF
          </Link>
        </div>
      )}
    </div>
  );
}
