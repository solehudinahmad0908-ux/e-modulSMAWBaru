import { useParams, Link, useLocation } from "wouter";
import { modulesData } from "@/data/modules";
import { moduleRichContents, type ContentItem } from "@/data/moduleRichContent";
import { docImages } from "@/assets/docImages";
import { useProgress } from "@/contexts/ProgressContext";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

// ── Single image ──────────────────────────────────────────────────────────────
function DocImage({ file, caption, source }: { file: string; caption: string; source: string }) {
  const src = docImages[file];
  if (!src) return null;
  return (
    <figure className="my-2">
      <img
        src={src}
        alt={caption}
        className="w-full max-h-[480px] object-contain rounded-xl border border-border bg-black/30"
      />
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
          {caption}
          {source && <span className="block text-xs opacity-70">Sumber: {source}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// ── Image gallery (grid) ──────────────────────────────────────────────────────
function DocGallery({ images }: { images: Array<{ file: string; caption: string; source: string }> }) {
  const cols =
    images.length === 1 ? "grid-cols-1" :
    images.length === 2 ? "grid-cols-2" :
    images.length <= 4  ? "grid-cols-2 md:grid-cols-2" :
                          "grid-cols-2 md:grid-cols-3";
  return (
    <div className={`grid ${cols} gap-4 my-2`}>
      {images.map((img, i) => (
        <figure key={i} className="flex flex-col">
          <div className="rounded-xl border border-border bg-black/30 overflow-hidden flex-1 flex items-center justify-center p-2">
            <img
              src={docImages[img.file]}
              alt={img.caption}
              className="max-h-52 w-full object-contain"
            />
          </div>
          {img.caption && (
            <figcaption className="text-center text-xs text-muted-foreground mt-1.5 italic leading-snug">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

// ── Table ─────────────────────────────────────────────────────────────────────
function DocTable({ caption, cols, rows }: { caption: string; cols: string[]; rows: string[][] }) {
  return (
    <div className="my-2">
      {caption && <p className="text-sm font-semibold text-muted-foreground mb-2 italic">{caption}</p>}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary/10 border-b border-border">
              {cols.map((c, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold text-primary whitespace-nowrap">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={`border-b border-border last:border-0 ${ri % 2 === 1 ? "bg-muted/20" : ""}`}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-2.5 text-foreground/85 leading-snug">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Content item renderer ────────────────────────────────────────────────────
function RenderItem({ item }: { item: ContentItem }) {
  switch (item.kind) {
    case "heading":
      return (
        <h3 className="text-base font-bold text-foreground mt-6 mb-1 border-l-4 border-primary pl-3 leading-snug">
          {item.text}
        </h3>
      );
    case "para":
      return <p className="text-foreground/85 leading-relaxed">{item.text}</p>;
    case "bullets":
      return (
        <ul className="space-y-1.5 my-1">
          {item.items.map((t, i) => (
            <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      );
    case "image":
      return <DocImage file={item.file} caption={item.caption} source={item.source} />;
    case "gallery":
      return <DocGallery images={item.images} />;
    case "table":
      return <DocTable caption={item.caption} cols={item.cols} rows={item.rows} />;
    default:
      return null;
  }
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ModulePage() {
  const { id } = useParams();
  const moduleId = parseInt(id || "0", 10);
  const moduleData = modulesData.find(m => m.id === moduleId);
  const richContent = moduleRichContents.find(m => m.id === moduleId);
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
      <Link
        href="/materi"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary w-fit transition-colors text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali ke Alur Pembelajaran
      </Link>

      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
            Modul {moduleData.id}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
          {moduleData.title}
        </h1>

        {/* Verbatim content with images */}
        {richContent ? (
          <div className="space-y-4">
            {richContent.items.map((item, i) => (
              <RenderItem key={i} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic">Materi belum tersedia.</p>
        )}

        {/* CTA */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Pastikan Anda memahami seluruh materi sebelum mengerjakan kuis.
          </span>
          <Link
            href={`/materi/modul/${moduleId}/kuis`}
            className="shrink-0 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5 inline-block"
          >
            Mulai Kuis Modul {moduleId} →
          </Link>
        </div>
      </div>
    </div>
  );
}
