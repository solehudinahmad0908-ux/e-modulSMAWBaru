// Real learning content extracted from E-Modul Pengelasan SMAW document

export interface ContentSection {
  heading: string;
  body: string[];       // paragraphs
  bullets?: string[];   // bullet list items (if any)
  table?: { cols: string[]; rows: string[][] }; // optional table
}

export interface ModuleContent {
  id: number;
  title: string;
  intro: string;
  sections: ContentSection[];
  keyPoints: string[];
  summary: string;
}

export const moduleContents: ModuleContent[] = [
  // ─── MODUL 1: K3 ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Keselamatan dan Kesehatan Kerja (K3)",
    intro:
      "Keselamatan dan Kesehatan Kerja (K3) merupakan serangkaian upaya yang bertujuan untuk menciptakan lingkungan kerja yang aman, sehat, dan bebas dari risiko kecelakaan maupun penyakit akibat kerja. Dalam kegiatan pengelasan, penerapan K3 menjadi hal yang sangat penting karena proses pengelasan melibatkan suhu tinggi, arus listrik, radiasi cahaya, percikan logam cair, asap las (welding fumes), serta penggunaan berbagai peralatan bertenaga. Menurut Undang-Undang Nomor 1 Tahun 1970 tentang Keselamatan Kerja, setiap tenaga kerja berhak memperoleh perlindungan atas keselamatan dalam melakukan pekerjaan.",
    sections: [
      {
        heading: "Tujuan Penerapan K3",
        body: ["Penerapan K3 di lingkungan industri memiliki beberapa tujuan utama:"],
        bullets: [
          "Melindungi pekerja dari risiko kecelakaan kerja.",
          "Mencegah terjadinya penyakit akibat kerja.",
          "Menjamin keselamatan orang lain yang berada di lingkungan kerja.",
          "Melindungi mesin, peralatan, dan aset perusahaan.",
          "Meningkatkan produktivitas dan efisiensi kerja.",
          "Menciptakan budaya kerja yang aman dan disiplin.",
        ],
      },
      {
        heading: "Pentingnya K3 pada Proses Pengelasan SMAW",
        body: [
          "Proses pengelasan SMAW memiliki berbagai potensi bahaya sehingga setiap pekerja wajib menerapkan prosedur K3 sebelum, selama, dan setelah pekerjaan dilakukan.",
        ],
        bullets: [
          "Sengatan listrik (electric shock).",
          "Radiasi sinar ultraviolet (UV) dan inframerah (IR).",
          "Percikan logam cair (weld spatter).",
          "Kebakaran akibat percikan api.",
          "Asap dan gas hasil pengelasan (welding fumes).",
          "Kebisingan dari proses produksi.",
          "Luka bakar akibat kontak dengan logam panas.",
        ],
      },
      {
        heading: "Potensi Bahaya di Area Pengelasan",
        body: [
          "Area pengelasan merupakan lingkungan kerja yang memiliki berbagai potensi bahaya karena melibatkan penggunaan arus listrik, suhu tinggi, radiasi cahaya, serta menghasilkan asap dan percikan logam. Secara umum, potensi bahaya pada proses pengelasan SMAW dapat dikelompokkan menjadi empat kategori utama: asap dan gas (fumes and gases), bahaya fisik (physical hazards), sengatan listrik (electric shock), serta kebakaran dan ledakan.",
        ],
        table: {
          cols: ["No", "Kategori Bahaya", "Sumber Bahaya", "Dampak"],
          rows: [
            ["1", "Fumes and Gases (Asap dan Gas)", "Pembakaran elektroda dan logam", "Gangguan pernapasan, keracunan"],
            ["2", "Physical Hazards (Bahaya Fisik)", "Radiasi sinar UV/IR, percikan, panas", "Luka bakar, kerusakan mata"],
            ["3", "Electric Shock (Sengatan Listrik)", "Kabel rusak, kontak tidak sengaja", "Luka listrik, kematian"],
            ["4", "Fire & Explosion (Kebakaran/Ledakan)", "Percikan api, bahan mudah terbakar", "Kebakaran area kerja"],
          ],
        },
      },
      {
        heading: "Prosedur K3 Sebelum Pengelasan",
        body: [
          "Sebelum memulai proses pengelasan, setiap peserta PKL wajib melakukan persiapan K3 secara menyeluruh untuk memastikan kondisi area kerja aman.",
        ],
        bullets: [
          "Menggunakan seluruh Alat Pelindung Diri (APD) yang sesuai.",
          "Memeriksa kondisi mesin las, kabel, dan holder elektroda.",
          "Memastikan area kerja bebas dari bahan mudah terbakar.",
          "Memeriksa ventilasi udara di area pengelasan.",
          "Memastikan penjepit massa terpasang dengan benar.",
          "Menyiapkan APAR (Alat Pemadam Api Ringan) di dekat area kerja.",
        ],
      },
      {
        heading: "Prosedur K3 Saat Pengelasan",
        body: [
          "Selama proses pengelasan berlangsung, beberapa prosedur K3 harus selalu diperhatikan:",
        ],
        bullets: [
          "Tidak melepas APD selama proses pengelasan berlangsung.",
          "Menjaga jarak aman dari percikan api.",
          "Tidak mengarahkan elektroda ke arah orang lain.",
          "Memastikan kabel las tidak melilit atau tersandung.",
          "Segera mematikan mesin las jika terjadi ketidaksesuaian.",
        ],
      },
      {
        heading: "Prosedur K3 Setelah Pengelasan",
        body: ["Setelah proses pengelasan selesai, hal-hal berikut harus dilakukan:"],
        bullets: [
          "Mematikan mesin las dan memastikan semua sakelar dalam posisi off.",
          "Meletakkan elektroda bekas di tempat yang aman.",
          "Membersihkan area kerja dari terak dan percikan logam.",
          "Memeriksa kondisi benda kerja yang masih panas.",
          "Melepas APD dan menyimpannya di tempat yang telah ditentukan.",
        ],
      },
      {
        heading: "Tanggap Darurat di Area Pengelasan",
        body: [
          "Setiap peserta PKL harus mengetahui prosedur tanggap darurat yang berlaku di PT. Coppalt Utama Indomelt. Prosedur tanggap darurat meliputi langkah-langkah yang harus dilakukan apabila terjadi keadaan darurat seperti kebakaran, sengatan listrik, atau kecelakaan kerja.",
          "Setiap peserta PKL harus mengetahui lokasi jalur evakuasi, pintu keluar darurat (emergency exit), titik kumpul (assembly point), serta lokasi Alat Pemadam Api Ringan (APAR) sebelum memulai pekerjaan.",
        ],
        bullets: [
          "Panik dan berlari tanpa memperhatikan jalur evakuasi (DILARANG).",
          "Mengoperasikan kembali mesin yang mengalami kerusakan (DILARANG).",
          "Menyentuh korban sengatan listrik sebelum sumber listrik diputus (DILARANG).",
          "Menggunakan APAR tanpa memahami prosedur penggunaannya (DILARANG).",
          "Kembali ke area kerja sebelum mendapat izin dari petugas berwenang (DILARANG).",
        ],
      },
    ],
    keyPoints: [
      "K3 adalah kewajiban setiap pekerja dan peserta PKL, bukan pilihan.",
      "Selalu gunakan APD lengkap sebelum, selama, dan setelah proses pengelasan.",
      "Ketahui lokasi jalur evakuasi dan titik kumpul sebelum memulai pekerjaan.",
      "Matikan mesin las dan simpan peralatan dengan aman setelah selesai bekerja.",
    ],
    summary:
      "Penerapan K3 merupakan fondasi utama dalam kegiatan pengelasan SMAW. Pemahaman terhadap potensi bahaya, prosedur keselamatan, dan tanggap darurat akan membantu peserta PKL bekerja secara aman dan produktif di lingkungan industri PT. Coppalt Utama Indomelt.",
  },

  // ─── MODUL 2: APD ───────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Alat Pelindung Diri (APD)",
    intro:
      "Alat Pelindung Diri (APD) merupakan perlengkapan yang digunakan oleh pekerja untuk melindungi diri dari potensi bahaya yang dapat menyebabkan cedera atau gangguan kesehatan selama melakukan pekerjaan. Dalam proses pengelasan SMAW, penggunaan APD menjadi kewajiban karena pekerja berhadapan langsung dengan berbagai potensi bahaya, seperti radiasi sinar las, percikan logam cair, suhu tinggi, asap las, kebisingan, serta risiko sengatan listrik.",
    sections: [
      {
        heading: "Tujuan Penggunaan APD",
        body: ["Penggunaan APD dalam kegiatan pengelasan bertujuan untuk:"],
        bullets: [
          "Melindungi pekerja dari risiko cedera akibat bahaya di tempat kerja.",
          "Mengurangi kemungkinan terjadinya penyakit akibat kerja.",
          "Meminimalkan dampak kecelakaan kerja.",
          "Mendukung terciptanya lingkungan kerja yang aman dan sehat.",
          "Meningkatkan disiplin serta kepatuhan terhadap prosedur K3.",
        ],
      },
      {
        heading: "Jenis-Jenis APD pada Proses Pengelasan SMAW",
        body: [
          "Berdasarkan standar keselamatan pengelasan, APD yang digunakan pada proses pengelasan SMAW meliputi:",
        ],
        bullets: [
          "Topi Las (Welding Cap) — melindungi kepala dan rambut dari percikan api, debu, dan panas.",
          "Kacamata Keselamatan (Safety Glasses) — melindungi mata dari debu, serpihan logam, dan percikan.",
          "Helm Las (Welding Helmet) — melindungi mata, wajah, dan leher dari radiasi UV/IR dan percikan logam.",
          "Masker Debu (Dust Mask) — mengurangi paparan debu dan partikel halus selama pengelasan.",
          "Jaket Las Kulit (Leather Welding Jacket) — melindungi tubuh dan lengan dari panas dan percikan logam.",
          "Sarung Tangan Las (Gauntlet Type Welding Gloves) — melindungi tangan dari panas dan percikan logam.",
          "Celemek Kulit (Leather Apron) — melindungi bagian depan tubuh dari percikan logam cair.",
          "Celana Panjang (Long Pants) — melindungi kaki dari percikan logam dan panas.",
          "Pelindung Kaki (Leather Spats) — mencegah percikan logam cair masuk ke dalam sepatu.",
          "Sepatu Keselamatan (Hightop Leather Work Boots) — melindungi kaki dari benda berat, tajam, dan logam panas.",
        ],
      },
      {
        heading: "Fungsi APD pada Proses Pengelasan",
        body: ["Tabel berikut merangkum fungsi setiap APD pada proses pengelasan SMAW:"],
        table: {
          cols: ["No", "Alat Pelindung Diri", "Fungsi"],
          rows: [
            ["1", "Topi Las (Welding Cap)", "Melindungi kepala dari panas dan percikan api."],
            ["2", "Kacamata Keselamatan (Safety Glasses)", "Melindungi mata dari debu dan serpihan logam."],
            ["3", "Helm Las (Welding Helmet)", "Melindungi mata, wajah, dan leher dari radiasi serta percikan logam."],
            ["4", "Masker Debu (Dust Mask)", "Mengurangi paparan debu dan partikel halus."],
            ["5", "Jaket Las Kulit (Leather Welding Jacket)", "Melindungi tubuh dari panas dan percikan logam."],
            ["6", "Sarung Tangan Las (Gauntlet Type Welding Gloves)", "Melindungi tangan dari panas dan percikan logam."],
            ["7", "Celemek Kulit (Leather Apron)", "Melindungi bagian depan tubuh dari percikan logam cair."],
            ["8", "Celana Panjang (Long Pants)", "Melindungi kaki dari percikan logam dan panas."],
            ["9", "Pelindung Kaki (Leather Spats)", "Melindungi bagian atas sepatu dari percikan logam cair."],
            ["10", "Sepatu Keselamatan (Hightop Leather Work Boots)", "Melindungi kaki dari benda berat, benda tajam, dan logam panas."],
          ],
        },
      },
      {
        heading: "Tata Cara Penggunaan APD",
        body: [
          "Sebelum memulai pekerjaan, setiap peserta PKL harus memastikan bahwa APD yang digunakan dalam kondisi baik dan sesuai dengan ukuran tubuh. APD harus dikenakan secara lengkap sesuai jenis pekerjaan yang dilakukan.",
        ],
        bullets: [
          "Pasang topi las sebelum mengenakan helm las.",
          "Gunakan kacamata keselamatan saat proses persiapan dan pembersihan.",
          "Pastikan helm las menutup seluruh wajah saat pengelasan dimulai.",
          "Kenakan jaket las dan sarung tangan sebelum memegang holder elektroda.",
          "Pasang leather spats sebelum mengenakan sepatu keselamatan.",
        ],
      },
      {
        heading: "Pemeriksaan dan Perawatan APD",
        body: [
          "Agar APD dapat memberikan perlindungan secara optimal, perlu dilakukan pemeriksaan dan perawatan secara berkala. Beberapa langkah yang harus dilakukan meliputi:",
        ],
        bullets: [
          "Memeriksa kondisi APD sebelum digunakan.",
          "Membersihkan APD setelah selesai digunakan.",
          "Mengganti APD yang rusak atau tidak layak pakai.",
          "Menyimpan APD di tempat yang bersih, kering, dan aman.",
          "Melaporkan kepada pembimbing apabila ditemukan kerusakan pada APD.",
        ],
      },
    ],
    keyPoints: [
      "APD wajib digunakan secara lengkap selama berada di area pengelasan.",
      "Periksa kondisi APD sebelum digunakan; jangan gunakan APD yang rusak.",
      "Helm las harus selalu dikenakan saat proses pengelasan berlangsung.",
      "Simpan APD di tempat yang bersih dan kering setelah digunakan.",
    ],
    summary:
      "Alat Pelindung Diri (APD) merupakan perlengkapan wajib yang harus digunakan oleh setiap pekerja maupun peserta PKL selama berada di area pengelasan. Penggunaan APD yang lengkap dan sesuai standar dapat melindungi pekerja dari berbagai potensi bahaya dan meminimalkan risiko kecelakaan kerja.",
  },

  // ─── MODUL 3: PERALATAN ─────────────────────────────────────────────────────
  {
    id: 3,
    title: "Pengenalan Peralatan Kerja Pengelasan",
    intro:
      "Peralatan kerja pengelasan merupakan seluruh alat dan perlengkapan yang digunakan untuk mendukung proses penyambungan logam melalui proses pengelasan. Pada proses Shielded Metal Arc Welding (SMAW), setiap peralatan memiliki fungsi dan peran yang saling melengkapi untuk menghasilkan sambungan las yang berkualitas. Sebelum melakukan praktik pengelasan, setiap peserta PKL harus mengenal fungsi, cara penggunaan, serta cara pemeriksaan kondisi peralatan.",
    sections: [
      {
        heading: "Peralatan Utama Pengelasan SMAW",
        body: ["Berikut merupakan peralatan utama yang digunakan dalam proses pengelasan SMAW:"],
        bullets: [
          "Mesin Las SMAW — sumber tenaga listrik untuk menghasilkan busur listrik (electric arc) antara elektroda dan benda kerja. Mesin las SMAW memiliki pengaturan arus (current) yang dapat disesuaikan sesuai diameter elektroda dan ketebalan material.",
          "Holder Elektroda (Electrode Holder) — penjepit elektroda sekaligus penghantar arus listrik dari mesin las menuju elektroda. Holder harus memiliki isolasi yang baik agar aman digunakan.",
          "Kabel Las (Welding Cable) — menghantarkan arus listrik dari mesin las menuju holder elektroda dan penjepit massa. Kabel harus dalam kondisi baik dan tidak mengalami kerusakan pada lapisan isolasinya.",
          "Penjepit Massa (Work Clamp) — menghubungkan benda kerja dengan mesin las sehingga arus listrik dapat mengalir dan membentuk busur listrik secara stabil.",
          "Elektroda Las (Covered Electrode) — logam pengisi yang digunakan pada proses pengelasan SMAW. Elektroda terdiri atas inti kawat (core wire) dan lapisan fluks (flux coating) yang melindungi logam las dari kontaminasi udara.",
        ],
      },
      {
        heading: "Peralatan Pendukung Pengelasan",
        body: ["Selain peralatan utama, terdapat beberapa peralatan pendukung yang digunakan selama proses pengelasan:"],
        bullets: [
          "Palu Terak (Chipping Hammer) — digunakan untuk memecahkan dan membersihkan terak (slag) yang terbentuk setelah proses pengelasan selesai.",
          "Sikat Baja (Wire Brush) — digunakan untuk membersihkan sisa terak, karat, dan kotoran pada permukaan logam sebelum maupun setelah proses pengelasan.",
          "Gerinda Tangan (Angle Grinder) — digunakan untuk meratakan hasil las, membersihkan permukaan benda kerja, serta mempersiapkan kampuh sebelum proses pengelasan.",
          "Meja Las (Welding Table) — tempat kerja yang digunakan untuk menopang benda kerja selama proses pengelasan agar tetap stabil dan aman.",
        ],
      },
      {
        heading: "Fungsi Peralatan Pengelasan",
        body: [],
        table: {
          cols: ["No", "Peralatan", "Fungsi"],
          rows: [
            ["1", "Mesin Las SMAW", "Menghasilkan arus listrik untuk proses pengelasan."],
            ["2", "Holder Elektroda", "Menjepit elektroda dan menghantarkan arus listrik."],
            ["3", "Kabel Las", "Mengalirkan arus listrik dari mesin las ke holder dan penjepit massa."],
            ["4", "Penjepit Massa", "Menghubungkan benda kerja dengan mesin las."],
            ["5", "Elektroda", "Membentuk logam las dan melindungi kolam las melalui lapisan fluks."],
            ["6", "Palu Terak", "Membersihkan terak hasil pengelasan."],
            ["7", "Sikat Baja", "Membersihkan karat, kotoran, dan sisa terak."],
            ["8", "Gerinda Tangan", "Membersihkan dan meratakan hasil las."],
            ["9", "Meja Las", "Menopang benda kerja selama proses pengelasan."],
          ],
        },
      },
      {
        heading: "Pemeriksaan Peralatan Sebelum Digunakan",
        body: [
          "Sebelum memulai pekerjaan, seluruh peralatan harus diperiksa untuk memastikan kondisinya aman dan layak digunakan. Pemeriksaan ini bertujuan untuk mengurangi risiko kecelakaan kerja dan menjaga kualitas hasil pengelasan.",
        ],
        bullets: [
          "Memastikan mesin las berfungsi dengan baik.",
          "Memeriksa kondisi kabel las dan isolasinya.",
          "Memastikan holder elektroda tidak retak atau longgar.",
          "Memastikan penjepit massa terpasang dengan kuat.",
          "Memeriksa kondisi elektroda agar tidak lembap atau rusak.",
          "Memastikan palu terak, sikat baja, dan gerinda dalam kondisi baik.",
        ],
      },
    ],
    keyPoints: [
      "Peralatan utama SMAW terdiri atas mesin las, holder, kabel, penjepit massa, dan elektroda.",
      "Selalu periksa kondisi seluruh peralatan sebelum memulai proses pengelasan.",
      "Elektroda yang lembap tidak boleh digunakan karena dapat menyebabkan cacat las.",
      "Kabel las yang rusak isolasinya dapat menyebabkan sengatan listrik.",
    ],
    summary:
      "Peralatan kerja pengelasan terdiri atas peralatan utama dan peralatan pendukung yang memiliki fungsi berbeda dalam proses SMAW. Pemahaman mengenai nama, fungsi, dan cara penggunaan setiap peralatan merupakan dasar yang harus dikuasai sebelum melaksanakan praktik pengelasan.",
  },

  // ─── MODUL 4: GAMBAR KERJA ──────────────────────────────────────────────────
  {
    id: 4,
    title: "Membaca Gambar Kerja",
    intro:
      "Gambar kerja merupakan media komunikasi teknik yang digunakan untuk menyampaikan informasi mengenai bentuk, ukuran, dimensi, jenis material, serta proses pembuatan suatu komponen atau produk. Pada proses pengelasan, kemampuan membaca gambar kerja sangat penting karena setiap sambungan las harus dikerjakan sesuai dengan bentuk, ukuran, posisi, dan spesifikasi yang tercantum pada gambar. Kesalahan dalam membaca gambar kerja dapat mengakibatkan produk yang dihasilkan tidak sesuai spesifikasi.",
    sections: [
      {
        heading: "Fungsi Gambar Kerja",
        body: ["Gambar kerja memiliki beberapa fungsi utama, antara lain:"],
        bullets: [
          "Sebagai pedoman dalam proses pembuatan dan perakitan komponen.",
          "Menyampaikan informasi ukuran, bentuk, dan spesifikasi benda kerja.",
          "Memudahkan komunikasi antara perancang, operator, dan welder.",
          "Mengurangi kesalahan selama proses produksi.",
          "Menjadi acuan dalam pemeriksaan kualitas hasil pekerjaan.",
        ],
      },
      {
        heading: "Informasi yang Terdapat pada Gambar Kerja",
        body: ["Sebuah gambar kerja umumnya memuat beberapa informasi penting:"],
        bullets: [
          "Title Block (Judul Gambar) — berisi nama komponen, nomor gambar, skala, material, tanggal pembuatan, serta nama pembuat atau perusahaan.",
          "Pandangan Gambar (Views) — tampak depan (Front View), tampak atas (Top View), tampak samping (Side View), dan tampak isometri (Isometric View).",
          "Dimensi — panjang, lebar, tinggi, diameter, jari-jari, sudut, dan ketebalan material (contoh: Panjang = 150 mm, Lebar = 50 mm, Tebal = 6 mm).",
          "Jenis Material — baja karbon rendah (Mild Steel), baja tahan karat (Stainless Steel), Aluminium, dan lain-lain.",
          "Simbol Pengelasan — menunjukkan jenis sambungan las dan lokasi pengelasan mengacu standar internasional (AWS A2.4).",
        ],
      },
      {
        heading: "Simbol Dasar Pengelasan",
        body: [
          "Pada gambar kerja pengelasan sering dijumpai simbol-simbol yang menunjukkan jenis sambungan las. Simbol tersebut mengacu pada standar internasional (AWS A2.4) sehingga memudahkan komunikasi antar pihak. Beberapa simbol dasar yang umum digunakan:",
        ],
        bullets: [
          "Fillet Weld (Las Sudut) — digunakan untuk menyambung dua permukaan yang membentuk sudut 90°.",
          "Square Groove Weld (Las Kampuh Persegi) — digunakan pada sambungan tumpul dengan celah lurus.",
          "Single V-Groove Weld (Las Kampuh V Tunggal) — digunakan pada material tebal dengan persiapan kampuh berbentuk V.",
        ],
      },
      {
        heading: "Membaca Gambar Kerja Sederhana",
        body: [
          "Dalam praktik di PT. Coppalt Utama Indomelt, peserta PKL akan bekerja dengan gambar kerja sederhana berupa sambungan T-Joint (fillet weld). Langkah-langkah membaca gambar kerja sederhana:",
        ],
        bullets: [
          "Baca title block untuk mengetahui nama komponen, material, dan skala gambar.",
          "Identifikasi pandangan gambar (tampak depan, atas, atau samping).",
          "Pahami dimensi benda kerja yang tertera (panjang, lebar, tebal).",
          "Identifikasi simbol pengelasan yang digunakan (posisi, jenis sambungan).",
          "Tentukan urutan pekerjaan berdasarkan informasi pada gambar.",
        ],
      },
    ],
    keyPoints: [
      "Selalu baca title block terlebih dahulu untuk memahami konteks gambar kerja.",
      "Ukuran pada gambar kerja harus diikuti dengan presisi; kesalahan 1 mm dapat berakibat fatal.",
      "Simbol las mengacu pada standar AWS A2.4; pelajari simbol dasar fillet weld.",
      "Tanyakan kepada instruktur jika ada bagian gambar yang tidak dipahami.",
    ],
    summary:
      "Kemampuan membaca gambar kerja merupakan kompetensi dasar yang wajib dimiliki oleh setiap welder. Dengan memahami informasi pada gambar kerja, proses fabrikasi dapat dilakukan secara tepat, efisien, dan sesuai dengan standar kualitas yang ditetapkan.",
  },

  // ─── MODUL 5: ALAT UKUR ─────────────────────────────────────────────────────
  {
    id: 5,
    title: "Penggunaan Alat Ukur",
    intro:
      "Alat ukur merupakan peralatan penting dalam proses fabrikasi dan pengelasan yang digunakan untuk memastikan dimensi benda kerja sesuai dengan spesifikasi gambar kerja. Penggunaan alat ukur yang tepat dan benar akan menghasilkan produk yang presisi dan memenuhi standar kualitas yang ditetapkan oleh PT. Coppalt Utama Indomelt.",
    sections: [
      {
        heading: "Jenis-Jenis Alat Ukur yang Digunakan",
        body: ["Berikut alat ukur yang umum digunakan dalam proses pengelasan dan fabrikasi:"],
        bullets: [
          "Mistar Baja (Steel Rule) — digunakan untuk mengukur panjang, lebar, dan jarak secara linear. Tingkat ketelitian umumnya 1 mm.",
          "Siku Baja (Try Square) — digunakan untuk memeriksa kesikuan (sudut 90°) suatu benda kerja.",
          "Jangka Sorong (Vernier Caliper) — digunakan untuk mengukur diameter luar, diameter dalam, dan kedalaman dengan ketelitian hingga 0,05 mm.",
          "Pita Ukur (Measuring Tape) — digunakan untuk mengukur dimensi yang lebih panjang dari kemampuan mistar baja.",
          "Mal Las (Weld Gauge) — digunakan untuk mengukur dimensi hasil pengelasan seperti tinggi manik las, lebar las, dan sudut kampuh.",
        ],
      },
      {
        heading: "Cara Penggunaan Mistar Baja",
        body: [
          "Mistar baja merupakan alat ukur paling dasar yang digunakan di area fabrikasi. Cara penggunaannya:",
        ],
        bullets: [
          "Posisikan ujung mistar tepat pada titik awal pengukuran.",
          "Pastikan mistar sejajar dengan benda kerja yang diukur.",
          "Baca skala pada posisi mata tegak lurus terhadap skala (menghindari kesalahan parallax).",
          "Catat hasil pengukuran sesuai gambar kerja.",
        ],
      },
      {
        heading: "Cara Penggunaan Jangka Sorong",
        body: [
          "Jangka sorong (vernier caliper) digunakan untuk pengukuran yang membutuhkan ketelitian lebih tinggi. Langkah-langkah penggunaannya:",
        ],
        bullets: [
          "Pastikan rahang jangka sorong dalam kondisi bersih sebelum digunakan.",
          "Tutup rahang jangka sorong; pastikan menunjukkan angka nol.",
          "Buka rahang sesuai dimensi benda kerja yang diukur.",
          "Kunci skala dengan baut pengunci setelah mendapatkan ukuran yang tepat.",
          "Baca skala utama dan skala nonius secara bersamaan.",
          "Bersihkan dan simpan jangka sorong di tempat yang aman setelah digunakan.",
        ],
      },
      {
        heading: "Cara Penggunaan Siku Baja",
        body: [
          "Siku baja digunakan untuk memastikan sudut sambungan benda kerja tepat 90°. Ini sangat penting pada sambungan T-Joint dalam pengelasan SMAW.",
        ],
        bullets: [
          "Tempelkan sisi panjang siku baja pada satu permukaan benda kerja.",
          "Periksa apakah sisi pendek siku baja sejajar dengan permukaan tegak lurus.",
          "Apabila terdapat celah, artinya sudut tidak 90° dan perlu penyesuaian.",
          "Lakukan pemeriksaan dari dua sisi untuk memastikan kesikuan sempurna.",
        ],
      },
      {
        heading: "Perawatan Alat Ukur",
        body: ["Alat ukur harus dirawat dengan baik agar ketelitiannya terjaga:"],
        bullets: [
          "Simpan alat ukur di tempat yang kering dan bersih.",
          "Jangan menjatuhkan atau membenturkan alat ukur.",
          "Bersihkan alat ukur dari debu dan minyak setelah digunakan.",
          "Kalibrasi alat ukur secara berkala sesuai prosedur perusahaan.",
          "Laporkan kepada pembimbing apabila alat ukur menunjukkan hasil yang tidak wajar.",
        ],
      },
    ],
    keyPoints: [
      "Ukur dua kali, kerjakan sekali — pastikan dimensi sesuai gambar kerja sebelum pengelasan.",
      "Bersihkan alat ukur sebelum dan sesudah digunakan.",
      "Siku baja harus selalu digunakan untuk memverifikasi sudut 90° pada sambungan T-Joint.",
      "Jangka sorong memberikan ketelitian lebih tinggi; gunakan untuk ukuran kritis.",
    ],
    summary:
      "Penggunaan alat ukur yang tepat merupakan kunci untuk menghasilkan produk yang sesuai dengan spesifikasi gambar kerja. Mistar baja, siku baja, dan jangka sorong adalah alat ukur utama yang harus dikuasai oleh setiap peserta PKL sebelum melaksanakan praktik pengelasan.",
  },

  // ─── MODUL 6: DASAR SMAW ────────────────────────────────────────────────────
  {
    id: 6,
    title: "Dasar-Dasar Pengelasan SMAW",
    intro:
      "Shielded Metal Arc Welding (SMAW) atau pengelasan busur listrik elektroda terbungkus merupakan salah satu proses pengelasan yang paling banyak digunakan di industri manufaktur. Proses ini menggunakan busur listrik yang terbentuk antara elektroda terbungkus dan benda kerja untuk melelehkan logam dan menyatukannya. Lapisan fluks pada elektroda berfungsi melindungi kolam las dari kontaminasi udara (oksigen dan nitrogen) selama proses pengelasan berlangsung.",
    sections: [
      {
        heading: "Prinsip Kerja Pengelasan SMAW",
        body: [
          "Proses SMAW bekerja berdasarkan prinsip busur listrik. Ketika elektroda didekatkan ke benda kerja, arus listrik mengalir melalui celah udara membentuk busur listrik (electric arc) dengan suhu dapat mencapai 6.000°C. Panas dari busur listrik inilah yang melelehkan logam induk (base metal) dan inti elektroda membentuk kolam las (weld pool).",
        ],
        bullets: [
          "Mesin las menghasilkan arus listrik (AC atau DC).",
          "Arus mengalir melalui kabel las menuju holder elektroda.",
          "Busur listrik terbentuk antara ujung elektroda dan benda kerja.",
          "Panas busur listrik melelehkan logam induk dan elektroda.",
          "Lapisan fluks terbakar membentuk gas pelindung dan terak.",
          "Kolam las mengeras membentuk manik las (weld bead).",
        ],
      },
      {
        heading: "Jenis Arus Pengelasan",
        body: ["Mesin las SMAW dapat menggunakan dua jenis arus:"],
        bullets: [
          "Arus Bolak-Balik (AC / Alternating Current) — lebih ekonomis, cocok untuk elektroda jenis E6013 dan E7016. Umumnya digunakan pada pekerjaan umum.",
          "Arus Searah (DC / Direct Current) — lebih stabil, menghasilkan busur listrik yang lebih tenang. Terdiri dari DCEP (elektroda positif) dan DCEN (elektroda negatif).",
        ],
      },
      {
        heading: "Klasifikasi Elektroda",
        body: [
          "Elektroda SMAW diklasifikasikan berdasarkan standar AWS A5.1. Kode elektroda memberikan informasi tentang kekuatan tarik, posisi pengelasan, dan jenis fluks. Contoh: E7018",
        ],
        bullets: [
          "E — Electrode (elektroda)",
          "70 — Kekuatan tarik minimum 70.000 psi (70 ksi)",
          "1 — Dapat digunakan pada semua posisi pengelasan",
          "8 — Jenis fluks: low hydrogen, cocok untuk arus DC+",
        ],
      },
      {
        heading: "Parameter Pengelasan SMAW",
        body: ["Parameter yang harus diatur sebelum pengelasan:"],
        table: {
          cols: ["Parameter", "Penjelasan", "Dampak jika Salah"],
          rows: [
            ["Arus (Ampere)", "Disesuaikan dengan diameter elektroda", "Terlalu rendah: busur tidak stabil; Terlalu tinggi: undercut"],
            ["Polaritas", "DCEP atau DCEN sesuai jenis elektroda", "Penetrasi tidak optimal"],
            ["Panjang Busur", "Sama dengan diameter elektroda", "Terlalu panjang: spatter berlebih; Terlalu pendek: elektroda menempel"],
            ["Kecepatan Las", "Konstan dan disesuaikan dengan ketebalan material", "Terlalu cepat: manik tipis; Terlalu lambat: burn-through"],
          ],
        },
      },
      {
        heading: "Jenis-Jenis Sambungan Las",
        body: ["Dalam pengelasan SMAW, terdapat beberapa jenis sambungan yang umum digunakan:"],
        bullets: [
          "Butt Joint (Sambungan Tumpul) — dua logam disambung pada sisi ujungnya.",
          "T-Joint (Sambungan T) — satu logam tegak lurus terhadap logam lainnya membentuk huruf T. Ini adalah sambungan yang dipraktikkan pada modul tack weld.",
          "Lap Joint (Sambungan Tumpang) — dua logam saling tumpang tindih.",
          "Corner Joint (Sambungan Sudut) — dua logam disambung pada sudutnya.",
          "Edge Joint (Sambungan Tepi) — dua logam sejajar dengan sisi-sisinya saling bersinggungan.",
        ],
      },
      {
        heading: "Posisi Pengelasan",
        body: ["Pengelasan SMAW dapat dilakukan pada berbagai posisi sesuai standar AWS:"],
        bullets: [
          "Posisi 1G/1F — Pengelasan datar (flat/downhand), paling mudah dilakukan.",
          "Posisi 2G/2F — Pengelasan horizontal, membutuhkan kontrol kecepatan yang baik.",
          "Posisi 3G/3F — Pengelasan vertikal, dilakukan dari bawah ke atas (upward) atau atas ke bawah (downward).",
          "Posisi 4G/4F — Pengelasan di atas kepala (overhead), paling sulit dan berisiko tinggi.",
        ],
      },
    ],
    keyPoints: [
      "SMAW menggunakan busur listrik untuk melelehkan logam dan elektroda.",
      "Atur arus sesuai diameter elektroda; gunakan tabel arus yang tepat.",
      "Jaga panjang busur stabil — sama dengan diameter elektroda.",
      "Posisi 1F (flat fillet weld) adalah posisi yang digunakan pada praktik tack weld.",
    ],
    summary:
      "Pengelasan SMAW merupakan proses yang melibatkan busur listrik untuk menyambung logam menggunakan elektroda terbungkus. Pemahaman mendalam tentang prinsip kerja, jenis arus, klasifikasi elektroda, dan parameter pengelasan akan menjadi dasar yang kuat untuk melaksanakan praktik tack weld.",
  },

  // ─── MODUL 7: TACK WELD ─────────────────────────────────────────────────────
  {
    id: 7,
    title: "Teknik Dasar Tack Weld",
    intro:
      "Tack weld (las ikat sementara) merupakan teknik pengelasan yang digunakan untuk menyatukan benda kerja secara sementara sebelum dilakukan pengelasan penuh. Tack weld berfungsi untuk mempertahankan posisi dan dimensi benda kerja selama proses pengelasan agar tidak terjadi perubahan bentuk (distorsi) akibat panas yang dihasilkan selama pengelasan. Teknik ini sangat penting dalam proses fabrikasi karena membantu menjaga akurasi dimensi dan posisi sambungan.",
    sections: [
      {
        heading: "Fungsi dan Tujuan Tack Weld",
        body: ["Tack weld memiliki beberapa fungsi utama dalam proses pengelasan:"],
        bullets: [
          "Mempertahankan posisi benda kerja sesuai gambar kerja.",
          "Mencegah perubahan dimensi akibat tegangan termal (thermal stress).",
          "Mengurangi kemungkinan distorsi selama pengelasan penuh.",
          "Mempermudah proses pengelasan akhir dengan menjaga kestabilan benda kerja.",
          "Menghemat waktu penyetelan ulang benda kerja selama proses pengelasan.",
        ],
      },
      {
        heading: "Persiapan Sebelum Tack Weld",
        body: ["Sebelum melaksanakan tack weld, persiapan berikut harus dilakukan:"],
        bullets: [
          "Bersihkan permukaan benda kerja dari karat, cat, minyak, dan kotoran menggunakan sikat baja atau gerinda.",
          "Periksa dimensi benda kerja menggunakan mistar baja dan siku baja.",
          "Pastikan benda kerja sesuai dengan gambar kerja.",
          "Atur posisi benda kerja menggunakan klem (clamp) dan alat bantu lainnya.",
          "Pastikan sudut sambungan T-Joint tepat 90° menggunakan siku baja.",
          "Atur arus pengelasan sesuai diameter elektroda yang digunakan.",
          "Pastikan seluruh APD telah dikenakan secara lengkap.",
        ],
      },
      {
        heading: "Prosedur Pelaksanaan Tack Weld",
        body: ["Prosedur tack weld dilakukan sesuai urutan berikut:"],
        bullets: [
          "Posisikan benda kerja sesuai gambar kerja dan klem dengan kuat.",
          "Mulai pengelasan dari salah satu ujung sambungan.",
          "Buat tack weld pertama pada ujung sambungan dengan panjang 10–15 mm.",
          "Buat tack weld kedua pada ujung sambungan yang berlawanan.",
          "Buat tack weld tengah di antara kedua tack weld ujung.",
          "Tambahkan tack weld secukupnya dengan jarak yang merata (setiap 50–100 mm).",
          "Bersihkan terak menggunakan palu terak setelah setiap titik tack weld.",
          "Periksa posisi dan sudut sambungan setelah semua titik tack weld selesai.",
        ],
      },
      {
        heading: "Standar Ukuran Tack Weld",
        body: ["Tack weld harus memenuhi standar ukuran berikut agar kuat menahan posisi benda kerja:"],
        bullets: [
          "Panjang tack weld: 10–15 mm",
          "Tinggi tack weld: sesuai ukuran fillet yang direncanakan",
          "Jarak antar tack weld: 50–100 mm (tergantung ketebalan material)",
          "Jumlah titik tack weld minimum: 3 titik (kedua ujung dan tengah)",
        ],
      },
      {
        heading: "Hal-Hal yang Harus Diperhatikan",
        body: ["Agar proses tack weld menghasilkan sambungan yang baik, beberapa hal berikut harus diperhatikan:"],
        bullets: [
          "Selalu menggunakan APD secara lengkap.",
          "Memastikan benda kerja sesuai dengan gambar kerja.",
          "Menggunakan arus pengelasan sesuai diameter elektroda.",
          "Menjaga panjang busur listrik tetap stabil.",
          "Tidak membuat tack weld terlalu panjang.",
          "Memastikan posisi benda kerja tidak berubah selama proses pengelasan.",
          "Membersihkan terak sebelum dilakukan pemeriksaan.",
          "Memastikan area kerja tetap bersih dan aman.",
        ],
      },
      {
        heading: "Kesalahan yang Sering Terjadi",
        body: [],
        table: {
          cols: ["No", "Kesalahan", "Penyebab", "Dampak"],
          rows: [
            ["1", "Tack weld terlalu kecil", "Waktu pengelasan terlalu singkat", "Tidak mampu menahan benda kerja"],
            ["2", "Tack weld terlalu besar", "Pengelasan terlalu lama", "Menyulitkan proses pengelasan akhir"],
            ["3", "Posisi benda kerja bergeser", "Clamp kurang kuat atau posisi tidak tepat", "Dimensi tidak sesuai gambar kerja"],
            ["4", "Retak pada tack weld", "Pendinginan terlalu cepat atau parameter tidak sesuai", "Sambungan mudah patah"],
            ["5", "Porositas", "Elektroda lembap atau permukaan benda kerja kotor", "Menurunkan kekuatan sambungan"],
            ["6", "Percikan las berlebihan (spatter)", "Arus terlalu tinggi atau busur terlalu panjang", "Hasil las kurang rapi"],
            ["7", "Sudut sambungan tidak 90°", "Kesalahan saat penyetelan benda kerja", "Produk tidak memenuhi spesifikasi"],
          ],
        },
      },
    ],
    keyPoints: [
      "Tack weld bukan pengelasan akhir; kualitasnya tetap menentukan kualitas produk.",
      "Selalu bersihkan permukaan benda kerja sebelum tack weld.",
      "Periksa sudut 90° menggunakan siku baja setelah setiap tack weld.",
      "Panjang tack weld standar adalah 10–15 mm dengan jarak 50–100 mm.",
    ],
    summary:
      "Tack weld merupakan teknik penting dalam proses fabrikasi yang berfungsi menjaga posisi dan dimensi benda kerja sebelum pengelasan penuh. Penguasaan teknik ini memerlukan pemahaman tentang prosedur kerja, standar ukuran, dan identifikasi kesalahan yang umum terjadi.",
  },

  // ─── MODUL 8: PEMERIKSAAN ───────────────────────────────────────────────────
  {
    id: 8,
    title: "Pemeriksaan Hasil Tack Weld",
    intro:
      "Pemeriksaan hasil tack weld merupakan proses penilaian terhadap kualitas sambungan las sementara yang dilakukan sebelum proses pengelasan penuh (final welding). Pemeriksaan ini bertujuan untuk memastikan bahwa posisi benda kerja, dimensi sambungan, serta kualitas tack weld memenuhi standar yang ditetapkan. Dalam kegiatan praktik di PT. Coppalt Utama Indomelt, setiap peserta PKL diwajibkan melakukan pemeriksaan hasil tack weld sebelum mendapatkan persetujuan dari instruktur untuk melanjutkan ke proses pengelasan penuh.",
    sections: [
      {
        heading: "Tujuan Pemeriksaan Hasil Tack Weld",
        body: ["Pemeriksaan hasil tack weld bertujuan untuk:"],
        bullets: [
          "Memastikan posisi benda kerja telah sesuai dengan gambar kerja.",
          "Mengetahui kualitas sambungan sebelum dilakukan pengelasan penuh.",
          "Mengidentifikasi adanya cacat pada hasil tack weld.",
          "Mengurangi risiko kegagalan sambungan selama proses pengelasan.",
          "Menjamin kualitas hasil pekerjaan sesuai standar perusahaan.",
        ],
      },
      {
        heading: "Peralatan Pemeriksaan",
        body: ["Peralatan yang digunakan untuk melakukan pemeriksaan hasil tack weld antara lain:"],
        bullets: [
          "Mistar baja (Steel Rule) — untuk mengukur dimensi dan posisi benda kerja.",
          "Siku baja (Try Square) — untuk memeriksa sudut 90° sambungan.",
          "Jangka sorong (Vernier Caliper) — untuk mengukur dimensi secara lebih presisi.",
          "Lampu inspeksi — untuk memperjelas pandangan saat pemeriksaan (jika diperlukan).",
          "Sikat baja (Wire Brush) — untuk membersihkan terak sebelum pemeriksaan.",
          "Palu terak (Chipping Hammer) — untuk melepas terak yang masih menempel.",
        ],
      },
      {
        heading: "Langkah-Langkah Pemeriksaan",
        body: ["Pemeriksaan hasil tack weld dilakukan dengan tahapan sebagai berikut:"],
        bullets: [
          "Membersihkan hasil tack weld menggunakan palu terak dan sikat baja.",
          "Memeriksa posisi benda kerja agar sesuai dengan gambar kerja.",
          "Memastikan sudut sambungan T-Joint tetap 90° menggunakan siku baja.",
          "Mengukur dimensi benda kerja menggunakan mistar baja atau jangka sorong.",
          "Melakukan pemeriksaan visual pada setiap titik tack weld.",
          "Mencatat hasil pemeriksaan pada lembar kerja.",
          "Melaporkan hasil pemeriksaan kepada instruktur untuk mendapatkan persetujuan.",
        ],
      },
      {
        heading: "Standar Penerimaan Hasil Tack Weld",
        body: ["Hasil tack weld dinyatakan memenuhi standar apabila:"],
        table: {
          cols: ["No", "Aspek Pemeriksaan", "Standar Penerimaan"],
          rows: [
            ["1", "Posisi benda kerja", "Sesuai gambar kerja"],
            ["2", "Sudut sambungan T-Joint", "90° ± 1°"],
            ["3", "Panjang tack weld", "10–15 mm"],
            ["4", "Jumlah titik tack weld", "Minimal 3 titik"],
            ["5", "Kondisi tack weld", "Tidak retak atau terkelupas"],
            ["6", "Kebersihan permukaan", "Bebas terak dan spatter berlebih"],
            ["7", "Porositas", "Tidak ada"],
            ["8", "Percikan las berlebihan", "Minimal"],
            ["9", "Pergeseran benda kerja", "Tidak terjadi"],
          ],
        },
      },
      {
        heading: "Cacat yang Sering Ditemukan pada Tack Weld",
        body: [],
        table: {
          cols: ["No", "Jenis Cacat", "Penyebab", "Dampak"],
          rows: [
            ["1", "Retak (crack)", "Pendinginan terlalu cepat atau parameter tidak sesuai", "Sambungan mudah patah"],
            ["2", "Porositas (porosity)", "Elektroda lembab atau permukaan benda kotor", "Kekuatan sambungan menurun"],
            ["3", "Tack weld terlalu kecil", "Waktu pengelasan terlalu singkat", "Sambungan kurang kuat"],
            ["4", "Tack weld terlalu besar", "Pengelasan terlalu lama", "Menyulitkan proses pengelasan akhir"],
            ["5", "Pergeseran benda kerja", "Clamp kurang kuat", "Dimensi tidak sesuai gambar"],
            ["6", "Percikan las berlebih", "Arus terlalu tinggi atau busur terlalu panjang", "Permukaan hasil las kurang rapi"],
          ],
        },
      },
      {
        heading: "Tindakan Perbaikan",
        body: ["Apabila hasil pemeriksaan menunjukkan adanya ketidaksesuaian, maka peserta harus melakukan tindakan perbaikan sebagai berikut:"],
        bullets: [
          "Membersihkan kembali hasil tack weld apabila masih terdapat terak.",
          "Melepas dan mengatur ulang posisi benda kerja jika terjadi pergeseran.",
          "Mengulangi proses tack weld apabila sambungan tidak cukup kuat.",
          "Mengganti elektroda apabila elektroda lembap atau rusak.",
          "Menyesuaikan arus pengelasan sesuai diameter elektroda.",
          "Melakukan pemeriksaan ulang hingga hasil memenuhi standar.",
        ],
      },
    ],
    keyPoints: [
      "Pemeriksaan harus dilakukan sebelum mendapat persetujuan instruktur untuk melanjutkan.",
      "Bersihkan terak terlebih dahulu sebelum melakukan pemeriksaan visual.",
      "Sudut 90° adalah kriteria utama yang harus dipenuhi pada sambungan T-Joint.",
      "Dokumentasikan hasil pemeriksaan pada lembar kerja sebelum dilaporkan.",
    ],
    summary:
      "Pemeriksaan hasil tack weld merupakan tahapan penting sebelum proses pengelasan penuh dilakukan. Pemeriksaan dilakukan secara visual untuk memastikan posisi benda kerja, dimensi, dan kualitas sambungan memenuhi standar yang telah ditetapkan oleh PT. Coppalt Utama Indomelt.",
  },
];
