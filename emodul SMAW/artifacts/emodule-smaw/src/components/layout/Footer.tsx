export function Footer() {
  return (
    <footer className="border-t bg-card py-6 px-4 md:px-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 E-Modul Pengelasan SMAW — Standar Kompetensi PT Coppal Utama Indomelt (CUI)</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">Bantuan</a>
          <a href="#" className="hover:text-primary transition-colors">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
