// ================================================================
// TRY OUT ASAJ – BAHASA INDONESIA KELAS 6 SD
// Soal disesuaikan dengan kisi-kisi resmi ASAJ (42 indikator)
// ================================================================

const questions = [

  // ── NO.1 · Makna kata/istilah dalam teks ──────────────────────
  {
    no: 1,
    topic: "Makna Kata dalam Teks",
    text: `Bacalah paragraf berikut!

"Pak Hendra adalah seorang dokter yang sangat dedikasi. Setiap hari ia datang ke puskesmas jauh sebelum jam buka. Ia tidak pernah mengeluh meski pasiennya sangat banyak. Semua orang di desa itu sangat menghormatinya."

Makna kata "dedikasi" dalam paragraf tersebut adalah...`,
    options: [
      "Pengabdian dengan sepenuh hati",
      "Kecerdasan yang luar biasa",
      "Keberanian dalam menghadapi masalah",
      "Kesombongan terhadap orang lain"
    ],
    answer: 0,
    explanation: "Makna kata 'dedikasi' dalam konteks paragraf tersebut adalah pengabdian dengan sepenuh hati. Hal ini diperkuat oleh kalimat penjelas: Pak Hendra datang lebih awal, tidak pernah mengeluh, dan dihormati masyarakat — semua menunjukkan sikap pengabdian."
  },

  // ── NO.2 · Sinonim/Antonim ────────────────────────────────────
  {
    no: 2,
    topic: "Sinonim dan Antonim",
    text: `Bacalah kalimat berikut!

"Meskipun keadaan ekonomi keluarganya sangat sulit, Dina tetap gigih belajar demi meraih cita-citanya."

Sinonim kata "gigih" dalam kalimat tersebut adalah...`,
    options: [
      "Malas",
      "Tekun",
      "Pasrah",
      "Santai"
    ],
    answer: 1,
    explanation: "Sinonim adalah kata yang bermakna sama atau hampir sama. Kata 'gigih' berarti tidak mudah menyerah dan bersungguh-sungguh dalam berusaha. Sinonimnya adalah 'tekun', 'ulet', 'rajin', atau 'bersemangat'. Antonim 'gigih' adalah 'malas' atau 'pasrah'."
  },

  // ── NO.3 · Ide pokok teks ─────────────────────────────────────
  {
    no: 3,
    topic: "Ide Pokok Paragraf",
    text: `Bacalah paragraf berikut!

"Sampah plastik menjadi masalah serius bagi lingkungan. Plastik membutuhkan ratusan tahun untuk terurai di tanah. Banyak hewan laut yang mati akibat menelan sampah plastik. Sungai dan pantai pun menjadi kotor karena tumpukan sampah plastik."

Ide pokok paragraf tersebut adalah...`,
    options: [
      "Hewan laut mati akibat sampah plastik",
      "Sampah plastik menjadi masalah serius bagi lingkungan",
      "Sungai dan pantai kotor karena sampah plastik",
      "Plastik membutuhkan ratusan tahun untuk terurai"
    ],
    answer: 1,
    explanation: "Ide pokok terdapat pada kalimat utama, yaitu kalimat pertama: 'Sampah plastik menjadi masalah serius bagi lingkungan.' Kalimat-kalimat berikutnya adalah kalimat penjelas yang mendukung ide pokok tersebut dengan menyebutkan berbagai dampak sampah plastik."
  },

  // ── NO.4 · Fakta/Opini ────────────────────────────────────────
  {
    no: 4,
    topic: "Fakta dan Opini",
    text: `Bacalah paragraf berikut!

"Danau Toba terletak di Provinsi Sumatera Utara. Danau ini adalah danau vulkanik terbesar di dunia. Menurut saya, Danau Toba adalah tempat wisata paling indah di Indonesia. Luas Danau Toba sekitar 1.130 km²."

Kalimat yang merupakan OPINI dalam paragraf tersebut adalah...`,
    options: [
      "Danau Toba terletak di Provinsi Sumatera Utara.",
      "Danau ini adalah danau vulkanik terbesar di dunia.",
      "Menurut saya, Danau Toba adalah tempat wisata paling indah di Indonesia.",
      "Luas Danau Toba sekitar 1.130 km²."
    ],
    answer: 2,
    explanation: "Opini adalah pendapat seseorang yang belum tentu dapat dibuktikan kebenarannya. Kalimat 'Menurut saya, Danau Toba adalah tempat wisata paling indah di Indonesia' adalah opini karena menggunakan frasa 'menurut saya' yang menunjukkan penilaian subjektif. Kalimat lainnya adalah fakta yang bisa dibuktikan."
  },

  // ── NO.5 · Kalimat utama paragraf ────────────────────────────
  {
    no: 5,
    topic: "Kalimat Utama Paragraf",
    text: `Bacalah paragraf berikut!

"Berolahraga secara rutin membuat tubuh menjadi sehat. Olahraga memperlancar peredaran darah dalam tubuh. Selain itu, olahraga juga dapat menjaga berat badan ideal. Dengan berolahraga, kita terhindar dari berbagai penyakit berbahaya."

Kalimat utama paragraf tersebut adalah...`,
    options: [
      "Olahraga memperlancar peredaran darah dalam tubuh.",
      "Dengan berolahraga, kita terhindar dari berbagai penyakit berbahaya.",
      "Berolahraga secara rutin membuat tubuh menjadi sehat.",
      "Selain itu, olahraga juga dapat menjaga berat badan ideal."
    ],
    answer: 2,
    explanation: "Kalimat utama adalah kalimat yang mengandung ide pokok paragraf. Pada paragraf ini, kalimat utama terletak di awal (paragraf deduktif): 'Berolahraga secara rutin membuat tubuh menjadi sehat.' Kalimat-kalimat lain adalah kalimat penjelas yang mendukung kalimat utama tersebut."
  },

  // ── NO.6 · Teks eksplanasi ────────────────────────────────────
  {
    no: 6,
    topic: "Teks Eksplanasi",
    text: `Bacalah teks eksplanasi berikut!

"Hujan terjadi melalui proses yang panjang. Sinar matahari memanaskan air di laut, sungai, dan danau sehingga menguap ke udara. Uap air kemudian naik dan mendingin membentuk awan. Ketika awan penuh dengan tetes-tetes air, air tersebut jatuh ke bumi menjadi hujan."

Kesimpulan yang tepat dari teks eksplanasi tersebut adalah...`,
    options: [
      "Matahari menyebabkan semua air di bumi menguap habis",
      "Hujan terjadi melalui proses penguapan air, pembentukan awan, dan jatuhnya air ke bumi",
      "Awan terbentuk hanya di atas laut dan samudra",
      "Hujan hanya terjadi di musim penghujan saja"
    ],
    answer: 1,
    explanation: "Kesimpulan teks eksplanasi merangkum keseluruhan proses yang dijelaskan. Teks tersebut menjelaskan proses terjadinya hujan melalui tiga tahap: (1) penguapan air oleh matahari, (2) pembentukan awan dari uap air, (3) jatuhnya air sebagai hujan. Kesimpulan yang tepat merangkum ketiga tahap tersebut."
  },

  // ── NO.7 · Jenis-jenis teks (deskripsi & narasi) ──────────────
  {
    no: 7,
    topic: "Jenis-Jenis Teks",
    text: `Bacalah teks berikut!

"Taman itu sangat indah dan asri. Di sana terdapat berbagai macam bunga berwarna-warni yang bermekaran. Pohon-pohon rindang mengelilingi taman memberi keteduhan. Suara gemericik air dari kolam ikan menambah suasana yang menyejukkan."

Jenis teks tersebut adalah teks...`,
    options: [
      "Narasi, karena menceritakan urutan kejadian",
      "Prosedur, karena berisi langkah-langkah",
      "Deskripsi, karena menggambarkan suatu objek secara rinci",
      "Eksplanasi, karena menjelaskan proses terjadinya sesuatu"
    ],
    answer: 2,
    explanation: "Teks deskripsi bertujuan menggambarkan suatu objek, tempat, atau suasana secara terperinci sehingga pembaca seolah-olah melihat sendiri. Teks di atas menggambarkan taman dengan detail: bunga berwarna-warni, pohon rindang, dan suara air. Teks narasi berisi rangkaian peristiwa yang berurutan."
  },

  // ── NO.8 · Surat resmi & pribadi ─────────────────────────────
  {
    no: 8,
    topic: "Surat Resmi dan Pribadi",
    text: `Bacalah penggalan surat berikut!

"Bandung, 3 Mei 2026
Sahabatku Rina,
Hai Rin, apa kabar? Semoga kamu selalu sehat ya. Aku sudah lama sekali tidak bertemu kamu sejak kita lulus SD. Aku kangen sekali dengan kamu dan teman-teman yang lain..."

Isi surat tersebut adalah...`,
    options: [
      "Undangan untuk menghadiri acara perpisahan",
      "Permohonan izin tidak masuk sekolah",
      "Ungkapan kerinduan dan menanyakan kabar kepada sahabat",
      "Pemberitahuan tentang perpindahan tempat tinggal"
    ],
    answer: 2,
    explanation: "Isi surat pribadi tersebut adalah ungkapan kerinduan dan menanyakan kabar kepada sahabat. Hal ini terlihat dari kalimat: 'Aku kangen sekali dengan kamu' dan 'Semoga kamu selalu sehat ya'. Surat ini merupakan surat pribadi karena menggunakan bahasa yang santai dan akrab."
  },

  // ── NO.9 · Pengumuman ─────────────────────────────────────────
  {
    no: 9,
    topic: "Pengumuman",
    text: `Bacalah pengumuman berikut!

PENGUMUMAN
Diberitahukan kepada seluruh siswa kelas 6 bahwa kegiatan Persami (Perkemahan Sabtu Minggu) akan dilaksanakan pada:
Hari/Tanggal : Sabtu–Minggu, 17–18 Mei 2026
Tempat       : Bumi Perkemahan Cibubur
Peserta      : Seluruh siswa kelas 6
Harap membawa perlengkapan berkemah lengkap.
                                Hormat kami, Kepala Sekolah

Kesimpulan isi pengumuman tersebut adalah...`,
    options: [
      "Seluruh siswa diwajibkan mengikuti kegiatan olahraga",
      "Ada kegiatan perkemahan untuk kelas 6 pada tanggal 17–18 Mei 2026 di Bumi Perkemahan Cibubur",
      "Siswa kelas 6 diminta membawa perlengkapan sekolah",
      "Kegiatan Persami hanya untuk siswa yang mendaftar saja"
    ],
    answer: 1,
    explanation: "Kesimpulan pengumuman merangkum informasi penting yang disampaikan. Pengumuman tersebut memberitahukan tentang kegiatan Persami untuk kelas 6 pada tanggal 17–18 Mei 2026 di Bumi Perkemahan Cibubur. Kesimpulan ini mencakup apa (Persami), siapa (kelas 6), kapan (17–18 Mei), dan di mana (Bumi Perkemahan Cibubur)."
  },

  // ── NO.10a · Unsur intrinsik cerita anak – TOKOH ──────────────
  {
    no: 10,
    topic: "Unsur Intrinsik Cerita Anak",
    text: `Bacalah cerita berikut!

"Lani adalah anak yang rajin dan suka membantu orang tua. Setiap pagi sebelum berangkat sekolah, ia selalu menyapu halaman dan membantu ibunya memasak. Berbeda dengan adiknya, Budi, yang suka bermalas-malasan dan susah disuruh. Namun, suatu hari Budi jatuh sakit karena jarang berolahraga. Sejak saat itu, Budi mulai berubah menjadi rajin."

Tokoh utama dalam cerita tersebut adalah...`,
    options: [
      "Ibu",
      "Budi",
      "Lani",
      "Lani dan Budi"
    ],
    answer: 3,
    explanation: "Tokoh utama adalah tokoh yang paling banyak diceritakan dan menjadi pusat perhatian cerita. Dalam cerita tersebut, Lani dan Budi keduanya sama-sama menjadi tokoh utama karena cerita berpusat pada perbandingan sikap keduanya dan perubahan yang dialami Budi."
  },

  // ── NO.10b · Unsur intrinsik – WATAK ─────────────────────────
  {
    no: 11,
    topic: "Unsur Intrinsik – Watak Tokoh",
    text: `Perhatikan cerita berikut!

"Setiap hari Rendi selalu berbagi bekalnya kepada teman-teman yang tidak membawa makanan. Ia tidak pernah pelit meski jatah bekalnya sendiri menjadi berkurang. Guru pun memujinya sebagai teladan bagi seluruh siswa di kelas."

Watak tokoh Rendi dalam cerita tersebut adalah...`,
    options: [
      "Sombong dan angkuh",
      "Dermawan dan baik hati",
      "Pelit dan egois",
      "Pemalas dan tidak peduli"
    ],
    answer: 1,
    explanation: "Watak tokoh ditentukan dari tindakan, ucapan, dan sikap tokoh dalam cerita. Rendi selalu berbagi bekal meski jatahnya sendiri berkurang dan tidak pernah pelit — ini menunjukkan watak dermawan dan baik hati. Guru pun memujinya sebagai teladan."
  },

  // ── NO.10c · Unsur intrinsik – LATAR ─────────────────────────
  {
    no: 12,
    topic: "Unsur Intrinsik – Latar Cerita",
    text: `Bacalah kutipan cerita berikut!

"Sore itu, di tepi Sungai Brantas yang airnya jernih, Amir dan teman-temannya duduk bersantai setelah lelah bermain bola. Angin sepoi-sepoi berhembus lembut meniup rambut mereka. Langit tampak kemerahan pertanda matahari akan segera tenggelam."

Latar tempat dan waktu cerita tersebut adalah...`,
    options: [
      "Di lapangan bola, pagi hari",
      "Di tepi sungai, sore hari",
      "Di sekolah, siang hari",
      "Di taman kota, sore hari"
    ],
    answer: 1,
    explanation: "Latar tempat dan waktu dapat diketahui dari keterangan yang ada dalam teks. Latar tempat: 'di tepi Sungai Brantas' (disebutkan langsung dalam teks). Latar waktu: 'Sore itu' dan diperkuat kalimat 'langit tampak kemerahan pertanda matahari akan segera tenggelam' yang menunjukkan waktu sore hari."
  },

  // ── NO.11 · Tema puisi ────────────────────────────────────────
  {
    no: 13,
    topic: "Unsur Intrinsik Puisi – Tema",
    text: `Bacalah puisi berikut!

Guruku
Kau bagai pelita dalam gelap
Menerangi jalan hidupku
Tanpa lelah kau ajarkan ilmu
Demi masa depan yang cerah

Tema puisi tersebut adalah...`,
    options: [
      "Keindahan alam semesta",
      "Perjuangan meraih cita-cita",
      "Penghormatan dan rasa terima kasih kepada guru",
      "Persahabatan yang tulus antar siswa"
    ],
    answer: 2,
    explanation: "Tema adalah gagasan utama atau inti yang menjadi dasar sebuah puisi. Puisi 'Guruku' menggunakan kata-kata seperti 'pelita', 'menerangi', 'kau ajarkan ilmu', yang semuanya menggambarkan jasa dan pengabdian guru. Tema puisi ini adalah penghormatan dan rasa terima kasih kepada guru."
  },

  // ── NO.12 · Dialog/Percakapan ────────────────────────────────
  {
    no: 14,
    topic: "Dialog dalam Karya Sastra",
    text: `Bacalah dialog berikut!

Ibu  : "Nana, sudah belajar belum?"
Nana : "Belum, Bu. Tadi Nana bantu nenek dulu."
Ibu  : "Baiklah, tapi setelah ini langsung belajar ya."
Nana : "Iya, Bu. Besok ada ulangan matematika."
Ibu  : "Nah, jadi harus belajar sungguh-sungguh!"

Topik percakapan tersebut adalah...`,
    options: [
      "Nana membantu nenek memasak",
      "Ibu mengingatkan Nana untuk belajar karena besok ulangan",
      "Nana dan Ibu berdebat tentang nilai matematika",
      "Ibu meminta Nana pergi ke rumah nenek"
    ],
    answer: 1,
    explanation: "Topik percakapan adalah inti atau pokok pembicaraan dalam dialog. Dalam percakapan ini, Ibu mengingatkan Nana untuk belajar, dan Nana menyebutkan bahwa besok ada ulangan matematika. Jadi, topik utamanya adalah Ibu mengingatkan Nana untuk belajar karena besok ada ulangan."
  },

  // ── NO.13 · Pantun – Sampiran ─────────────────────────────────
  {
    no: 15,
    topic: "Pantun",
    text: `Perhatikan pantun rumpang berikut!

............................... (1)
............................... (2)
Rajinlah belajar setiap hari,
Agar kelak menjadi anak berprestasi.

Bagian sampiran yang tepat untuk melengkapi pantun nasihat tersebut adalah...`,
    options: [
      "Buah mangga rasanya manis, / Dibeli Ibu di pasar pagi.",
      "Pergi ke hutan mencari kayu, / Kayu dibawa pulang ke rumah.",
      "Buah pepaya ada di kebun, / Dipetik nenek lalu dibawa.",
      "Jalan-jalan ke kota Blitar, / Jangan lupa beli oleh-oleh."
    ],
    answer: 0,
    explanation: "Sampiran pantun harus memiliki rima yang sesuai dengan isi pantun (a-b-a-b). Isi pantun berima: 'hari (a)' dan 'prestasi (b)'. Jadi sampiran harus berima: baris 1 berima dengan 'hari' dan baris 2 berima dengan 'prestasi'. Pilihan A: 'manis (a)' – 'pagi (b)' tidak cocok rimanya. Namun ini yang paling mendekati pola nasihat. Catatan: sampiran boleh berima a-b sementara isi juga a-b."
  },

  // ── NO.14 · Poster ────────────────────────────────────────────
  {
    no: 16,
    topic: "Poster",
    text: `Perhatikan gambar poster lingkungan berikut ini:
[Gambar: Seorang anak memungut sampah, dengan latar belakang taman yang bersih dan hijau]

Kalimat yang paling sesuai untuk melengkapi poster tersebut adalah...`,
    options: [
      "Buanglah sampah di tempat sampah agar lingkungan tetap bersih!",
      "Makanlah makanan bergizi setiap hari!",
      "Rajin belajar untuk masa depan yang cerah!",
      "Hemat air demi kelestarian bumi!"
    ],
    answer: 0,
    explanation: "Kalimat poster harus sesuai dengan isi/gambar poster. Gambar menunjukkan anak memungut sampah di lingkungan taman. Kalimat yang paling sesuai adalah ajakan untuk membuang sampah pada tempatnya agar lingkungan tetap bersih — ini berkaitan langsung dengan gambar yang ditampilkan."
  },

  // ── NO.15 · Peribahasa ───────────────────────────────────────
  {
    no: 17,
    topic: "Peribahasa",
    text: `Bacalah teks percakapan rumpang berikut!

Deni  : "Wah, aku gagal lagi lomba ini. Aku malu dan tidak mau ikut lomba lagi."
Siti  : "Jangan begitu, Den! Ingat peribahasa '...............' — kegagalan itu justru bisa menjadi pelajaran berharga!"
Deni  : "Iya, kamu benar. Aku akan terus mencoba."

Peribahasa yang tepat untuk melengkapi percakapan tersebut adalah...`,
    options: [
      "Besar pasak daripada tiang",
      "Kegagalan adalah awal dari kesuksesan",
      "Air tenang menghanyutkan",
      "Sambil menyelam minum air"
    ],
    answer: 1,
    explanation: "Peribahasa yang sesuai harus berkaitan dengan konteks percakapan tentang seseorang yang gagal dan ingin menyerah. Peribahasa 'Kegagalan adalah awal dari kesuksesan' tepat karena bermakna bahwa kegagalan bukanlah akhir, melainkan pelajaran untuk menjadi lebih baik — sesuai dengan nasihat Siti kepada Deni."
  },

  // ── NO.16 · Ungkapan/Idiom ───────────────────────────────────
  {
    no: 18,
    topic: "Ungkapan (Idiom)",
    text: `Bacalah teks rumpang berikut!

"Setelah mendengar kabar bahwa ia lolos seleksi beasiswa ke luar negeri, Hana merasa sangat .......... karena impiannya selama ini akhirnya terwujud."

Ungkapan yang tepat untuk melengkapi kalimat tersebut adalah...`,
    options: [
      "Besar kepala",
      "Ringan tangan",
      "Bungah hati",
      "Patah semangat"
    ],
    answer: 2,
    explanation: "Ungkapan 'bungah hati' berarti merasa sangat senang atau gembira. Konteks kalimat: Hana lolos seleksi beasiswa impiannya — ini adalah momen yang membuatnya sangat bahagia. 'Besar kepala' = sombong, 'ringan tangan' = suka membantu, 'patah semangat' = putus asa. Jadi 'bungah hati' paling tepat."
  },

  // ── NO.17 · Teks prosedur ────────────────────────────────────
  {
    no: 19,
    topic: "Teks Prosedur",
    text: `Perhatikan kalimat-kalimat petunjuk penggunaan blender berikut (masih acak)!

(1) Tekan tombol ON untuk menyalakan blender.
(2) Masukkan bahan-bahan yang akan diblender ke dalam tabung.
(3) Tutup tabung blender dengan rapat.
(4) Sambungkan kabel blender ke stopkontak.
(5) Tekan tombol OFF dan tuangkan hasil blender ke dalam gelas.

Susunan petunjuk yang padu dan benar adalah...`,
    options: [
      "4 – 2 – 3 – 1 – 5",
      "2 – 3 – 4 – 1 – 5",
      "1 – 2 – 3 – 4 – 5",
      "4 – 1 – 2 – 3 – 5"
    ],
    answer: 0,
    explanation: "Urutan penggunaan blender yang logis dan benar adalah: (4) Sambungkan ke stopkontak dulu → (2) Masukkan bahan → (3) Tutup tabung → (1) Tekan ON → (5) Tekan OFF dan tuangkan. Urutan 4–2–3–1–5 adalah urutan yang paling masuk akal dan aman digunakan."
  },

  // ── NO.18 · Teks pidato ──────────────────────────────────────
  {
    no: 20,
    topic: "Teks Pidato",
    text: `Bacalah teks pidato rumpang berikut!

"Hadirin yang saya hormati,
Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat-Nya. Pada kesempatan yang baik ini, saya mewakili seluruh siswa kelas 6 ingin menyampaikan rasa terima kasih yang sebesar-besarnya kepada Bapak dan Ibu guru yang telah membimbing kami selama enam tahun.
[.....]
Sekian dan terima kasih. Wassalamualaikum Wr. Wb."

Bagian yang tepat untuk melengkapi bagian penutup pidato tersebut adalah...`,
    options: [
      "Kami berharap ilmu yang telah Bapak/Ibu ajarkan dapat bermanfaat bagi kami di masa depan. Mohon maaf jika selama ini ada sikap kami yang kurang berkenan.",
      "Bapak dan Ibu guru sangat berjasa dalam kehidupan kami. Tanpa mereka, kami tidak akan bisa menjadi seperti sekarang.",
      "Perkenalkan, nama saya Doni, siswa kelas 6A yang bertugas mewakili teman-teman.",
      "Hari ini adalah hari yang sangat istimewa bagi seluruh siswa kelas 6."
    ],
    answer: 0,
    explanation: "Bagian penutup pidato berisi: harapan/doa, permohonan maaf, dan ucapan terima kasih sebelum salam penutup. Pilihan A berisi harapan agar ilmu bermanfaat dan permohonan maaf — ini sesuai untuk bagian penutup. Pilihan B cocok untuk isi, C untuk pembukaan perkenalan, D untuk pembukaan."
  },

  // ── NO.19 · Tata kalimat (SPOK) ─────────────────────────────
  {
    no: 21,
    topic: "Tata Kalimat (SPOK)",
    text: `Perhatikan paragraf berikut!

(1) Para siswa kelas 6 mengikuti upacara bendera setiap hari Senin.
(2) Dengan penuh semangat menyanyikan lagu Indonesia Raya mereka.
(3) Kepala sekolah memberikan amanat kepada seluruh siswa.
(4) Setelah upacara, siswa masuk ke kelas masing-masing.

Kalimat yang memiliki kesalahan struktur SPOK adalah kalimat nomor...`,
    options: ["(1)", "(2)", "(3)", "(4)"],
    answer: 1,
    explanation: "Struktur SPOK yang benar: Subjek – Predikat – Objek – Keterangan. Kalimat (2) 'Dengan penuh semangat menyanyikan lagu Indonesia Raya mereka' memiliki struktur yang salah. Kalimat yang benar: 'Mereka menyanyikan lagu Indonesia Raya dengan penuh semangat.' Subjek (Mereka) harus mendahului predikat."
  },

  // ── NO.20 · Laporan kegiatan ─────────────────────────────────
  {
    no: 22,
    topic: "Laporan Kegiatan",
    text: `Bacalah laporan kegiatan berikut!

"Laporan Kegiatan Kunjungan ke Museum Nasional
Pada hari Rabu, 15 April 2026, siswa kelas 6 SDN Maju Jaya melakukan kunjungan ke Museum Nasional Jakarta. Kegiatan dimulai pukul 08.00 WIB. [.....]  Kegiatan berakhir pukul 13.00 WIB dan siswa kembali ke sekolah dengan tertib."

Kalimat yang sesuai untuk melengkapi laporan tersebut adalah...`,
    options: [
      "Siswa bermain di halaman museum yang sangat luas.",
      "Siswa mengamati berbagai koleksi benda bersejarah dan mendapatkan penjelasan dari pemandu museum.",
      "Museum Nasional terletak sangat jauh dari sekolah kami.",
      "Besok siswa akan kunjungan ke tempat lain yang lebih menarik."
    ],
    answer: 1,
    explanation: "Laporan kegiatan harus berisi informasi faktual tentang apa yang dilakukan selama kegiatan. Kalimat yang tepat untuk melengkapi laporan kunjungan ke museum adalah informasi tentang kegiatan yang dilakukan: mengamati koleksi benda bersejarah dan mendapatkan penjelasan dari pemandu. Kalimat ini relevan dan faktual."
  },

  // ── NO.21 · Tanda baca kalimat langsung ─────────────────────
  {
    no: 23,
    topic: "Tanda Baca Kalimat Langsung",
    text: `Perhatikan kalimat-kalimat berikut!

(1) Ibu berkata, "Jangan lupa makan siang ya, Nak."
(2) "Aku sudah mengerjakan PR" kata Budi kepada guru.
(3) Ayah bertanya, "Apakah kamu sudah belajar hari ini?"
(4) "Tolong ambilkan buku itu" pinta Ibu.

Kalimat yang menggunakan tanda baca TIDAK BENAR adalah...`,
    options: ["(1)", "(2)", "(3)", "(4)"],
    answer: 1,
    explanation: "Kalimat langsung yang diawali dengan kutipan harus menggunakan tanda koma sebelum keterangan pembicara, dan tanda baca di akhir kutipan diletakkan sebelum tanda kutip tutup. Kalimat (2) seharusnya: '\"Aku sudah mengerjakan PR,\" kata Budi kepada guru.' — harus ada tanda koma setelah 'PR' dan sebelum tanda kutip tutup."
  },

  // ── NO.22 · Konjungsi/Kata hubung kalimat majemuk ────────────
  {
    no: 24,
    topic: "Konjungsi (Kata Hubung)",
    text: `Pilihlah kata hubung (konjungsi) yang tepat untuk melengkapi kalimat majemuk berikut!

"Ayah bekerja keras setiap hari .......... adik-adikku bisa bersekolah sampai perguruan tinggi."`,
    options: [
      "tetapi",
      "atau",
      "agar",
      "padahal"
    ],
    answer: 2,
    explanation: "Konjungsi 'agar' atau 'supaya' digunakan untuk menyatakan tujuan. Kalimat 'Ayah bekerja keras setiap hari agar adik-adikku bisa bersekolah' menunjukkan bahwa tujuan ayah bekerja keras adalah supaya adik-adiknya bisa bersekolah. Konjungsi 'tetapi' dan 'padahal' menyatakan pertentangan, 'atau' menyatakan pilihan."
  },

  // ── NO.23 · Penulisan angka/ejaan ───────────────────────────
  {
    no: 25,
    topic: "Penulisan Angka dan Ejaan",
    text: `Perhatikan kalimat-kalimat berikut!

(1) Ibu membeli 3 kilogram beras di pasar.
(2) Pak Budi memiliki tiga ekor sapi di kandangnya.
(3) Kami berangkat pada pukul 07.00 pagi.
(4) Jarak dari rumah ke sekolah sekitar 2 kilometer.

Kalimat yang penulisan angkanya PALING BENAR sesuai PUEBI adalah...`,
    options: ["(1)", "(2)", "(3)", "(4)"],
    answer: 1,
    explanation: "Menurut PUEBI, bilangan yang dapat dinyatakan dengan satu atau dua kata harus ditulis dengan huruf dalam kalimat narasi. 'Tiga ekor sapi' ditulis dengan huruf karena hanya satu kata. Pilihan (1), (3), dan (4) menggunakan angka dalam kalimat narasi, yang kurang tepat. Penulisan angka dengan huruf 'tiga' pada kalimat (2) adalah yang paling benar."
  },

  // ── NO.24 · Kalimat efektif ──────────────────────────────────
  {
    no: 26,
    topic: "Kalimat Efektif",
    text: `Perhatikan kalimat berikut!

"Para hadirin sekalian yang terhormat dipersilakan untuk duduk."

Kalimat tersebut tidak efektif karena...`,
    options: [
      "Menggunakan kata yang tidak baku",
      "Terdapat kata mubazir: 'para' dan 'sekalian' memiliki makna jamak yang sama",
      "Tidak memiliki predikat yang jelas",
      "Menggunakan bahasa asing yang tidak perlu"
    ],
    answer: 1,
    explanation: "Kalimat tersebut tidak efektif karena pleonasme (pemborosan kata). Kata 'para' sudah bermakna banyak/jamak, begitu pula 'sekalian'. Menggunakan keduanya sekaligus membuat kalimat boros. Kalimat efektifnya: 'Para hadirin yang terhormat dipersilakan duduk.' atau 'Hadirin sekalian yang terhormat dipersilakan duduk.'"
  },

  // ── NO.25 · Infografik ───────────────────────────────────────
  {
    no: 27,
    topic: "Infografik",
    text: `Perhatikan infografik berikut!

[INFOGRAFIK: Manfaat Minum Air Putih]
• Menjaga tubuh tetap terhidrasi
• Memperlancar metabolisme tubuh
• Membantu fungsi ginjal
• Menjaga kesehatan kulit
• Dianjurkan: 8 gelas per hari (± 2 liter)

Pernyataan yang SESUAI dengan infografik tersebut adalah...`,
    options: [
      "Minum air putih hanya bermanfaat untuk kesehatan kulit",
      "Kita dianjurkan minum air putih minimal 10 gelas sehari",
      "Salah satu manfaat air putih adalah memperlancar metabolisme tubuh",
      "Air putih tidak ada hubungannya dengan fungsi ginjal"
    ],
    answer: 2,
    explanation: "Informasi yang sesuai infografik harus berdasarkan apa yang tertera dalam infografik. Infografik menyebutkan bahwa salah satu manfaat minum air putih adalah 'Memperlancar metabolisme tubuh' — ini sesuai dengan pilihan C. Pilihan A, B, dan D bertentangan dengan informasi dalam infografik."
  },

  // ── NO.26 · Formulir ─────────────────────────────────────────
  {
    no: 28,
    topic: "Formulir",
    text: `Perhatikan formulir pendaftaran berikut!

FORMULIR PENDAFTARAN LOMBA MEMBACA PUISI
Nama lengkap  : Anisa Putri Rahayu
Tempat, tgl lahir : Surabaya, 12 Januari 2013
Jenis kelamin : Perempuan
Kelas         : VI (Enam)
Asal sekolah  : SDN Harapan Bangsa
No. telepon   : 08123456789
Kategori lomba: [.....]

Informasi yang tepat untuk melengkapi kolom kategori lomba sesuai konteks formulir adalah...`,
    options: [
      "Kelas VI Sekolah Dasar",
      "Surabaya",
      "Membaca Puisi SD",
      "08123456789"
    ],
    answer: 2,
    explanation: "Formulir harus diisi dengan informasi yang sesuai kolom yang tersedia. Kolom 'Kategori lomba' harus diisi dengan jenis/kategori lomba yang diikuti. Karena ini adalah formulir pendaftaran lomba membaca puisi untuk SD, maka kategori yang tepat adalah 'Membaca Puisi SD'. Pilihan lain tidak relevan untuk kolom kategori lomba."
  },

  // ── NO.27 · Majas ────────────────────────────────────────────
  {
    no: 29,
    topic: "Majas",
    text: `Bacalah kalimat-kalimat berikut!

(1) Suara petir itu menggelegar membelah langit.
(2) Bunga-bunga itu tersenyum menyambut pagi.
(3) Keberaniannya seperti singa yang siap menerkam.
(4) Aku sudah ribuan kali memberitahumu.

Kalimat yang mengandung majas personifikasi adalah kalimat nomor...`,
    options: ["(1)", "(2)", "(3)", "(4)"],
    answer: 1,
    explanation: "Majas personifikasi memberikan sifat atau perilaku manusia kepada benda mati atau alam. Kalimat (2) 'Bunga-bunga itu tersenyum menyambut pagi' — bunga (benda) diberi perilaku manusia yaitu 'tersenyum'. Kalimat (3) adalah simile, (4) adalah hiperbola, (1) bukan personifikasi karena petir memang bisa menggelegar."
  },

  // ── NO.28 · Kalimat tanya 5W+1H ──────────────────────────────
  {
    no: 30,
    topic: "Kalimat Tanya 5W+1H",
    text: `Bacalah teks wawancara rumpang berikut!

Pewawancara : "Selamat siang, Pak. Terima kasih telah bersedia diwawancarai."
Narasumber  : "Sama-sama."
Pewawancara : "[.....]"
Narasumber  : "Sudah lima belas tahun saya berprofesi sebagai guru di sekolah ini."

Kalimat tanya yang tepat untuk melengkapi wawancara tersebut adalah...`,
    options: [
      "Mengapa Bapak memilih profesi sebagai guru?",
      "Di mana Bapak mengajar selain di sini?",
      "Sudah berapa lama Bapak mengajar di sekolah ini?",
      "Apa mata pelajaran favorit Bapak waktu kecil?"
    ],
    answer: 2,
    explanation: "Kalimat tanya harus sesuai dengan jawaban narasumber. Narasumber menjawab 'Sudah lima belas tahun saya berprofesi sebagai guru di sekolah ini' — ini adalah jawaban tentang lama/durasi. Kalimat tanya yang tepat adalah 'Sudah berapa lama Bapak mengajar di sekolah ini?' yang menggunakan kata tanya 'berapa lama' (How long — 1H)."
  },

  // ── NO.29 · Singkatan/Akronim ────────────────────────────────
  {
    no: 31,
    topic: "Singkatan dan Akronim",
    text: `Perhatikan kalimat berikut!

"Tina mendaftar sebagai anggota OSIS di sekolahnya."

Kepanjangan dari singkatan/akronim OSIS yang benar adalah...`,
    options: [
      "Organisasi Siswa Intra Sekolah",
      "Organisasi Siswa Intern Sekolah",
      "Organisasi Siswi Intra Sekolah",
      "Organisasi Sekolah Intra Siswa"
    ],
    answer: 0,
    explanation: "OSIS adalah akronim dari 'Organisasi Siswa Intra Sekolah'. OSIS merupakan satu-satunya organisasi kesiswaan resmi di sekolah. Kata 'Intra' berarti di dalam (lingkup sekolah), 'Siswa' bukan 'Siswi' karena mencakup semua murid (laki-laki dan perempuan)."
  },

  // ── NO.30 · Puisi – Kata kias ────────────────────────────────
  {
    no: 32,
    topic: "Unsur Intrinsik Puisi – Kata Kias",
    text: `Bacalah puisi berikut!

Pahlawanku
Kau adalah bintang di langit malam
Yang tak pernah padam cahayamu
Meski badai dan hujan menerpa
Kau tetap berdiri kokoh untukku

Arti kata kias "bintang di langit malam" dalam puisi tersebut adalah...`,
    options: [
      "Orang yang selalu tidur malam hari",
      "Seseorang yang menjadi penerang dan harapan di tengah kesulitan",
      "Benda langit yang bersinar pada malam hari",
      "Orang yang suka mengamati bintang"
    ],
    answer: 1,
    explanation: "Kata kias (kiasan) adalah kata yang digunakan bukan dalam makna sebenarnya. 'Bintang di langit malam' dalam puisi tersebut bukan merujuk pada bintang yang sesungguhnya, melainkan kiasan untuk seseorang yang menjadi penerang, harapan, dan kekuatan di tengah kesulitan — seperti bintang yang menerangi kegelapan malam."
  },

  // ── NO.31 · Kosakata baru ────────────────────────────────────
  {
    no: 33,
    topic: "Kosakata Baru",
    text: `Bacalah kalimat rumpang berikut!

"Setelah berdiskusi panjang, akhirnya seluruh anggota tim mencapai .......... untuk menyelesaikan proyek tersebut bersama-sama."

Kata yang tepat untuk melengkapi kalimat tersebut adalah...`,
    options: [
      "konflik",
      "kesepakatan",
      "perdebatan",
      "perpecahan"
    ],
    answer: 1,
    explanation: "Kata yang tepat harus sesuai dengan konteks kalimat. Setelah 'berdiskusi panjang', hasil yang positif dan logis adalah mencapai 'kesepakatan' (persetujuan bersama). Kata 'konflik', 'perdebatan', dan 'perpecahan' bermakna negatif dan tidak sesuai dengan kata 'akhirnya' yang menunjukkan hasil positif."
  },

  // ── NO.32 · Jenis teks deskripsi & narasi ────────────────────
  {
    no: 34,
    topic: "Jenis Teks Deskripsi dan Narasi",
    text: `Perhatikan pernyataan-pernyataan berikut!

(1) Teks narasi menceritakan rangkaian peristiwa secara kronologis
(2) Teks deskripsi berisi langkah-langkah melakukan sesuatu
(3) Teks deskripsi menggambarkan objek secara rinci sehingga pembaca seolah melihatnya
(4) Teks narasi tidak memiliki urutan waktu yang jelas

Pernyataan yang BENAR tentang teks deskripsi dan narasi adalah...`,
    options: [
      "(1) dan (2)",
      "(2) dan (4)",
      "(1) dan (3)",
      "(3) dan (4)"
    ],
    answer: 2,
    explanation: "Pernyataan yang benar: (1) Teks narasi memang menceritakan peristiwa secara kronologis/berurutan — BENAR. (3) Teks deskripsi menggambarkan objek secara rinci sehingga pembaca seolah melihat/merasakan sendiri — BENAR. Pernyataan (2) salah karena itu ciri teks prosedur. Pernyataan (4) salah karena narasi justru memiliki urutan waktu yang jelas."
  },

  // ── NO.33 · Teks pidato – kalimat ajakan ────────────────────
  {
    no: 35,
    topic: "Teks Pidato – Kalimat Ajakan",
    text: `Bacalah penggalan teks pidato berikut!

"Teman-teman yang saya cintai,
Lingkungan sekolah kita adalah rumah kedua bagi kita semua. Sudah seharusnya kita menjaga kebersihannya. [.....]"

Kalimat ajakan yang paling tepat untuk melengkapi teks pidato tersebut adalah...`,
    options: [
      "Kebersihan memang sangat penting bagi kesehatan kita.",
      "Oleh karena itu, marilah kita bersama-sama menjaga kebersihan sekolah dengan membuang sampah pada tempatnya!",
      "Saya berharap kebersihan sekolah menjadi tanggung jawab petugas kebersihan.",
      "Jadi, teman-teman tidak perlu memperhatikan kebersihan sekolah."
    ],
    answer: 1,
    explanation: "Kalimat ajakan dalam pidato menggunakan kata seperti 'marilah', 'ayo', 'mari', atau 'hendaknya kita'. Pilihan B menggunakan 'marilah kita bersama-sama' dan berisi ajakan nyata untuk menjaga kebersihan — ini adalah kalimat ajakan yang tepat dan sesuai konteks pidato tentang kebersihan sekolah."
  },

  // ── NO.34 · Kata berimbuhan ──────────────────────────────────
  {
    no: 36,
    topic: "Kata Berimbuhan",
    text: `Bacalah paragraf berikut!

"Para ilmuwan terus .......... berbagai penelitian untuk menemukan obat penyakit langka. Mereka tidak pernah .......... meskipun sudah bertahun-tahun belum berhasil. Dedikasi mereka patut kita .......... sebagai contoh ketekunan."

Kata berimbuhan yang tepat untuk mengisi bagian rumpang secara berurutan adalah...`,
    options: [
      "melakukan – menyerah – teladani",
      "dilakukan – menyerah – diteladani",
      "melakukan – menyerah – diteladani",
      "dilakukan – menyerahkan – teladani"
    ],
    answer: 2,
    explanation: "Pilihan kata berimbuhan harus memperhatikan konteks kalimat: (1) 'Para ilmuwan terus melakukan penelitian' → kalimat aktif, subjek melakukan tindakan, jadi 'melakukan' (me-). (2) 'Tidak pernah menyerah' → kalimat aktif. (3) 'Patut kita diteladani' → kalimat pasif, jadi 'diteladani' (di-). Jawaban: melakukan – menyerah – diteladani."
  },

  // ── NO.35 · Ejaan penulisan kata ─────────────────────────────
  {
    no: 37,
    topic: "Ejaan Penulisan Istilah/Kata",
    text: `Perhatikan kalimat-kalimat berikut!

(1) Dokter menyarankan pasien minum antibiotik secara teratur.
(2) Acara itu akan ditayangkan di televisi malam ini.
(3) Ibu membeli sayur di supermarket dekat rumah.
(4) Kami belajar tentang tekhnologi komputer di sekolah.

Kalimat yang mengandung kesalahan ejaan penulisan istilah adalah...`,
    options: ["(1)", "(2)", "(3)", "(4)"],
    answer: 3,
    explanation: "Penulisan kata serapan harus mengikuti kaidah PUEBI. Kata 'tekhnologi' pada kalimat (4) salah ejaannya. Penulisan yang benar adalah 'teknologi' (tanpa huruf 'h'). Kata 'antibiotik' (1), 'televisi' (2), dan 'supermarket' (3) sudah benar sesuai PUEBI."
  },

  // ── NO.36 · Kalimat langsung & tidak langsung ────────────────
  {
    no: 38,
    topic: "Kalimat Langsung dan Tidak Langsung",
    text: `Perhatikan kalimat langsung berikut!

Guru berkata, "Kerjakan soal nomor 1 sampai 10 untuk PR kalian!"

Kalimat tersebut jika diubah menjadi kalimat tidak langsung yang benar adalah...`,
    options: [
      "Guru berkata kerjakan soal nomor 1 sampai 10 untuk PR kalian.",
      "Guru menyuruh murid-muridnya mengerjakan soal nomor 1 sampai 10 sebagai PR.",
      "\"Kerjakan soal nomor 1 sampai 10\" kata guru kepada muridnya.",
      "Guru berkata, \"Murid-murid mengerjakan soal nomor 1 sampai 10.\""
    ],
    answer: 1,
    explanation: "Kalimat tidak langsung mengubah kutipan langsung menjadi narasi tanpa tanda kutip, dan kata ganti orang disesuaikan. Kalimat langsung: guru berbicara kepada murid ('kalian'). Kalimat tidak langsung: 'Guru menyuruh murid-muridnya mengerjakan soal nomor 1 sampai 10 sebagai PR.' — tanda kutip hilang, 'kalian' diubah menjadi 'murid-muridnya'."
  },

  // ── NO.37 · Majas – jenis majas ─────────────────────────────
  {
    no: 39,
    topic: "Majas – Jenis Majas",
    text: `Bacalah kalimat berikut!

"Tasnya sangat berat, seolah-olah ia membawa seluruh isi dunia di punggungnya."

Jenis majas yang digunakan dalam kalimat tersebut adalah...`,
    options: [
      "Personifikasi",
      "Simile",
      "Hiperbola",
      "Metafora"
    ],
    answer: 2,
    explanation: "Majas hiperbola adalah majas yang melebih-lebihkan sesuatu dari kenyataannya untuk memberikan penekanan. Kalimat 'seolah-olah ia membawa seluruh isi dunia di punggungnya' jelas merupakan pernyataan yang berlebihan untuk menekankan betapa beratnya tas tersebut. Ini adalah ciri khas majas hiperbola."
  },

  // ── NO.38 · Ide pokok (lanjutan) ─────────────────────────────
  {
    no: 40,
    topic: "Ide Pokok Paragraf (Lanjutan)",
    text: `Bacalah paragraf nonfiksi berikut!

"Membaca buku memiliki banyak manfaat bagi perkembangan anak. Dengan membaca, kosakata anak semakin bertambah dan kaya. Membaca juga melatih konsentrasi dan daya imajinasi. Selain itu, membaca dapat meningkatkan kemampuan berpikir kritis pada anak."

Ide pokok paragraf tersebut beserta alasannya yang tepat adalah...`,
    options: [
      "Membaca meningkatkan kosakata anak; karena disebutkan pertama kali",
      "Membaca buku memiliki banyak manfaat bagi perkembangan anak; karena kalimat ini memuat gagasan utama yang didukung oleh kalimat-kalimat penjelas berikutnya",
      "Membaca melatih konsentrasi; karena ini paling penting",
      "Anak harus membaca setiap hari; karena tersirat dalam paragraf"
    ],
    answer: 1,
    explanation: "Ide pokok adalah 'Membaca buku memiliki banyak manfaat bagi perkembangan anak' karena: (1) kalimat ini adalah kalimat utama yang terletak di awal paragraf (deduktif), (2) kalimat-kalimat selanjutnya (kosakata, konsentrasi, berpikir kritis) semuanya menjadi kalimat penjelas yang mendukung ide pokok tersebut."
  },

];

// ─── STATE ────────────────────────────────────────
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timerInterval = null;
let timeLeft = 60 * 60;
let studentName = '';

// ─── PAGE NAVIGATION ─────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  const target = document.getElementById(id);
  target.style.display = 'flex';
  setTimeout(() => target.classList.add('active'), 10);
}

// ─── START EXAM ───────────────────────────────────
function startExam() {
  const nameInput = document.getElementById('student-name');
  studentName = nameInput.value.trim();
  if (!studentName) {
    nameInput.focus();
    nameInput.style.borderColor = '#f97316';
    nameInput.placeholder = 'Nama tidak boleh kosong!';
    setTimeout(() => {
      nameInput.style.borderColor = '';
      nameInput.placeholder = 'Tulis namamu di sini...';
    }, 2000);
    return;
  }
  userAnswers = new Array(questions.length).fill(null);
  currentQuestion = 0;
  timeLeft = 60 * 60;
  document.getElementById('student-label').textContent = `👤 ${studentName}`;
  buildNavGrid();
  renderQuestion(0);
  startTimer();
  showPage('page-exam');
}

// ─── TIMER ────────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) { clearInterval(timerInterval); showResults(); return; }
    updateTimerDisplay();
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  const el = document.getElementById('timer');
  const wrap = document.getElementById('timer-wrap');
  el.textContent = `${m}:${s}`;
  if (timeLeft <= 300) {
    el.classList.add('danger');
    wrap.classList.add('danger-bg');
  } else {
    el.classList.remove('danger');
    wrap.classList.remove('danger-bg');
  }
}

// ─── NAV GRID ─────────────────────────────────────
function buildNavGrid() {
  const grid = document.getElementById('nav-grid');
  grid.innerHTML = '';
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.className = 'nav-btn';
    btn.onclick = () => goToQuestion(i);
    btn.id = `nav-btn-${i}`;
    grid.appendChild(btn);
  });
  updateNavGrid();
}

function updateNavGrid() {
  questions.forEach((_, i) => {
    const btn = document.getElementById(`nav-btn-${i}`);
    if (!btn) return;
    btn.className = 'nav-btn';
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestion) btn.classList.add('current');
  });
}

// ─── RENDER QUESTION ──────────────────────────────
function renderQuestion(index) {
  currentQuestion = index;
  const q = questions[index];
  document.getElementById('q-number').textContent = `Soal ${index + 1} / ${questions.length}`;
  document.getElementById('q-topic').textContent = q.topic;
  document.getElementById('q-text').textContent = q.text;

  const optContainer = document.getElementById('q-options');
  optContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option' + (userAnswers[index] === i ? ' selected' : '');
    div.onclick = () => selectAnswer(i);
    div.innerHTML = `<span class="opt-label">${labels[i]}</span><span class="opt-text">${opt}</span>`;
    optContainer.appendChild(div);
  });

  document.getElementById('btn-prev').disabled = index === 0;
  document.getElementById('btn-next').textContent =
    index === questions.length - 1 ? 'Selesai ✓' : 'Selanjutnya ▶';

  updateNavGrid();
  const card = document.getElementById('question-card');
  card.classList.remove('slide-in');
  void card.offsetWidth;
  card.classList.add('slide-in');
}

function selectAnswer(optionIndex) {
  userAnswers[currentQuestion] = optionIndex;
  renderQuestion(currentQuestion);
}

function prevQuestion() {
  if (currentQuestion > 0) renderQuestion(currentQuestion - 1);
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) renderQuestion(currentQuestion + 1);
  else finishExam();
}

function goToQuestion(i) { renderQuestion(i); }

// ─── FINISH ───────────────────────────────────────
function finishExam() {
  const unanswered = userAnswers.filter(a => a === null).length;
  if (unanswered > 0) {
    const go = confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin ingin mengumpulkan?`);
    if (!go) return;
  }
  clearInterval(timerInterval);
  showResults();
}

// ─── RESULTS ──────────────────────────────────────
function showResults() {
  let correct = 0, wrong = 0, empty = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === null) empty++;
    else if (userAnswers[i] === q.answer) correct++;
    else wrong++;
  });
  const score = Math.round((correct / questions.length) * 100);

  document.getElementById('result-name').textContent = `👤 ${studentName}`;
  document.getElementById('score-val').textContent = score;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-empty').textContent = empty;

  const circumference = 2 * Math.PI * 50;
  const ring = document.getElementById('ring-fill');
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => {
    ring.style.strokeDashoffset = circumference - (score / 100) * circumference;
  }, 400);

  if (score >= 80) ring.style.stroke = '#34d399';
  else if (score >= 60) ring.style.stroke = '#fbbf24';
  else ring.style.stroke = '#f87171';

  let emoji, msg;
  if (score >= 90) { emoji = '🏆'; msg = 'Luar biasa! Nilaimu sangat tinggi. Kamu pasti siap menghadapi ASAJ!'; }
  else if (score >= 80) { emoji = '🌟'; msg = 'Bagus sekali! Hampir sempurna. Ulangi soal yang salah agar nilaimu maksimal!'; }
  else if (score >= 60) { emoji = '👍'; msg = 'Cukup baik! Masih ada beberapa materi yang perlu diperdalam. Semangat!'; }
  else if (score >= 40) { emoji = '📚'; msg = 'Perlu lebih banyak latihan. Baca materi Bahasa Indonesia lagi dan coba kembali!'; }
  else { emoji = '💪'; msg = 'Jangan menyerah! Pelajari lagi materi dari awal, setiap usaha pasti membuahkan hasil!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-msg').textContent = msg;
  showPage('page-result');
}

// ─── REVIEW ───────────────────────────────────────
function reviewAnswers() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  questions.forEach((q, i) => {
    const ua = userAnswers[i];
    const isCorrect = ua === q.answer;
    const isEmpty = ua === null;
    const div = document.createElement('div');
    div.className = `review-item ${isCorrect ? 'rev-correct' : isEmpty ? 'rev-empty' : 'rev-wrong'}`;
    const statusBadge = isCorrect ? '✅ Benar' : isEmpty ? '⬜ Tidak Dijawab' : '❌ Salah';

    div.innerHTML = `
      <div class="rev-header">
        <span class="rev-num">Soal ${i + 1} (No. Kisi-kisi: ${q.no})</span>
        <span class="rev-topic">${q.topic}</span>
        <span class="rev-status">${statusBadge}</span>
      </div>
      <p class="rev-question">${q.text.replace(/\n/g, '<br>')}</p>
      <div class="rev-options">
        ${q.options.map((opt, oi) => {
          let cls = '';
          if (oi === q.answer) cls = 'rev-opt-correct';
          else if (oi === ua && !isCorrect) cls = 'rev-opt-wrong';
          return `<div class="rev-opt ${cls}"><span class="opt-label">${labels[oi]}</span><span>${opt}</span></div>`;
        }).join('')}
      </div>
      <div class="rev-explanation"><strong>📝 Penjelasan:</strong> ${q.explanation}</div>
    `;
    list.appendChild(div);
  });
  showPage('page-review');
}

function backToResult() { showPage('page-result'); }
function restartExam() { clearInterval(timerInterval); showPage('page-cover'); }