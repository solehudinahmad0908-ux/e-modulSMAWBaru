import { useState } from "react";
import { User, ArrowRight, X } from "lucide-react";

interface NameModalProps {
  onConfirm: (name: string) => void;
  onClose: () => void;
}

export function NameModal({ onConfirm, onClose }: NameModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Nama tidak boleh kosong.");
      return;
    }
    if (trimmed.length < 2) {
      setError("Nama minimal 2 karakter.");
      return;
    }
    onConfirm(trimmed);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Header accent bar */}
        <div className="h-1 w-full bg-primary" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <User className="w-7 h-7 text-primary" />
          </div>

          <h2 className="text-2xl font-extrabold text-foreground mb-1">
            Selamat Datang!
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Masukkan nama lengkap Anda sebelum memulai pembelajaran. Nama ini
            akan ditampilkan pada profil dan rekam jejak aktivitas Anda.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground">
                Nama Lengkap
              </label>
              <input
                type="text"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
              {error && (
                <p className="text-xs text-destructive font-medium">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 mt-2"
            >
              Mulai Belajar <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
