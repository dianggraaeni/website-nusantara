export interface Tradition {
  id: string;
  name: string;
  region: string;
  image: string;
  desc: string;
  philosophy: string;
  gallery: string[];
}

export const traditions: Tradition[] = [
  {
    id: 'aceh',
    name: 'Peusijuek',
    region: 'Aceh',
    image: '/images/tradition/peusijuek.jpg',
    desc: 'Upacara adat Aceh yang dilakukan pada berbagai peristiwa penting seperti pernikahan, khitanan, dan menempati rumah baru.',
    philosophy: 'Ungkapan rasa syukur, doa keselamatan, dan harapan akan keberkahan hidup.',
    gallery: ['/images/tradition/peusijuek.jpg']
  },
  {
    id: 'sumatera-utara',
    name: 'Lompat Batu (Hombo Batu)',
    region: 'Sumatera Utara',
    image: '/images/tradition/lompat-batu-hombo-batu.jpg',
    desc: 'Tradisi masyarakat Nias Selatan untuk menandai kedewasaan seorang pemuda.',
    philosophy: 'Keberanian, kekuatan, dan kesiapan menjaga masyarakat.',
    gallery: ['/images/tradition/lompat-batu-hombo-batu.jpg']
  },
  {
    id: 'sumatera-barat',
    name: 'Pesta Tabuik',
    region: 'Sumatera Barat',
    image: '/images/tradition/pesta-tabuik.jpg',
    desc: 'Upacara adat Pariaman untuk mengenang peristiwa sejarah Islam.',
    philosophy: 'Nilai religius, sejarah, dan kebersamaan.',
    gallery: ['/images/tradition/pesta-tabuik-2.jpg',]
  },
  {
    id: 'sumatera-selatan',
    name: 'Sedekah Rame',
    region: 'Sumatera Selatan',
    image: '/images/tradition/sedekah-rame.jpg',
    desc: 'Upacara adat petani Palembang untuk memohon kelancaran panen.',
    philosophy: 'Syukur kepada Tuhan dan keseimbangan dengan alam.',
    gallery: ['/images/tradition/sedekah-rame.jpg']
  },
  {
    id: 'riau',
    name: 'Bakar Tongkang',
    region: 'Riau',
    image: '/images/tradition/bakar-tongkang.jpg',
    desc: 'Festival masyarakat Tionghoa Bagan Siapiapi sebagai simbol tekad menetap.',
    philosophy: 'Rasa syukur, penghormatan leluhur, dan harapan rezeki.',
    gallery: ['/images/tradition/bakar-tongkang.jpg']
  },
  {
    id: 'jambi',
    name: 'Berserambahan',
    region: 'Jambi',
    image: '/images/tradition/berserambahan.jpg',
    desc: 'Prosesi adat lamaran dengan pantun dan pencak silat.',
    philosophy: 'Kesantunan, musyawarah, dan keharmonisan keluarga.',
    gallery: ['/images/tradition/berserambahan.jpg']
  },
  {
    id: 'bengkulu',
    name: 'Tabot',
    region: 'Bengkulu',
    image: '/images/tradition/tabot.jpg',
    desc: 'Tradisi mengenang Husein bin Ali yang berkembang menjadi budaya lokal.',
    philosophy: 'Keteguhan iman dan pelestarian sejarah.',
    gallery: ['/images/tradition/tabot.jpg']
  },
  {
    id: 'kepulauan-riau',
    name: 'Tepuk Tepung Tawar',
    region: 'Kepulauan Riau',
    image: '/images/tradition/tepuk-tepung-tawar.jpg',
    desc: 'Ritual adat Melayu untuk keselamatan dan keberkahan.',
    philosophy: 'Doa, kesucian niat, dan harapan kebahagiaan.',
    gallery: ['/images/tradition/tepuk-tepung-tawar.jpg']
  },
  {
    id: 'bangka-belitung',
    name: 'Buang Jong',
    region: 'Bangka Belitung',
    image: '/images/tradition/buang-jong.jpg',
    desc: 'Tradisi suku Sawang untuk memohon keselamatan melaut.',
    philosophy: 'Penghormatan terhadap alam laut.',
    gallery: ['/images/tradition/buang-jong.jpg']
  },
  {
    id: 'lampung',
    name: 'Cakak Pepadun',
    region: 'Lampung',
    image: '/images/tradition/cakak-pepadun.jpg',
    desc: 'Upacara pengangkatan pemimpin adat Lampung.',
    philosophy: 'Tanggung jawab, kepemimpinan, dan martabat.',
    gallery: ['/images/tradition/cakak-pepadun.jpg']
  },
  {
    id: 'jawa-barat',
    name: 'Ngeuyeuk Seureuh',
    region: 'Jawa Barat',
    image: '/images/tradition/ngeuyeuk-seureuh.jpg',
    desc: 'Upacara pra-nikah Sunda untuk memberi nasihat kepada calon pengantin.',
    philosophy: 'Keharmonisan dan kesiapan berumah tangga.',
    gallery: ['/images/tradition/ngeuyeuk-seureuh.jpg']
  },
  {
    id: 'jawa-tengah',
    name: 'Dodol Dawet',
    region: 'Jawa Tengah',
    image: '/images/tradition/dodol-dawet.jpg',
    desc: 'Tradisi syukuran masyarakat Jawa Tengah di bulan Suro.',
    philosophy: 'Rasa syukur dan berbagi rezeki.',
    gallery: ['/images/tradition/dodol-dawet.jpg']
  },
  {
    id: 'jawa-timur',
    name: 'Kasodo',
    region: 'Jawa Timur',
    image: '/images/tradition/kasodo.jpg',
    desc: 'Ritual masyarakat Tengger di Gunung Bromo.',
    philosophy: 'Syukur dan pengabdian kepada Sang Hyang Widhi.',
    gallery: ['/images/tradition/kasodo.jpg']
  },
  {
    id: 'jakarta',
    name: 'Nujuh Bulan',
    region: 'DKI Jakarta',
    image: '/images/tradition/nujuh-bulan.jpg',
    desc: 'Tradisi tujuh bulanan kehamilan.',
    philosophy: 'Doa keselamatan ibu dan anak.',
    gallery: ['/images/tradition/nujuh-bulan.jpg']
  },
  {
    id: 'banten',
    name: 'Kawalu',
    region: 'Banten',
    image: '/images/tradition/kawalu.jpg',
    desc: 'Upacara syukur masyarakat Baduy atas panen.',
    philosophy: 'Kesederhanaan dan ketaatan adat.',
    gallery: ['/images/tradition/kawalu.jpg']
  },
  {
    id: 'di-yogyakarta',
    name: 'Sekaten',
    region: 'DI Yogyakarta',
    image: '/images/tradition/sekaten.jpg',
    desc: 'Perayaan Maulid Nabi di Keraton.',
    philosophy: 'Syiar Islam dan budaya Jawa.',
    gallery: ['/images/tradition/sekaten.jpg']
  },
  {
    id: 'bali',
    name: 'Melasti',
    region: 'Bali',
    image: '/images/tradition/melasti.jpg',
    desc: 'Ritual penyucian umat Hindu menjelang Nyepi.',
    philosophy: 'Pembersihan lahir dan batin.',
    gallery: ['/images/tradition/melasti.jpg']
  },
  {
    id: 'ntb',
    name: 'Penangkapan Ikan Nyale',
    region: 'Nusa Tenggara Barat',
    image: '/images/tradition/penangkapan-ikan-nyale.jpg',
    desc: 'Tradisi menangkap nyale di Lombok.',
    philosophy: 'Kesuburan dan kebersamaan.',
    gallery: ['/images/tradition/penangkapan-ikan-nyale.jpg']
  },
  {
    id: 'ntt',
    name: 'Reba',
    region: 'Nusa Tenggara Timur',
    image: '/images/tradition/reba.jpg',
    desc: 'Upacara syukur menyambut tahun baru.',
    philosophy: 'Refleksi dan kebersamaan.',
    gallery: ['/images/tradition/reba.jpg']
  },
  {
    id: 'kalbar',
    name: 'Naik Dango',
    region: 'Kalimantan Barat',
    image: '/images/tradition/naik-dango.jpg',
    desc: 'Upacara syukur panen masyarakat Dayak.',
    philosophy: 'Hubungan manusia dan Tuhan.',
    gallery: ['/images/tradition/naik-dango.jpg']
  },
  {
    id: 'kalteng',
    name: 'Maniring Hinting',
    region: 'Kalimantan Tengah',
    image: '/images/tradition/maniring-hinting.jpg',
    desc: 'Upacara sakral Dayak Ngaju.',
    philosophy: 'Kekuatan spiritual dan adat.',
    gallery: ['/images/tradition/maniring-hinting.jpg']
  },
  {
    id: 'kalsel',
    name: 'Aruh Ganal',
    region: 'Kalimantan Selatan',
    image: '/images/tradition/aruh-ganal.jpg',
    desc: 'Pesta adat besar Dayak Meratus.',
    philosophy: 'Syukur dan penghormatan leluhur.',
    gallery: ['/images/tradition/aruh-ganal.jpg']
  },
  {
    id: 'kaltim',
    name: 'Mecaq Undat',
    region: 'Kalimantan Timur',
    image: '/images/tradition/mecaq-undat.jpg',
    desc: 'Upacara syukur panen Dayak Kenyah.',
    philosophy: 'Kebersamaan dan kerja keras.',
    gallery: ['/images/tradition/mecaq-undat.jpg']
  },
  {
    id: 'kalut',
    name: 'Iraw Tengkayu',
    region: 'Kalimantan Utara',
    image: '/images/tradition/iraw-tengkayu.jpg',
    desc: 'Festival adat suku Tidung.',
    philosophy: 'Syukur dan identitas budaya.',
    gallery: ['/images/tradition/iraw-tengkayu.jpg']
  },
  {
    id: 'sulut',
    name: 'Naik Rumah Baru',
    region: 'Sulawesi Utara',
    image: '/images/tradition/naik-rumah-baru.jpg',
    desc: 'Syukuran menempati rumah baru.',
    philosophy: 'Harapan hidup sejahtera.',
    gallery: ['/images/tradition/naik-rumah-baru.jpg']
  },
  {
    id: 'sulsel',
    name: 'Accera Kalompoang',
    region: 'Sulawesi Selatan',
    image: '/images/tradition/accera-kalompoang.jpg',
    desc: 'Pencucian pusaka Kerajaan Gowa.',
    philosophy: 'Kesucian dan penghormatan sejarah.',
    gallery: ['/images/tradition/accera-kalompoang.jpg']
  },
  {
    id: 'sultenggara',
    name: 'Rambu Solo',
    region: 'Sulawesi Tenggara',
    image: '/images/tradition/rambu-solo.jpg',
    desc: 'Upacara kematian Toraja.',
    philosophy: 'Penghormatan terakhir.',
    gallery: ['/images/tradition/rambu-solo.jpg']
  },
  {
    id: 'sulbar',
    name: 'Mokkufiwa Lopi',
    region: 'Sulawesi Barat',
    image: '/images/tradition/mokkufiwa-lopi.jpg',
    desc: 'Ritual nelayan Mandar sebelum berlayar.',
    philosophy: 'Keselamatan dan doa.',
    gallery: ['/images/tradition/mokkufiwa-lopi.jpg']
  },
  {
    id: 'sulteng',
    name: 'No Balia',
    region: 'Sulawesi Tengah',
    image: '/images/tradition/no-balia.jpg',
    desc: 'Ritual penyembuhan tradisional.',
    philosophy: 'Keseimbangan manusia dan alam.',
    gallery: ['/images/tradition/no-balia.jpg']
  },
  {
    id: 'gorontalo',
    name: 'Molonthalo',
    region: 'Gorontalo',
    image: '/images/tradition/molonthalo.jpg',
    desc: 'Upacara tujuh bulanan kehamilan.',
    philosophy: 'Keselamatan ibu dan anak.',
    gallery: ['/images/tradition/molonthalo.jpg']
  },
  {
    id: 'maluku',
    name: 'Suu Anaku',
    region: 'Maluku',
    image: '/images/tradition/suu-anaku.jpg',
    desc: 'Upacara perlindungan bayi suku Naulu.',
    philosophy: 'Kesucian dan perlindungan roh.',
    gallery: ['/images/tradition/suu-anaku.jpg']
  },
  {
    id: 'maluku-utara',
    name: 'Kololi Kie',
    region: 'Maluku Utara',
    image: '/images/tradition/kololi-kie.jpg',
    desc: 'Ritual mengelilingi Gunung Gamalama.',
    philosophy: 'Penghormatan alam dan leluhur.',
    gallery: ['/images/tradition/kololi-kie.jpg']
  },
  {
    id: 'papua',
    name: 'Munar Kabor-Indos',
    region: 'Papua',
    image: '/images/tradition/munar-kabor-indos.jpg',
    desc: 'Inisiasi kedewasaan pemuda Biak.',
    philosophy: 'Tanggung jawab dan kedewasaan.',
    gallery: ['/images/tradition/munar-kabor-indos.jpg']
  },
  {
    id: 'papua-barat',
    name: 'Wamendereow',
    region: 'Papua Barat',
    image: '/images/tradition/wamendereow.jpg',
    desc: 'Upacara pernikahan adat.',
    philosophy: 'Persatuan komunitas.',
    gallery: ['/images/tradition/wamendereow.jpg']
  },
  {
    id: 'papua-tengah',
    name: 'Karapao',
    region: 'Papua Tengah',
    image: '/images/tradition/karapao.jpg',
    desc: 'Inisiasi anak laki-laki Kamoro.',
    philosophy: 'Pendewasaan dan warisan budaya.',
    gallery: ['/images/tradition/karapao.jpg']
  },
  {
    id: 'papua-selatan',
    name: 'Bakar Batu',
    region: 'Papua Selatan',
    image: '/images/tradition/bakar-batu.jpg',
    desc: 'Tradisi memasak bersama untuk syukur.',
    philosophy: 'Kebersamaan dan solidaritas.',
    gallery: ['/images/tradition/bakar-batu.j3g']
  },
  {
    id: 'papua-pegunungan',
    name: 'Waya Hagat Abin',
    region: 'Papua Pegunungan',
    image: '/images/tradition/waya-hagat-abin.jpg',
    desc: 'Upacara inisiasi suku Dani.',
    philosophy: 'Pendewasaan dan tanggung jawab.',
    gallery: ['/images/tradition/waya-hagat-abin.jpg']
  },
  {
    id: 'papua-barat-daya',
    name: 'Buka Egek',
    region: 'Papua Barat Daya',
    image: '/images/tradition/buka-egek.jpg',
    desc: 'Tradisi pelestarian alam suku Moi.',
    philosophy: 'Keseimbangan manusia dan alam.',
    gallery: ['/images/tradition/buka-egek.jpg']
  }
];