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
        text: "Apa kepanjangan dari K3 dalam dunia industri?",
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
        text: "Undang-Undang Nomor berapa yang mengatur tentang Keselamatan Kerja di Indonesia?",
        options: [
          { key: "A", text: "Undang-Undang Nomor 13 Tahun 2003" },
          { key: "B", text: "Undang-Undang Nomor 3 Tahun 1992" },
          { key: "C", text: "Undang-Undang Nomor 1 Tahun 1970" },
          { key: "D", text: "Undang-Undang Nomor 14 Tahun 1969" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Berikut ini merupakan potensi bahaya pada proses pengelasan SMAW, KECUALI ...",
        options: [
          { key: "A", text: "Sengatan listrik (electric shock)" },
          { key: "B", text: "Radiasi sinar ultraviolet dan inframerah" },
          { key: "C", text: "Kebisingan dari proses produksi" },
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
        text: "Apa singkatan dari APAR yang harus tersedia di area pengelasan?",
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
        text: "Tindakan manakah yang DILARANG dilakukan saat terjadi keadaan darurat di area pengelasan?",
        options: [
          { key: "A", text: "Mengikuti jalur evakuasi yang telah ditentukan" },
          { key: "B", text: "Menuju titik kumpul (assembly point)" },
          { key: "C", text: "Menyentuh korban sengatan listrik sebelum sumber listrik diputus" },
          { key: "D", text: "Melaporkan kejadian kepada petugas keselamatan" },
        ],
        answer: "C",
      },
      {
        id: 7,
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
        id: 8,
        text: "Radiasi sinar apakah yang dihasilkan dari busur listrik pengelasan SMAW dan berbahaya bagi mata?",
        options: [
          { key: "A", text: "Sinar gamma dan sinar-X" },
          { key: "B", text: "Sinar ultraviolet (UV) dan inframerah (IR)" },
          { key: "C", text: "Sinar biru dan sinar hijau" },
          { key: "D", text: "Gelombang mikro dan gelombang radio" },
        ],
        answer: "B",
      },
      {
        id: 9,
        text: "Salah satu tujuan utama penerapan K3 di lingkungan industri adalah ...",
        options: [
          { key: "A", text: "Meningkatkan jam kerja karyawan" },
          { key: "B", text: "Mengurangi jumlah tenaga kerja" },
          { key: "C", text: "Melindungi pekerja dari risiko kecelakaan kerja" },
          { key: "D", text: "Mempercepat proses produksi tanpa prosedur" },
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
        text: "Leather Spats (Pelindung Kaki) pada proses pengelasan berfungsi untuk ...",
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
          { key: "A", text: "Proses pengelasan berlangsung" },
          { key: "B", text: "Proses persiapan dan pembersihan sebelum atau sesudah pengelasan" },
          { key: "C", text: "Hanya saat mengelas di posisi overhead" },
          { key: "D", text: "Digunakan sebagai pengganti helm las" },
        ],
        answer: "B",
      },
      {
        id: 5,
        text: "APD yang berfungsi mengurangi paparan debu dan partikel halus yang dihasilkan selama proses persiapan material adalah ...",
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
        text: "Sarung tangan las model gauntlet memiliki keunggulan berupa ...",
        options: [
          { key: "A", text: "Lebih tipis sehingga lebih fleksibel" },
          { key: "B", text: "Bagian lengan yang lebih panjang sehingga memberikan perlindungan ekstra" },
          { key: "C", text: "Harganya lebih murah dibandingkan jenis lain" },
          { key: "D", text: "Terbuat dari bahan karet yang tahan panas" },
        ],
        answer: "B",
      },
      {
        id: 7,
        text: "Apa yang harus dilakukan terhadap APD yang sudah rusak atau tidak layak pakai?",
        options: [
          { key: "A", text: "Tetap digunakan karena masih bisa melindungi" },
          { key: "B", text: "Diperbaiki sendiri dengan bahan seadanya" },
          { key: "C", text: "Diganti dan dilaporkan kepada pembimbing" },
          { key: "D", text: "Disimpan di gudang tanpa pelaporan" },
        ],
        answer: "C",
      },
      {
        id: 8,
        text: "Celana panjang yang digunakan pada proses pengelasan SMAW sebaiknya terbuat dari bahan ...",
        options: [
          { key: "A", text: "Nilon tipis dan elastis" },
          { key: "B", text: "Plastik kedap air" },
          { key: "C", text: "Katun tebal atau bahan tahan api tanpa lipatan" },
          { key: "D", text: "Bahan sintetis ringan" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "APD yang digunakan untuk melindungi bagian depan tubuh dari percikan logam cair, terutama saat pekerjaan dilakukan dalam posisi tertentu adalah ...",
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
        text: "Sepatu keselamatan (hightop leather work boots) pada proses pengelasan harus memiliki karakteristik ...",
        options: [
          { key: "A", text: "Sol tipis dan ringan agar nyaman dipakai" },
          { key: "B", text: "Berbahan karet tanpa pelindung besi" },
          { key: "C", text: "Tahan panas, memiliki pelindung besi di ujung sepatu, dan bersol tebal" },
          { key: "D", text: "Model sandal terbuka agar kaki tidak kepanasan" },
        ],
        answer: "C",
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
          { key: "B", text: "Menghasilkan arus listrik untuk membentuk busur listrik" },
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
          { key: "B", text: "Penjepit elektroda dan penghantar arus listrik dari mesin las" },
          { key: "C", text: "Penghubung kabel las dengan sumber listrik" },
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
          { key: "C", text: "Memecahkan dan membersihkan terak (slag) setelah pengelasan" },
          { key: "D", text: "Menjepit benda kerja pada meja las" },
        ],
        answer: "C",
      },
      {
        id: 6,
        text: "Gerinda tangan (angle grinder) pada proses pengelasan digunakan untuk ...",
        options: [
          { key: "A", text: "Membersihkan terak setelah pengelasan selesai" },
          { key: "B", text: "Meratakan hasil las, membersihkan permukaan, dan mempersiapkan kampuh" },
          { key: "C", text: "Mengalirkan arus listrik ke elektroda" },
          { key: "D", text: "Mengukur dimensi benda kerja" },
        ],
        answer: "B",
      },
      {
        id: 7,
        text: "Elektroda yang TIDAK boleh digunakan pada proses pengelasan SMAW adalah ...",
        options: [
          { key: "A", text: "Elektroda yang baru dikeluarkan dari kemasan" },
          { key: "B", text: "Elektroda dengan panjang standar sesuai spesifikasi" },
          { key: "C", text: "Elektroda yang lembap atau mengalami kerusakan pada lapisan fluksnya" },
          { key: "D", text: "Elektroda tipe E6013" },
        ],
        answer: "C",
      },
      {
        id: 8,
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
        id: 9,
        text: "Pemeriksaan peralatan sebelum pengelasan bertujuan untuk ...",
        options: [
          { key: "A", text: "Memperlambat proses pengelasan" },
          { key: "B", text: "Mengurangi risiko kecelakaan kerja dan menjaga kualitas hasil pengelasan" },
          { key: "C", text: "Menentukan jenis elektroda yang dipakai" },
          { key: "D", text: "Menghemat biaya pemakaian elektroda" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Kabel las yang rusak pada bagian isolasinya dapat menyebabkan ...",
        options: [
          { key: "A", text: "Hasil las menjadi tidak merata" },
          { key: "B", text: "Elektroda cepat habis terbakar" },
          { key: "C", text: "Risiko sengatan listrik pada operator" },
          { key: "D", text: "Arus pengelasan menjadi terlalu tinggi" },
        ],
        answer: "C",
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
        text: "Pada gambar kerja, informasi dimensi yang dicantumkan meliputi ...",
        options: [
          { key: "A", text: "Harga material dan biaya produksi" },
          { key: "B", text: "Nama operator dan tanggal pengerjaan" },
          { key: "C", text: "Panjang, lebar, tinggi, diameter, sudut, dan ketebalan material" },
          { key: "D", text: "Jenis mesin las dan merk elektroda" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Fillet Weld (Las Sudut) digunakan untuk ...",
        options: [
          { key: "A", text: "Menyambung dua permukaan yang membentuk sudut 90°" },
          { key: "B", text: "Menyambung dua logam pada sisi ujungnya secara tumpul" },
          { key: "C", text: "Menyambung dua logam yang saling tumpang tindih" },
          { key: "D", text: "Menyambung logam pada bagian tepinya" },
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
        text: "Informasi jenis material pada gambar kerja (misalnya Mild Steel atau Stainless Steel) digunakan sebagai acuan untuk ...",
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
          { key: "C", text: "Produk yang dihasilkan tidak sesuai spesifikasi" },
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
        text: "Tingkat ketelitian mistar baja (steel rule) yang umum digunakan di area fabrikasi adalah ...",
        options: [
          { key: "A", text: "0,01 mm" },
          { key: "B", text: "0,05 mm" },
          { key: "C", text: "1 mm" },
          { key: "D", text: "5 mm" },
        ],
        answer: "C",
      },
      {
        id: 2,
        text: "Siku baja (try square) digunakan untuk ...",
        options: [
          { key: "A", text: "Mengukur panjang dan lebar benda kerja" },
          { key: "B", text: "Memeriksa kesikuan atau sudut 90° suatu benda kerja" },
          { key: "C", text: "Mengukur diameter dalam suatu lubang" },
          { key: "D", text: "Mengukur ketebalan manik las" },
        ],
        answer: "B",
      },
      {
        id: 3,
        text: "Jangka sorong (vernier caliper) dapat digunakan untuk mengukur ...",
        options: [
          { key: "A", text: "Hanya diameter luar benda kerja" },
          { key: "B", text: "Diameter luar, diameter dalam, dan kedalaman" },
          { key: "C", text: "Hanya panjang benda kerja yang lurus" },
          { key: "D", text: "Sudut kemiringan permukaan benda kerja" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Tingkat ketelitian jangka sorong (vernier caliper) yang umum digunakan adalah ...",
        options: [
          { key: "A", text: "1 mm" },
          { key: "B", text: "0,5 mm" },
          { key: "C", text: "0,05 mm" },
          { key: "D", text: "0,001 mm" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Kesalahan parallax pada pengukuran dengan mistar baja terjadi apabila ...",
        options: [
          { key: "A", text: "Mistar baja dalam kondisi bengkok" },
          { key: "B", text: "Posisi mata tidak tegak lurus terhadap skala yang dibaca" },
          { key: "C", text: "Permukaan benda kerja berkarat" },
          { key: "D", text: "Mistar baja tidak dikalibrasi" },
        ],
        answer: "B",
      },
      {
        id: 6,
        text: "Mal las (weld gauge) digunakan untuk mengukur ...",
        options: [
          { key: "A", text: "Kuat arus yang digunakan selama pengelasan" },
          { key: "B", text: "Suhu benda kerja sebelum pengelasan" },
          { key: "C", text: "Dimensi hasil pengelasan seperti tinggi manik las dan lebar las" },
          { key: "D", text: "Kadar kandungan karbon dalam elektroda" },
        ],
        answer: "C",
      },
      {
        id: 7,
        text: "Langkah pertama yang harus dilakukan sebelum menggunakan jangka sorong adalah ...",
        options: [
          { key: "A", text: "Langsung mengukur benda kerja" },
          { key: "B", text: "Menutup rahang dan memastikan menunjukkan angka nol" },
          { key: "C", text: "Memanaskan benda kerja terlebih dahulu" },
          { key: "D", text: "Mengunci skala dengan baut pengunci" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Alat ukur yang tepat digunakan untuk memverifikasi sudut 90° pada sambungan T-Joint sebelum tack weld adalah ...",
        options: [
          { key: "A", text: "Mistar baja" },
          { key: "B", text: "Jangka sorong" },
          { key: "C", text: "Pita ukur" },
          { key: "D", text: "Siku baja" },
        ],
        answer: "D",
      },
      {
        id: 9,
        text: "Cara menyimpan alat ukur yang benar adalah ...",
        options: [
          { key: "A", text: "Disimpan di dekat sumber panas agar tidak berkarat" },
          { key: "B", text: "Ditumpuk bersama peralatan berat lainnya" },
          { key: "C", text: "Disimpan di tempat kering dan bersih, tidak dijatuhkan atau dibenturkan" },
          { key: "D", text: "Direndam dalam oli agar terlumasi" },
        ],
        answer: "C",
      },
      {
        id: 10,
        text: "Prinsip pengukuran yang benar dalam fabrikasi adalah ...",
        options: [
          { key: "A", text: "Ukur sekali langsung kerjakan" },
          { key: "B", text: "Kerjakan dulu baru diukur" },
          { key: "C", text: "Ukur dua kali, kerjakan sekali — pastikan dimensi sesuai gambar kerja" },
          { key: "D", text: "Estimasikan ukuran berdasarkan pengalaman" },
        ],
        answer: "C",
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
        text: "Suhu yang dapat dicapai oleh busur listrik pada proses pengelasan SMAW adalah ...",
        options: [
          { key: "A", text: "Hingga 1.000°C" },
          { key: "B", text: "Hingga 3.000°C" },
          { key: "C", text: "Dapat mencapai 6.000°C" },
          { key: "D", text: "Hingga 500°C" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Fungsi lapisan fluks (flux coating) pada elektroda SMAW adalah ...",
        options: [
          { key: "A", text: "Mempercantik tampilan elektroda" },
          { key: "B", text: "Melindungi kolam las dari kontaminasi oksigen dan nitrogen di udara" },
          { key: "C", text: "Mempercepat laju pengelasan" },
          { key: "D", text: "Mengurangi panas yang dihasilkan busur listrik" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Pada kode elektroda E7018, angka '70' menunjukkan ...",
        options: [
          { key: "A", text: "Diameter elektroda dalam satuan mm" },
          { key: "B", text: "Kekuatan tarik minimum sebesar 70.000 psi (70 ksi)" },
          { key: "C", text: "Temperatur maksimum penggunaan elektroda" },
          { key: "D", text: "Jumlah lapisan fluks elektroda" },
        ],
        answer: "B",
      },
      {
        id: 5,
        text: "Pada kode elektroda E7018, angka '1' (digit ketiga) menunjukkan ...",
        options: [
          { key: "A", text: "Elektroda hanya dapat digunakan pada posisi flat" },
          { key: "B", text: "Elektroda hanya dapat digunakan pada posisi horizontal" },
          { key: "C", text: "Elektroda dapat digunakan pada semua posisi pengelasan" },
          { key: "D", text: "Elektroda untuk pengelasan pipa" },
        ],
        answer: "C",
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
          { key: "B", text: "Busur listrik tidak stabil dan elektroda cenderung menempel" },
          { key: "C", text: "Terjadi burn-through (tembus) pada benda kerja" },
          { key: "D", text: "Terjadi percikan las yang berlebihan" },
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
        text: "Apa yang terjadi apabila panjang busur listrik terlalu panjang selama pengelasan?",
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
        text: "Tack weld (las ikat sementara) berfungsi untuk ...",
        options: [
          { key: "A", text: "Menyelesaikan proses pengelasan secara permanen" },
          { key: "B", text: "Mempertahankan posisi benda kerja sebelum pengelasan penuh dilakukan" },
          { key: "C", text: "Membersihkan permukaan benda kerja dari karat" },
          { key: "D", text: "Mengukur dimensi sambungan las" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Panjang standar tack weld pada sambungan T-Joint adalah ...",
        options: [
          { key: "A", text: "2–5 mm" },
          { key: "B", text: "30–50 mm" },
          { key: "C", text: "10–15 mm" },
          { key: "D", text: "50–100 mm" },
        ],
        answer: "C",
      },
      {
        id: 3,
        text: "Jarak yang dianjurkan antara titik tack weld satu dengan lainnya adalah ...",
        options: [
          { key: "A", text: "5–10 mm" },
          { key: "B", text: "50–100 mm" },
          { key: "C", text: "200–300 mm" },
          { key: "D", text: "Lebih dari 500 mm" },
        ],
        answer: "B",
      },
      {
        id: 4,
        text: "Jumlah titik tack weld minimum yang harus dibuat pada sambungan adalah ...",
        options: [
          { key: "A", text: "1 titik di tengah sambungan" },
          { key: "B", text: "2 titik di kedua ujung" },
          { key: "C", text: "3 titik (kedua ujung dan tengah)" },
          { key: "D", text: "Minimal 10 titik" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Persiapan yang HARUS dilakukan pada permukaan benda kerja sebelum tack weld adalah ...",
        options: [
          { key: "A", text: "Memanaskan benda kerja hingga suhu 500°C" },
          { key: "B", text: "Mengoleskan oli pelumas pada permukaan las" },
          { key: "C", text: "Membersihkan karat, cat, minyak, dan kotoran menggunakan sikat baja atau gerinda" },
          { key: "D", text: "Menggambar garis las menggunakan spidol permanen" },
        ],
        answer: "C",
      },
      {
        id: 6,
        text: "Alat yang digunakan untuk memastikan sudut sambungan T-Joint tepat 90° sebelum dan sesudah tack weld adalah ...",
        options: [
          { key: "A", text: "Mistar baja" },
          { key: "B", text: "Jangka sorong" },
          { key: "C", text: "Siku baja (try square)" },
          { key: "D", text: "Pita ukur" },
        ],
        answer: "C",
      },
      {
        id: 7,
        text: "Apa dampak dari tack weld yang terlalu kecil (waktu pengelasan terlalu singkat)?",
        options: [
          { key: "A", text: "Menyulitkan proses pengelasan akhir" },
          { key: "B", text: "Sambungan tidak mampu menahan posisi benda kerja" },
          { key: "C", text: "Menyebabkan distorsi yang berlebihan" },
          { key: "D", text: "Menyebabkan terjadinya undercut" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Porositas (porosity) pada tack weld umumnya disebabkan oleh ...",
        options: [
          { key: "A", text: "Arus pengelasan yang terlalu rendah" },
          { key: "B", text: "Elektroda lembap atau permukaan benda kerja yang kotor" },
          { key: "C", text: "Tack weld yang terlalu panjang" },
          { key: "D", text: "Penggunaan siku baja yang tidak tepat" },
        ],
        answer: "B",
      },
      {
        id: 9,
        text: "Yang harus dilakukan SETELAH setiap titik tack weld selesai adalah ...",
        options: [
          { key: "A", text: "Langsung melanjutkan ke titik tack weld berikutnya" },
          { key: "B", text: "Membersihkan terak menggunakan palu terak" },
          { key: "C", text: "Mendinginkan benda kerja dengan air" },
          { key: "D", text: "Melepas penjepit massa dari benda kerja" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Tujuan utama tack weld dalam proses fabrikasi adalah ...",
        options: [
          { key: "A", text: "Menghasilkan sambungan las yang permanen dan kuat" },
          { key: "B", text: "Menggantikan proses pengelasan penuh" },
          { key: "C", text: "Mencegah distorsi dan menjaga posisi benda kerja selama pengelasan penuh" },
          { key: "D", text: "Mempercepat proses pembersihan terak" },
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
          { key: "B", text: "Sebelum proses pengelasan penuh (final welding) dilakukan" },
          { key: "C", text: "Saat mesin las sedang menyala" },
          { key: "D", text: "Hanya jika diminta oleh instruktur" },
        ],
        answer: "B",
      },
      {
        id: 2,
        text: "Standar sudut sambungan T-Joint yang ditetapkan pada proses pemeriksaan tack weld adalah ...",
        options: [
          { key: "A", text: "45° ± 2°" },
          { key: "B", text: "60° ± 5°" },
          { key: "C", text: "90° ± 1°" },
          { key: "D", text: "120° ± 3°" },
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
        text: "Alat yang digunakan untuk memeriksa sudut 90° pada sambungan T-Joint saat pemeriksaan adalah ...",
        options: [
          { key: "A", text: "Mistar baja" },
          { key: "B", text: "Jangka sorong" },
          { key: "C", text: "Siku baja" },
          { key: "D", text: "Mal las (weld gauge)" },
        ],
        answer: "C",
      },
      {
        id: 5,
        text: "Retak (crack) pada hasil tack weld umumnya disebabkan oleh ...",
        options: [
          { key: "A", text: "Tack weld yang terlalu panjang" },
          { key: "B", text: "Pendinginan terlalu cepat atau parameter pengelasan yang tidak sesuai" },
          { key: "C", text: "Arus pengelasan yang terlalu rendah" },
          { key: "D", text: "Permukaan benda kerja yang terlalu bersih" },
        ],
        answer: "B",
      },
      {
        id: 6,
        text: "Jumlah titik tack weld minimum yang diterima berdasarkan standar penerimaan adalah ...",
        options: [
          { key: "A", text: "1 titik" },
          { key: "B", text: "2 titik" },
          { key: "C", text: "3 titik" },
          { key: "D", text: "5 titik" },
        ],
        answer: "C",
      },
      {
        id: 7,
        text: "Apabila ditemukan pergeseran posisi benda kerja saat pemeriksaan, tindakan perbaikan yang dilakukan adalah ...",
        options: [
          { key: "A", text: "Tetap melanjutkan pengelasan penuh" },
          { key: "B", text: "Melepas dan mengatur ulang posisi benda kerja" },
          { key: "C", text: "Menambahkan lapisan las di atas tack weld yang ada" },
          { key: "D", text: "Memotong benda kerja dan membuat ulang" },
        ],
        answer: "B",
      },
      {
        id: 8,
        text: "Kondisi tack weld dinyatakan TIDAK memenuhi standar penerimaan apabila ...",
        options: [
          { key: "A", text: "Permukaan tack weld bersih dari terak" },
          { key: "B", text: "Panjang tack weld 12 mm" },
          { key: "C", text: "Ditemukan retak atau porositas pada sambungan" },
          { key: "D", text: "Sudut sambungan tepat 90°" },
        ],
        answer: "C",
      },
      {
        id: 9,
        text: "Setelah seluruh tahapan pemeriksaan selesai, langkah selanjutnya yang harus dilakukan peserta PKL adalah ...",
        options: [
          { key: "A", text: "Langsung memulai pengelasan penuh tanpa menunggu" },
          { key: "B", text: "Melaporkan hasil pemeriksaan kepada instruktur untuk mendapatkan persetujuan" },
          { key: "C", text: "Membersihkan seluruh area kerja" },
          { key: "D", text: "Melepas semua APD karena pekerjaan sudah selesai" },
        ],
        answer: "B",
      },
      {
        id: 10,
        text: "Tujuan utama pemeriksaan hasil tack weld sebelum pengelasan penuh adalah ...",
        options: [
          { key: "A", text: "Mempercepat proses produksi" },
          { key: "B", text: "Memastikan posisi benda kerja, dimensi sambungan, dan kualitas tack weld memenuhi standar" },
          { key: "C", text: "Menghemat elektroda yang digunakan" },
          { key: "D", text: "Menguji kemampuan operator secara individu" },
        ],
        answer: "B",
      },
    ],
  },
];
