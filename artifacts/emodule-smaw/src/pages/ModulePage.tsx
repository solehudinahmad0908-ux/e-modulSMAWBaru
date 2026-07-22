import { useParams, Link, useLocation } from "wouter";
import { modulesData } from "@/data/modules";
import { moduleContents, type ModuleContent, type ContentSection } from "@/data/moduleContent";
import { useProgress } from "@/contexts/ProgressContext";
import { AlertCircle, FileText, Video, ImageIcon, BookOpen, ChevronLeft, CheckCircle2, Table2 } from "lucide-react";
import { useEffect } from "react";

function SectionBlock({ section }: { section: ContentSection }) {
  return (
    <div className="space-y-3">
      {section.body.map((para, i) => (
        <p key={i} className="text-foreground/85 leading-relaxed">{para}</p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-2 mt-2">
          {section.bullets.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="overflow-x-auto rounded-lg border border-border mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/10 border-b border-border">
                {section.table.cols.map((col, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-primary whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={`border-b border-border last:border-0 ${ri % 2 === 0 ? "" : "bg-muted/30"}`}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-foreground/80 leading-snug">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function ModulePage() {
  const { id } = useParams();
  const moduleId = parseInt(id || "0", 10);
  const moduleData = modulesData.find(m => m.id === moduleId);
  const content: ModuleContent | undefined = moduleContents.find(m => m.id === moduleId);
  const { isModuleUnlocked } = useProgress();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (moduleId && !isModuleUnlocked(moduleId)) {
      setLocation("/materi");
    }
  }, [moduleId, isModuleUnlocked, setLocation]);

  if (!moduleData) {
    return <div className="p-8 text-center text-muted-foreground">Modul tidak ditemukan.</div>;
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full pb-12">
      <Link href="/materi" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary w-fit transition-colors text-sm font-medium">
        <ChevronLeft className="w-4 h-4" /> Kembali ke Alur Pembelajaran
      </Link>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
            Modul {moduleData.id}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 leading-tight">
          {moduleData.title}
        </h1>

        <div className="space-y-10 mt-8">

          {/* Uraian Materi */}
          <section>
            <h2 className="text-lg font-bold flex items-center gap-2 mb-5 border-b border-border pb-3">
              <BookOpen className="w-5 h-5 text-primary flex-shrink-0" /> Uraian Materi
            </h2>

            {content ? (
              <div className="space-y-8">
                {/* Intro paragraph */}
                <p className="text-foreground/85 leading-relaxed text-base border-l-4 border-primary/40 pl-4 italic">
                  {content.intro}
                </p>

                {/* Sections */}
                {content.sections.map((section, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      {section.table ? <Table2 className="w-4 h-4 text-primary" /> : <CheckCircle2 className="w-4 h-4 text-primary" />}
                      {section.heading}
                    </h3>
                    <SectionBlock section={section} />
                  </div>
                ))}

                {/* Ringkasan */}
                <div className="mt-6 p-5 rounded-xl bg-muted/40 border border-border">
                  <h3 className="font-bold text-foreground mb-2">Ringkasan</h3>
                  <p className="text-foreground/80 leading-relaxed">{content.summary}</p>
                </div>
              </div>
            ) : (
              <div className="text-muted-foreground italic p-6 bg-secondary/30 rounded-xl border border-dashed border-border">
                [Materi pembelajaran akan ditambahkan di sini.]
              </div>
            )}
          </section>

          {/* Image Placeholder */}
          <section>
            <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b border-border pb-3">
              <ImageIcon className="w-5 h-5 text-primary flex-shrink-0" /> Ilustrasi Visual
            </h2>
            <div className="w-full aspect-video bg-secondary border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-muted-foreground gap-2">
              <ImageIcon className="w-10 h-10 opacity-30" />
              <p className="text-sm font-medium">[Gambar / Ilustrasi akan diunggah]</p>
              <p className="text-xs opacity-60">Format: JPG, PNG, SVG</p>
            </div>
          </section>

          {/* Video Placeholder */}
          <section>
            <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b border-border pb-3">
              <Video className="w-5 h-5 text-primary flex-shrink-0" /> Video Demonstrasi
            </h2>
            <div className="w-full aspect-video bg-black rounded-xl border border-border flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="flex flex-col items-center gap-3 z-10">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Video className="w-7 h-7 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-white/40 text-sm">[Video akan diunggah]</span>
              </div>
            </div>
          </section>

          {/* PDF Viewer Placeholder */}
          <section>
            <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b border-border pb-3">
              <FileText className="w-5 h-5 text-primary flex-shrink-0" /> Modul Lengkap (PDF)
            </h2>
            <div className="h-56 bg-secondary border border-border rounded-xl flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <FileText className="w-10 h-10 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground text-sm">[Dokumen PDF akan diunggah]</p>
                <button className="px-4 py-2 bg-background border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-colors">
                  Unduh Dokumen
                </button>
              </div>
            </div>
          </section>

          {/* Catatan Penting */}
          {content && (
            <section className="bg-primary/5 border border-primary/25 rounded-xl p-6">
              <h3 className="text-base font-bold text-primary flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 flex-shrink-0" /> Catatan Penting
              </h3>
              <ul className="space-y-2">
                {content.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 pt-8 border-t border-border flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Pastikan Anda memahami seluruh materi sebelum mengerjakan kuis.</span>
          <Link
            href={`/materi/modul/${moduleId}/kuis`}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5 inline-block"
          >
            Mulai Kuis Modul {moduleId}
          </Link>
        </div>
      </div>
    </div>
  );
}
