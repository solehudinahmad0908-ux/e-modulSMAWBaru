// Generated from DOCX — verbatim content with embedded image references

export type ContentItem =
  | { kind: 'heading'; text: string }
  | { kind: 'para'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'image'; file: string; caption: string; source: string }
  | { kind: 'gallery'; images: Array<{ file: string; caption: string; source: string }> }
  | { kind: 'table'; caption: string; cols: string[]; rows: string[][] }
  | { kind: 'infobox'; title: string; text: string }
  | { kind: 'checklist'; title: string; items: string[]; variant: 'refleksi' | 'pemeriksaan' };

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
      { kind: 'table', caption: "Tabel 1. Potensi Bahaya pada Area Pengelasan SMAW",
        cols: ["No", "Potensi Bahaya", "Dampak", "Pengendalian"],
        rows: [
          ["1", "Sengatan listrik", "Cedera hingga kematian", "Memeriksa kabel dan peralatan sebelum digunakan"],
          ["2", "Percikan logam cair", "Luka bakar", "Menggunakan APD lengkap"],
          ["3", "Radiasi UV dan IR", "Kerusakan mata dan kulit", "Menggunakan helm las"],
          ["4", "Asap las", "Gangguan pernapasan", "Ventilasi yang baik dan masker"],
          ["5", "Kebakaran", "Cedera dan kerusakan fasilitas", "Menjauhkan material mudah terbakar dan menyediakan APAR"],
          ["6", "Material panas", "Luka bakar", "Menggunakan sarung tangan dan tang penjepit"],
        ],
      },
      { kind: 'image', file: "image1.png", caption: "Gambar 1. Potensi Bahaya pada Area Pengelasan SMAW", source: "Garuda Systrain Indonesia (2023)" },

      { kind: 'heading', text: "Upaya Pencegahan Kecelakaan Kerja" },
      { kind: 'para', text: "Upaya pencegahan kecelakaan kerja harus dilakukan sebelum, selama, dan setelah proses pengelasan." },
      { kind: 'table', caption: "Tabel 2. Ringkasan Upaya Pencegahan Kecelakaan Kerja",
        cols: ["Tahapan", "Upaya Pencegahan"],
        rows: [
          ["Sebelum bekerja", "Menggunakan APD, memeriksa mesin dan peralatan, memastikan area kerja aman, serta menyiapkan APAR."],
          ["Saat bekerja", "Mengikuti SOP, menjaga posisi kerja yang aman, menghindari kontak dengan sumber listrik, dan menjaga kebersihan area kerja."],
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
      { kind: 'image', file: "image2.jpeg", caption: "Gambar 2. Contoh rambu-rambu keselamatan kerja", source: "PT SHA SOLO. (2023). Contoh Simbol Rambu-Rambu Keselamatan." },

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
      { kind: 'image', file: "image3.jpeg", caption: "Gambar 3. Contoh jalur evakuasi dan titik kumpul di lingkungan kerja", source: "Nimbus9 Technology. (2024). Jalur Evakuasi Adalah: Pengertian, Fungsi, Standar, dan Contohnya." },

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
      { kind: 'image', file: "image4.jpeg", caption: "Gambar 4. Jenis-Jenis APD Pengelasan SMAW", source: "Welding Safety UK. (2021)." },
      { kind: 'para', text: "Berdasarkan Gambar 4, APD yang digunakan pada proses pengelasan SMAW meliputi:" },

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
      { kind: 'table', caption: "Tabel 2. Fungsi APD pada Proses Pengelasan SMAW",
        cols: ["No", "APD", "Fungsi", "Risiko yang Dicegah"],
        rows: [
          ["1",  "Topi Las",              "Melindungi kepala dari panas.",             "Percikan api dan panas."],
          ["2",  "Safety Glasses",        "Melindungi mata.",                          "Debu dan serpihan logam."],
          ["3",  "Helm Las",              "Melindungi wajah dan mata.",                "Radiasi UV, IR, dan percikan logam."],
          ["4",  "Masker Debu",           "Melindungi sistem pernapasan.",             "Debu dan asap las."],
          ["5",  "Jaket Las Kulit",       "Melindungi tubuh.",                         "Panas dan percikan logam cair."],
          ["6",  "Sarung Tangan Las",     "Melindungi tangan.",                        "Luka bakar dan benda tajam."],
          ["7",  "Celemek Kulit",         "Melindungi bagian depan tubuh.",            "Percikan logam cair."],
          ["8",  "Celana Panjang",        "Melindungi kaki.",                          "Panas dan percikan logam."],
          ["9",  "Leather Spats",         "Melindungi bagian atas kaki.",              "Percikan logam masuk ke sepatu."],
          ["10", "Safety Shoes",          "Melindungi kaki.",                          "Benda berat, logam panas, dan benda tajam."],
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

      { kind: 'heading', text: "Poin Penting" },
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

      { kind: 'gallery', images: [
        { file: "image5.jpeg",  caption: "Mesin Las SMAW",              source: "Miller Electric Mfg. LLC." },
        { file: "image6.jpeg",  caption: "Holder Elektroda",            source: "AWS Welding Handbook (2020)" },
        { file: "image7.jpeg",  caption: "Kabel Las",                   source: "AWS Welding Handbook (2020)" },
        { file: "image8.jpeg",  caption: "Klem Massa (Work Clamp)",     source: "AWS Welding Handbook (2020)" },
        { file: "image9.jpeg",  caption: "Elektroda Las",               source: "AWS Welding Handbook (2020)" },
      ] },
      { kind: 'gallery', images: [
        { file: "image10.jpeg", caption: "Palu Terak (Chipping Hammer)", source: "AWS Welding Handbook (2020)" },
        { file: "image11.jpeg", caption: "Sikat Baja (Wire Brush)",      source: "AWS Welding Handbook (2020)" },
        { file: "image12.jpeg", caption: "Gerinda Tangan (Angle Grinder)",source: "AWS Welding Handbook (2020)" },
        { file: "image13.jpeg", caption: "Meja Las (Welding Table)",     source: "AWS Welding Handbook (2020)" },
      ] },

      { kind: 'heading', text: "Fungsi Peralatan Pengelasan" },
      { kind: 'table', caption: "Tabel 3. Fungsi Peralatan Pengelasan SMAW",
        cols: ["No", "Peralatan", "Fungsi"],
        rows: [
          ["1",  "Mesin Las SMAW",    "Menghasilkan arus listrik untuk proses pengelasan."],
          ["2",  "Holder Elektroda",  "Menjepit dan menghantarkan arus ke elektroda."],
          ["3",  "Kabel Las",         "Menyalurkan arus listrik dari mesin las."],
          ["4",  "Klem Massa",        "Menghubungkan benda kerja dengan mesin las."],
          ["5",  "Elektroda",         "Sebagai logam pengisi sekaligus penghantar arus listrik."],
          ["6",  "Palu Terak",        "Membersihkan terak hasil pengelasan."],
          ["7",  "Sikat Baja",        "Membersihkan permukaan logam sebelum dan sesudah pengelasan."],
          ["8",  "Gerinda Tangan",    "Meratakan dan membersihkan hasil pengelasan."],
          ["9",  "Meteran Baja",      "Mengukur dimensi benda kerja."],
          ["10", "Ragum",             "Menjepit benda kerja selama proses persiapan."],
        ],
      },

      { kind: 'heading', text: "Cara Penggunaan Peralatan" },
      { kind: 'para', text: "Sebelum melakukan pengelasan, setiap peserta PKL harus memahami cara penggunaan setiap peralatan. Beberapa ketentuan yang harus diperhatikan antara lain:" },
      { kind: 'bullets', items: [
        "Pastikan mesin las dalam kondisi baik sebelum dinyalakan.",
        "Gunakan elektroda sesuai spesifikasi pekerjaan.",
        "Pasang kabel las dengan kuat dan pastikan tidak ada isolasi yang rusak.",
        "Pastikan klem massa terhubung dengan baik pada benda kerja.",
        "Gunakan gerinda sesuai prosedur keselamatan dan gunakan pelindung.",
        "Bersihkan terak menggunakan palu terak setelah pengelasan selesai.",
      ] },

      { kind: 'heading', text: "Pemeriksaan Peralatan Sebelum Digunakan" },
      { kind: 'para', text: "Sebelum memulai pekerjaan, lakukan pemeriksaan terhadap seluruh peralatan untuk memastikan kondisinya aman dan layak pakai." },

      { kind: 'checklist',
        title: "Checklist Pemeriksaan Peralatan",
        variant: "pemeriksaan",
        items: [
          "Mesin las berfungsi normal dan arus sesuai kebutuhan.",
          "Holder elektroda tidak retak atau longgar.",
          "Kabel las tidak terkelupas atau rusak isolasinya.",
          "Klem massa terpasang dengan baik pada benda kerja.",
          "Gerinda tangan dalam kondisi baik dan pelindung terpasang.",
        ],
      },

      { kind: 'heading', text: "Perawatan Peralatan" },
      { kind: 'para', text: "Peralatan pengelasan harus dirawat agar tetap aman dan optimal digunakan. Langkah perawatan meliputi:" },
      { kind: 'bullets', items: [
        "Membersihkan peralatan setelah digunakan.",
        "Menggulung kabel las dengan rapi agar tidak kusut atau terjepit.",
        "Menyimpan elektroda di tempat yang kering untuk mencegah kelembapan.",
        "Memeriksa kondisi peralatan secara berkala.",
        "Melaporkan kerusakan kepada pembimbing agar segera ditangani.",
      ] },

      { kind: 'heading', text: "Kesalahan yang Sering Terjadi" },
      { kind: 'para', text: "Beberapa kesalahan yang sering dilakukan peserta PKL antara lain:" },
      { kind: 'bullets', items: [
        "Menggunakan kabel las yang sudah rusak atau isolasinya terkelupas.",
        "Memasang klem massa pada permukaan yang kotor atau berkarat.",
        "Menggunakan elektroda yang lembap sehingga mengurangi kualitas las.",
        "Tidak membersihkan terak sebelum melanjutkan pengelasan.",
        "Menggunakan gerinda tanpa pelindung dan tanpa APD.",
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
          "Saya mengenal seluruh peralatan pengelasan SMAW.",
          "Saya mengetahui fungsi setiap peralatan.",
          "Saya mampu memeriksa kondisi peralatan sebelum digunakan.",
          "Saya mengetahui cara merawat dan menyimpan peralatan.",
        ],
      },

      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Peralatan kerja pengelasan terdiri atas peralatan utama dan peralatan pendukung yang memiliki fungsi berbeda dalam proses SMAW. Sebelum digunakan, setiap peralatan harus diperiksa untuk memastikan kondisinya aman dan layak pakai. Setelah pekerjaan selesai, peralatan perlu dibersihkan, dirawat, dan disimpan dengan benar agar tetap berfungsi optimal serta mendukung keselamatan dan kelancaran proses pengelasan." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 4 — Dasar Membaca Gambar Kerja
  // ══════════════════════════════════════════════════════════
  {
    id: 4,
    items: [
      { kind: 'heading', text: "Pengertian Gambar Kerja" },
      { kind: 'bullets', items: [
        "Gambar kerja merupakan media komunikasi teknik yang digunakan untuk menyampaikan informasi mengenai bentuk, ukuran, dimensi, jenis material, serta proses pembuatan suatu komponen atau produk. Dalam dunia manufaktur, gambar kerja menjadi acuan utama bagi operator maupun welder dalam melakukan proses fabrikasi sehingga hasil pekerjaan sesuai dengan desain yang telah direncanakan (Giesecke et al., 2021).",
        "Pada proses pengelasan, kemampuan membaca gambar kerja sangat penting karena setiap sambungan las harus dikerjakan sesuai dengan bentuk, ukuran, posisi, dan spesifikasi yang tercantum pada gambar. Kesalahan dalam membaca gambar kerja dapat menyebabkan ketidaksesuaian produk, pemborosan material, hingga kegagalan proses produksi.",
      ] },
      { kind: 'heading', text: "Fungsi Gambar Kerja" },
      { kind: 'bullets', items: [
        "Gambar kerja memiliki beberapa fungsi, antara lain:",
        "Sebagai pedoman dalam proses pembuatan dan perakitan komponen.",
        "Menyampaikan informasi ukuran, bentuk, dan spesifikasi benda kerja.",
        "Memudahkan komunikasi antara perancang, operator, dan welder.",
        "Mengurangi kesalahan selama proses produksi.",
        "Menjadi acuan dalam pemeriksaan kualitas hasil pekerjaan.",
      ] },
      { kind: 'heading', text: "Informasi Yang Terdapat Pada Gambar Kerja" },
      { kind: 'para', text: "Sebuah gambar kerja umumnya memuat beberapa informasi penting yang harus dipahami oleh setiap peserta PKL." },
      { kind: 'heading', text: "Judul Gambar (Title Block)" },
      { kind: 'para', text: "Title block berisi informasi mengenai nama komponen, nomor gambar, skala, material, tanggal pembuatan, serta nama pembuat atau perusahaan." },
      { kind: 'image', file: "image14.jpeg", caption: "Gambar 14. Contoh title block pada gambar kerja", source: "" },
      { kind: 'heading', text: "Pandangan Gambar (Views)" },
      { kind: 'para', text: "Pandangan gambar digunakan untuk menunjukkan bentuk benda dari beberapa arah sehingga memudahkan proses pembuatan." },
      { kind: 'bullets', items: [
        "Tampak depan (Front View)",
        "Tampak atas (Top View)",
        "Tampak samping (Side View)",
        "Tampak isometri (Isometric View)",
      ] },
      { kind: 'image', file: "image15.png", caption: "Gambar 15. Contoh pandangan gambar kerja", source: "" },
      { kind: 'heading', text: "Dimensi" },
      { kind: 'para', text: "Dimensi menunjukkan ukuran benda kerja yang harus dibuat sesuai dengan gambar. Informasi dimensi meliputi panjang, lebar, tinggi, diameter, jari-jari, sudut, maupun ketebalan material." },
      { kind: 'bullets', items: [
        "Panjang = 150 mm",
        "Lebar = 50 mm",
        "Tebal = 6 mm",
      ] },
      { kind: 'image', file: "image16.png", caption: "Gambar 16. Contoh pemberian dimensi pada gambar kerja", source: "" },
      { kind: 'heading', text: "Jenis Material" },
      { kind: 'para', text: "Pada gambar kerja biasanya dicantumkan jenis material yang digunakan, misalnya:" },
      { kind: 'bullets', items: [
        "Baja karbon rendah (Mild Steel)",
        "Baja tahan karat (Stainless Steel)",
        "Aluminium",
      ] },
      { kind: 'para', text: "Informasi ini menjadi acuan dalam pemilihan proses pengelasan dan elektroda yang sesuai." },
      { kind: 'heading', text: "Simbol Dasar Pengelasan" },
      { kind: 'para', text: "Pada gambar kerja pengelasan sering dijumpai simbol-simbol yang menunjukkan jenis sambungan las dan lokasi pengelasan. Simbol tersebut mengacu pada standar internasional sehingga memudahkan komunikasi antarpekerja." },
      { kind: 'bullets', items: [
        "Fillet Weld (Las Sudut)",
        "Square Groove Weld (Las Kampuh Persegi)",
        "Single V-Groove Weld (Las Kampuh V Tunggal)",
      ] },
      { kind: 'image', file: "image17.jpeg", caption: "Gambar 17. Contoh simbol dasar pengelasan", source: "American Welding Society. AWS A2.4 (2020)" },
      { kind: 'para', text: "Catatan: Pada e-modul ini peserta difokuskan pada fillet weld karena praktik awal menggunakan teknik tack weld pada sambungan sudut." },
      { kind: 'heading', text: "Membaca Gambar Kerja Sederhana" },
      { kind: 'bullets', items: [
        "Sebelum melakukan praktik pengelasan, peserta PKL harus mampu membaca gambar kerja sederhana. Langkah-langkah membaca gambar kerja meliputi:",
        "Membaca judul gambar dan identitas komponen.",
        "Mengidentifikasi bentuk benda kerja melalui pandangan gambar.",
        "Memahami ukuran dan dimensi yang tercantum.",
        "Mengetahui jenis material yang digunakan.",
        "Mengidentifikasi posisi dan jenis sambungan las.",
        "Memastikan seluruh informasi telah dipahami sebelum pekerjaan dimulai.",
      ] },
      { kind: 'heading', text: "Contoh Gambar Kerja Sederhana" },
      { kind: 'para', text: "Berikut contoh gambar kerja sederhana yang akan digunakan pada praktik awal." },
      { kind: 'image', file: "image18.png", caption: "Gambar 18. Contoh gambar kerja sambungan T-Joint untuk praktik tack weld", source: "" },
      { kind: 'para', text: "Gambar kerja merupakan pedoman utama dalam proses fabrikasi dan pengelasan. Setiap peserta PKL harus mampu memahami informasi yang terdapat pada gambar kerja, seperti title block, pandangan gambar, dimensi, jenis material, serta simbol pengelasan. Kemampuan membaca gambar kerja dengan benar akan membantu menghasilkan sambungan las yang sesuai dengan spesifikasi dan mengurangi kesalahan selama proses produksi." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 5 — Dasar Penggunaan Alat Ukur
  // ══════════════════════════════════════════════════════════
  {
    id: 5,
    items: [
      { kind: 'gallery', images: [
        { file: "image19.jpeg", caption: "Mistar Baja (Steel Rule)", source: "" },
        { file: "image20.jpeg", caption: "Meteran (Measuring Tape)", source: "" },
        { file: "image21.jpeg", caption: "Jangka Sorong (Vernier Caliper)", source: "" },
        { file: "image22.jpeg", caption: "Siku Baja (Try Square)", source: "" },
        { file: "image23.jpeg", caption: "Penggores (Scriber)", source: "" },
      ] },
      { kind: 'table', caption: "Tabel. Fungsi Alat Ukur pada Proses Pengelasan",
        cols: ["No", "Alat Ukur", "Fungsi"],
        rows: [
          ["1", "Mistar Baja", "Mengukur panjang dan membuat garis bantu."],
          ["2", "Meteran", "Mengukur benda kerja yang berukuran panjang."],
          ["3", "Jangka Sorong", "Mengukur dimensi luar, dimensi dalam, dan kedalaman dengan ketelitian tinggi."],
          ["4", "Siku Baja", "Memeriksa kesikuan atau sudut 90°."],
          ["5", "Penggores", "Memberikan tanda atau garis pada benda kerja."],
        ],
      },
      { kind: 'para', text: "Penggunaan alat ukur merupakan salah satu kompetensi dasar yang harus dikuasai oleh peserta PKL sebelum melakukan proses pengelasan. Pengukuran yang tepat akan membantu memastikan ukuran benda kerja sesuai dengan gambar kerja, mengurangi kesalahan produksi, serta meningkatkan kualitas hasil pengelasan. Oleh karena itu, setiap peserta harus memahami fungsi, cara penggunaan, dan perawatan alat ukur sebelum memasuki tahap praktik." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 6 — Dasar-Dasar Pengelasan SMAW
  // ══════════════════════════════════════════════════════════
  {
    id: 6,
    items: [
      { kind: 'heading', text: "Pengertian Pengelasan SMAW" },
      { kind: 'bullets', items: [
        "Shielded Metal Arc Welding (SMAW) atau las busur listrik dengan elektroda terbungkus merupakan salah satu proses pengelasan yang paling banyak digunakan dalam industri manufaktur, konstruksi, maupun fabrikasi logam. Proses ini memanfaatkan panas yang dihasilkan dari busur listrik (electric arc) yang terbentuk antara ujung elektroda dengan benda kerja. Panas yang dihasilkan mampu mencapai suhu sekitar 5.000–6.000°C, sehingga logam induk dan logam pengisi dapat mencair dan menyatu membentuk sambungan las yang kuat (Jeffus, 2020).",
        "Pada proses SMAW, elektroda yang digunakan memiliki lapisan fluks (flux coating) yang berfungsi menghasilkan gas pelindung dan membentuk lapisan terak (slag). Gas pelindung berfungsi mencegah logam cair bereaksi dengan udara luar, sedangkan terak berfungsi melindungi logam las selama proses pendinginan. Setelah pengelasan selesai, terak harus dibersihkan menggunakan palu terak dan sikat baja agar kualitas sambungan las dapat diperiksa.",
        "Proses SMAW memiliki beberapa keunggulan, di antaranya peralatan yang relatif sederhana, biaya operasional yang lebih ekonomis, serta dapat digunakan pada berbagai posisi pengelasan. Selain itu, metode ini mampu digunakan untuk mengelas berbagai jenis baja sehingga menjadi salah satu metode pengelasan yang paling banyak diterapkan di industri. Oleh karena itu, peserta PKL perlu memahami prinsip dasar pengelasan SMAW sebelum melakukan praktik di workshop PT. Coppalt Utama Indomelt.",
      ] },
      { kind: 'image', file: "image24.jpeg", caption: "Gambar 23. Proses pengelasan SMAW", source: "" },
      { kind: 'heading', text: "Prinsip Kerja Pengelasan SMAW" },
      { kind: 'bullets', items: [
        "Prinsip kerja pengelasan SMAW dimulai ketika elektroda dijepit pada holder elektroda kemudian dihubungkan dengan mesin las yang telah diatur sesuai kebutuhan arus pengelasan. Setelah penjepit massa (work clamp) dipasang pada benda kerja, ujung elektroda disentuhkan dan sedikit dijauhkan dari permukaan benda kerja sehingga terbentuk busur listrik (electric arc). Busur listrik inilah yang menghasilkan panas sangat tinggi sehingga mampu mencairkan logam induk dan ujung elektroda secara bersamaan.",
        "Selama proses pengelasan berlangsung, inti kawat elektroda akan mencair dan berfungsi sebagai logam pengisi (filler metal) yang mengisi celah sambungan. Pada saat yang sama, lapisan fluks elektroda akan menghasilkan gas pelindung yang melindungi logam cair dari pengaruh oksigen dan nitrogen di udara. Selain menghasilkan gas pelindung, fluks juga membentuk lapisan terak (slag) yang melindungi logam las selama proses pembekuan.",
        "Setelah busur listrik diputus, logam cair akan mendingin dan membeku sehingga terbentuk sambungan las yang permanen. Terak yang menutupi permukaan hasil las kemudian dibersihkan menggunakan palu terak dan sikat baja sebelum dilakukan pemeriksaan kualitas hasil pengelasan.",
      ] },
      { kind: 'image', file: "image25.jpeg", caption: "Gambar 24. Prinsip kerja proses pengelasan SMAW", source: "" },
      { kind: 'heading', text: "Peralatan Utama Pengelasan SMAW" },
      { kind: 'bullets', items: [
        "Keberhasilan proses pengelasan tidak hanya dipengaruhi oleh keterampilan operator, tetapi juga oleh penggunaan peralatan yang sesuai. Setiap peralatan pada proses SMAW memiliki fungsi yang saling berkaitan sehingga harus digunakan dengan benar dan dalam kondisi yang baik.",
        "Sebelum melakukan praktik, peserta PKL wajib mengenali setiap peralatan beserta fungsinya untuk mengurangi risiko kesalahan kerja dan kecelakaan.",
        "Mesin las SMAW sebagai sumber tenaga listrik.",
        "Holder elektroda untuk menjepit elektroda dan menghantarkan arus listrik.",
        "Kabel las sebagai penghantar arus dari mesin las menuju holder dan penjepit massa.",
        "Penjepit massa (work clamp) yang menghubungkan benda kerja dengan mesin las.",
        "Elektroda sebagai logam pengisi sekaligus pembentuk busur listrik.",
        "Alat Pelindung Diri (APD) sebagai perlengkapan keselamatan selama proses pengelasan.",
        "Seluruh peralatan tersebut harus diperiksa terlebih dahulu sebelum digunakan untuk memastikan proses pengelasan dapat berlangsung dengan aman dan menghasilkan sambungan las yang berkualitas.",
      ] },
      { kind: 'image', file: "image26.jpeg", caption: "Gambar 25. Peralatan utama pengelasan SMAW", source: "" },
      { kind: 'heading', text: "Jenis Sambungan Las (Weld Joint)" },
      { kind: 'bullets', items: [
        "Sambungan las (weld joint) merupakan bentuk penyambungan dua atau lebih logam yang akan dilas. Pemilihan jenis sambungan sangat memengaruhi kekuatan, kemudahan proses pengelasan, serta fungsi komponen yang dihasilkan.",
        "Butt Joint (Sambungan Tumpul) — dua pelat disambung pada satu bidang yang sama.",
        "Lap Joint (Sambungan Tumpang) — dua pelat disusun saling menumpuk kemudian dilas pada bagian tepinya.",
        "T-Joint (Sambungan T) — dua pelat disusun membentuk sudut 90° menyerupai huruf T.",
        "Corner Joint (Sambungan Sudut) — dua pelat disambung pada bagian sudut sehingga membentuk huruf L.",
        "Edge Joint (Sambungan Tepi) — dua pelat disambung pada bagian tepinya.",
        "Pada e-modul ini, peserta PKL akan lebih difokuskan pada T-Joint, karena sambungan tersebut digunakan sebagai media latihan tack weld sebelum peserta mengerjakan produk sebenarnya di PT. Coppalt Utama Indomelt.",
      ] },
      { kind: 'image', file: "image27.png", caption: "Gambar 26. Jenis-jenis sambungan las", source: "" },
      { kind: 'heading', text: "Posisi Pengelasan" },
      { kind: 'bullets', items: [
        "Posisi pengelasan merupakan orientasi benda kerja terhadap arah pengelasan. Posisi ini akan memengaruhi tingkat kesulitan proses pengelasan, bentuk manik las, serta teknik yang digunakan oleh operator.",
        "Posisi dasar pengelasan pada proses SMAW meliputi posisi datar (Flat Position), horizontal (Horizontal Position), vertikal (Vertical Position), dan di atas kepala (Overhead Position).",
        "Pada tahap awal PKL, peserta hanya diperkenalkan mengenai konsep dasar posisi pengelasan. Praktik yang dilakukan akan menyesuaikan dengan posisi yang telah ditentukan dalam job sheet perusahaan.",
      ] },
      { kind: 'image', file: "image28.png", caption: "Gambar 27. Posisi dasar pengelasan SMAW", source: "" },
      { kind: 'heading', text: "Elektroda SMAW" },
      { kind: 'bullets', items: [
        "Elektroda merupakan logam pengisi yang digunakan pada proses pengelasan SMAW. Elektroda terdiri atas inti kawat (core wire) dan lapisan fluks (flux coating). Fluks berfungsi menghasilkan gas pelindung, membentuk terak, serta menstabilkan busur listrik.",
        "Salah satu elektroda yang umum digunakan untuk baja karbon rendah adalah E6013, karena mudah digunakan dan menghasilkan busur listrik yang stabil.",
      ] },
      { kind: 'image', file: "image29.png", caption: "Gambar 28. Bagian-bagian elektroda SMAW", source: "" },
      { kind: 'heading', text: "Parameter Dasar Pengelasan" },
      { kind: 'para', text: "Beberapa parameter dasar yang memengaruhi kualitas hasil pengelasan antara lain:" },
      { kind: 'bullets', items: [
        "Arus Pengelasan (Ampere) — disesuaikan dengan diameter elektroda.",
        "Panjang Busur (Arc Length) — memengaruhi kestabilan busur listrik.",
        "Sudut Elektroda (Electrode Angle) — memengaruhi bentuk manik las.",
        "Kecepatan Gerak (Travel Speed) — memengaruhi penetrasi dan ukuran manik las.",
        "Pengaturan parameter yang tepat akan menghasilkan sambungan las yang lebih baik dan meminimalkan cacat pengelasan.",
      ] },
      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Shielded Metal Arc Welding (SMAW) merupakan salah satu proses pengelasan yang banyak digunakan dalam industri karena sederhana, ekonomis, dan mampu menghasilkan sambungan yang kuat. Sebelum melakukan praktik, peserta PKL harus memahami prinsip kerja SMAW, mengenal peralatan utama, jenis sambungan las, posisi pengelasan, elektroda, serta parameter dasar pengelasan. Pemahaman terhadap materi ini menjadi bekal penting sebelum melaksanakan praktik tack weld di workshop PT. Coppalt Utama Indomelt." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 7 — Teknik Dasar Tack Weld
  // ══════════════════════════════════════════════════════════
  {
    id: 7,
    items: [
      { kind: 'heading', text: "Pengertian Tack Weld" },
      { kind: 'bullets', items: [
        "Tack weld adalah proses pengelasan sementara yang dilakukan untuk menyatukan dua atau lebih komponen logam sebelum dilakukan pengelasan penuh (final welding). Tack weld berfungsi menjaga posisi, dimensi, dan keselarasan benda kerja agar tidak bergeser selama proses pengelasan berlangsung. Walaupun bersifat sementara, tack weld harus memiliki kekuatan yang cukup sehingga mampu mempertahankan posisi benda kerja hingga proses pengelasan selesai (Jeffus, 2020).",
        "Dalam proses fabrikasi, tack weld merupakan tahapan yang sangat penting karena kualitas penyambungan awal akan memengaruhi kualitas hasil pengelasan akhir. Tack weld yang baik dapat mengurangi distorsi akibat panas, menjaga ukuran benda kerja tetap sesuai gambar kerja, serta mempermudah proses penyambungan selanjutnya. Oleh karena itu, setiap peserta PKL wajib menguasai teknik dasar tack weld sebelum diperbolehkan mengerjakan produk produksi di PT. Coppalt Utama Indomelt.",
      ] },
      { kind: 'heading', text: "Tujuan Tack Weld" },
      { kind: 'bullets', items: [
        "Menahan posisi benda kerja agar tidak bergeser selama proses pengelasan.",
        "Menjaga kesesuaian dimensi dan bentuk sambungan dengan gambar kerja.",
        "Mengurangi terjadinya distorsi akibat panas selama proses pengelasan.",
        "Mempermudah proses penyetelan (fit-up) sebelum dilakukan pengelasan penuh.",
        "Meningkatkan efisiensi kerja karena posisi benda kerja telah stabil.",
        "Membantu menghasilkan kualitas sambungan las yang lebih baik.",
      ] },
      { kind: 'heading', text: "Peralatan dan Bahan" },
      { kind: 'para', text: "Sebelum melakukan praktik tack weld, seluruh peralatan dan bahan harus dipersiapkan sesuai dengan kebutuhan pekerjaan." },
      { kind: 'heading', text: "Peralatan" },
      { kind: 'bullets', items: [
        "Mesin las SMAW",
        "Holder elektroda",
        "Penjepit massa (Work Clamp)",
        "Palu terak (Chipping Hammer)",
        "Sikat baja (Wire Brush)",
        "Clamp atau penjepit benda kerja",
        "Mistar baja",
        "Siku baja",
      ] },
      { kind: 'heading', text: "Bahan" },
      { kind: 'bullets', items: [
        "Pelat baja karbon rendah (Mild Steel)",
        "Elektroda E6013 Ø2,6 mm (atau sesuai standar perusahaan)",
      ] },
      { kind: 'heading', text: "APD yang Wajib Digunakan" },
      { kind: 'bullets', items: [
        "Helm las",
        "Kacamata keselamatan",
        "Masker las",
        "Jaket las",
        "Sarung tangan las",
        "Celemek kulit",
        "Sepatu keselamatan",
      ] },
      { kind: 'heading', text: "Persiapan Sebelum Tack Weld" },
      { kind: 'para', text: "Persiapan merupakan tahapan awal yang sangat menentukan keberhasilan proses tack weld. Langkah-langkah persiapan yang harus dilakukan meliputi:" },
      { kind: 'bullets', items: [
        "Mempelajari gambar kerja dan memahami ukuran benda kerja.",
        "Menyiapkan seluruh alat, bahan, dan APD.",
        "Memeriksa kondisi mesin las, kabel, holder, dan penjepit massa.",
        "Membersihkan permukaan benda kerja dari karat, minyak, cat, atau kotoran.",
        "Menyusun kedua pelat membentuk sambungan T-Joint sesuai gambar kerja.",
        "Memeriksa kesikuan menggunakan siku baja.",
        "Mengunci benda kerja menggunakan clamp agar tidak bergeser.",
        "Mengatur arus mesin las sesuai diameter elektroda yang digunakan.",
        "Memastikan area kerja bersih dan bebas dari material yang mudah terbakar.",
      ] },
      { kind: 'heading', text: "Langkah-Langkah Melakukan Tack Weld" },
      { kind: 'para', text: "Setelah seluruh persiapan selesai dilakukan, proses tack weld dapat dimulai dengan mengikuti prosedur berikut." },
      { kind: 'heading', text: "Langkah 1 — Menyiapkan Benda Kerja" },
      { kind: 'para', text: "Tempatkan kedua pelat sesuai gambar kerja sehingga membentuk sambungan T-Joint. Pastikan posisi pelat telah tegak lurus (90°) menggunakan siku baja." },
      { kind: 'heading', text: "Langkah 2 — Memasang Clamp" },
      { kind: 'para', text: "Pasang clamp pada benda kerja agar posisi pelat tidak berubah selama proses pengelasan berlangsung." },
      { kind: 'heading', text: "Langkah 3 — Mengatur Mesin Las" },
      { kind: 'para', text: "Atur arus mesin las sesuai dengan diameter elektroda yang digunakan." },
      { kind: 'heading', text: "Langkah 4 — Membuat Tack Weld" },
      { kind: 'bullets', items: [
        "Nyalakan busur listrik, kemudian lakukan tack weld pada kedua ujung sambungan.",
        "Apabila benda kerja memiliki ukuran yang lebih panjang, tambahkan tack weld pada bagian tengah agar posisi benda kerja tetap stabil.",
        "Panjang setiap tack weld berkisar antara 10–20 mm, dengan jarak antar titik disesuaikan terhadap panjang sambungan.",
      ] },
      { kind: 'heading', text: "Langkah 5 — Membersihkan Hasil Tack Weld" },
      { kind: 'para', text: "Setelah tack weld selesai dilakukan, bersihkan terak menggunakan palu terak dan sikat baja hingga permukaan sambungan terlihat jelas." },
      { kind: 'heading', text: "Langkah 6 — Melakukan Pemeriksaan Awal" },
      { kind: 'para', text: "Periksa hasil tack weld secara visual untuk memastikan:" },
      { kind: 'bullets', items: [
        "Posisi benda kerja tidak bergeser.",
        "Ukuran sesuai gambar kerja.",
        "Tidak terdapat retak.",
        "Tidak terdapat porositas.",
        "Tack weld memiliki ukuran yang seragam.",
      ] },
      { kind: 'image', file: "image30.png", caption: "Gambar 29. Posisi titik tack weld pada sambungan T-Joint", source: "" },
      { kind: 'heading', text: "Hal-Hal yang Harus Diperhatikan" },
      { kind: 'bullets', items: [
        "Selalu menggunakan APD secara lengkap.",
        "Memastikan benda kerja sesuai dengan gambar kerja.",
        "Menggunakan arus pengelasan sesuai diameter elektroda.",
        "Menjaga panjang busur listrik tetap stabil.",
        "Tidak membuat tack weld terlalu panjang.",
        "Memastikan posisi benda kerja tidak berubah selama proses pengelasan.",
        "Membersihkan terak sebelum dilakukan pemeriksaan.",
        "Memastikan area kerja tetap bersih dan aman.",
      ] },
      { kind: 'heading', text: "Kesalahan yang Sering Terjadi" },
      { kind: 'bullets', items: [
        "Tack weld terlalu kecil → tidak mampu menahan benda kerja.",
        "Tack weld terlalu besar → menyulitkan proses pengelasan akhir.",
        "Posisi benda kerja bergeser → clamp kurang kuat atau posisi tidak tepat.",
        "Retak pada tack weld → pendinginan terlalu cepat atau parameter tidak sesuai.",
        "Percikan las (spatter) berlebihan → arus terlalu tinggi atau busur terlalu panjang.",
        "Sudut sambungan tidak 90° → kesalahan saat penyetelan benda kerja.",
      ] },
      { kind: 'para', text: "Untuk menghindari kesalahan tersebut, peserta PKL harus selalu mengikuti prosedur kerja, menggunakan parameter pengelasan yang sesuai, serta melakukan pemeriksaan visual sebelum melanjutkan ke proses pengelasan berikutnya." },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // MODUL 8 — Pemeriksaan Hasil Tack Weld
  // ══════════════════════════════════════════════════════════
  {
    id: 8,
    items: [
      { kind: 'heading', text: "Pengertian Pemeriksaan Hasil Tack Weld" },
      { kind: 'bullets', items: [
        "Pemeriksaan hasil tack weld merupakan proses penilaian terhadap kualitas sambungan las sementara yang dilakukan sebelum proses pengelasan penuh (final welding). Pemeriksaan ini bertujuan untuk memastikan bahwa posisi benda kerja telah sesuai dengan gambar kerja, sambungan memiliki kekuatan yang cukup, serta tidak terdapat cacat yang dapat memengaruhi kualitas hasil pengelasan selanjutnya. Pemeriksaan dilakukan secara visual (Visual Inspection) karena metode ini mudah diterapkan, cepat, dan tidak memerlukan peralatan khusus (American Welding Society, 2020).",
        "Dalam kegiatan praktik di PT. Coppalt Utama Indomelt, setiap peserta PKL diwajibkan melakukan pemeriksaan hasil tack weld sebelum mendapatkan persetujuan dari instruktur untuk melanjutkan ke proses pengelasan berikutnya.",
      ] },
      { kind: 'heading', text: "Tujuan Pemeriksaan Hasil Tack Weld" },
      { kind: 'bullets', items: [
        "Memastikan posisi benda kerja telah sesuai dengan gambar kerja.",
        "Mengetahui kualitas sambungan sebelum dilakukan pengelasan penuh.",
        "Mengidentifikasi adanya cacat pada hasil tack weld.",
        "Mengurangi risiko kegagalan sambungan selama proses pengelasan.",
        "Menjamin kualitas hasil pekerjaan sesuai standar perusahaan.",
      ] },
      { kind: 'heading', text: "Peralatan Pemeriksaan" },
      { kind: 'para', text: "Peralatan yang digunakan untuk melakukan pemeriksaan hasil tack weld antara lain:" },
      { kind: 'bullets', items: [
        "Mistar baja (Steel Rule)",
        "Siku baja (Try Square)",
        "Jangka sorong (Vernier Caliper)",
        "Lampu inspeksi (jika diperlukan)",
        "Sikat baja (Wire Brush)",
        "Palu terak (Chipping Hammer)",
      ] },
      { kind: 'para', text: "Sebelum dilakukan pemeriksaan, permukaan hasil tack weld harus dibersihkan dari terak dan percikan las agar kondisi sambungan dapat diamati dengan jelas." },
      { kind: 'heading', text: "Langkah-Langkah Pemeriksaan" },
      { kind: 'bullets', items: [
        "Membersihkan hasil tack weld menggunakan palu terak dan sikat baja.",
        "Memeriksa posisi benda kerja agar sesuai dengan gambar kerja.",
        "Memastikan sudut sambungan T-Joint tetap 90° menggunakan siku baja.",
        "Mengukur dimensi benda kerja menggunakan mistar baja atau jangka sorong.",
        "Mengamati permukaan hasil tack weld secara visual.",
        "Memastikan tidak terdapat retak, porositas, atau cacat lainnya.",
        "Memastikan panjang dan jumlah titik tack weld sesuai dengan ketentuan.",
        "Melaporkan hasil pemeriksaan kepada pembimbing atau instruktur.",
      ] },
      { kind: 'heading', text: "Kriteria Hasil Tack Weld yang Baik" },
      { kind: 'table', caption: "Tabel. Kriteria Pemeriksaan Hasil Tack Weld",
        cols: ["Kriteria Pemeriksaan", "Kondisi yang Diharapkan"],
        rows: [
          ["Posisi benda kerja", "Sesuai gambar kerja"],
          ["Sudut sambungan", "90° (tegak lurus)"],
          ["Panjang tack weld", "10–20 mm"],
          ["Jumlah titik tack weld", "Sesuai gambar kerja"],
          ["Bentuk tack weld", "Rapi dan seragam"],
          ["Retak (crack)", "Tidak ada"],
          ["Porositas (porosity)", "Tidak ada"],
          ["Percikan las berlebihan", "Tidak ada"],
          ["Pergeseran benda kerja", "Tidak ada"],
        ],
      },
      { kind: 'checklist',
        title: "Checklist Pemeriksaan Hasil Tack Weld",
        variant: "pemeriksaan",
        items: [
          "Posisi benda kerja sesuai gambar kerja.",
          "Sudut sambungan T-Joint tepat 90°.",
          "Panjang setiap tack weld 10–20 mm.",
          "Tidak terdapat retak pada sambungan.",
          "Tidak terdapat porositas.",
          "Permukaan tack weld telah dibersihkan dari terak.",
          "Hasil pemeriksaan telah dilaporkan kepada instruktur.",
        ],
      },
      { kind: 'heading', text: "Tindakan Apabila Hasil Tidak Memenuhi Kriteria" },
      { kind: 'bullets', items: [
        "Apabila posisi benda kerja bergeser, lakukan penyetelan ulang menggunakan clamp dan siku baja.",
        "Apabila sudut tidak 90°, lepas clamp dan sesuaikan posisi benda kerja.",
        "Apabila ditemukan retak pada tack weld, lakukan gerinda untuk menghilangkan tack weld tersebut dan ulangi proses.",
        "Apabila spatter berlebihan, periksa dan sesuaikan parameter pengelasan.",
        "Apabila panjang tack weld tidak sesuai, tambahkan atau kurangi sesuai ketentuan.",
      ] },
      { kind: 'heading', text: "Ringkasan" },
      { kind: 'para', text: "Pemeriksaan hasil tack weld merupakan tahapan penting dalam proses fabrikasi yang memastikan kualitas sambungan sebelum dilakukan pengelasan penuh. Setiap peserta PKL harus mampu melakukan pemeriksaan secara visual, menggunakan alat ukur yang tepat, serta memahami kriteria hasil tack weld yang baik. Apabila ditemukan ketidaksesuaian, peserta harus segera melakukan tindakan perbaikan sebelum mendapatkan persetujuan instruktur untuk melanjutkan pekerjaan." },
    ],
  },
];
