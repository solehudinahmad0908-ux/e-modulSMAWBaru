import { Info, Target, Award, BookOpen, Settings, Building2, CheckCircle2 } from "lucide-react";

const deskripsi = `E-modul Pengelasan Shielded Metal Arc Welding (SMAW) disusun sebagai media pembelajaran bagi peserta Praktik Kerja Lapangan (PKL) di PT. Coppalt Utama Indomelt. Penyusunan e-modul ini bertujuan untuk menyediakan panduan belajar mandiri yang sistematis dan terstruktur bagi peserta PKL dalam mempersiapkan diri sebelum terlibat langsung dalam kegiatan produksi.

Materi dalam e-modul disusun berdasarkan hasil analisis kebutuhan yang diperoleh melalui observasi dan wawancara dengan pihak perusahaan, serta mengacu pada standar kompetensi pengelasan yang berlaku. Selain menyajikan materi pembelajaran, e-modul ini juga dilengkapi dengan evaluasi pembelajaran dan job sheet praktik sebagai sarana untuk mengukur pemahaman serta kesiapan peserta PKL.`;

const tujuanItems = [
  "Memahami profil serta budaya kerja di PT. Coppalt Utama Indomelt.",
  "Menerapkan prinsip Keselamatan dan Kesehatan Kerja (K3) selama kegiatan praktik.",
  "Menggunakan Alat Pelindung Diri (APD) sesuai dengan ketentuan perusahaan.",
  "Mengidentifikasi fungsi dan penggunaan peralatan kerja pengelasan.",
  "Membaca gambar kerja sederhana sebagai acuan proses fabrikasi.",
  "Menggunakan alat ukur dasar secara benar.",
  "Memahami prinsip dasar proses pengelasan SMAW.",
  "Melaksanakan teknik dasar tack weld sesuai prosedur kerja.",
  "Melakukan pemeriksaan hasil tack weld berdasarkan standar kualitas perusahaan.",
];

const capaianItems = [
  "Menjelaskan aturan dasar keselamatan kerja di lingkungan perusahaan.",
  "Menggunakan APD sesuai jenis pekerjaan yang dilakukan.",
  "Mengidentifikasi peralatan pengelasan beserta fungsinya.",
  "Membaca gambar kerja sederhana untuk pekerjaan fabrikasi.",
  "Menggunakan alat ukur dasar dengan benar.",
  "Menjelaskan prinsip kerja proses pengelasan SMAW.",
  "Melaksanakan tack weld sesuai prosedur yang berlaku.",
  "Memeriksa hasil tack weld berdasarkan aspek kualitas visual sebelum pekerjaan dilanjutkan ke tahap produksi.",
];

const petunjukItems = [
  "Pelajari setiap materi secara berurutan sesuai dengan urutan yang telah disusun dalam e-modul.",
  "Bacalah tujuan pembelajaran pada setiap materi sebelum memulai proses belajar agar memahami kompetensi yang harus dicapai.",
  "Perhatikan dengan saksama setiap penjelasan, ilustrasi, gambar, dan contoh yang disajikan.",
  "Setelah menyelesaikan setiap materi, kerjakan evaluasi yang tersedia untuk mengukur tingkat pemahaman.",
  "Peserta dinyatakan dapat melanjutkan ke materi berikutnya apabila telah mencapai nilai minimal (KKM) yang ditetapkan, yaitu 75.",
  "Apabila hasil evaluasi belum mencapai nilai minimal, peserta diwajibkan mempelajari kembali materi tersebut dan mengerjakan evaluasi ulang.",
  "Jika mengalami kesulitan, peserta dapat berdiskusi atau berkonsultasi dengan pembimbing, instruktur, atau mentor di perusahaan.",
  "Setelah seluruh materi dan evaluasi berhasil diselesaikan, peserta melaksanakan Job Sheet Praktik Tack Weld.",
];

const prasyaratItems = [
  "Telah terdaftar sebagai peserta Praktik Kerja Lapangan (PKL) di PT. Coppalt Utama Indomelt.",
  "Mengikuti pengarahan awal mengenai tata tertib dan budaya kerja perusahaan.",
  "Memiliki kondisi fisik yang sehat sehingga dapat mengikuti kegiatan praktik dengan aman.",
  "Bersedia mematuhi seluruh peraturan keselamatan kerja yang berlaku di perusahaan.",
  "Memiliki pengetahuan dasar mengenai proses manufaktur atau pengelasan yang diperoleh selama pembelajaran di sekolah atau perguruan tinggi.",
];

const profilContent = {
  sejarah: `PT. Coppalt Utama Indomelt merupakan perusahaan manufaktur yang bergerak di bidang pengecoran logam (metal casting), permesinan (machining), serta pembuatan mold and dies. Perusahaan didirikan pada tahun 1998 oleh para insinyur berpengalaman di bidang pengecoran logam dan terus berkembang menjadi salah satu perusahaan foundry terkemuka di Indonesia. Dalam menjalankan kegiatan produksinya, PT. Coppalt Utama Indomelt didukung oleh teknologi manufaktur modern dan tenaga kerja yang kompeten.`,
  visi: `"To become the best foundry company in the world by providing better technical solutions to our customers."`,
  bidangUsaha: [
    "Metal Casting: Sand Casting, Disamatic Casting, Investment Casting",
    "Machining (permesinan presisi)",
    "Mold and Dies (pembuatan cetakan)",
    "Pembuatan komponen logam ferro dan non-ferro",
  ],
  fasilitas: [
    "Tungku peleburan (Induction Furnace)",
    "Mesin CNC, Mesin Bubut, Mesin Frais, Mesin Bor, Mesin Gerinda",
    "Mesin Las dan Peralatan Inspeksi Kualitas",
  ],
};

export default function Pendahuluan() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full pb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Pendahuluan</h1>
        <p className="text-muted-foreground">Informasi dasar mengenai E-Modul Pengelasan SMAW — PT. Coppalt Utama Indomelt</p>
      </div>

      {/* 1. Deskripsi */}
      <Card icon={Info} title="Deskripsi E-Modul">
        <div className="space-y-3">
          {deskripsi.split("\n\n").map((para, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed text-justify">{para}</p>
          ))}
        </div>
      </Card>

      {/* 2. Tujuan Pembelajaran */}
      <Card icon={Target} title="Tujuan Pembelajaran">
        <p className="text-foreground/80 mb-4 text-justify">Setelah mempelajari e-modul ini, peserta diharapkan mampu:</p>
        <ul className="space-y-2">
          {tujuanItems.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span className="block text-justify">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* 3. Capaian Pembelajaran */}
      <Card icon={Award} title="Capaian Pembelajaran">
        <p className="text-foreground/80 mb-4 text-justify">Setelah menyelesaikan seluruh materi, peserta mampu menunjukkan kompetensi sebagai berikut:</p>
        <ul className="space-y-2">
          {capaianItems.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-2 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="block text-justify">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* 4. Petunjuk Penggunaan */}
      <Card icon={BookOpen} title="Petunjuk Penggunaan E-Modul">
        <p className="text-foreground/80 mb-4 text-justify">Agar proses pembelajaran berlangsung secara optimal, peserta diharapkan mengikuti petunjuk berikut:</p>
        <ol className="space-y-3">
          {petunjukItems.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="block text-justify">{item}</span>
            </li>
          ))}
        </ol>
      </Card>

      {/* 5. Prasyarat */}
      <Card icon={Settings} title="Prasyarat Pembelajaran">
        <p className="text-foreground/80 mb-4 text-justify">Sebelum mempelajari e-modul ini, peserta diharapkan memenuhi beberapa prasyarat berikut:</p>
        <ul className="space-y-2">
          {prasyaratItems.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="block text-justify">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* 6. Profil Perusahaan */}
      <Card icon={Building2} title="Profil Perusahaan — PT. Coppalt Utama Indomelt">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Sejarah Singkat</h3>
            <p className="text-foreground/80 leading-relaxed text-justify">{profilContent.sejarah}</p>
          </div>

          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="font-semibold text-primary mb-1">Visi Perusahaan</h3>
            <p className="text-foreground/85 italic leading-relaxed text-justify">{profilContent.visi}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Bidang Usaha</h3>
              <ul className="space-y-2">
                {profilContent.bidangUsaha.map((item, i) => (
                  <li key={i} className="flex gap-2 text-foreground/80 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Fasilitas Produksi</h3>
              <ul className="space-y-2">
                {profilContent.fasilitas.map((item, i) => (
                  <li key={i} className="flex gap-2 text-foreground/80 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-foreground/70 text-sm text-justify">
            PT. Coppalt Utama Indomelt menerapkan budaya kerja yang mengutamakan Keselamatan dan Kesehatan Kerja (K3). Seluruh karyawan maupun peserta PKL diwajibkan mematuhi prosedur keselamatan kerja, menggunakan Alat Pelindung Diri (APD), dan menjaga kebersihan area kerja.
          </p>
        </div>
      </Card>
    </div>
  );
}

// Reusable card component
function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-muted/20">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}
