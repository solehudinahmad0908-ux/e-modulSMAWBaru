import { BookMarked } from "lucide-react";

const references = [
  {
    cite: "American Welding Society. (2020).",
    title: "AWS A2.4: Standard symbols for welding, brazing, and nondestructive examination.",
    publisher: "American Welding Society.",
  },
  {
    cite: "American Welding Society. (2020).",
    title: "Welding handbook.",
    publisher: "American Welding Society.",
  },
  {
    cite: "Cary, H. B., & Helzer, S. C. (2020).",
    title: "Modern welding technology (13th ed.).",
    publisher: "Pearson.",
  },
  {
    cite: "ESAB. (2021).",
    title: "Covered electrodes catalog.",
    publisher: "ESAB.",
  },
  {
    cite: "Giesecke, F. E., Mitchell, A., Spencer, H. C., Hill, I. L., Dygdon, J. T., Novak, J. E., & Lockhart, S. (2021).",
    title: "Technical drawing with engineering graphics.",
    publisher: "Pearson.",
  },
  {
    cite: "Jeffus, L. (2022).",
    title: "Welding: Principles and applications (9th ed.).",
    publisher: "Cengage Learning.",
  },
  {
    cite: "Lincoln Electric. (2022).",
    title: "Procedure handbook of arc welding.",
    publisher: "Lincoln Electric Company.",
  },
  {
    cite: "Lincoln Electric. (2022).",
    title: "SMAW equipment guide.",
    publisher: "Lincoln Electric Company.",
  },
  {
    cite: "Mitutoyo Corporation. (2021).",
    title: "Vernier caliper user's guide.",
    publisher: "Mitutoyo Corporation.",
  },
  {
    cite: "Stanley Tools. (2022).",
    title: "Tape measure product guide.",
    publisher: "Stanley Black & Decker.",
  },
  {
    cite: "Starrett Company. (2021).",
    title: "Precision steel rules catalog.",
    publisher: "L.S. Starrett Company.",
  },
  {
    cite: "Starrett Company. (2021).",
    title: "Squares and combination squares catalog.",
    publisher: "L.S. Starrett Company.",
  },
  {
    cite: "Tarwaka. (2017).",
    title: "Keselamatan dan kesehatan kerja: Manajemen dan implementasi K3 di tempat kerja.",
    publisher: "Harapan Press.",
  },
  {
    cite: "Welding Safety UK. (2021).",
    title: "Personal protective equipment (PPE) for welding.",
    publisher: "",
  },
];

export default function Pustaka() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Daftar Pustaka</h1>
        <p className="text-muted-foreground text-lg">
          Referensi dan sumber rujukan yang digunakan dalam penyusunan E-Modul Pengelasan SMAW ini.
        </p>
      </div>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        <ol className="space-y-5">
          {references.map((ref, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 text-foreground/90 leading-relaxed border-b border-border pb-5 last:border-0 last:pb-0"
            >
              <BookMarked className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                <span className="font-medium">{ref.cite}</span>{" "}
                <span className="italic">{ref.title}</span>
                {ref.publisher && <span> {ref.publisher}</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-secondary/30 border border-border rounded-xl p-5 text-sm text-muted-foreground">
        <p>
          Seluruh referensi di atas digunakan sebagai landasan teoritis dan sumber gambar dalam pengembangan
          E-Modul Pengelasan SMAW standar kompetensi PT Coppalt Utama Indomelt (CUI).
        </p>
      </div>
    </div>
  );
}
