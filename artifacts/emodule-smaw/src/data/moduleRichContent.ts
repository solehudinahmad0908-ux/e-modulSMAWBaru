// Generated verbatim from MATERI_k3_1784824495941.docx

export type ContentItem =
  | { kind: 'heading'; text: string }
  | { kind: 'para'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'image'; file: string; caption: string; source: string }
  | { kind: 'gallery'; images: Array<{ file: string; caption: string; source: string }> }
  | { kind: 'table'; caption: string; cols: string[]; rows: string[][] }
  | { kind: 'infobox'; title: string; text: string }
  | { kind: 'checklist'; title: string; items: string[]; variant: 'refleksi' | 'pemeriksaan' }
  | { kind: 'video'; file: string; intro: string[]; source: string; warning: string };

export interface ModuleRichContent {
  id: number;
  items: ContentItem[];
}

export const moduleRichContents: ModuleRichContent[] = [
  // ══════════════════════════════════════════════════════════
  // MODUL 1 — Keselamatan dan Kesehatan Kerja (K3)
  // ══════════════════════════════════════════════════════════
  {
    id: 1,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta Praktik Kerja Lapangan (PKL) diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan pengertian Keselamatan dan Kesehatan Kerja (K3).",
        "Menjelaskan tujuan penerapan K3 di lingkungan industri.",
        "Mengidentifikasi potensi bahaya pada proses pengelasan SMAW.",
        "Menerapkan upaya pencegahan kecelakaan kerja sesuai prosedur.",
        "Memahami fungsi rambu-rambu keselamatan kerja.",
        "Menjelaskan prosedur tanggap darurat di lingkungan kerja.",
      ] },

      { kind: 'heading', text: "Pengertian Keselamatan dan Kesehatan Kerja (K3)" },
      { kind: 'para', text: "Keselamatan dan Kesehatan Kerja (K3) merupakan serangkaian upaya yang bertujuan menciptakan lingkungan kerja yang aman, sehat, dan bebas dari risiko kecelakaan maupun penyakit akibat kerja. Penerapan K3 bertujuan melindungi pekerja, menjaga kelancaran proses produksi, serta mengurangi kerugian yang dapat ditimbulkan akibat kecelakaan kerja (Tarwaka, 2017)." },
      { kind: 'para', text: "Dalam proses pengelasan SMAW, penerapan K3 menjadi sangat penting karena pekerjaan melibatkan arus listrik, suhu tinggi, radiasi cahaya, percikan logam cair, serta asap hasil pengelasan yang dapat membahayakan pekerja apabila tidak dikendalikan dengan baik." },
      { kind: 'para', text: "Sesuai dengan Undang-Undang Nomor 6 Tahun 2023 tentang Cipta Kerja, setiap perusahaan wajib menerapkan sistem keselamatan dan kesehatan kerja untuk memberikan perlindungan kepada tenaga kerja serta menciptakan lingkungan kerja yang aman dan produktif." },

      { kind: 'heading', text: "Tujuan Penerapan K3" },
      { kind: 'para', text: "Penerapan K3 di lingkungan industri bertujuan untuk:" },
      { kind: 'bullets', items: [
        "Melindungi pekerja dari risiko kecelakaan kerja.",
        "Mencegah terjadinya penyakit akibat kerja.",
        "Menjamin keselamatan seluruh orang yang berada di area kerja.",
        "Melindungi mesin, peralatan, dan aset perusahaan.",
        "Meningkatkan produktivitas dan efisiensi kerja.",
        "Menciptakan budaya kerja yang aman, disiplin, dan bertanggung jawab.",
      ] },

      { kind: 'heading', text: "Pentingnya K3 pada Proses Pengelasan SMAW" },
      { kind: 'para', text: "Pengelasan SMAW merupakan salah satu proses kerja yang memiliki tingkat risiko tinggi. Oleh karena itu, setiap peserta PKL wajib memahami dan menerapkan prinsip-prinsip K3 sebelum memasuki area kerja." },
      { kind: 'para', text: "Beberapa potensi bahaya yang dapat terjadi pada proses pengelasan antara lain:" },
      { kind: 'bullets', items: [
        "Sengatan listrik (electric shock)",
        "Radiasi sinar ultraviolet (UV) dan inframerah (IR)",
        "Percikan logam cair (weld spatter)",
        "Asap dan gas hasil pengelasan (welding fumes)",
        "Kebakaran akibat percikan api",
        "Luka bakar akibat material bersuhu tinggi",
      ] },
      { kind: 'para', text: "Penerapan K3 secara konsisten dapat mengurangi risiko kecelakaan kerja dan menjaga kualitas hasil pekerjaan." },

      { kind: 'heading', text: "Potensi Bahaya di Area Pengelasan" },
      { kind: 'table', caption: "Tabel 1 Potensi Bahaya pada Area Pengelasan SMAW",
        cols: ["No", "Potensi Bahaya", "Dampak", "Pengendalian"],
        rows: [
          ["1", "Sengatan listrik",    "Cedera hingga kematian",         "Memeriksa kabel dan peralatan sebelum digunakan"],
          ["2", "Percikan logam cair", "Luka bakar",                     "Menggunakan APD lengkap"],
          ["3", "Radiasi UV dan IR",   "Kerusakan mata dan kulit",       "Menggunakan helm las"],
          ["4", "Asap las",            "Gangguan pernapasan",            "Ventilasi yang baik dan masker"],
          ["5", "Kebakaran",           "Cedera dan kerusakan fasilitas", "Menjauhkan material mudah terbakar dan menyediakan APAR"],
          ["6", "Material panas",      "Luka bakar",                     "Menggunakan sarung tangan dan tang penjepit"],
        ],
      },
      { kind: 'image', file: "image1.png", caption: "Gambar 1 Potensi Bahaya pada Area Pengelasan SMAW", source: "Garuda Systrain Indonesia (2023)" },

      { kind: 'heading', text: "Upaya Pencegahan Kecelakaan Kerja" },
      { kind: 'para', text: "Upaya pencegahan kecelakaan kerja harus dilakukan sebelum, selama, dan setelah proses pengelasan." },
      { kind: 'table', caption: "Tabel 2 Ringkasan Upaya Pencegahan Kecelakaan Kerja",
        cols: ["Tahapan", "Upaya Pencegahan"],
        rows: [
          ["Sebelum bekerja", "Menggunakan APD, memeriksa mesin dan peralatan, memastikan area kerja aman, serta menyiapkan APAR."],
          ["Saat bekerja",    "Mengikuti SOP, menjaga posisi kerja yang aman, menghindari kontak dengan sumber listrik, dan menjaga kebersihan area kerja."],
          ["Setelah bekerja", "Mematikan mesin las, membersihkan area kerja, menyimpan peralatan, serta melaporkan kerusakan kepada pembimbing."],
        ],
      },

      { kind: 'heading', text: "Contoh Penerapan di PT. Coppalt Utama Indomelt" },
      { kind: 'para', text: "Sebelum memasuki area produksi, setiap peserta PKL diwajibkan menggunakan APD lengkap, mengikuti arahan instruktur, serta memastikan area kerja dalam kondisi aman. Peserta juga harus mematuhi prosedur kerja dan menjaga kebersihan area kerja sebagai bagian dari budaya keselamatan di perusahaan." },

      { kind: 'heading', text: "Rambu-Rambu Keselamatan Kerja" },
      { kind: 'para', text: "Rambu keselamatan berfungsi sebagai media komunikasi visual untuk memberikan informasi mengenai bahaya, larangan, perintah, maupun petunjuk keselamatan di lingkungan kerja." },
      { kind: 'para', text: "Jenis rambu keselamatan meliputi:" },
      { kind: 'bullets', items: [
        "Rambu larangan",
        "Rambu peringatan",
        "Rambu perintah",
        "Rambu kondisi aman",
      ] },
      { kind: 'image', file: "image2.jpeg", caption: "Gambar 2 Contoh rambu-rambu keselamatan kerja", source: "PT SHA SOLO. (2023). Contoh Simbol Rambu-Rambu Keselamatan." },

      { kind: 'heading', text: "Prosedur Tanggap Darurat" },
      { kind: 'para', text: "Apabila terjadi keadaan darurat, peserta harus:" },
      { kind: 'bullets', items: [
        "Tetap tenang.",
        "Menghentikan pekerjaan.",
        "Mematikan sumber listrik apabila aman dilakukan.",
        "Melaporkan kejadian kepada instruktur atau petugas K3.",
        "Menggunakan APAR apabila telah mendapatkan pelatihan.",
        "Mengikuti jalur evakuasi menuju titik kumpul.",
      ] },
      { kind: 'image', file: "image3.jpeg", caption: "Gambar 3 Contoh jalur evakuasi dan titik kumpul di lingkungan kerja.", source: "Nimbus9 Technology. (2024). Jalur Evakuasi Adalah: Pengertian, Fungsi, Standar, dan Contohnya." },

      { kind: 'heading', text: "Poin Penting" },
      { kind: 'bullets', items: [
        "📌 Keselamatan kerja merupakan tanggung jawab setiap pekerja.",
        "📌 Gunakan APD lengkap sebelum melakukan pengelasan.",
        "📌 Kenali seluruh potensi bahaya sebelum bekerja.",
        "📌 Ikuti SOP dan instruksi pembimbing.",
        "📌 Laporkan segera apabila menemukan kondisi yang tidak aman.",
      ] },

      { kind: 'checklist',
        title: "Refleksi Diri",
        variant: "refleksi",
        items: [
          "Saya memahami konsep K3.",
          "Saya mengetahui potensi bahaya pada pengelasan SMAW.",
          "Saya memahami fungsi rambu keselamatan.",
          "Saya mengetahui prosedur tanggap darurat.",
          "Saya siap menerapkan K3 saat praktik.",
        ],
      },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Keselamatan dan Kesehatan Kerja (K3) merupakan aspek yang sangat penting dalam setiap kegiatan pengelasan. Penerapan K3 bertujuan melindungi pekerja dari risiko kecelakaan dan penyakit akibat kerja, menjaga keselamatan lingkungan kerja, serta meningkatkan produktivitas. Peserta PKL harus mampu mengenali potensi bahaya, menggunakan APD, mematuhi SOP, memahami rambu keselamatan, dan mengetahui prosedur tanggap darurat sebelum melaksanakan praktik pengelasan di PT. Coppalt Utama Indomelt." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 2 — Alat Pelindung Diri (APD)
  // ══════════════════════════════════════════════════════════
  {
    id: 2,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan pengertian Alat Pelindung Diri (APD).",
        "Menjelaskan tujuan penggunaan APD pada proses pengelasan SMAW.",
        "Mengidentifikasi jenis-jenis APD beserta fungsinya.",
        "Menggunakan APD sesuai prosedur sebelum memasuki area kerja.",
        "Memeriksa dan merawat APD agar tetap layak digunakan.",
      ] },

      { kind: 'heading', text: "Pengertian Alat Pelindung Diri (APD)" },
      { kind: 'para', text: "Alat Pelindung Diri (APD) merupakan perlengkapan yang digunakan oleh pekerja untuk melindungi tubuh dari potensi bahaya yang dapat menyebabkan cedera maupun penyakit akibat kerja selama melakukan aktivitas pekerjaan. APD berfungsi sebagai lapisan perlindungan terakhir (last line of defense) setelah dilakukan upaya pengendalian bahaya melalui rekayasa teknik, pengendalian administratif, dan penerapan prosedur kerja yang aman (Tarwaka, 2017)." },
      { kind: 'para', text: "Pada proses pengelasan Shielded Metal Arc Welding (SMAW), pekerja dihadapkan pada berbagai potensi bahaya seperti radiasi sinar ultraviolet (UV) dan inframerah (IR), percikan logam cair, suhu tinggi, asap hasil pengelasan (welding fumes), kebisingan, serta risiko sengatan listrik. Oleh karena itu, penggunaan APD secara lengkap dan benar merupakan kewajiban bagi setiap pekerja maupun peserta PKL sebelum memasuki area produksi." },
      { kind: 'para', text: "Di PT. Coppalt Utama Indomelt, penggunaan APD merupakan bagian dari penerapan Keselamatan dan Kesehatan Kerja (K3). Setiap peserta PKL diwajibkan menggunakan APD sesuai dengan jenis pekerjaan yang dilakukan sebagai bentuk kepatuhan terhadap prosedur keselamatan yang berlaku di perusahaan." },

      { kind: 'heading', text: "Tujuan Penggunaan APD" },
      { kind: 'para', text: "Penggunaan APD pada proses pengelasan bertujuan untuk:" },
      { kind: 'bullets', items: [
        "Melindungi pekerja dari risiko cedera akibat potensi bahaya di tempat kerja.",
        "Mengurangi kemungkinan terjadinya penyakit akibat kerja.",
        "Meminimalkan dampak kecelakaan kerja selama proses pengelasan.",
        "Mendukung terciptanya lingkungan kerja yang aman, sehat, dan produktif.",
        "Meningkatkan disiplin serta kepatuhan terhadap prosedur Keselamatan dan Kesehatan Kerja (K3).",
        "Memberikan perlindungan tambahan apabila terjadi kondisi kerja yang tidak dapat dihilangkan melalui pengendalian lainnya.",
      ] },

      { kind: 'infobox',
        title: "Info Industri",
        text: "Di PT. Coppalt Utama Indomelt, penggunaan APD merupakan syarat wajib sebelum memasuki area produksi. Peserta PKL yang tidak menggunakan APD secara lengkap tidak diperkenankan mengikuti kegiatan praktik hingga seluruh perlengkapan keselamatan digunakan sesuai ketentuan perusahaan.",
      },

      { kind: 'heading', text: "Jenis-Jenis APD pada Proses Pengelasan SMAW" },
      { kind: 'para', text: "Penggunaan APD yang lengkap merupakan salah satu langkah penting dalam mencegah kecelakaan kerja pada proses pengelasan SMAW. Setiap APD memiliki fungsi yang berbeda sesuai dengan potensi bahaya yang dihadapi selama pekerjaan berlangsung." },
      { kind: 'image', file: "image4.jpeg", caption: "Gambar 4 Jenis-Jenis APD Pengelasan SMAW", source: "Welding Safety UK. (2021). Personal protective equipment (PPE) for welding." },

      { kind: 'heading', text: "Topi Las (Welding Cap)" },
      { kind: 'para', text: "Melindungi kepala dan rambut dari percikan api, panas, serta debu, sekaligus meningkatkan kenyamanan saat menggunakan helm las." },

      { kind: 'heading', text: "Kacamata Keselamatan (Safety Glasses)" },
      { kind: 'para', text: "Melindungi mata dari debu, serpihan logam, dan percikan saat proses pemotongan, penggerindaan, maupun pembersihan hasil las." },

      { kind: 'heading', text: "Helm Las (Welding Helmet)" },
      { kind: 'para', text: "Melindungi mata, wajah, dan leher dari radiasi sinar UV, IR, cahaya busur listrik, serta percikan logam cair." },

      { kind: 'heading', text: "Masker Debu (Dust Mask)" },
      { kind: 'para', text: "Digunakan untuk mengurangi paparan debu dan partikel halus. Pada area dengan konsentrasi asap las tinggi disarankan menggunakan respirator sesuai hasil identifikasi risiko." },

      { kind: 'heading', text: "Jaket Las Kulit (Leather Welding Jacket)" },
      { kind: 'para', text: "Melindungi tubuh dan lengan dari panas, percikan logam cair, dan radiasi selama proses pengelasan." },

      { kind: 'heading', text: "Sarung Tangan Las (Gauntlet Type Welding Gloves)" },
      { kind: 'para', text: "Melindungi tangan dari panas, percikan logam cair, benda tajam, dan benda kerja bersuhu tinggi." },

      { kind: 'heading', text: "Celemek Kulit (Leather Apron)" },
      { kind: 'para', text: "Melindungi bagian depan tubuh dari percikan logam cair selama proses pengelasan." },

      { kind: 'heading', text: "Celana Panjang (Long Pants)" },
      { kind: 'para', text: "Melindungi kaki dari panas dan percikan logam. Celana sebaiknya berbahan katun tebal atau bahan tahan api." },

      { kind: 'heading', text: "Pelindung Kaki (Leather Spats)" },
      { kind: 'para', text: "Melindungi bagian atas sepatu agar percikan logam cair tidak masuk ke dalam sepatu." },

      { kind: 'heading', text: "Sepatu Keselamatan (High Top Leather Work Boots)" },
      { kind: 'para', text: "Melindungi kaki dari benda berat, benda tajam, logam panas, serta mengurangi risiko terpeleset." },

      { kind: 'heading', text: "Fungsi dan Risiko yang Dicegah oleh APD" },
      { kind: 'table', caption: "Tabel 2 Fungsi APD pada Proses Pengelasan SMAW",
        cols: ["No", "APD", "Fungsi", "Risiko yang Dicegah"],
        rows: [
          ["1",  "Topi Las",           "Melindungi kepala dari panas.",      "Percikan api dan panas."],
          ["2",  "Safety Glasses",     "Melindungi mata.",                   "Debu dan serpihan logam."],
          ["3",  "Helm Las",           "Melindungi wajah dan mata.",         "Radiasi UV, IR, dan percikan logam."],
          ["4",  "Masker Debu",        "Melindungi pernapasan.",             "Debu dan asap las."],
          ["5",  "Jaket Las Kulit",    "Melindungi tubuh.",                  "Panas dan percikan logam cair."],
          ["6",  "Sarung Tangan Las",  "Melindungi tangan.",                 "Luka bakar dan benda tajam."],
          ["7",  "Celemek Kulit",      "Melindungi bagian depan tubuh.",     "Percikan logam cair."],
          ["8",  "Celana Panjang",     "Melindungi kaki.",                   "Panas dan percikan logam."],
          ["9",  "Leather Spats",      "Melindungi bagian atas kaki.",       "Percikan logam masuk ke sepatu."],
          ["10", "Safety Shoes",       "Melindungi kaki.",                   "Benda berat, logam panas, dan benda tajam."],
        ],
      },

      { kind: 'heading', text: "Tata Cara Penggunaan APD" },
      { kind: 'para', text: "Sebelum melakukan pekerjaan pengelasan, peserta PKL harus menggunakan APD sesuai prosedur berikut." },
      { kind: 'bullets', items: [
        "Memastikan seluruh APD dalam kondisi baik dan layak digunakan.",
        "Menggunakan pakaian kerja yang sesuai.",
        "Mengenakan sepatu keselamatan.",
        "Menggunakan jaket las, celemek, dan sarung tangan.",
        "Memasang masker atau respirator sesuai kondisi lingkungan kerja.",
        "Menggunakan kacamata keselamatan apabila diperlukan.",
        "Mengenakan helm las sebelum proses pengelasan dimulai.",
        "Memastikan seluruh APD terpasang dengan benar sebelum memasuki area kerja.",
      ] },

      { kind: 'heading', text: "Pemeriksaan dan Perawatan APD" },
      { kind: 'para', text: "Agar APD dapat memberikan perlindungan secara optimal, setiap pekerja harus melakukan pemeriksaan sebelum digunakan serta perawatan setelah selesai digunakan." },

      { kind: 'checklist',
        title: "Checklist Pemeriksaan APD",
        variant: "pemeriksaan",
        items: [
          "Helm las tidak retak.",
          "Kaca helm bersih dan tidak buram.",
          "Sarung tangan tidak sobek atau rusak.",
          "Masker masih layak dan tidak rusak.",
          "Sepatu keselamatan dalam kondisi baik.",
        ],
      },

      { kind: 'heading', text: "Perawatan APD" },
      { kind: 'bullets', items: [
        "Membersihkan APD setelah selesai digunakan.",
        "Menyimpan APD di tempat yang bersih dan kering.",
        "Mengganti APD yang rusak atau tidak layak pakai.",
        "Melaporkan kerusakan APD kepada pembimbing atau petugas yang bertanggung jawab.",
        "Tidak menggunakan APD yang telah mengalami kerusakan karena dapat mengurangi efektivitas perlindungan.",
      ] },

      { kind: 'heading', text: "Kesalahan yang Sering Terjadi dalam Penggunaan APD" },
      { kind: 'para', text: "Beberapa kesalahan yang masih sering ditemukan saat praktik pengelasan antara lain:" },
      { kind: 'bullets', items: [
        "Tidak menggunakan helm las saat proses pengelasan berlangsung.",
        "Menggunakan sarung tangan yang telah sobek atau rusak.",
        "Menggunakan sepatu biasa sebagai pengganti sepatu keselamatan.",
        "Melepas masker ketika masih terdapat paparan asap las.",
        "Menggunakan APD yang tidak sesuai ukuran sehingga mengurangi kenyamanan dan perlindungan.",
        "Tidak memeriksa kondisi APD sebelum digunakan.",
      ] },
      { kind: 'para', text: "Kesalahan-kesalahan tersebut dapat meningkatkan risiko terjadinya kecelakaan kerja maupun penyakit akibat kerja sehingga harus dihindari oleh setiap peserta PKL." },

      { kind: 'heading', text: "Point Penting" },
      { kind: 'bullets', items: [
        "📌 APD merupakan perlindungan terakhir terhadap bahaya kerja.",
        "📌 Penggunaan APD tidak dapat menggantikan penerapan prosedur kerja yang aman.",
        "📌 Seluruh APD harus digunakan secara lengkap sesuai jenis pekerjaan.",
        "📌 APD harus diperiksa sebelum digunakan dan dirawat setelah selesai digunakan.",
        "📌 Kepatuhan terhadap penggunaan APD merupakan bagian dari budaya Keselamatan dan Kesehatan Kerja (K3).",
      ] },

      { kind: 'checklist',
        title: "Refleksi Diri",
        variant: "refleksi",
        items: [
          "Saya memahami fungsi setiap APD.",
          "Saya dapat mengidentifikasi APD sesuai jenis pekerjaan.",
          "Saya mengetahui cara menggunakan APD dengan benar.",
          "Saya mampu memeriksa kondisi APD sebelum digunakan.",
          "Saya siap menggunakan APD saat praktik.",
        ],
      },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Alat Pelindung Diri (APD) merupakan perlengkapan keselamatan yang wajib digunakan oleh setiap pekerja maupun peserta PKL selama berada di area pengelasan. Penggunaan APD yang sesuai standar berfungsi melindungi pekerja dari berbagai potensi bahaya, seperti radiasi sinar las, percikan logam cair, panas, asap las, kebisingan, dan benturan benda kerja. Selain memahami jenis dan fungsi APD, peserta juga harus mampu menggunakan, memeriksa, serta merawat APD dengan benar agar perlindungan yang diberikan tetap optimal. Kepatuhan terhadap penggunaan APD merupakan bagian penting dari penerapan Keselamatan dan Kesehatan Kerja (K3) di PT. Coppalt Utama Indomelt." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 3 — Pengenalan Peralatan Kerja Pengelasan
  // ══════════════════════════════════════════════════════════
  {
    id: 3,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan fungsi peralatan kerja pada proses pengelasan SMAW.",
        "Mengidentifikasi peralatan utama dan peralatan pendukung pengelasan.",
        "Menjelaskan cara penggunaan setiap peralatan sesuai prosedur.",
        "Memeriksa kondisi peralatan sebelum digunakan.",
        "Merawat dan menyimpan peralatan setelah selesai digunakan.",
      ] },

      { kind: 'heading', text: "Pengertian Peralatan Kerja Pengelasan" },
      { kind: 'para', text: "Peralatan kerja pengelasan merupakan seluruh alat yang digunakan untuk mendukung proses penyambungan logam menggunakan metode Shielded Metal Arc Welding (SMAW). Peralatan tersebut terdiri atas peralatan utama yang berperan langsung dalam proses pengelasan serta peralatan pendukung yang membantu proses persiapan, pemeriksaan, dan penyelesaian hasil las. Penggunaan peralatan yang sesuai dan dalam kondisi baik akan menghasilkan sambungan las yang berkualitas serta meningkatkan keselamatan kerja (Cary & Helzer, 2020)." },

      { kind: 'heading', text: "Klasifikasi Peralatan Pengelasan" },
      { kind: 'para', text: "Peralatan pada proses SMAW dapat dikelompokkan menjadi dua kategori." },

      { kind: 'heading', text: "Peralatan Utama" },
      { kind: 'bullets', items: [
        "Mesin Las SMAW",
        "Kabel Las",
        "Holder Elektroda",
        "Klem Massa",
        "Elektroda",
      ] },

      { kind: 'heading', text: "Peralatan Pendukung" },
      { kind: 'bullets', items: [
        "Palu Terak (Chipping Hammer)",
        "Sikat Baja (Wire Brush)",
        "Gerinda Tangan (Angle Grinder)",
        "Meteran Baja",
        "Mistar Baja",
        "Ragum (Bench Vice)",
      ] },

      { kind: 'image', file: "image5.png", caption: "Gambar 5 Peralatan Utama dan Pendukung Pengelasan SMAW", source: "Hasil olahan penulis berdasarkan Cary, H. B., & Helzer, S. C. (2020). Modern Welding Technology (13th ed.)." },

      { kind: 'heading', text: "Fungsi Peralatan Pengelasan" },
      { kind: 'table', caption: "Tabel 3 Fungsi Peralatan Pengelasan SMAW",
        cols: ["No", "Peralatan", "Fungsi"],
        rows: [
          ["1",  "Mesin Las SMAW",   "Menghasilkan arus listrik untuk proses pengelasan."],
          ["2",  "Holder Elektroda", "Menjepit dan menghantarkan arus ke elektroda."],
          ["3",  "Kabel Las",        "Menyalurkan arus listrik dari mesin las."],
          ["4",  "Klem Massa",       "Menghubungkan benda kerja dengan mesin las."],
          ["5",  "Elektroda",        "Sebagai logam pengisi sekaligus penghantar arus listrik."],
          ["6",  "Palu Terak",       "Membersihkan terak hasil pengelasan."],
          ["7",  "Sikat Baja",       "Membersihkan permukaan logam sebelum dan sesudah pengelasan."],
          ["8",  "Gerinda Tangan",   "Meratakan dan membersihkan hasil pengelasan."],
          ["9",  "Meteran Baja",     "Mengukur dimensi benda kerja."],
          ["10", "Ragum",            "Menjepit benda kerja selama proses persiapan."],
        ],
      },

      { kind: 'heading', text: "Cara Penggunaan Peralatan" },
      { kind: 'para', text: "Sebelum melakukan pengelasan, setiap peserta PKL harus memahami cara penggunaan setiap peralatan." },
      { kind: 'bullets', items: [
        "Pastikan mesin las dalam kondisi baik sebelum dinyalakan.",
        "Gunakan elektroda sesuai spesifikasi pekerjaan.",
        "Pasang kabel las dengan kuat.",
        "Pastikan klem massa terhubung dengan baik pada benda kerja.",
        "Gunakan gerinda sesuai prosedur keselamatan.",
        "Bersihkan terak menggunakan palu terak setelah pengelasan selesai.",
      ] },

      { kind: 'heading', text: "Pemeriksaan Peralatan Sebelum Digunakan" },
      { kind: 'para', text: "Sebelum memulai pekerjaan, lakukan pemeriksaan terhadap seluruh peralatan." },

      { kind: 'checklist',
        title: "Checklist Pemeriksaan Peralatan",
        variant: "pemeriksaan",
        items: [
          "Mesin las berfungsi normal.",
          "Holder elektroda tidak retak.",
          "Kabel las tidak terkelupas.",
          "Klem massa terpasang dengan baik.",
          "Gerinda dalam kondisi baik.",
        ],
      },

      { kind: 'heading', text: "Perawatan Peralatan" },
      { kind: 'para', text: "Peralatan pengelasan harus dirawat agar tetap aman digunakan. Langkah perawatan meliputi:" },
      { kind: 'bullets', items: [
        "Membersihkan peralatan setelah digunakan.",
        "Menggulung kabel las dengan rapi.",
        "Menyimpan elektroda di tempat yang kering.",
        "Memeriksa kerusakan secara berkala.",
        "Melaporkan kerusakan kepada pembimbing.",
      ] },

      { kind: 'heading', text: "Kesalahan yang Sering Terjadi" },
      { kind: 'para', text: "Beberapa kesalahan yang sering dilakukan peserta PKL antara lain:" },
      { kind: 'bullets', items: [
        "Menggunakan kabel yang sudah rusak.",
        "Memasang klem massa pada permukaan yang kotor.",
        "Menggunakan elektroda yang lembap.",
        "Tidak membersihkan terak sebelum melanjutkan pengelasan.",
        "Menggunakan gerinda tanpa pelindung.",
      ] },

      { kind: 'heading', text: "Poin Penting" },
      { kind: 'bullets', items: [
        "📌 Gunakan peralatan sesuai fungsi dan prosedur.",
        "📌 Periksa kondisi alat sebelum digunakan.",
        "📌 Jangan menggunakan peralatan yang rusak.",
        "📌 Bersihkan dan simpan peralatan setelah selesai digunakan.",
        "📌 Laporkan kerusakan kepada pembimbing.",
      ] },

      { kind: 'checklist',
        title: "Refleksi Diri",
        variant: "refleksi",
        items: [
          "Saya mengenal seluruh peralatan pengelasan.",
          "Saya mengetahui fungsi setiap peralatan.",
          "Saya mampu memeriksa kondisi peralatan.",
          "Saya mengetahui cara merawat peralatan.",
        ],
      },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Peralatan kerja pengelasan terdiri atas peralatan utama dan peralatan pendukung yang memiliki fungsi berbeda dalam proses SMAW. Sebelum digunakan, setiap peralatan harus diperiksa untuk memastikan kondisinya aman dan layak pakai. Setelah pekerjaan selesai, peralatan perlu dibersihkan, dirawat, dan disimpan dengan benar agar tetap berfungsi optimal serta mendukung keselamatan dan kelancaran proses pengelasan." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 4 — Membaca Gambar Kerja
  // ══════════════════════════════════════════════════════════
  {
    id: 4,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan pengertian gambar kerja.",
        "Menjelaskan fungsi gambar kerja dalam proses fabrikasi dan pengelasan.",
        "Mengidentifikasi informasi yang terdapat pada gambar kerja.",
        "Memahami simbol dasar pengelasan pada gambar kerja.",
        "Membaca gambar kerja sederhana sebelum melakukan praktik tack weld.",
      ] },

      { kind: 'heading', text: "Pengertian Gambar Kerja" },
      { kind: 'para', text: "Gambar kerja merupakan media komunikasi teknik yang digunakan untuk menyampaikan informasi mengenai bentuk, ukuran, dimensi, jenis material, serta proses pembuatan suatu komponen atau produk. Dalam dunia manufaktur, gambar kerja menjadi acuan utama bagi operator maupun welder dalam melakukan proses fabrikasi sehingga hasil pekerjaan sesuai dengan desain yang telah direncanakan (Giesecke et al., 2021)." },
      { kind: 'para', text: "Pada proses pengelasan, gambar kerja digunakan sebagai acuan dalam menentukan bentuk sambungan, ukuran benda kerja, jenis material, posisi pengelasan, serta simbol pengelasan yang digunakan. Oleh karena itu, kemampuan membaca gambar kerja merupakan kompetensi dasar yang harus dikuasai oleh setiap peserta PKL." },

      { kind: 'heading', text: "Fungsi Gambar Kerja" },
      { kind: 'bullets', items: [
        "Sebagai pedoman dalam proses pembuatan dan perakitan komponen.",
        "Menyampaikan informasi ukuran, bentuk, dan spesifikasi benda kerja.",
        "Memudahkan komunikasi antara perancang, operator, dan welder.",
        "Mengurangi kesalahan selama proses produksi.",
        "Menjadi acuan dalam pemeriksaan kualitas hasil pekerjaan.",
      ] },

      { kind: 'heading', text: "Judul Gambar (Title Block)" },
      { kind: 'para', text: "Title block berisi identitas gambar, seperti nama komponen, nomor gambar, material, skala, tanggal pembuatan, serta nama pembuat atau perusahaan." },
      { kind: 'image', file: "image6.jpeg", caption: "Gambar 6 Contoh Title Block pada Gambar Kerja", source: "Giesecke, F. E., et al. (2021). Technical Drawing with Engineering Graphics." },

      { kind: 'heading', text: "Pandangan Gambar (Views)" },
      { kind: 'para', text: "Pandangan gambar digunakan untuk menunjukkan bentuk benda dari berbagai arah. Pandangan dasar meliputi:" },
      { kind: 'bullets', items: [
        "Tampak depan (Front View)",
        "Tampak atas (Top View)",
        "Tampak samping (Side View)",
        "Tampak isometri (Isometric View)",
      ] },
      { kind: 'image', file: "image7.jpeg", caption: "Gambar 7 Contoh Pandangan Gambar Kerja", source: "Giesecke et al. (2021)." },

      { kind: 'heading', text: "Dimensi" },
      { kind: 'para', text: "Dimensi menunjukkan ukuran benda kerja yang harus dibuat sesuai dengan gambar, meliputi panjang, lebar, tinggi, diameter, jari-jari, sudut, maupun ketebalan material. Contoh:" },
      { kind: 'bullets', items: [
        "Panjang = 150 mm",
        "Lebar = 50 mm",
        "Tebal = 6 mm",
      ] },
      { kind: 'image', file: "image8.jpeg", caption: "Gambar 8 Contoh Pemberian Dimensi pada Gambar Kerja", source: "Giesecke et al. (2021)." },

      { kind: 'heading', text: "Simbol Pengelasan" },
      { kind: 'para', text: "Simbol pengelasan digunakan untuk menunjukkan jenis sambungan las dan posisi pengelasan. Simbol mengacu pada standar internasional AWS A2.4." },
      { kind: 'image', file: "image9.jpeg", caption: "Gambar 9 Contoh Simbol Dasar Pengelasan", source: "American Welding Society. (2020). AWS A2.4 Standard Symbols for Welding, Brazing, and Nondestructive Examination." },
      { kind: 'para', text: "Catatan: Pada e-modul ini peserta difokuskan pada Fillet Weld karena praktik awal menggunakan teknik tack weld pada sambungan T-Joint." },

      { kind: 'heading', text: "Contoh Gambar Kerja Sederhana" },
      { kind: 'para', text: "Berikut merupakan contoh gambar kerja sederhana yang digunakan pada praktik awal tack weld di workshop PT. Coppalt Utama Indomelt." },
      { kind: 'image', file: "image10.jpeg", caption: "Gambar 10 Contoh Gambar Kerja Sambungan Sudut (T-Joint) untuk Praktik Tack Weld", source: "Hasil olahan penulis berdasarkan spesifikasi PT. Coppalt Utama Indomelt (2026)." },
      { kind: 'table', caption: "Spesifikasi Benda Kerja",
        cols: ["Keterangan", "Spesifikasi"],
        rows: [
          ["Pelat A",         "150 × 50 × 6 mm"],
          ["Pelat B",         "100 × 50 × 6 mm"],
          ["Jenis sambungan", "T-Joint"],
          ["Jenis las",       "Fillet Weld"],
          ["Ukuran las",      "3 mm"],
          ["Posisi tack weld","Kedua ujung sambungan"],
          ["Panjang tack weld","10–20 mm"],
          ["Proses",          "SMAW"],
          ["Elektroda",       "E6013 Ø2,6 mm"],
        ],
      },

      { kind: 'heading', text: "Cara Membaca Gambar" },
      { kind: 'para', text: "Sebelum melakukan praktik berdasarkan gambar kerja, peserta PKL harus memastikan bahwa:" },
      { kind: 'bullets', items: [
        "Seluruh ukuran telah dipahami.",
        "Material sesuai dengan gambar.",
        "Posisi sambungan telah benar.",
        "Simbol pengelasan telah dipahami.",
        "Tidak ada informasi yang terlewat sebelum pekerjaan dimulai.",
      ] },
      { kind: 'para', text: "Kesalahan membaca gambar kerja dapat menyebabkan ketidaksesuaian ukuran, pemborosan material, serta kegagalan proses fabrikasi." },

      { kind: 'heading', text: "Poin Penting" },
      { kind: 'bullets', items: [
        "📌 Gambar kerja merupakan pedoman utama dalam proses fabrikasi dan pengelasan.",
        "📌 Setiap simbol dan dimensi memiliki arti yang harus dipahami.",
        "📌 Kesalahan membaca gambar dapat menyebabkan produk tidak sesuai spesifikasi.",
        "📌 Peserta PKL wajib memahami gambar kerja sebelum melakukan praktik tack weld.",
      ] },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Membaca gambar kerja merupakan kompetensi dasar yang harus dikuasai oleh setiap peserta PKL sebelum melaksanakan pekerjaan fabrikasi dan pengelasan. Gambar kerja memuat informasi penting seperti title block, pandangan gambar, dimensi, material, dan simbol pengelasan yang digunakan sebagai pedoman dalam proses produksi. Dengan memahami cara membaca gambar kerja secara sistematis, peserta dapat menentukan bentuk komponen, ukuran benda kerja, jenis sambungan, serta posisi pengelasan yang harus dilakukan. Pada e-modul ini, peserta difokuskan untuk membaca gambar kerja sederhana berupa sambungan sudut (T-Joint) sebagai persiapan praktik tack weld menggunakan proses SMAW." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 5 — Penggunaan Alat Ukur
  // ══════════════════════════════════════════════════════════
  {
    id: 5,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan fungsi alat ukur dalam proses fabrikasi dan pengelasan.",
        "Mengidentifikasi jenis-jenis alat ukur yang digunakan pada pekerjaan pengelasan SMAW.",
        "Menggunakan alat ukur sesuai prosedur kerja.",
        "Melakukan pengukuran benda kerja berdasarkan gambar kerja.",
        "Memastikan hasil pengukuran sesuai spesifikasi sebelum proses tack weld.",
      ] },

      { kind: 'heading', text: "Pengertian Alat Ukur" },
      { kind: 'para', text: "Alat ukur merupakan peralatan yang digunakan untuk memperoleh ukuran suatu benda kerja secara akurat sesuai dengan spesifikasi yang tercantum pada gambar kerja. Dalam proses fabrikasi dan pengelasan, penggunaan alat ukur sangat penting untuk memastikan dimensi material, posisi sambungan, dan kesikuan benda kerja sebelum proses pengelasan dilakukan. Ketelitian dalam melakukan pengukuran akan mengurangi kesalahan produksi, meminimalkan pemborosan material, serta menghasilkan produk yang sesuai dengan standar kualitas (Giesecke et al., 2021)." },
      { kind: 'para', text: "Bagi peserta Praktik Kerja Lapangan (PKL) di PT. Coppalt Utama Indomelt, kemampuan menggunakan alat ukur merupakan kompetensi dasar yang harus dikuasai sebelum melakukan proses fit-up dan tack weld." },

      { kind: 'heading', text: "Fungsi Penggunaan Alat Ukur" },
      { kind: 'para', text: "Penggunaan alat ukur dalam proses pengelasan memiliki beberapa fungsi, yaitu:" },
      { kind: 'bullets', items: [
        "Mengukur dimensi material sesuai gambar kerja.",
        "Memastikan ukuran benda kerja sebelum proses pemotongan.",
        "Memeriksa kesikuan dan posisi sambungan.",
        "Mengurangi kesalahan pada proses fabrikasi dan pengelasan.",
        "Menjamin hasil pekerjaan sesuai dengan spesifikasi dan standar perusahaan.",
      ] },

      { kind: 'heading', text: "Jenis-Jenis Alat Ukur pada Proses Pengelasan SMAW" },
      { kind: 'para', text: "Dalam pekerjaan pengelasan SMAW, terdapat beberapa alat ukur yang umum digunakan untuk memastikan dimensi dan posisi benda kerja sesuai dengan gambar kerja." },

      { kind: 'heading', text: "Meteran Baja (Steel Tape Measure)" },
      { kind: 'para', text: "Meteran baja digunakan untuk mengukur panjang, lebar, maupun tinggi benda kerja. Alat ini banyak digunakan pada tahap persiapan material karena praktis dan mampu mengukur benda kerja dengan ukuran yang relatif besar." },
      { kind: 'para', text: "Fungsi:" },
      { kind: 'bullets', items: [
        "Mengukur panjang material.",
        "Menentukan posisi pemotongan.",
        "Mengukur dimensi benda kerja.",
      ] },
      { kind: 'image', file: "image11.jpeg", caption: "Gambar 11 Meteran Baja", source: "Stanley Tools. (2022). Tape Measure Product Guide." },

      { kind: 'heading', text: "Mistar Baja (Steel Rule)" },
      { kind: 'para', text: "Mistar baja digunakan untuk melakukan pengukuran sederhana dan membantu proses penandaan pada permukaan logam. Selain itu, mistar baja juga digunakan untuk memeriksa dimensi benda kerja yang memiliki ukuran relatif pendek." },
      { kind: 'para', text: "Fungsi:" },
      { kind: 'bullets', items: [
        "Mengukur dimensi pendek.",
        "Membantu proses penandaan material.",
        "Memeriksa ukuran benda kerja.",
      ] },
      { kind: 'image', file: "image12.jpeg", caption: "Gambar 12 Mistar Baja", source: "Starrett Company. (2021). Precision Steel Rules Catalog." },

      { kind: 'heading', text: "Siku Baja (Try Square)" },
      { kind: 'para', text: "Siku baja digunakan untuk memeriksa kesikuan atau sudut 90° pada benda kerja sebelum dilakukan proses tack weld. Penggunaan siku baja membantu memastikan posisi sambungan telah sesuai dengan gambar kerja." },
      { kind: 'para', text: "Fungsi:" },
      { kind: 'bullets', items: [
        "Memeriksa kesikuan benda kerja.",
        "Memastikan posisi sambungan T-Joint.",
        "Membantu proses fit-up sebelum pengelasan.",
      ] },
      { kind: 'image', file: "image13.jpeg", caption: "Gambar 13 Siku Baja", source: "Starrett Company. (2021). Squares and Combination Squares Catalog." },

      { kind: 'heading', text: "Jangka Sorong (Vernier Caliper)" },
      { kind: 'para', text: "Jangka sorong merupakan alat ukur presisi yang digunakan untuk mengukur diameter luar, diameter dalam, ketebalan, maupun kedalaman suatu benda kerja. Alat ini memiliki tingkat ketelitian yang lebih tinggi dibandingkan mistar baja." },
      { kind: 'para', text: "Fungsi:" },
      { kind: 'bullets', items: [
        "Mengukur ketebalan pelat.",
        "Mengukur diameter komponen.",
        "Memastikan dimensi material sesuai gambar kerja.",
      ] },
      { kind: 'image', file: "image14.jpeg", caption: "Gambar 14 Jangka Sorong", source: "Mitutoyo Corporation. (2021). Vernier Caliper User's Guide." },

      { kind: 'heading', text: "Langkah-Langkah Penggunaan Alat Ukur" },
      { kind: 'para', text: "Sebelum melakukan pengukuran, peserta PKL harus memastikan bahwa alat ukur dalam kondisi baik dan siap digunakan. Langkah-langkah penggunaan alat ukur meliputi:" },
      { kind: 'bullets', items: [
        "Menyiapkan gambar kerja sebagai acuan pengukuran.",
        "Memilih alat ukur sesuai dengan jenis pengukuran yang akan dilakukan.",
        "Membersihkan permukaan benda kerja dari kotoran atau karat.",
        "Melakukan pengukuran sesuai prosedur penggunaan alat.",
        "Mencatat hasil pengukuran.",
        "Membandingkan hasil pengukuran dengan dimensi pada gambar kerja.",
        "Melakukan pengukuran ulang apabila terdapat perbedaan ukuran.",
      ] },

      { kind: 'heading', text: "Pemeriksaan Dimensi Sebelum Tack Weld" },
      { kind: 'para', text: "Sebelum proses tack weld dilakukan, seluruh dimensi benda kerja harus diperiksa untuk memastikan kesesuaiannya dengan gambar kerja." },
      { kind: 'table', caption: "Tabel 3 Pemeriksaan Dimensi Sebelum Tack Weld",
        cols: ["No", "Aspek yang Diperiksa", "Keterangan"],
        rows: [
          ["1", "Panjang pelat",      "Sesuai gambar kerja"],
          ["2", "Lebar pelat",        "Sesuai gambar kerja"],
          ["3", "Ketebalan pelat",    "Sesuai spesifikasi"],
          ["4", "Kesikuan sambungan", "90°"],
          ["5", "Posisi sambungan",   "Sesuai gambar kerja"],
        ],
      },

      { kind: 'heading', text: "Kesalahan yang Sering Terjadi" },
      { kind: 'para', text: "Beberapa kesalahan yang sering dilakukan peserta PKL saat menggunakan alat ukur antara lain:" },
      { kind: 'bullets', items: [
        "Salah membaca skala pengukuran.",
        "Menggunakan alat ukur yang tidak sesuai dengan kebutuhan.",
        "Tidak memeriksa titik nol alat ukur sebelum digunakan.",
        "Mengukur benda kerja pada permukaan yang kotor.",
        "Tidak melakukan pengukuran ulang sebelum proses pengelasan.",
        "Mengabaikan kesikuan sambungan sebelum tack weld.",
      ] },

      { kind: 'infobox', title: "Poin Penting", text: "Alat ukur digunakan untuk memastikan dimensi benda kerja sesuai gambar kerja. Pengukuran dilakukan sebelum proses pemotongan dan pengelasan. Kesalahan pengukuran dapat menyebabkan hasil fabrikasi tidak sesuai spesifikasi. Pemeriksaan dimensi dan kesikuan merupakan langkah penting sebelum melakukan tack weld." },

      { kind: 'checklist', title: "Refleksi Diri", variant: 'refleksi', items: [
        "Saya memahami fungsi alat ukur pada proses fabrikasi dan pengelasan.",
        "Saya dapat mengidentifikasi jenis-jenis alat ukur yang digunakan pada pekerjaan pengelasan SMAW.",
        "Saya mampu menggunakan meteran baja sesuai prosedur.",
        "Saya mampu menggunakan mistar baja untuk melakukan pengukuran sederhana.",
        "Saya mampu menggunakan siku baja untuk memeriksa kesikuan benda kerja.",
        "Saya mampu menggunakan jangka sorong untuk mengukur dimensi benda kerja.",
        "Saya memahami pentingnya ketelitian dalam melakukan pengukuran sebelum proses tack weld.",
        "Saya mampu membandingkan hasil pengukuran dengan gambar kerja.",
      ] },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Penggunaan alat ukur merupakan kompetensi dasar yang harus dikuasai oleh setiap peserta PKL sebelum melakukan proses pengelasan SMAW. Alat ukur seperti meteran baja, mistar baja, siku baja, dan jangka sorong digunakan untuk memastikan dimensi, posisi, dan kesikuan benda kerja sesuai dengan gambar kerja. Pengukuran yang dilakukan secara tepat akan meminimalkan kesalahan pada proses fabrikasi, meningkatkan kualitas hasil pengelasan, serta mendukung tercapainya standar kerja yang berlaku di PT. Coppalt Utama Indomelt." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 6 — Dasar-Dasar Pengelasan SMAW
  // ══════════════════════════════════════════════════════════
  {
    id: 6,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan pengertian dan prinsip kerja pengelasan SMAW.",
        "Mengenal peralatan utama pengelasan SMAW.",
        "Menjelaskan fungsi elektroda pada proses SMAW.",
        "Menentukan parameter dasar pengelasan.",
        "Memahami posisi pengelasan dasar.",
        "Mengidentifikasi cacat las yang umum terjadi.",
      ] },

      { kind: 'heading', text: "Pengertian Pengelasan SMAW" },
      { kind: 'para', text: "Shielded Metal Arc Welding (SMAW) atau las busur listrik manual merupakan proses penyambungan logam menggunakan panas yang dihasilkan dari busur listrik (electric arc) antara elektroda terbungkus dan benda kerja. Panas yang dihasilkan mampu mencapai suhu sekitar 5.000–6.000°C sehingga mampu mencairkan logam induk dan elektroda untuk membentuk sambungan las yang kuat (Jeffus, 2022)." },
      { kind: 'para', text: "Pada proses SMAW, lapisan fluks yang menyelimuti elektroda akan mencair dan menghasilkan gas pelindung serta terak (slag) yang berfungsi melindungi logam cair dari pengaruh oksigen dan nitrogen di udara selama proses pendinginan." },
      { kind: 'image', file: "image15.jpeg", caption: "Gambar 15 Proses Pengelasan SMAW", source: "Jeffus, L. (2022). Welding: Principles and Applications (9th ed.)." },

      { kind: 'heading', text: "Prinsip Kerja Pengelasan SMAW" },
      { kind: 'para', text: "Prinsip kerja SMAW dimulai ketika arus listrik dari mesin las dialirkan menuju elektroda melalui holder elektroda. Saat ujung elektroda disentuhkan dan sedikit dijauhkan dari permukaan benda kerja, terbentuk busur listrik yang menghasilkan panas tinggi. Panas tersebut mencairkan logam induk dan inti kawat elektroda secara bersamaan sehingga membentuk sambungan las." },
      { kind: 'para', text: "Selama proses berlangsung, lapisan fluks pada elektroda menghasilkan gas pelindung dan membentuk terak yang melindungi logam cair selama proses pembekuan. Setelah busur diputus, logam cair membeku membentuk sambungan las permanen dan terak harus dibersihkan menggunakan palu terak." },
      { kind: 'image', file: "image16.jpeg", caption: "Gambar 16 Prinsip Kerja Pengelasan SMAW", source: "Cary, H. B., & Helzer, S. C. (2020). Modern Welding Technology (13th ed.)." },

      { kind: 'heading', text: "Peralatan Utama Pengelasan SMAW" },
      { kind: 'para', text: "Peralatan utama yang digunakan pada proses SMAW meliputi:" },
      { kind: 'bullets', items: [
        "Mesin las SMAW",
        "Holder elektroda",
        "Kabel las",
        "Klem massa",
        "Elektroda",
      ] },
      { kind: 'image', file: "image17.png", caption: "Gambar 17 Peralatan Utama Pengelasan SMAW", source: "Lincoln Electric. (2022). SMAW Equipment Guide." },

      { kind: 'heading', text: "Elektroda SMAW" },
      { kind: 'para', text: "Elektroda merupakan logam pengisi sekaligus penghantar arus listrik pada proses SMAW. Elektroda terdiri dari inti kawat (core wire) dan lapisan fluks (flux coating). Fluks berfungsi menghasilkan gas pelindung, membentuk terak, serta menstabilkan busur listrik." },
      { kind: 'para', text: "Pada praktik awal di PT. Coppalt Utama Indomelt, elektroda yang umum digunakan adalah AWS E6013 karena mudah digunakan, menghasilkan busur yang stabil, dan cocok untuk baja karbon rendah." },
      { kind: 'image', file: "image18.jpeg", caption: "Gambar 18 Elektroda SMAW", source: "ESAB. (2021). Covered Electrodes Catalog." },

      { kind: 'heading', text: "Parameter Dasar Pengelasan" },
      { kind: 'para', text: "Sebelum melakukan pengelasan, operator harus menentukan parameter yang sesuai agar diperoleh hasil las yang berkualitas. Parameter dasar meliputi:" },
      { kind: 'bullets', items: [
        "Diameter elektroda.",
        "Besar arus pengelasan (welding current).",
        "Polaritas.",
        "Panjang busur (arc length).",
        "Kecepatan pengelasan (travel speed).",
      ] },
      { kind: 'table', caption: "Tabel Parameter Dasar Pengelasan SMAW",
        cols: ["Diameter Elektroda", "Arus (A)"],
        rows: [
          ["2,6 mm",  "60–90"],
          ["3,2 mm",  "90–130"],
          ["4,0 mm",  "130–180"],
        ],
      },
      { kind: 'para', text: "Sumber: Lincoln Electric. (2022). SMAW Equipment Guide." },

      { kind: 'heading', text: "Posisi Pengelasan SMAW" },
      { kind: 'para', text: "Posisi pengelasan menunjukkan orientasi benda kerja terhadap arah gravitasi selama proses pengelasan. Posisi dasar pengelasan meliputi:" },
      { kind: 'bullets', items: [
        "1G (Flat Groove)",
        "2G (Horizontal Groove)",
        "3G (Vertical Groove)",
        "4G (Overhead Groove)",
      ] },
      { kind: 'para', text: "Untuk sambungan sudut (fillet weld) dikenal posisi 1F, 2F, 3F, dan 4F. Pada e-modul ini, peserta difokuskan pada praktik awal berupa tack weld pada sambungan T-Joint, sehingga posisi yang digunakan adalah 1F." },
      { kind: 'image', file: "image19.png", caption: "Gambar 19 Posisi Pengelasan SMAW", source: "American Welding Society. (2020). AWS Welding Handbook." },

      { kind: 'heading', text: "Cacat Las yang Sering Terjadi" },
      { kind: 'para', text: "Beberapa cacat las yang umum dijumpai pada proses SMAW antara lain:" },
      { kind: 'table', caption: "Tabel Cacat Las pada Proses SMAW",
        cols: ["Cacat Las", "Penyebab"],
        rows: [
          ["Porositas",             "Permukaan logam kotor atau elektroda lembap"],
          ["Undercut",              "Arus terlalu besar"],
          ["Slag Inclusion",        "Terak tidak dibersihkan"],
          ["Lack of Fusion",        "Panas kurang"],
          ["Spatter Berlebihan",    "Panjang busur terlalu jauh"],
        ],
      },
      { kind: 'image', file: "image20.png", caption: "Gambar 20 Contoh Cacat Las SMAW", source: "American Welding Society. (2020). AWS Welding Handbook." },

      { kind: 'heading', text: "Hal-Hal yang Harus Diperhatikan" },
      { kind: 'para', text: "Sebelum melakukan pengelasan, peserta PKL harus memastikan bahwa:" },
      { kind: 'bullets', items: [
        "APD digunakan secara lengkap.",
        "Mesin las dalam kondisi baik.",
        "Elektroda sesuai dengan jenis material.",
        "Parameter pengelasan telah diatur dengan benar.",
        "Area kerja aman dan bersih.",
        "Benda kerja telah sesuai dengan gambar kerja.",
      ] },

      { kind: 'checklist',
        title: "Refleksi Diri",
        variant: "refleksi",
        items: [
          "Saya memahami pengertian pengelasan SMAW.",
          "Saya memahami prinsip kerja SMAW.",
          "Saya dapat mengidentifikasi peralatan utama SMAW.",
          "Saya mengetahui fungsi elektroda.",
          "Saya memahami parameter dasar pengelasan.",
          "Saya mengetahui posisi pengelasan 1F.",
          "Saya dapat mengidentifikasi cacat las yang umum terjadi.",
          "Saya siap melakukan praktik tack weld.",
        ],
      },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Shielded Metal Arc Welding (SMAW) merupakan proses pengelasan yang menggunakan busur listrik antara elektroda terbungkus dan logam induk untuk menghasilkan sambungan las. Keberhasilan proses SMAW dipengaruhi oleh pemahaman terhadap prinsip kerja, penggunaan peralatan, pemilihan elektroda, pengaturan parameter pengelasan, serta penerapan teknik kerja yang benar. Sebelum melaksanakan praktik tack weld, peserta PKL harus mampu memahami dasar-dasar pengelasan SMAW sebagai bekal untuk menghasilkan sambungan las yang aman dan sesuai dengan standar perusahaan." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 7 — Teknik Dasar Tack Weld
  // ══════════════════════════════════════════════════════════
  {
    id: 7,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan pengertian tack weld.",
        "Menjelaskan tujuan pelaksanaan tack weld.",
        "Mengidentifikasi peralatan dan bahan yang digunakan.",
        "Menyiapkan benda kerja sebelum proses tack weld.",
        "Melakukan tack weld sesuai prosedur kerja.",
        "Mengidentifikasi kesalahan yang sering terjadi pada proses tack weld.",
        "Menerapkan aspek keselamatan kerja selama proses tack weld.",
      ] },

      { kind: 'heading', text: "Pengertian Tack Weld" },
      { kind: 'para', text: "Tack weld adalah proses pengelasan sementara yang dilakukan untuk menahan atau mengunci posisi dua atau lebih komponen sebelum dilakukan pengelasan penuh (final welding). Sambungan ini dibuat dengan ukuran yang relatif pendek pada titik-titik tertentu sehingga mampu mempertahankan posisi benda kerja agar tidak bergeser selama proses pengelasan berlangsung." },
      { kind: 'para', text: "Dalam pekerjaan fabrikasi, tack weld merupakan tahapan yang sangat penting karena menentukan ketepatan posisi sambungan, kesikuan, serta dimensi benda kerja. Tack weld yang dilakukan dengan benar akan memudahkan proses pengelasan berikutnya dan membantu menghasilkan sambungan las yang sesuai dengan gambar kerja." },
      { kind: 'image', file: "image21.png", caption: "Gambar 21 Contoh Tack Weld pada Sambungan T-Joint", source: "American Welding Society. (2020). AWS Welding Handbook." },

      { kind: 'heading', text: "Tujuan Tack Weld" },
      { kind: 'para', text: "Pelaksanaan tack weld bertujuan untuk:" },
      { kind: 'bullets', items: [
        "Menjaga posisi benda kerja agar tidak bergeser.",
        "Mempertahankan kesikuan dan dimensi sambungan.",
        "Mempermudah proses pengelasan utama.",
        "Mengurangi deformasi akibat panas.",
        "Menjamin hasil pengelasan sesuai gambar kerja.",
        "Mengurangi kemungkinan terjadinya kesalahan saat proses fabrikasi.",
      ] },

      { kind: 'heading', text: "Peralatan dan Bahan" },
      { kind: 'para', text: "Peralatan dan bahan yang digunakan dalam praktik tack weld meliputi:" },
      { kind: 'heading', text: "Peralatan" },
      { kind: 'bullets', items: [
        "Mesin las SMAW",
        "Holder elektroda",
        "Kabel las",
        "Klem massa",
        "Palu terak",
        "Sikat baja",
        "Meteran baja",
        "Siku baja",
        "Klem penjepit (C-Clamp)",
        "Gerinda tangan (apabila diperlukan)",
      ] },
      { kind: 'heading', text: "Bahan" },
      { kind: 'bullets', items: [
        "Pelat baja karbon rendah (SS400)",
        "Elektroda E6013 Ø2,6 mm",
      ] },
      { kind: 'image', file: "image22.jpeg", caption: "Gambar 22 Peralatan Praktik Tack Weld", source: "Lincoln Electric. (2022). SMAW Equipment Guide." },

      { kind: 'heading', text: "Persiapan Sebelum Tack Weld" },
      { kind: 'para', text: "Sebelum melakukan tack weld, peserta PKL harus melakukan beberapa langkah persiapan sebagai berikut." },
      { kind: 'bullets', items: [
        "Menggunakan APD secara lengkap.",
        "Membaca gambar kerja.",
        "Menyiapkan material sesuai ukuran.",
        "Membersihkan permukaan logam dari karat, minyak, atau kotoran.",
        "Menyusun benda kerja sesuai gambar.",
        "Memeriksa kesikuan menggunakan siku baja.",
        "Memasang klem penjepit agar benda kerja tidak bergeser.",
        "Mengatur arus mesin las sesuai diameter elektroda.",
        "Memastikan area kerja aman.",
      ] },

      { kind: 'heading', text: "Langkah-Langkah Melakukan Tack Weld" },
      { kind: 'para', text: "Pelaksanaan tack weld dilakukan secara berurutan agar hasil sambungan memiliki posisi yang tepat." },
      { kind: 'bullets', items: [
        "Langkah 1 — Pastikan seluruh peralatan telah siap dan APD digunakan secara lengkap.",
        "Langkah 2 — Atur arus mesin las sesuai diameter elektroda.",
        "Langkah 3 — Posisikan elektroda dengan sudut sekitar 70–80° terhadap benda kerja.",
        "Langkah 4 — Nyalakan busur listrik (striking the arc).",
        "Langkah 5 — Lakukan tack weld sepanjang 10–20 mm pada ujung pertama sambungan.",
        "Langkah 6 — Lakukan tack weld pada ujung lainnya.",
        "Langkah 7 — Apabila diperlukan, tambahkan satu tack weld pada bagian tengah.",
        "Langkah 8 — Biarkan sambungan dingin.",
        "Langkah 9 — Bersihkan terak menggunakan palu terak dan sikat baja.",
        "Langkah 10 — Lakukan pemeriksaan visual sebelum proses pengelasan penuh.",
      ] },

      { kind: 'video',
        file: 'smaw-1f-tack-weld.mp4',
        intro: [
          "Untuk memperkuat pemahaman mengenai teknik dasar tack weld, peserta disarankan menyaksikan video pembelajaran berikut. Video ini menampilkan proses pengelasan SMAW pada sambungan sudut (T-Joint) posisi 1F, mulai dari persiapan benda kerja, pengaturan parameter pengelasan, teknik memegang elektroda, sudut pengelasan, hingga proses pengelasan.",
          "Walaupun video tersebut memperlihatkan proses pengelasan hingga selesai (final welding), pada kegiatan pembelajaran dalam e-modul ini peserta cukup mempelajari tahapan persiapan, membaca gambar kerja, penyusunan benda kerja (fit-up), serta teknik pelaksanaan tack weld sebagai kompetensi dasar sebelum melanjutkan ke proses pengelasan penuh.",
          "Selain itu, peserta diharapkan menyesuaikan gambar kerja yang digunakan pada video dengan gambar kerja Job Sheet TW-01 yang terdapat pada e-modul ini, karena ukuran benda kerja dan spesifikasi praktik dapat berbeda, namun prinsip pelaksanaan tack weld tetap sama.",
        ],
        source: "Media Belajar Teknik. (2021, 29 Juli). SMAW 1F Posisi Pengelasan Fillet [Video]. YouTube. https://www.youtube.com/watch?v=4ktJr39Abos",
        warning: "Video ini digunakan sebagai referensi tambahan untuk membantu peserta memahami teknik dasar pengelasan SMAW posisi 1F. Pada praktik dalam e-modul ini, peserta tidak diwajibkan melakukan pengelasan penuh (final welding), melainkan hanya melakukan tack weld sesuai prosedur dan gambar kerja Job Sheet TW-01 yang telah disediakan.",
      },

      { kind: 'heading', text: "Hal-Hal yang Harus Diperhatikan" },
      { kind: 'para', text: "Agar diperoleh hasil tack weld yang baik, beberapa hal berikut harus diperhatikan." },
      { kind: 'bullets', items: [
        "Benda kerja harus sesuai dengan gambar kerja.",
        "Permukaan logam harus bersih.",
        "Posisi sambungan harus siku (90°).",
        "Panjang tack weld sekitar 10–20 mm.",
        "Tack dilakukan pada titik yang sesuai.",
        "Arus pengelasan harus sesuai diameter elektroda.",
        "Busur listrik tidak terlalu panjang.",
        "Tack tidak boleh retak maupun berpori.",
        "Seluruh APD harus digunakan selama proses berlangsung.",
      ] },

      { kind: 'heading', text: "Kesalahan yang Sering Terjadi" },
      { kind: 'table', caption: "Tabel 5 Kesalahan yang Sering Terjadi pada Proses Tack Weld",
        cols: ["No", "Kesalahan", "Penyebab", "Pencegahan"],
        rows: [
          ["1", "Posisi benda bergeser",    "Penjepitan kurang kuat",                 "Gunakan klem penjepit"],
          ["2", "Tack terlalu panjang",     "Tidak mengikuti gambar kerja",           "Sesuaikan panjang 10–20 mm"],
          ["3", "Tack retak",               "Arus tidak sesuai",                      "Atur arus dengan benar"],
          ["4", "Porositas",                "Material kotor",                         "Bersihkan permukaan logam"],
          ["5", "Kurang menyatu",           "Busur terlalu pendek atau arus kecil",   "Sesuaikan parameter pengelasan"],
          ["6", "Percikan berlebihan",      "Arus terlalu tinggi",                    "Kurangi arus sesuai elektroda"],
        ],
      },

      { kind: 'checklist', title: "Refleksi Diri", variant: 'refleksi', items: [
        "Saya memahami pengertian tack weld.",
        "Saya mengetahui tujuan tack weld.",
        "Saya mampu mengidentifikasi peralatan yang digunakan.",
        "Saya memahami langkah persiapan sebelum tack weld.",
        "Saya memahami urutan pelaksanaan tack weld.",
        "Saya mengetahui kesalahan yang sering terjadi.",
        "Saya siap melakukan praktik tack weld sesuai prosedur.",
      ] },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Tack weld merupakan proses pengelasan sementara yang berfungsi untuk mempertahankan posisi benda kerja sebelum dilakukan pengelasan penuh. Keberhasilan tack weld dipengaruhi oleh persiapan material, ketepatan posisi sambungan, penggunaan parameter pengelasan yang sesuai, serta penerapan prosedur kerja dan keselamatan kerja. Dengan memahami teknik dasar tack weld, peserta PKL akan memiliki dasar keterampilan yang diperlukan sebelum melanjutkan ke proses pengelasan utama di PT. Coppalt Utama Indomelt." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 8 — Pemeriksaan Hasil Tack Weld
  // ══════════════════════════════════════════════════════════
  {
    id: 8,
    items: [
      { kind: 'heading', text: "Tujuan Pembelajaran" },
      { kind: 'para', text: "Setelah mempelajari materi ini, peserta diharapkan mampu:" },
      { kind: 'bullets', items: [
        "Menjelaskan pengertian pemeriksaan hasil tack weld.",
        "Mengidentifikasi aspek yang harus diperiksa.",
        "Melakukan pemeriksaan visual secara sistematis.",
        "Mengidentifikasi cacat yang sering ditemukan pada hasil tack weld.",
        "Menentukan kriteria hasil tack weld yang baik.",
        "Melaporkan hasil pemeriksaan kepada instruktur.",
      ] },

      { kind: 'heading', text: "Pengertian Pemeriksaan Hasil Tack Weld" },
      { kind: 'para', text: "Pemeriksaan hasil tack weld merupakan proses penilaian terhadap kualitas sambungan las sementara yang dilakukan sebelum proses pengelasan penuh (final welding). Pemeriksaan ini bertujuan untuk memastikan posisi benda kerja sesuai gambar kerja, sambungan memiliki kekuatan yang cukup, serta tidak terdapat cacat yang dapat memengaruhi kualitas hasil pengelasan selanjutnya. Pemeriksaan dilakukan secara visual (Visual Inspection) karena metode ini mudah diterapkan, cepat, dan tidak memerlukan peralatan khusus (American Welding Society, 2020)." },
      { kind: 'para', text: "Dalam kegiatan praktik di PT. Coppalt Utama Indomelt, setiap peserta PKL diwajibkan melakukan pemeriksaan hasil tack weld sebelum mendapatkan persetujuan dari instruktur untuk melanjutkan ke proses pengelasan berikutnya." },

      { kind: 'heading', text: "Langkah-Langkah Pemeriksaan" },
      { kind: 'bullets', items: [
        "Membersihkan hasil tack weld menggunakan palu terak dan sikat baja.",
        "Memeriksa posisi benda kerja agar sesuai dengan gambar kerja.",
        "Memastikan sudut sambungan T-Joint tetap 90° menggunakan siku baja.",
        "Mengukur dimensi benda kerja menggunakan mistar baja.",
        "Mengamati permukaan hasil tack weld secara visual.",
        "Tentukan apakah sambungan layak dilanjutkan ke proses pengelasan penuh.",
      ] },
      { kind: 'image', file: "image23.jpeg", caption: "Gambar 23 Pemeriksaan Visual Hasil Tack Weld", source: "American Welding Society. (2020). Welding Handbook." },

      { kind: 'heading', text: "Cacat yang Sering Ditemukan" },
      { kind: 'table', caption: "Tabel 4 Cacat Hasil Tack Weld",
        cols: ["No", "Jenis Cacat", "Penyebab", "Perbaikan"],
        rows: [
          ["1", "Porositas",                    "Material kotor atau elektroda lembap",              "Bersihkan material dan gunakan elektroda kering"],
          ["2", "Retak (Crack)",                "Pendinginan terlalu cepat atau arus tidak sesuai",  "Hilangkan bagian retak dan lakukan pengelasan ulang"],
          ["3", "Kurang Menyatu (Lack of Fusion)","Arus terlalu kecil atau teknik salah",            "Atur arus dan ulangi pengelasan"],
          ["4", "Percikan Berlebihan (Spatter)", "Arus terlalu tinggi",                              "Sesuaikan arus pengelasan"],
          ["5", "Pergeseran Sambungan",          "Penjepitan kurang kuat",                           "Atur ulang posisi dan lakukan tack weld kembali"],
        ],
      },

      { kind: 'heading', text: "Kriteria Hasil Tack Weld yang Baik" },
      { kind: 'para', text: "Hasil tack weld dinyatakan baik apabila memenuhi kriteria berikut." },
      { kind: 'bullets', items: [
        "Posisi benda kerja sesuai gambar kerja.",
        "Sudut sambungan tetap 90°.",
        "Panjang tack weld sesuai spesifikasi.",
        "Tidak terdapat retak.",
        "Tidak terdapat porositas.",
        "Tack menyatu dengan baik pada kedua material.",
        "Permukaan hasil las rapi.",
        "Terak telah dibersihkan.",
      ] },

      { kind: 'checklist',
        title: "Refleksi Diri",
        variant: "refleksi",
        items: [
          "Saya memahami tujuan pemeriksaan hasil tack weld.",
          "Saya mengetahui aspek yang harus diperiksa.",
          "Saya dapat melakukan pemeriksaan visual.",
          "Saya mampu mengidentifikasi cacat hasil tack weld.",
          "Saya mengetahui kriteria tack weld yang baik.",
          "Saya siap melakukan pemeriksaan sebelum proses pengelasan penuh.",
        ],
      },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Pemeriksaan hasil tack weld merupakan tahapan penting dalam proses fabrikasi sebelum dilakukan pengelasan penuh. Pemeriksaan dilakukan secara visual untuk memastikan posisi sambungan, kesikuan, ukuran tack weld, serta memastikan tidak terdapat cacat seperti retak, porositas, atau kurang menyatu. Dengan melakukan pemeriksaan secara teliti, kualitas sambungan dapat terjaga, risiko pekerjaan ulang dapat dikurangi, dan proses pengelasan selanjutnya dapat berlangsung dengan lebih aman dan efisien sesuai standar kerja di PT. Coppalt Utama Indomelt." },
    ],
  },
];
