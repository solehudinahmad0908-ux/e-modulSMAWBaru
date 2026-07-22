import { BookMarked, Download } from "lucide-react";

export default function Pustaka() {
  const references = [
    "AWS D1.1/D1.1M:2020 Structural Welding Code - Steel, American Welding Society.",
    "Bohnart, E. R. (2017). Welding: Principles and Practices (5th ed.). McGraw-Hill Education.",
    "Jeffus, L. (2020). Welding: Principles and Applications (9th ed.). Cengage Learning.",
    "Weman, K. (2011). Welding Processes Handbook (2nd ed.). Woodhead Publishing.",
    "Standar Operasional Prosedur Keselamatan Kerja PT Coppal Utama Indomelt (CUI) 2025."
  ];

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Daftar Pustaka</h1>
        <p className="text-muted-foreground text-lg">Referensi dan sumber rujukan yang digunakan dalam penyusunan E-Modul ini.</p>
      </div>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        <ul className="space-y-6">
          {references.map((ref, idx) => (
            <li key={idx} className="flex items-start gap-4 text-foreground/90 leading-relaxed border-b border-border pb-4 last:border-0 last:pb-0">
              <BookMarked className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{ref}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 p-6 bg-secondary/50 rounded-xl border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-foreground mb-1">Unduh E-Book Referensi Tambahan</h4>
            <p className="text-sm text-muted-foreground">Kumpulan materi referensi pendukung dalam format PDF.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded font-medium hover:text-primary transition-colors shrink-0">
            <Download className="w-4 h-4" /> Unduh ZIP
          </button>
        </div>
      </div>
    </div>
  );
}
