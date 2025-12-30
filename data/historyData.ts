
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface RegionHistory {
  id: string;
  name: string;
  capital: string;
  summary: string;
  image: string;
  timeline: TimelineItem[];
}

export const sumatraHistory: RegionHistory[] = [
  {
    id: 'aceh',
    name: 'Nanggroe Aceh Darussalam',
    capital: 'Banda Aceh',
    summary: 'Dikenal sebagai Serambi Mekkah, Aceh merupakan lokasi kerajaan Islam pertama di Nusantara dan satu-satunya wilayah yang tidak pernah benar-benar dikuasai Belanda secara penuh.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1267', title: 'Kesultanan Samudera Pasai', description: 'Kerajaan Islam pertama di Indonesia didirikan oleh Sultan Malik Al-Saleh di Lhokseumawe.' },
      { year: '1607', title: 'Masa Keemasan Sultan Iskandar Muda', description: 'Aceh menjadi pusat perdagangan internasional dan kekuatan militer yang disegani di Asia Tenggara.' },
      { year: '1873', title: 'Maklumat Perang Belanda', description: 'Dimulainya Perang Aceh yang berlangsung selama 30 tahun lebih, salah satu perang terberat bagi Belanda.' },
      { year: '2005', title: 'MoU Helsinki', description: 'Penandatanganan perdamaian antara RI dan GAM pasca-tsunami 2004, memberikan otonomi khusus.' }
    ]
  },
  {
    id: 'sumatera-utara',
    name: 'Sumatera Utara',
    capital: 'Medan',
    summary: 'Wilayah heterogen yang menjadi rumah bagi peradaban Batak kuno dan kejayaan perkebunan tembakau Deli di masa kolonial.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1863', title: 'Lahirnya Perkebunan Deli', description: 'Jacob Nienhuys mendirikan Deli Maatschappij, menjadikan Medan pusat ekonomi tembakau dunia.' },
      { year: '1946', title: 'Revolusi Sosial Sumatera Timur', description: 'Gerakan massa melawan kaum bangsawan dan sultan yang dianggap pro-Belanda.' },
      { year: '1948', title: 'Pembentukan Provinsi', description: 'Resmi dibentuk berdasarkan UU No. 10 Tahun 1948 sebagai penggabungan keresidenan di Sumatra Utara.' }
    ]
  },
  {
    id: 'sumatera-barat',
    name: 'Sumatera Barat',
    capital: 'Padang',
    summary: 'Tanah kelahiran budaya Minangkabau yang menganut sistem matrilineal dan menjadi pusat intelektual tokoh-tokoh kemerdekaan Indonesia.',
    image: 'https://images.unsplash.com/photo-1544321703-e84705f956c8?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1347', title: 'Kerajaan Pagaruyung', description: 'Adityawarman mendirikan kerajaan di pedalaman Minangkabau dengan pengaruh Hindu-Buddha.' },
      { year: '1821', title: 'Perang Padri', description: 'Konflik antara Kaum Padri (ulama) dan Kaum Adat yang kemudian berkembang menjadi perlawanan melawan Belanda.' },
      { year: '1948', title: 'Ibukota Darurat RI', description: 'Bukittinggi menjadi pusat pemerintahan PDRI di bawah Syafruddin Prawiranegara saat Jakarta diduduki Belanda.' }
    ]
  },
  {
    id: 'riau',
    name: 'Riau',
    capital: 'Pekanbaru',
    summary: 'Pusat kebudayaan Melayu Nusantara dan salah satu provinsi terkaya karena cadangan minyak bumi dan gas alam.',
    image: 'https://images.unsplash.com/photo-1590483734724-38fa19dd24b1?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1723', title: 'Kesultanan Siak Sri Indrapura', description: 'Didirikan oleh Raja Kecil, menjadi kekuatan maritim yang dominan di Selat Malaka.' },
      { year: '1924', title: 'Penemuan Minyak Bumi', description: 'Ekspedisi geologi menemukan cadangan minyak raksasa di ladang Minas dan Duri.' },
      { year: '1957', title: 'Pemisahan dari Sumatra Tengah', description: 'Riau resmi menjadi provinsi sendiri melalui UU Darurat No. 19 Tahun 1957.' }
    ]
  },
  {
    id: 'kepulauan-riau',
    name: 'Kepulauan Riau',
    capital: 'Tanjung Pinang',
    summary: 'Provinsi kepulauan strategis di jalur pelayaran dunia, tempat lahirnya standarisasi bahasa Melayu yang menjadi cikal bakal Bahasa Indonesia.',
    image: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1808', title: 'Masa Kejayaan Pulau Penyengat', description: 'Pusat pemerintahan Kesultanan Riau-Lingga dan pusat pengembangan literatur bahasa Melayu.' },
      { year: '1824', title: 'Traktat London', description: 'Perjanjian Inggris-Belanda yang memisahkan wilayah Riau dari Johor (Malaysia).' },
      { year: '2002', title: 'Pemekaran Provinsi', description: 'Kepri resmi memisahkan diri dari Provinsi Riau melalui UU No. 25 Tahun 2002.' }
    ]
  },
  {
    id: 'jambi',
    name: 'Jambi',
    capital: 'Jambi',
    summary: 'Rumah bagi Situs Percandian Muaro Jambi, kompleks candi terluas di Asia Tenggara yang berasal dari era Kerajaan Melayu Kuno.',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 7', title: 'Kerajaan Melayu', description: 'Jambi muncul sebagai pusat perdagangan dan pusat studi agama Buddha di Sumatra.' },
      { year: '1904', title: 'Sultan Thaha Syaifuddin', description: 'Gugurnya Sultan Jambi dalam perlawanan melawan ekspedisi militer Belanda.' },
      { year: '1957', title: 'Pembentukan Provinsi', description: 'Jambi resmi menjadi provinsi yang berdiri sendiri lepas dari Sumatra Tengah.' }
    ]
  },
  {
    id: 'sumatera-selatan',
    name: 'Sumatera Selatan',
    capital: 'Palembang',
    summary: 'Pusat Kemaharajaan Sriwijaya yang menguasai jalur maritim Asia Tenggara selama berabad-abad.',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 7', title: 'Kejayaan Sriwijaya', description: 'Palembang menjadi pusat pemerintahan kemaharajaan maritim terbesar di Asia Tenggara.' },
      { year: '1659', title: 'Kesultanan Palembang Darussalam', description: 'Terbentuk pasca keruntuhan pengaruh Majapahit, menjadi pusat penyebaran Islam.' },
      { year: '1947', title: 'Pertempuran Lima Hari Lima Malam', description: 'Perlawanan rakyat Palembang melawan tentara NICA pasca kemerdekaan.' }
    ]
  },
  {
    id: 'bangka-belitung',
    name: 'Bangka Belitung',
    capital: 'Pangkal Pinang',
    summary: 'Dikenal sebagai Negeri Laskar Pelangi, wilayah ini merupakan penghasil timah terbesar di dunia sejak zaman kolonial.',
    image: 'https://images.unsplash.com/photo-1544321703-e84705f956c8?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1710', title: 'Penambangan Timah Pertama', description: 'Dimulainya eksplorasi timah secara massal oleh Kesultanan Palembang dengan tenaga kerja dari Tiongkok.' },
      { year: '1812', title: 'Penyerahan ke Inggris', description: 'Sultan Mahmud Badaruddin II menyerahkan Bangka kepada Inggris melalui perjanjian dengan Raffles.' },
      { year: '2000', title: 'Provinsi ke-31', description: 'Resmi terbentuk melalui UU No. 27 Tahun 2000, memisahkan diri dari Sumatera Selatan.' }
    ]
  },
  {
    id: 'bengkulu',
    name: 'Bengkulu',
    capital: 'Bengkulu',
    summary: 'Satu-satunya wilayah di Indonesia yang pernah menjadi koloni Inggris (Bencoolen) sebelum ditukar dengan Singapura.',
    image: 'https://images.unsplash.com/photo-1518544862322-b44c804689bd?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1714', title: 'Fort Marlborough', description: 'Inggris membangun benteng pertahanan terkuat kedua di Asia Tenggara di tepi pantai Bengkulu.' },
      { year: '1824', title: 'Traktat London', description: 'Bengkulu diserahkan Inggris kepada Belanda, ditukar dengan wilayah Singapura dan Malaka.' },
      { year: '1938', title: 'Pengasingan Soekarno', description: 'Soekarno diasingkan oleh Belanda ke Bengkulu, di mana beliau bertemu dengan Ibu Fatmawati.' }
    ]
  },
  {
    id: 'lampung',
    name: 'Lampung',
    capital: 'Bandar Lampung',
    summary: 'Pintu gerbang utama Pulau Sumatra yang kaya akan sejarah lada dan menjadi tujuan utama program transmigrasi sejak era Belanda.',
    image: 'https://images.unsplash.com/photo-1627662236973-4fda8358fb20?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1883', title: 'Letusan Krakatau', description: 'Letusan dahsyat gunung api di Selat Sunda yang menghancurkan pesisir Lampung dan memicu tsunami global.' },
      { year: '1905', title: 'Transmigrasi Pertama', description: 'Pemerintah kolonial Belanda memulai program perpindahan penduduk dari Jawa ke Gedong Tataan, Lampung.' },
      { year: '1964', title: 'Berdirinya Provinsi', description: 'Lampung resmi memisahkan diri dari Sumatera Selatan berdasarkan UU No. 14 Tahun 1964.' }
    ]
  },
];

export const jawaHistory: RegionHistory[] = [
  {
    id: 'banten',
    name: 'Banten',
    capital: 'Serang',
    summary: 'Pusat perdagangan lada dan kekuasaan Islam maritim yang pernah menantang monopoli VOC di Jawa.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1526', title: 'Kesultanan Banten', description: 'Sunan Gunung Jati membebaskan Banten dari pengaruh Pajajaran dan mendirikan kesultanan Islam.' },
      { year: '1651', title: 'Sultan Ageng Tirtayasa', description: 'Masa keemasan perlawanan terhadap VOC melalui pembangunan irigasi dan perdagangan bebas.' },
      { year: '2000', title: 'Pemekaran dari Jawa Barat', description: 'Resmi menjadi provinsi ke-30 Indonesia pada 4 Oktober 2000.' }
    ]
  },
  {
    id: 'dki-jakarta',
    name: 'DKI Jakarta',
    capital: 'Jakarta',
    summary: 'Metropolis yang berevolusi dari pelabuhan Sunda Kelapa menjadi Batavia, dan akhirnya menjadi pusat saraf Republik Indonesia.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1527', title: 'Jayakarta', description: 'Fatahillah merebut Sunda Kelapa dari Portugis dan menggantinya menjadi Jayakarta.' },
      { year: '1619', title: 'Pembangunan Batavia', description: 'Jan Pieterszoon Coen menghancurkan Jayakarta dan mendirikan markas besar VOC, Batavia.' },
      { year: '1945', title: 'Proklamasi Kemerdekaan', description: 'Soekarno-Hatta memproklamasikan kemerdekaan RI di Jalan Pegangsaan Timur No. 56.' }
    ]
  },
  {
    id: 'jawa-barat',
    name: 'Jawa Barat',
    capital: 'Bandung',
    summary: 'Tanah Pasundan yang menjadi saksi sejarah Kerajaan Sunda kuno hingga peristiwa Bandung Lautan Api.',
    image: 'https://images.unsplash.com/photo-1582738412120-7f369348d2f5?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 4', title: 'Kerajaan Tarumanegara', description: 'Salah satu kerajaan tertua di Indonesia dengan bukti prasasti Ciaruteun.' },
      { year: '1946', title: 'Bandung Lautan Api', description: 'Rakyat membakar kota Bandung agar tidak dijadikan markas militer oleh sekutu dan NICA.' },
      { year: '1955', title: 'Konferensi Asia Afrika', description: 'Pertemuan bersejarah negara-negara berkembang pertama kali diadakan di Gedung Merdeka, Bandung.' }
    ]
  },
  {
    id: 'jawa-tengah',
    name: 'Jawa Tengah',
    capital: 'Semarang',
    summary: 'Jantung budaya Jawa, rumah bagi mahakarya Borobudur dan Prambanan, serta pusat kekuasaan Wangsa Mataram.',
    image: 'https://images.unsplash.com/photo-1542614471-001ccf90567e?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 8', title: 'Mataram Kuno', description: 'Dinasti Syailendra membangun Borobudur, candi Buddha terbesar di dunia di Lembah Kedu.' },
      { year: '1755', title: 'Perjanjian Giyanti', description: 'Pembagian Kerajaan Mataram Islam menjadi Kesunanan Surakarta dan Kesultanan Yogyakarta.' },
      { year: '1945', title: 'Pertempuran Lima Hari Semarang', description: 'Perjuangan pemuda Semarang melawan tentara Jepang pasca proklamasi.' }
    ]
  },
  {
    id: 'di-yogyakarta',
    name: 'Daerah Istimewa Yogyakarta',
    capital: 'Yogyakarta',
    summary: 'Wilayah setingkat provinsi yang dipimpin oleh Sultan, menjadi benteng terakhir pertahanan RI di masa revolusi.',
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1755', title: 'Hadeging Nagari Ngayogyakarta', description: 'Pangeran Mangkubumi (Sultan Hamengkubuwono I) mendirikan keraton pasca Perjanjian Giyanti.' },
      { year: '1946', title: 'Ibukota Negara RI', description: 'Pemerintahan RI pindah ke Yogyakarta karena kondisi Jakarta yang tidak aman.' },
      { year: '1950', title: 'Status Daerah Istimewa', description: 'UU No. 3 Tahun 1950 menetapkan DIY sebagai daerah otonom setingkat provinsi.' }
    ]
  },
  {
    id: 'jawa-timur',
    name: 'Jawa Timur',
    capital: 'Surabaya',
    summary: 'Negeri asal imperium Majapahit yang menyatukan Nusantara dan kota Surabaya sebagai Kota Pahlawan.',
    image: 'https://images.unsplash.com/photo-1590483734724-38fa19dd24b1?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1293', title: 'Berdirinya Majapahit', description: 'Raden Wijaya mendirikan kerajaan pasca mengusir tentara Mongol, menjadi puncak kejayaan Nusantara.' },
      { year: '1945', title: 'Pertempuran 10 November', description: 'Arek-arek Suroboyo melawan Inggris dalam pertempuran darat terbesar pasca Perang Dunia II.' },
      { year: '1948', title: 'Pemberontakan PKI Madiun', description: 'Upaya kudeta pertama terhadap pemerintahan RI yang berhasil diredam militer.' }
    ]
  },
];

export const baliNusaHistory: RegionHistory[] = [
  {
    id: 'bali',
    name: 'Bali',
    capital: 'Denpasar',
    summary: 'Pulau Dewata yang berhasil mempertahankan tradisi Hindu-Majapahit dan menjadi ikon pariwisata dunia.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1343', title: 'Ekspedisi Gajah Mada', description: 'Bali dikuasai Majapahit, membawa pengaruh budaya dan sistem kasta yang bertahan hingga kini.' },
      { year: '1906', title: 'Puputan Badung', description: 'Aksi bunuh diri massal bangsawan Bali melawan pasukan Belanda sebagai bentuk harga diri.' },
      { year: '1958', title: 'Pembentukan Provinsi', description: 'Pemisahan dari Provinsi Sunda Kecil menjadi Provinsi Bali yang mandiri.' }
    ]
  },
  {
    id: 'nusa-tenggara-barat',
    name: 'Nusa Tenggara Barat',
    capital: 'Mataram',
    summary: 'Wilayah yang terdiri dari Pulau Lombok dan Sumbawa, rumah bagi Gunung Rinjani dan sejarah Kerajaan Selaparang.',
    image: 'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1815', title: 'Letusan Tambora', description: 'Letusan gunung terdahsyat dalam sejarah modern yang memusnahkan tiga kerajaan di Pulau Sumbawa.' },
      { year: '1894', title: 'Intervensi Belanda', description: 'Belanda menyerang Mataram untuk mengakhiri dominasi Kerajaan Karangasem (Bali) di Lombok.' },
      { year: '1958', title: 'Berdirinya Provinsi NTB', description: 'Resmi dibentuk berdasarkan UU No. 64 Tahun 1958.' }
    ]
  },
  {
    id: 'nusa-tenggara-timur',
    name: 'Nusa Tenggara Timur',
    capital: 'Kupang',
    summary: 'Provinsi kepulauan dengan keragaman bahasa terbanyak dan sejarah panjang persaingan dagang antara Portugis dan Belanda.',
    image: 'https://images.unsplash.com/photo-1535452831206-8d1976092042?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1556', title: 'Misi Portugis', description: 'Bangsa Portugis mulai membangun koloni di Solor dan Flores untuk perdagangan kayu cendana.' },
      { year: '1859', title: 'Perjanjian Lisbon', description: 'Belanda dan Portugis membagi wilayah Flores dan Timor, Portugis tetap memegang Timor Leste.' },
      { year: '1958', title: 'Pembentukan Provinsi NTT', description: 'Lahir sebagai bagian dari pemekaran wilayah Sunda Kecil.' }
    ]
  },
];

export const kalimantanHistory: RegionHistory[] = [
  {
    id: 'kalimantan-barat',
    name: 'Kalimantan Barat',
    capital: 'Pontianak',
    summary: 'Dilalui garis khatulistiwa, wilayah ini memiliki sejarah unik Republik Lanfang yang didirikan pekerja tambang Tiongkok.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1771', title: 'Kesultanan Pontianak', description: 'Syarif Abdurrahman Alkadrie mendirikan kota di persimpangan Sungai Kapuas dan Landak.' },
      { year: '1777', title: 'Republik Lanfang', description: 'Negara republik pertama di Nusantara didirikan oleh komunitas Tionghoa di Mandor.' },
      { year: '1944', title: 'Peristiwa Mandor', description: 'Pembantaian ribuan tokoh dan rakyat Kalbar oleh tentara Jepang (Kaigun).' }
    ]
  },
  {
    id: 'kalimantan-tengah',
    name: 'Kalimantan Tengah',
    capital: 'Palangkaraya',
    summary: 'Tanah Dayak yang memiliki ibukota yang dirancang khusus oleh Presiden Soekarno untuk menjadi calon ibukota masa depan.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1957', title: 'Pemekaran Provinsi', description: 'Tjilik Riwut mempelopori pembentukan Kalten lepas dari Kalsel demi otonomi masyarakat Dayak.' },
      { year: '1957', title: 'Pembangunan Palangkaraya', description: 'Soekarno meletakkan batu pertama kota yang dirancang dengan konsep modern dan megah.' },
      { year: '2001', title: 'Konflik Sampit', description: 'Tragedi kemanusiaan antaretnis yang menjadi sejarah kelam pembangunan harmoni daerah.' }
    ]
  },
  {
    id: 'kalimantan-selatan',
    name: 'Kalimantan Selatan',
    capital: 'Banjarbaru',
    summary: 'Pusat kebudayaan sungai dengan Kesultanan Banjar yang gigih melawan kolonialisme lewat Perang Banjar.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1526', title: 'Kesultanan Banjar', description: 'Pangeran Samudera memeluk Islam dan mendirikan kesultanan dengan bantuan Kesultanan Demak.' },
      { year: '1859', title: 'Perang Banjar', description: 'Pangeran Antasari memimpin perlawanan total melawan Belanda selama hampir 50 tahun.' },
      { year: '2022', title: 'Perpindahan Ibukota', description: 'Ibukota provinsi resmi pindah dari Banjarmasin ke Kota Banjarbaru.' }
    ]
  },
  {
    id: 'kalimantan-timur',
    name: 'Kalimantan Timur',
    capital: 'Samarinda',
    summary: 'Lokasi kerajaan tertua di Indonesia (Kutai) dan kini menjadi rumah bagi Ibu Kota Nusantara (IKN).',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 4', title: 'Kerajaan Kutai Martapura', description: 'Ditemukannya Prasasti Yupa sebagai bukti tertua keberadaan peradaban tulisan di Indonesia.' },
      { year: '1897', title: 'Sumur Minyak Mathilda', description: 'Pengeboran minyak pertama di Balikpapan, memulai era industri energi di Kalimantan.' },
      { year: '2022', title: 'Penetapan IKN', description: 'Wilayah Penajam Paser Utara dan Kutai Kartanegara ditetapkan sebagai lokasi Ibu Kota Negara baru.' }
    ]
  },
  {
    id: 'kalimantan-utara',
    name: 'Kalimantan Utara',
    capital: 'Tanjung Selor',
    summary: 'Provinsi termuda di Pulau Kalimantan yang memiliki sejarah Kesultanan Bulungan dan peran strategis di perbatasan.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1731', title: 'Kesultanan Bulungan', description: 'Didirikan sebagai pecahan dari Kesultanan Sulu dan menjadi penguasa pesisir utara Kalimantan.' },
      { year: '1945', title: 'Pertempuran Tarakan', description: 'Salah satu lokasi pertempuran sengit Sekutu melawan Jepang untuk memperebutkan ladang minyak.' },
      { year: '2012', title: 'Pembentukan Provinsi', description: 'Kaltara resmi mekar dari Kalimantan Timur melalui UU No. 20 Tahun 2012.' }
    ]
  },
];

export const sulawesiHistory: RegionHistory[] = [
  {
    id: 'sulawesi-utara',
    name: 'Sulawesi Utara',
    capital: 'Manado',
    summary: 'Dikenal sebagai Bumi Nyiur Melambai, wilayah ini memiliki pengaruh historis Spanyol dan Belanda yang sangat kuat.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1623', title: 'Benteng Fort Amsterdam', description: 'VOC membangun benteng di Manado pasca mengusir pengaruh Spanyol dan Portugis.' },
      { year: '1958', title: 'Gerakan Permesta', description: 'Perjuangan otonomi ekonomi daerah yang berujung pada konflik bersenjata dengan pemerintah pusat.' },
      { year: '1964', title: 'Berdirinya Provinsi', description: 'Sulawesi Utara resmi menjadi provinsi sendiri memisahkan diri dari Sulawesi Tengah.' }
    ]
  },
  {
    id: 'gorontalo',
    name: 'Gorontalo',
    capital: 'Gorontalo',
    summary: 'Dikenal sebagai Serambi Madinah, Gorontalo memproklamasikan kemerdekaannya lebih awal dari proklamasi 17 Agustus 1945.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1942', title: 'Proklamasi Gorontalo', description: 'Nani Wartabone mengibarkan Bendera Merah Putih dan menyatakan kemerdekaan pada 23 Januari.' },
      { year: '1673', title: 'Persekutuan Lima Kerajaan', description: 'Pohala\'a (Limo Lo Pohala\'a) menyatukan kerajaan-kerajaan kecil di Gorontalo untuk pertahanan.' },
      { year: '2000', title: 'Pemekaran Provinsi', description: 'Gorontalo memisahkan diri dari Sulawesi Utara melalui UU No. 38 Tahun 2000.' }
    ]
  },
  {
    id: 'sulawesi-tengah',
    name: 'Sulawesi Tengah',
    capital: 'Palu',
    summary: 'Wilayah dengan peninggalan megalitikum terbanyak di Indonesia dan sejarah kerajaan-kerajaan tua di Teluk Tomini.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 11', title: 'Situs Megalitikum Lore Lindu', description: 'Patung-patung batu raksasa peninggalan zaman prasejarah yang tersebar di Lembah Bada.' },
      { year: '1964', title: 'Pembentukan Provinsi', description: 'Resmi dibentuk berdasarkan UU No. 13 Tahun 1964, memisahkan diri dari Sulawesi Utara-Tengah.' },
      { year: '2018', title: 'Gempa dan Likuefaksi Palu', description: 'Tragedi bencana alam besar yang mengubah tatanan geografi dan sejarah modern kota Palu.' }
    ]
  },
  {
    id: 'sulawesi-barat',
    name: 'Sulawesi Barat',
    capital: 'Mamuju',
    summary: 'Rumah bagi suku Mandar yang dikenal sebagai pelaut ulung dengan perahu Sandeq-nya.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: 'Abad 16', title: 'Pitu Ba\'ba Binanga', description: 'Persekutuan tujuh kerajaan di pesisir (Mandar) untuk menghalangi ekspansi Gowa dan Bone.' },
      { year: '2004', title: 'Pemekaran Provinsi', description: 'Sulawesi Barat resmi memisahkan diri dari Sulawesi Selatan melalui UU No. 26 Tahun 2004.' }
    ]
  },
  {
    id: 'sulawesi-selatan',
    name: 'Sulawesi Selatan',
    capital: 'Makassar',
    summary: 'Pusat kejayaan Kerajaan Gowa-Tallo dan Bone, serta tanah kelahiran pelaut legendaris Bugis-Makassar.',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1667', title: 'Perjanjian Bungaya', description: 'Kekalahan Sultan Hasanuddin (Ayam Jantan dari Timur) dari VOC dan Arung Palakka.' },
      { year: 'Abad 14', title: 'Kitab La Galigo', description: 'Epos sastra terpanjang di dunia milik suku Bugis mulai dituliskan pada daun lontar.' },
      { year: '1946', title: 'Pembantaian Westerling', description: 'Tragedi operasi militer Belanda yang menewaskan ribuan rakyat di Sulawesi Selatan.' }
    ]
  },
  {
    id: 'sulawesi-tenggara',
    name: 'Sulawesi Tenggara',
    capital: 'Kendari',
    summary: 'Wilayah Kesultanan Buton yang memiliki sejarah unik benteng terluas di dunia.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1542', title: 'Kesultanan Buton', description: 'Kerajaan Buton bertransformasi menjadi kesultanan Islam dengan sistem pemerintahan yang demokratis.' },
      { year: 'Abad 16', title: 'Benteng Keraton Buton', description: 'Pembangunan benteng batu terluas di dunia (23 hektar) sebagai pertahanan dari serangan luar.' },
      { year: '1964', title: 'Berdirinya Provinsi', description: 'Pemekaran dari Sulawesi Selatan berdasarkan UU No. 13 Tahun 1964.' }
    ]
  },
];

export const malukuPapuaHistory: RegionHistory[] = [
  {
    id: 'maluku',
    name: 'Maluku',
    capital: 'Ambon',
    summary: 'Dikenal sebagai Spice Islands (Kepulauan Rempah), pusat perebutan kekuasaan bangsa Eropa di masa lalu.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1512', title: 'Kedatangan Portugis', description: 'Bangsa Eropa pertama mendarat di Hitu, memulai era monopoli cengkeh.' },
      { year: '1817', title: 'Pattimura Melawan', description: 'Thomas Matulessy memimpin perlawanan rakyat Maluku dan merebut Benteng Duurstede.' },
      { year: '1950', title: 'Proklamasi RMS', description: 'Upaya pemisahan diri Republik Maluku Selatan yang berhasil diredam oleh militer Indonesia.' }
    ]
  },
  {
    id: 'maluku-utara',
    name: 'Maluku Utara',
    capital: 'Sofifi',
    summary: 'Rumah bagi Kesultanan Ternate dan Tidore yang wilayah kekuasaannya pernah mencapai Filipina dan Papua.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1257', title: 'Kesultanan Ternate', description: 'Baab Mashur Malamo mendirikan kerajaan yang menjadi produsen utama cengkeh dunia.' },
      { year: '1575', title: 'Pengusiran Portugis', description: 'Sultan Baabullah mengusir Portugis setelah pembunuhan ayahnya, Sultan Khairun.' },
      { year: '1999', title: 'Provinsi Maluku Utara', description: 'Pemekaran dari Provinsi Maluku dengan Ternate sebagai ibukota awal sebelum pindah ke Sofifi.' }
    ]
  },
  {
    id: 'papua',
    name: 'Papua',
    capital: 'Jayapura',
    summary: 'Wilayah paling timur Indonesia yang kaya akan budaya suku-suku pegunungan dan kekayaan alam emas.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1910', title: 'Berdirinya Hollandia', description: 'Belanda mendirikan kota pelabuhan Hollandia (sekarang Jayapura) di perbatasan Papua Nugini.' },
      { year: '1962', title: 'Perjanjian New York', description: 'Kesepakatan antara Indonesia dan Belanda untuk penyerahan kekuasaan Papua Barat ke Indonesia.' },
      { year: '1969', title: 'Pepera', description: 'Penentuan Pendapat Rakyat yang menyatakan Papua resmi bergabung dengan Negara Kesatuan Republik Indonesia.' }
    ]
  },
  {
    id: 'papua-barat',
    name: 'Papua Barat',
    capital: 'Manokwari',
    summary: 'Provinsi Konservasi pertama di Indonesia, rumah bagi keanekaragaman hayati laut terbaik di dunia (Raja Ampat).',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1855', title: 'Pendaratan Ottow dan Geissler', description: 'Dua penginjil Jerman mendarat di Pulau Mansinam, memulai peradaban modern dan kekristenan di Papua.' },
      { year: '2003', title: 'Pembentukan Irian Jaya Barat', description: 'Pemekaran dari Provinsi Papua melalui Inpres No. 1 Tahun 2003, kemudian berganti nama jadi Papua Barat.' }
    ]
  },
  {
    id: 'papua-selatan',
    name: 'Papua Selatan',
    capital: 'Merauke',
    summary: 'Wilayah yang berbatasan langsung dengan Papua Nugini, dikenal sebagai titik "Merauke" dalam lagu kebangsaan.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1902', title: 'Pos Belanda di Merauke', description: 'Belanda mendirikan pos permanen untuk mencegah praktik perburuan kepala oleh suku Marind.' },
      { year: '1927', title: 'Boven Digoel', description: 'Pemerintah kolonial membangun kamp pengasingan bagi tahanan politik Indonesia seperti Hatta dan Sjahrir.' },
      { year: '2022', title: 'Pemekaran Provinsi', description: 'Resmi dibentuk pada 11 November 2022 sebagai provinsi hasil pemekaran dari Papua.' }
    ]
  },
  {
    id: 'papua-tengah',
    name: 'Papua Tengah',
    capital: 'Nabire',
    summary: 'Rumah bagi Puncak Jaya, satu-satunya tempat di khatulistiwa yang memiliki salju abadi, serta tambang emas raksasa.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1936', title: 'Ekspedisi Carstensz', description: 'Anton Colijn menjadi orang pertama yang mencapai puncak bersalju di Papua Tengah.' },
      { year: '1967', title: 'Kontrak Karya Freeport', description: 'Pemerintah RI menandatangani izin penambangan tembaga dan emas di wilayah Grasberg.' },
      { year: '2022', title: 'Provinsi Papua Tengah', description: 'Resmi berdiri memisahkan diri dari Provinsi Papua dengan UU No. 15 Tahun 2022.' }
    ]
  },
  {
    id: 'papua-pegunungan',
    name: 'Papua Pegunungan',
    capital: 'Wamena',
    summary: 'Satu-satunya provinsi di Indonesia yang tidak memiliki garis pantai (landlocked), terletak di jantung Pegunungan Jayawijaya.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1938', title: 'Penemuan Lembah Baliem', description: 'Richard Archbold secara tidak sengaja menemukan lembah luas berpenduduk padat di ketinggian.' },
      { year: '1954', title: 'Kontak Pertama Wamena', description: 'Misionaris mendarat di Wamena, memulai interaksi suku Dani dengan dunia luar secara masif.' },
      { year: '2022', title: 'Provinsi Papua Pegunungan', description: 'Terbentuk melalui UU No. 16 Tahun 2022 sebagai upaya mempercepat pelayanan publik di pegunungan.' }
    ]
  },
  {
    id: 'papua-barat-daya',
    name: 'Papua Barat Daya',
    capital: 'Sorong',
    summary: 'Provinsi ke-38 Indonesia yang menjadi pintu masuk utama menuju keajaiban dunia laut Raja Ampat.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=1200',
    timeline: [
      { year: '1906', title: 'Kota Minyak Sorong', description: 'Belanda mulai mengidentifikasi potensi minyak bumi di wilayah pesisir Kepala Burung Papua.' },
      { year: '1942', title: 'Markas Jepang', description: 'Sorong dijadikan pangkalan pertahanan udara Jepang selama Perang Dunia II di Pasifik.' },
      { year: '2022', title: 'Provinsi Bungsu', description: 'Mengesahkan UU No. 29 Tahun 2022, menjadikannya provinsi terbaru di Indonesia.' }
    ]
  }
];
