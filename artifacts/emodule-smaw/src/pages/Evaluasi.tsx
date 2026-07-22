import { useState } from "react";
import { CheckCircle, Award } from "lucide-react";

export default function Evaluasi() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScore(92);
    setHasSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Evaluasi Akhir</h1>
        <p className="text-muted-foreground text-lg">Ujian komprehensif dari semua materi Modul 1 hingga Modul 8.</p>
      </div>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
        {!hasSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary mb-8 text-sm font-medium">
              [Instruksi Placeholder] Pastikan koneksi internet stabil. Waktu pengerjaan adalah 60 menit.
            </div>

            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">
                  {num}. [Pertanyaan Evaluasi Akhir Placeholder]
                </h3>
                <div className="space-y-3 pl-4 border-l-2 border-border">
                  {["A", "B", "C", "D"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors bg-background">
                      <input 
                        type="radio" 
                        name={`q-${num}`} 
                        className="w-4 h-4 text-primary bg-background border-border focus:ring-primary"
                      />
                      <span className="text-foreground">[Pilihan {opt} Placeholder]</span>
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
                Selesaikan Evaluasi
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center space-y-6 py-8">
             <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Evaluasi Selesai</h2>
            <p className="text-xl text-muted-foreground">Nilai Akhir Anda: <span className="text-primary font-bold text-3xl ml-2">{score}</span></p>
            
            <div className="w-full max-w-lg mt-8 p-6 bg-background border-2 border-primary border-dashed rounded-xl flex flex-col items-center gap-4">
              <Award className="w-16 h-16 text-primary" />
              <h3 className="text-xl font-bold">Sertifikat Kompetensi</h3>
              <p className="text-sm text-muted-foreground">Sertifikat ini diterbitkan secara otomatis oleh sistem sebagai bukti kelulusan pelatihan.</p>
              <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90">
                Unduh Sertifikat PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
