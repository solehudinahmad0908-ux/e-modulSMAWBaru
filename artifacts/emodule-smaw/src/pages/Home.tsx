import { Link } from "wouter";
import weldingHero from "@/assets/welding-hero.jpg";
import logoCui from "@/assets/logo-cui.png";
import logoUpi from "@/assets/logo-upi.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 flex-1">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl min-h-[480px] flex items-center justify-center p-8">
        <div className="absolute inset-0 z-0">
          <img
            src={weldingHero}
            alt="Welder at work"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
        </div>
        
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-2">
            <img
              src={logoCui}
              alt="Logo CUI"
              className="h-20 w-20 object-contain drop-shadow-lg"
            />
            <div className="w-px h-14 bg-white/30" />
            <img
              src={logoUpi}
              alt="Logo UPI"
              className="h-14 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            E-Modul Pengelasan <span className="text-primary">SMAW</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Standar Kompetensi PT Coppal Utama Indomelt (CUI)
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="/pendahuluan" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 inline-block">
              Mulai Belajar
            </Link>
          </div>
        </div>
      </div>

      {/* Identity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {[
          { title: "Identitas Penyusun", name: "Nama Penyusun", role: "Developer" },
          { title: "Pembimbing I", name: "Nama Pembimbing I", role: "Dosen Pembimbing I" },
          { title: "Pembimbing II", name: "Nama Pembimbing II", role: "Dosen Pembimbing II" },
        ].map((card, i) => (
          <div key={i} className="bg-card border border-border p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors shadow-sm">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border border-border">
              <span className="text-xl font-bold text-muted-foreground">{card.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">{card.title}</h3>
              <p className="text-primary font-medium mt-1">{card.name}</p>
              <p className="text-sm text-muted-foreground">{card.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
