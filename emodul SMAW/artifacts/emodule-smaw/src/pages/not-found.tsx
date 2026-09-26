import { useLocation } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const [location, setLocation] = useLocation();

  return (
    <div className="flex h-[80vh] w-full items-center justify-center p-4">
      <div className="flex flex-col items-center text-center max-w-md bg-card border border-border p-8 rounded-2xl shadow-sm">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-muted-foreground mb-8">
          Halaman yang Anda cari di <span className="font-mono text-foreground">{location}</span> tidak tersedia atau telah dipindahkan.
        </p>
        <button 
          onClick={() => setLocation("/")}
          className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
