import { Download, Upload, FileBox } from "lucide-react";

export default function Jobsheet() {
  const jobsheets = [
    { id: 1, title: "Jobsheet 1: Persiapan Material", status: "submitted" },
    { id: 2, title: "Jobsheet 2: Teknik Tack Weld", status: "pending" },
    { id: 3, title: "Jobsheet 3: Pengelasan Posisi 1G", status: "pending" },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Jobsheet Praktek</h1>
        <p className="text-muted-foreground text-lg">Unduh panduan praktek lapangan dan unggah hasil dokumentasi kerja Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {jobsheets.map(sheet => (
            <div key={sheet.id} className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0">
                  <FileBox className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{sheet.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      sheet.status === 'submitted' ? 'bg-green-500/20 text-green-500' : 'bg-muted text-muted-foreground'
                    }`}>
                      {sheet.status === 'submitted' ? 'Sudah Diunggah' : 'Belum Diunggah'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded text-sm font-medium hover:text-primary transition-colors">
                  <Download className="w-4 h-4" /> Unduh
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-border pb-3">
            <Upload className="w-5 h-5 text-primary" /> Unggah Hasil
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Pilih jobsheet yang akan diunggah hasil pekerjaannya (Foto hasil lasan & laporan).
          </p>
          
          <div className="space-y-4">
            <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary">
              <option value="">Pilih Jobsheet...</option>
              {jobsheets.map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
            
            <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-secondary/20 transition-colors">
              <Upload className="w-8 h-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium text-foreground">Klik untuk unggah file</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, JPG, atau PNG (Max 5MB)</p>
            </div>
            
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md font-bold text-sm hover:bg-primary/90 transition-colors">
              Submit Laporan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
