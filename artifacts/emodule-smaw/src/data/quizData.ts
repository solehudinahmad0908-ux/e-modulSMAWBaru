export interface QuizQuestion {
  id: number;
  text: string;
  options: { key: string; text: string }[];
  answer: string; // correct option key
}

export interface ModuleQuiz {
  moduleId: number;
  title: string;
  questions: QuizQuestion[];
}

export const quizData: ModuleQuiz[] = [
  // ─── MODUL 1: K3 ─────────────────────────────────────────────────────────
  {
    moduleId: 1,
    title: "Keselamatan dan Kesehatan Kerja (K3)",
    questions: [
      {
        id: 1,
        text: "K3 adalah singkatan dari ...",
        options: [
          { key: "A", text: "Keterampilan Kerja dan Keahlian" },
          { key: "B", text: "Keselamatan dan Kesehatan Kerja" },
          { key: "C", text: "Kontrol Kualitas Kerja" },
          { key: "D", text: "Kebersihan dan Kerapian Kerja" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Penerapan K3 di lingkungan industri bertujuan untuk ...",
        options: [
          { key: "A", text: "Meningkatkan jam kerja karyawan" },
          { key: "B", text: "Mengurangi jumlah tenaga kerja" },
          { key: "C", text: "Melindungi pekerja dari risiko kecelakaan kerja, menjaga kelancaran produksi, dan mengurangi kerugian" },
          { key: "D", text: "Mempercepat proses produksi tanpa prosedur" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Berikut ini merupakan potensi bahaya pada proses pengelasan SMAW, KECUALI ...",
        options: [
          { key: "A", text: "Sengatan listrik (electric shock)" },
          { key: "B", text: "Radiasi sinar ultraviolet dan inframerah" },
          { key: "C", text: "Asap pengelasan (welding fumes)" },
          { key: "D", text: "Getaran akibat angin kencang" },
        ],
        answer: "D",
      },
      {
        id: 4,
        text: "Asap berbahaya yang dihasilkan selama proses pengelasan SMAW disebut ...",
        options: [
          { key: "A", text: "Welding Spatter" },
          { key: "B", text: "Welding Fumes" },
          { key: "C", text: "Arc Flash" },
          { key: "D", text: "Slag Gas" },
        ],
        answer: "B",
      },
      {
        id: 5,
        text: "APAR yang harus tersedia di area pengelasan merupakan singkatan dari ...",
        options: [
          { key: "A", text: "Alat Pelindung Area Radiasi" },
          { key: "B", text: "Alat Pengaman Area Rawan" },
          { key: "C", text: "Alat Pemadam Api Ringan" },
          { key: "D", text: "Alat Pelaporan Arus Rendah" },
        ],
        answer: "C",
      },
      {
        id: 6,
        text: "Radiasi sinar yang dihasilkan dari busur listrik pengelasan SMAW dan berbahaya bagi mata adalah ...",
        options: [
          { key: "A", text: "Sinar gamma dan sinar-X" },
          { key: "B", text: "Sinar ultraviolet (UV) dan inframerah (IR)" },
          { key: "C", text: "Sinar biru dan sinar hijau" },
          { key: "D", text: "Gelombang mikro dan gelombang radio" },
        ],
        answer: "B",
      },
      {
        id: 7,
        text: "Tindakan yang DILARANG dilakukan saat korban mengalami sengatan listrik di area pengelasan adalah ...",
        options: [
          { key: "A", text: "Mengikuti jalur evakuasi yang telah ditentukan" },
          { key: "B", text: "Menuju titik kumpul (assembly point)" },
          { key: "C", text: "Menyentuh korban sebelum sumber listrik diputus" },
          { key: "D", text: "Melaporkan kejadian kepada petugas keselamatan" },
        ],
        answer: "C",
      },
      {
        id: 8,
        text: "Prosedur K3 yang harus dilakukan SETELAH proses pengelasan selesai adalah ...",
        options: [
          { key: "A", text: "Memeriksa APD yang akan digunakan" },
          { key: "B", text: "Mengatur arus mesin las" },
          { key: "C", text: "Mematikan mesin las dan memastikan semua sakelar dalam posisi off" },
          { key: "D", text: "Memilih jenis elektroda yang sesuai" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "Undang-Undang yang mengatur tentang Keselamatan Kerja di Indonesia adalah ...",
        options: [
          { key: "A", text: "Undang-Undang Nomor 13 Tahun 2003" },
          { key: "B", text: "Undang-Undang Nomor 3 Tahun 1992" },
          { key: "C", text: "Undang-Undang Nomor 1 Tahun 1970" },
          { key: "D", text: "Undang-Undang Nomor 14 Tahun 1969" },
        ],
        answer: "C",
      },
      {
        id: 10,
        text: "Sebelum memulai pekerjaan pengelasan, peserta PKL WAJIB ...",
        options: [
          { key: "A", text: "Langsung menyalakan mesin las" },
          { key: "B", text: "Menggunakan seluruh APD yang sesuai dan memeriksa peralatan" },
          { key: "C", text: "Menunggu instruksi dari teman sekerja" },
          { key: "D", text: "Membersihkan area kerja setelah pengelasan selesai" },
        ],
        answer: "B",
      },
    ],
  },

  // ─── MODUL 2: APD ────────────────────────────────────────────────────────
  {
    moduleId: 2,
    title: "Alat Pelindung Diri (APD)",
    questions: [
      {
        id: 1,
        text: "APD adalah singkatan dari ...",
        options: [
          { key: "A", text: "Alat Perlengkapan Dasar" },
          { key: "B", text: "Alat Pelindung Diri" },
          { key: "C", text: "Alat Pengaman Darurat" },
          { key: "D", text: "Alat Pengukur Daya" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "APD utama yang berfungsi melindungi mata, wajah, dan leher dari radiasi sinar UV/IR serta percikan logam selama pengelasan adalah ...",
        options: [
          { key: "A", text: "Kacamata Keselamatan (Safety Glasses)" },
          { key: "B", text: "Topi Las (Welding Cap)" },
          { key: "C", text: "Helm Las (Welding Helmet)" },
          { key: "D", text: "Masker Debu (Dust Mask)" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Pelindung Kaki (Leather Spats) pada proses pengelasan berfungsi untuk ...",
        options: [
          { key: "A", text: "Melindungi kepala dari benturan" },
          { key: "B", text: "Mencegah percikan logam cair masuk ke dalam sepatu" },
          { key: "C", text: "Melindungi tangan dari panas elektroda" },
          { key: "D", text: "Mengurangi paparan kebisingan" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Kacamata keselamatan (safety glasses) digunakan pada saat ...",
        options: [
          { key: "A", text: "Proses pengelasan berlangsung (sebagai pengganti helm las)" },
          { key: "B", text: "Persiapan material, pemotongan, penggerindaan, dan pembersihan hasil las" },
          { key: "C", text: "Hanya saat mengelas di posisi overhead" },
          { key: "D", text: "Saat beristirahat di area produksi" },
        ],
        answer: "B",
      },
      {
        id: 5,
        text: "APD yang berfungsi mengurangi paparan debu dan partikel halus selama proses persiapan material adalah ...",
        options: [
          { key: "A", text: "Helm Las" },
          { key: "B", text: "Jaket Las Kulit" },
          { key: "C", text: "Masker Debu (Dust Mask)" },
          { key: "D", text: "Topi Las" },
        ],
        answer: "C",
      },
      {
        id: 6,
        text: "Sarung tangan las model gauntlet (Gauntlet Type Welding Gloves) memiliki keunggulan berupa ...",
        options: [
          { key: "A", text: "Lebih tipis sehingga lebih fleksibel" },
          { key: "B", text: "Bagian lengan yang lebih panjang sehingga memberikan perlindungan ekstra pada tangan dan pergelangan" },
          { key: "C", text: "Harganya lebih murah dibandingkan jenis lain" },
          { key: "D", text: "Terbuat dari bahan karet yang tahan panas" },
        ],
        answer: "B",
      },
      {
        id: 7,
        text: "Di PT. Coppalt Utama Indomelt, peserta PKL yang tidak menggunakan APD secara lengkap ...",
        options: [
          { key: "A", text: "Tetap diperbolehkan mengikuti kegiatan dengan pengawasan ketat" },
          { key: "B", text: "Diwajibkan membayar denda keselamatan" },
          { key: "C", text: "Tidak diperkenankan mengikuti kegiatan praktik hingga seluruh APD digunakan" },
          { key: "D", text: "Hanya diberi peringatan lisan oleh instruktur" },
        ],
        answer: "C",
      },
      {
        id: 8,
        text: "Celana panjang yang digunakan pada proses pengelasan SMAW sebaiknya terbuat dari bahan ...",
        options: [
          { key: "A", text: "Nilon tipis dan elastis" },
          { key: "B", text: "Plastik kedap air" },
          { key: "C", text: "Katun tebal atau bahan tahan api" },
          { key: "D", text: "Bahan sintetis ringan" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "APD yang berfungsi melindungi bagian depan tubuh dari percikan logam cair selama proses pengelasan adalah ...",
        options: [
          { key: "A", text: "Jaket Las Kulit (Leather Welding Jacket)" },
          { key: "B", text: "Celemek Kulit (Leather Apron)" },
          { key: "C", text: "Sarung Tangan Las" },
          { key: "D", text: "Topi Las" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Topi Las (Welding Cap) berfungsi untuk ...",
        options: [
          { key: "A", text: "Melindungi mata dari cahaya busur listrik" },
          { key: "B", text: "Melindungi kepala dan rambut dari percikan api, panas, serta debu" },
          { key: "C", text: "Menggantikan fungsi helm las saat mengelas posisi flat" },
          { key: "D", text: "Mengurangi kebisingan di area produksi" },
        ],
        answer: "B",
      },
    ],
  },

  // ─── MODUL 3: PERALATAN ──────────────────────────────────────────────────
  {
    moduleId: 3,
    title: "Pengenalan Peralatan Kerja Pengelasan",
    questions: [
      {
        id: 1,
        text: "Fungsi utama mesin las SMAW adalah ...",
        options: [
          { key: "A", text: "Menjepit elektroda agar tidak jatuh" },
          { key: "B", text: "Menghasilkan arus listrik untuk membentuk busur listrik pada proses pengelasan" },
          { key: "C", text: "Membersihkan terak hasil pengelasan" },
          { key: "D", text: "Mengalirkan gas pelindung ke area las" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Holder elektroda berfungsi sebagai ...",
        options: [
          { key: "A", text: "Penjepit benda kerja pada meja las" },
          { key: "B", text: "Penjepit elektroda dan penghantar arus listrik dari mesin las ke elektroda" },
          { key: "C", text: "Penghubung kabel las dengan sumber listrik utama" },
          { key: "D", text: "Alat ukur kuat arus pengelasan" },
        ],
        answer: "B",
      },
      {
        id: 3,
        text: "Lapisan yang menyelimuti inti kawat pada elektroda SMAW disebut ...",
        options: [
          { key: "A", text: "Slag (Terak)" },
          { key: "B", text: "Arc (Busur)" },
          { key: "C", text: "Flux Coating (Lapisan Fluks)" },
          { key: "D", text: "Spatter (Percikan)" },
        ],
        answer: "C",
      },
      {
        id: 4,
        text: "Penjepit massa (work clamp) berfungsi untuk ...",
        options: [
          { key: "A", text: "Menjepit elektroda agar tidak bergerak" },
          { key: "B", text: "Menghubungkan benda kerja dengan mesin las agar arus dapat mengalir" },
          { key: "C", text: "Mengukur kuat arus yang digunakan" },
          { key: "D", text: "Mendinginkan benda kerja setelah pengelasan" },
        ],
        answer: "B",
      },
      {
        id: 5,
        text: "Palu terak (chipping hammer) digunakan untuk ...",
        options: [
          { key: "A", text: "Meratakan permukaan benda kerja sebelum pengelasan" },
          { key: "B", text: "Mengukur panjang manik las" },
          { key: "C", text: "Memecahkan dan membersihkan terak (slag) hasil pengelasan" },
          { key: "D", text: "Menjepit benda kerja pada meja las" },
        ],
        answer: "C",
      },
      {
        id: 6,
        text: "Gerinda tangan (angle grinder) pada proses pengelasan digunakan untuk ...",
        options: [
          { key: "A", text: "Membersihkan terak setelah pengelasan selesai" },
          { key: "B", text: "Meratakan hasil las, membersihkan permukaan, dan mempersiapkan kampuh pengelasan" },
          { key: "C", text: "Mengalirkan arus listrik ke elektroda" },
          { key: "D", text: "Mengukur dimensi benda kerja" },
        ],
        answer: "B",
      },
      {
        id: 7,
        text: "Sikat baja (wire brush) pada proses pengelasan digunakan untuk ...",
        options: [
          { key: "A", text: "Mengasah ujung elektroda agar tajam" },
          { key: "B", text: "Membersihkan sisa terak, karat, dan kotoran pada permukaan logam" },
          { key: "C", text: "Mengukur lebar manik las" },
          { key: "D", text: "Menyimpan elektroda agar tidak lembap" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Ragum (bench vice) pada area pengelasan berfungsi untuk ...",
        options: [
          { key: "A", text: "Menjepit dan menahan benda kerja agar tidak bergerak saat dikerjakan" },
          { key: "B", text: "Mengalirkan arus listrik ke benda kerja" },
          { key: "C", text: "Menyimpan elektroda saat tidak digunakan" },
          { key: "D", text: "Membersihkan percikan logam dari meja kerja" },
        ],
        answer: "A",
      },
      {
        id: 9,
        text: "Elektroda yang TIDAK boleh digunakan pada proses pengelasan SMAW adalah ...",
        options: [
          { key: "A", text: "Elektroda yang baru dikeluarkan dari kemasan asli" },
          { key: "B", text: "Elektroda dengan panjang standar sesuai spesifikasi" },
          { key: "C", text: "Elektroda yang lembap atau mengalami kerusakan pada lapisan fluksnya" },
          { key: "D", text: "Elektroda tipe E6013" },
        ],
        answer: "C",
      },
      {
        id: 10,
        text: "Pemeriksaan peralatan sebelum pengelasan bertujuan untuk ...",
        options: [
          { key: "A", text: "Memperlambat proses pengelasan" },
          { key: "B", text: "Mengurangi risiko kecelakaan kerja dan menjaga kualitas hasil pengelasan" },
          { key: "C", text: "Menentukan jenis elektroda yang akan dipakai" },
          { key: "D", text: "Menghemat biaya pemakaian elektroda" },
        ],
        answer: "B",
      },
    ],
  },

  // ─── MODUL 4: GAMBAR KERJA ───────────────────────────────────────────────
  {
    moduleId: 4,
    title: "Membaca Gambar Kerja",
    questions: [
      {
        id: 1,
        text: "Gambar kerja dalam dunia industri berfungsi sebagai ...",
        options: [
          { key: "A", text: "Hiasan dinding di ruang produksi" },
          { key: "B", text: "Media komunikasi teknik yang menyampaikan informasi bentuk, ukuran, dan spesifikasi benda kerja" },
          { key: "C", text: "Daftar harga material yang dibutuhkan" },
          { key: "D", text: "Laporan hasil produksi harian" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Bagian gambar kerja yang berisi informasi nama komponen, nomor gambar, skala, material, dan nama pembuat disebut ...",
        options: [
          { key: "A", text: "Front View" },
          { key: "B", text: "Isometric View" },
          { key: "C", text: "Title Block" },
          { key: "D", text: "Weld Symbol" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Simbol pengelasan pada gambar kerja mengacu pada standar internasional ...",
        options: [
          { key: "A", text: "ISO 9001" },
          { key: "B", text: "AWS A2.4" },
          { key: "C", text: "ASME B31.3" },
          { key: "D", text: "JIS Z3001" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Pandangan gambar yang menampilkan bentuk benda dari depan disebut ...",
        options: [
          { key: "A", text: "Front View (Tampak Depan)" },
          { key: "B", text: "Top View (Tampak Atas)" },
          { key: "C", text: "Side View (Tampak Samping)" },
          { key: "D", text: "Isometric View" },
        ],
        answer: "A",
      },
      {
        id: 5,
        text: "Las sudut (Fillet Weld) digunakan untuk ...",
        options: [
          { key: "A", text: "Menyambung dua permukaan yang membentuk sudut 90° (seperti sambungan T-Joint)" },
          { key: "B", text: "Menyambung dua logam pada sisi ujungnya secara tumpul" },
          { key: "C", text: "Menyambung dua logam yang saling tumpang tindih" },
          { key: "D", text: "Menyambung logam pada bagian tepinya saja" },
        ],
        answer: "A",
      },
      {
        id: 6,
        text: "Pada praktik pengelasan di PT. Coppalt Utama Indomelt, peserta PKL difokuskan pada jenis sambungan ...",
        options: [
          { key: "A", text: "Butt Joint dengan kampuh V tunggal" },
          { key: "B", text: "Lap Joint dengan kampuh persegi" },
          { key: "C", text: "T-Joint dengan fillet weld" },
          { key: "D", text: "Edge Joint dengan kampuh lurus" },
        ],
        answer: "C",
      },
      {
        id: 7,
        text: "Pandangan gambar yang menunjukkan bentuk benda dari arah atas disebut ...",
        options: [
          { key: "A", text: "Front View" },
          { key: "B", text: "Top View" },
          { key: "C", text: "Side View" },
          { key: "D", text: "Isometric View" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Informasi jenis material pada gambar kerja (misalnya SS400 atau Mild Steel) digunakan sebagai acuan untuk ...",
        options: [
          { key: "A", text: "Menentukan warna cat benda kerja" },
          { key: "B", text: "Menentukan harga jual produk" },
          { key: "C", text: "Pemilihan proses pengelasan dan elektroda yang sesuai" },
          { key: "D", text: "Menentukan jumlah operator yang dibutuhkan" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "Langkah pertama yang harus dilakukan saat membaca gambar kerja adalah ...",
        options: [
          { key: "A", text: "Langsung mengukur dimensi benda kerja" },
          { key: "B", text: "Membaca title block untuk mengetahui nama komponen, material, dan skala gambar" },
          { key: "C", text: "Mengidentifikasi simbol pengelasan terlebih dahulu" },
          { key: "D", text: "Menentukan urutan pekerjaan tanpa membaca gambar" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Kesalahan dalam membaca gambar kerja dapat mengakibatkan ...",
        options: [
          { key: "A", text: "Proses pengelasan menjadi lebih cepat" },
          { key: "B", text: "Kualitas hasil las semakin meningkat" },
          { key: "C", text: "Produk yang dihasilkan tidak sesuai spesifikasi, pemborosan material, dan kegagalan fabrikasi" },
          { key: "D", text: "Penghematan material yang lebih banyak" },
        ],
        answer: "C",
      },
    ],
  },

  // ─── MODUL 5: ALAT UKUR ──────────────────────────────────────────────────
  {
    moduleId: 5,
    title: "Penggunaan Alat Ukur",
    questions: [
      {
        id: 1,
        text: "Alat ukur yang digunakan untuk mengukur panjang, lebar, dan tinggi benda kerja pada tahap persiapan material adalah ...",
        options: [
          { key: "A", text: "Mistar Baja (Steel Rule)" },
          { key: "B", text: "Meteran Baja (Steel Tape Measure)" },
          { key: "C", text: "Siku Baja (Try Square)" },
          { key: "D", text: "Jangka Sorong (Vernier Caliper)" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Siku baja (try square) digunakan untuk ...",
        options: [
          { key: "A", text: "Mengukur panjang dan lebar material" },
          { key: "B", text: "Memeriksa kesikuan atau sudut 90° pada benda kerja sebelum tack weld" },
          { key: "C", text: "Mengukur ketebalan pelat" },
          { key: "D", text: "Mengukur diameter komponen" },
        ],
        answer: "B",
      },
      {
        id: 3,
        text: "Jangka sorong (vernier caliper) dapat digunakan untuk mengukur ...",
        options: [
          { key: "A", text: "Hanya diameter luar benda kerja" },
          { key: "B", text: "Kesikuan sambungan T-Joint" },
          { key: "C", text: "Diameter luar, diameter dalam, ketebalan, dan kedalaman benda kerja" },
          { key: "D", text: "Sudut kemiringan permukaan benda kerja" },
        ],
        answer: "C",
      },
      {
        id: 4,
        text: "Mistar baja (steel rule) berfungsi untuk ...",
        options: [
          { key: "A", text: "Mengukur dimensi pendek dan membantu proses penandaan pada permukaan logam" },
          { key: "B", text: "Memeriksa kesikuan sambungan T-Joint" },
          { key: "C", text: "Mengukur diameter dalam komponen" },
          { key: "D", text: "Mengukur panjang material yang relatif besar" },
        ],
        answer: "A",
      },
      {
        id: 5,
        text: "Langkah pertama sebelum melakukan pengukuran benda kerja adalah ...",
        options: [
          { key: "A", text: "Menyiapkan gambar kerja sebagai acuan pengukuran" },
          { key: "B", text: "Memanaskan benda kerja" },
          { key: "C", text: "Langsung melakukan pengukuran" },
          { key: "D", text: "Mengunci skala alat ukur" },
        ],
        answer: "A",
      },
      {
        id: 6,
        text: "Berdasarkan tabel pemeriksaan dimensi sebelum tack weld, kesikuan sambungan harus memenuhi sudut ...",
        options: [
          { key: "A", text: "45°" },
          { key: "B", text: "60°" },
          { key: "C", text: "75°" },
          { key: "D", text: "90°" },
        ],
        answer: "D",
      },
      {
        id: 7,
        text: "Kesalahan yang sering terjadi saat menggunakan alat ukur adalah ...",
        options: [
          { key: "A", text: "Membandingkan hasil pengukuran dengan gambar kerja" },
          { key: "B", text: "Membersihkan permukaan benda kerja sebelum diukur" },
          { key: "C", text: "Tidak memeriksa titik nol alat ukur sebelum digunakan" },
          { key: "D", text: "Memilih alat ukur sesuai kebutuhan pengukuran" },
        ],
        answer: "C",
      },
      {
        id: 8,
        text: "Alat ukur yang tepat digunakan untuk memastikan posisi sambungan T-Joint tepat 90° sebelum tack weld adalah ...",
        options: [
          { key: "A", text: "Meteran baja" },
          { key: "B", text: "Mistar baja" },
          { key: "C", text: "Jangka sorong" },
          { key: "D", text: "Siku baja" },
        ],
        answer: "D",
      },
      {
        id: 9,
        text: "Fungsi penggunaan alat ukur dalam proses fabrikasi dan pengelasan meliputi ...",
        options: [
          { key: "A", text: "Mengukur kuat arus mesin las" },
          { key: "B", text: "Memastikan dimensi material sesuai gambar kerja dan mengurangi kesalahan fabrikasi" },
          { key: "C", text: "Menentukan jenis elektroda yang sesuai" },
          { key: "D", text: "Memeriksa kandungan fluks elektroda" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Apabila hasil pengukuran berbeda dengan dimensi pada gambar kerja, langkah yang harus dilakukan adalah ...",
        options: [
          { key: "A", text: "Tetap melanjutkan proses pengelasan" },
          { key: "B", text: "Mengestimasi ukuran berdasarkan pengalaman" },
          { key: "C", text: "Melapor kepada instruktur tanpa mengulang pengukuran" },
          { key: "D", text: "Melakukan pengukuran ulang untuk memastikan ketepatan" },
        ],
        answer: "D",
      },
    ],
  },

  // ─── MODUL 6: DASAR SMAW ─────────────────────────────────────────────────
  {
    moduleId: 6,
    title: "Dasar-Dasar Pengelasan SMAW",
    questions: [
      {
        id: 1,
        text: "SMAW adalah singkatan dari ...",
        options: [
          { key: "A", text: "Shielded Metal Arc Welding" },
          { key: "B", text: "Solid Metal Arc Welding" },
          { key: "C", text: "Submerged Metal Arc Welding" },
          { key: "D", text: "Standard Metal Arc Welding" },
        ],
        answer: "A",
      },
      {
        id: 2,
        text: "Prinsip kerja SMAW dimulai ketika ...",
        options: [
          { key: "A", text: "Gas pelindung dialirkan ke area las" },
          { key: "B", text: "Ujung elektroda disentuhkan ke permukaan benda kerja kemudian sedikit dijauhkan sehingga terbentuk busur listrik" },
          { key: "C", text: "Fluks elektroda dicairkan terlebih dahulu sebelum pengelasan" },
          { key: "D", text: "Benda kerja dipanaskan hingga suhu 500°C sebelum pengelasan" },
        ],
        answer: "B",
      },
      {
        id: 3,
        text: "Fungsi lapisan fluks (flux coating) pada elektroda SMAW adalah ...",
        options: [
          { key: "A", text: "Mempercantik tampilan elektroda" },
          { key: "B", text: "Menghasilkan gas pelindung, membentuk terak, dan menstabilkan busur listrik selama pengelasan" },
          { key: "C", text: "Mempercepat laju pengelasan" },
          { key: "D", text: "Mengurangi panas yang dihasilkan busur listrik" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Elektroda E6013 dipilih untuk praktik awal di PT. Coppalt Utama Indomelt karena ...",
        options: [
          { key: "A", text: "Menghasilkan busur yang tidak stabil tetapi penetrasi sangat dalam" },
          { key: "B", text: "Hanya dapat digunakan pada posisi overhead" },
          { key: "C", text: "Mudah digunakan, menghasilkan busur listrik yang stabil, dan cocok untuk latihan tack weld posisi datar" },
          { key: "D", text: "Memiliki kandungan fluks yang sangat rendah sehingga hemat" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Dalam kode elektroda E6013, dua angka pertama '60' menunjukkan ...",
        options: [
          { key: "A", text: "Diameter elektroda dalam satuan mm" },
          { key: "B", text: "Kekuatan tarik minimum sebesar 60.000 psi (60 ksi)" },
          { key: "C", text: "Temperatur maksimum penggunaan elektroda" },
          { key: "D", text: "Jumlah lapisan fluks elektroda" },
        ],
        answer: "B",
      },
      {
        id: 6,
        text: "Posisi pengelasan yang paling mudah dilakukan dan menjadi dasar pembelajaran adalah ...",
        options: [
          { key: "A", text: "Posisi 4G/4F (Overhead)" },
          { key: "B", text: "Posisi 3G/3F (Vertikal)" },
          { key: "C", text: "Posisi 2G/2F (Horizontal)" },
          { key: "D", text: "Posisi 1G/1F (Flat/Downhand)" },
        ],
        answer: "D",
      },
      {
        id: 7,
        text: "Apa yang terjadi apabila arus pengelasan terlalu rendah?",
        options: [
          { key: "A", text: "Terjadi undercut pada tepi manik las" },
          { key: "B", text: "Busur listrik tidak stabil dan elektroda cenderung menempel pada benda kerja" },
          { key: "C", text: "Terjadi burn-through (tembus) pada benda kerja" },
          { key: "D", text: "Percikan las berlebihan" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Jenis sambungan yang menjadi fokus praktik tack weld di PT. Coppalt Utama Indomelt adalah ...",
        options: [
          { key: "A", text: "Butt Joint" },
          { key: "B", text: "Lap Joint" },
          { key: "C", text: "T-Joint" },
          { key: "D", text: "Corner Joint" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "Panjang busur listrik yang ideal pada pengelasan SMAW adalah ...",
        options: [
          { key: "A", text: "Dua kali diameter elektroda" },
          { key: "B", text: "Sama dengan diameter elektroda" },
          { key: "C", text: "Setengah dari diameter elektroda" },
          { key: "D", text: "Tiga kali diameter elektroda" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Apabila panjang busur listrik terlalu jauh selama pengelasan, akibat yang terjadi adalah ...",
        options: [
          { key: "A", text: "Hasil las lebih halus dan merata" },
          { key: "B", text: "Penetrasi las semakin dalam" },
          { key: "C", text: "Percikan las (spatter) berlebihan dan kualitas las menurun" },
          { key: "D", text: "Elektroda tidak cepat habis" },
        ],
        answer: "C",
      },
    ],
  },

  // ─── MODUL 7: TACK WELD ──────────────────────────────────────────────────
  {
    moduleId: 7,
    title: "Teknik Dasar Tack Weld",
    questions: [
      {
        id: 1,
        text: "Tack weld adalah proses pengelasan sementara yang dilakukan untuk ...",
        options: [
          { key: "A", text: "Menyelesaikan proses pengelasan secara permanen" },
          { key: "B", text: "Menahan atau mengunci posisi komponen sebelum dilakukan pengelasan penuh (final welding)" },
          { key: "C", text: "Membersihkan permukaan benda kerja dari karat" },
          { key: "D", text: "Mengukur dimensi sambungan las" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Panjang tack weld yang disarankan pada sambungan T-Joint adalah ...",
        options: [
          { key: "A", text: "2–5 mm" },
          { key: "B", text: "30–50 mm" },
          { key: "C", text: "10–20 mm" },
          { key: "D", text: "50–100 mm" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Sudut elektroda yang dianjurkan saat melakukan tack weld terhadap benda kerja adalah ...",
        options: [
          { key: "A", text: "30–40°" },
          { key: "B", text: "70–80°" },
          { key: "C", text: "Tepat 90° (tegak lurus)" },
          { key: "D", text: "45°" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Urutan pelaksanaan tack weld yang benar pada sambungan T-Joint adalah ...",
        options: [
          { key: "A", text: "Tack bagian tengah terlebih dahulu, kemudian kedua ujung" },
          { key: "B", text: "Tack semua titik secara bersamaan" },
          { key: "C", text: "Ujung pertama → ujung lainnya → tengah (apabila diperlukan)" },
          { key: "D", text: "Hanya pada satu titik di bagian tengah sambungan" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Persiapan yang HARUS dilakukan pada permukaan benda kerja sebelum tack weld adalah ...",
        options: [
          { key: "A", text: "Memanaskan benda kerja hingga suhu tinggi" },
          { key: "B", text: "Mengoleskan oli pelumas pada permukaan las" },
          { key: "C", text: "Membersihkan karat, minyak, dan kotoran menggunakan sikat baja atau gerinda" },
          { key: "D", text: "Menggambar garis las menggunakan spidol permanen" },
        ],
        answer: "C",
      },
      {
        id: 6,
        text: "Alat yang digunakan untuk memastikan sudut sambungan T-Joint tepat 90° sebelum tack weld adalah ...",
        options: [
          { key: "A", text: "Mistar baja" },
          { key: "B", text: "Jangka sorong" },
          { key: "C", text: "Siku baja (try square)" },
          { key: "D", text: "Meteran baja" },
        ],
        answer: "C",
      },
      {
        id: 7,
        text: "Kesalahan tack weld retak (crack) paling sering disebabkan oleh ...",
        options: [
          { key: "A", text: "Tack weld yang terlalu panjang" },
          { key: "B", text: "Arus tidak sesuai dengan diameter elektroda" },
          { key: "C", text: "Permukaan benda kerja yang terlalu bersih" },
          { key: "D", text: "Penggunaan siku baja yang salah" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Porositas pada tack weld umumnya disebabkan oleh ...",
        options: [
          { key: "A", text: "Arus pengelasan yang terlalu rendah" },
          { key: "B", text: "Material kotor atau elektroda lembap" },
          { key: "C", text: "Tack weld yang terlalu panjang" },
          { key: "D", text: "Penggunaan siku baja yang tidak tepat" },
        ],
        answer: "B",
      },
      {
        id: 9,
        text: "Setelah setiap titik tack weld selesai, langkah yang harus dilakukan adalah ...",
        options: [
          { key: "A", text: "Langsung melanjutkan ke titik tack weld berikutnya" },
          { key: "B", text: "Biarkan sambungan dingin, kemudian bersihkan terak menggunakan palu terak dan sikat baja" },
          { key: "C", text: "Mendinginkan benda kerja dengan air" },
          { key: "D", text: "Melepas penjepit massa dari benda kerja" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Keberhasilan proses tack weld dipengaruhi oleh ...",
        options: [
          { key: "A", text: "Hanya keterampilan operator tanpa perlu prosedur" },
          { key: "B", text: "Merek mesin las yang digunakan" },
          { key: "C", text: "Persiapan material, ketepatan posisi, parameter pengelasan yang sesuai, dan penerapan K3" },
          { key: "D", text: "Hanya pengaturan arus mesin las" },
        ],
        answer: "C",
      },
    ],
  },

  // ─── MODUL 8: PEMERIKSAAN ────────────────────────────────────────────────
  {
    moduleId: 8,
    title: "Pemeriksaan Hasil Tack Weld",
    questions: [
      {
        id: 1,
        text: "Pemeriksaan hasil tack weld dilakukan pada saat ...",
        options: [
          { key: "A", text: "Setelah proses pengelasan penuh selesai" },
          { key: "B", text: "Segera setelah tack weld selesai dan terak telah dibersihkan, sebelum pengelasan penuh" },
          { key: "C", text: "Saat mesin las sedang menyala" },
          { key: "D", text: "Hanya jika diminta oleh instruktur" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Alat yang digunakan untuk memeriksa kesikuan sambungan saat pemeriksaan hasil tack weld adalah ...",
        options: [
          { key: "A", text: "Mistar baja" },
          { key: "B", text: "Jangka sorong" },
          { key: "C", text: "Siku baja" },
          { key: "D", text: "Meteran baja" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Langkah PERTAMA yang harus dilakukan sebelum melaksanakan pemeriksaan visual tack weld adalah ...",
        options: [
          { key: "A", text: "Langsung mengukur dimensi benda kerja" },
          { key: "B", text: "Membersihkan terak menggunakan palu terak dan sikat baja" },
          { key: "C", text: "Melapor kepada instruktur" },
          { key: "D", text: "Melepas seluruh klem dari benda kerja" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Panjang tack weld yang diterima berdasarkan prosedur pemeriksaan adalah ...",
        options: [
          { key: "A", text: "2–5 mm" },
          { key: "B", text: "10–20 mm sesuai gambar kerja atau prosedur perusahaan" },
          { key: "C", text: "30–50 mm" },
          { key: "D", text: "Lebih dari 50 mm" },
        ],
        answer: "B",
      },
      {
        id: 5,
        text: "Retak (crack) pada hasil tack weld umumnya disebabkan oleh ...",
        options: [
          { key: "A", text: "Tack weld yang terlalu panjang" },
          { key: "B", text: "Pendinginan terlalu cepat atau arus pengelasan yang tidak sesuai" },
          { key: "C", text: "Arus pengelasan yang terlalu rendah" },
          { key: "D", text: "Permukaan benda kerja yang terlalu bersih" },
        ],
        answer: "B",
      },
      {
        id: 6,
        text: "Porositas pada tack weld disebabkan oleh ...",
        options: [
          { key: "A", text: "Arus pengelasan terlalu tinggi" },
          { key: "B", text: "Tack weld terlalu panjang" },
          { key: "C", text: "Material kotor atau elektroda lembap" },
          { key: "D", text: "Sudut sambungan melebihi 90°" },
        ],
        answer: "C",
      },
      {
        id: 7,
        text: "Apabila ditemukan pergeseran posisi benda kerja saat pemeriksaan, tindakan perbaikan yang dilakukan adalah ...",
        options: [
          { key: "A", text: "Tetap melanjutkan pengelasan penuh" },
          { key: "B", text: "Mengatur ulang posisi benda kerja dan lakukan tack weld kembali" },
          { key: "C", text: "Menambahkan lapisan las di atas tack weld yang ada" },
          { key: "D", text: "Memotong benda kerja dan membuat ulang seluruhnya" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Kondisi tack weld dinyatakan TIDAK memenuhi kriteria apabila ...",
        options: [
          { key: "A", text: "Permukaan tack weld bersih dari terak" },
          { key: "B", text: "Panjang tack weld sesuai spesifikasi" },
          { key: "C", text: "Ditemukan retak, porositas, atau kurang menyatu pada sambungan" },
          { key: "D", text: "Sudut sambungan tepat 90°" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "Tujuan pemeriksaan tack weld dalam konteks pengendalian mutu (quality control) adalah ...",
        options: [
          { key: "A", text: "Mempercepat proses produksi" },
          { key: "B", text: "Mencegah terjadinya pekerjaan ulang (rework) dan menjamin kesiapan sambungan sebelum pengelasan penuh" },
          { key: "C", text: "Menghemat elektroda yang digunakan" },
          { key: "D", text: "Menguji kemampuan operator secara individu" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Setelah seluruh pemeriksaan selesai dan sambungan dinyatakan layak, langkah selanjutnya yang harus dilakukan peserta PKL adalah ...",
        options: [
          { key: "A", text: "Langsung memulai pengelasan penuh tanpa menunggu" },
          { key: "B", text: "Melaporkan hasil pemeriksaan kepada instruktur untuk mendapatkan persetujuan" },
          { key: "C", text: "Membersihkan seluruh area kerja terlebih dahulu" },
          { key: "D", text: "Melepas semua APD karena pekerjaan sudah selesai" },
        ],
        answer: "B",
      },
    ],
  },
];
