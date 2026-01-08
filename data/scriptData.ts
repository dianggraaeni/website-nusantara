export interface ScriptData {
  id: string;
  name: string;
  origin: string;
  char: string;
  description: string;
  history: string;
  function: string;
  philosophy: string;
  image: string;
}

export const scripts: ScriptData[] = [
  {
    id: 'aksara-jawa',
    name: 'Aksara Jawa',
    origin: 'Jawa Tengah & DI Yogyakarta',
    char: 'ꦗ',
    description: 'Dikenal juga sebagai Hanacaraka, merupakan aksara turunan Brahmi yang digunakan untuk menulis bahasa Jawa.',
    history: 'Berkembang dari aksara Kawi pada abad ke-14 dan mencapai bentuk modernnya pada masa Kesultanan Mataram.',
    function: 'Penulisan naskah keraton (serat), sastra Jawa, dan muatan lokal pendidikan.',
    philosophy: 'Panguripan (Kehidupan), keseimbangan antara manusia (jagad alit) dan semesta (jagad ageng).',
    image: '/images/script/aksara-jawa.jpg'
  },
  {
    id: 'aksara-sunda',
    name: 'Aksara Sunda',
    origin: 'Jawa Barat',
    char: 'ᮞ',
    description: 'Aksara Sunda Baku merupakan hasil standarisasi dari aksara Sunda Kuno.',
    history: 'Berasal dari aksara Pallawa yang berkembang di wilayah Tarumanegara dan Galuh.',
    function: 'Penulisan prasasti, naskah kuno, dan identitas visual daerah Jawa Barat.',
    philosophy: 'Kaganga, melambangkan keluhuran budi dan kemandirian berpikir.',
    image: '/images/script/aksara-sunda.jpg'
  },
  {
    id: 'aksara-bali',
    name: 'Aksara Bali',
    origin: 'Bali',
    char: 'ᬩ',
    description: 'Aksara yang masih aktif digunakan dalam kehidupan adat dan keagamaan masyarakat Bali.',
    history: 'Turunan langsung dari aksara Kawi dengan bentuk yang lebih kompleks dan dekoratif.',
    function: 'Penulisan lontar, mantra suci, kidung, dan papan nama jalan.',
    philosophy: 'Aksara Modre, simbol spiritual dan kekuatan suci.',
    image: '/images/script/aksara-bali.jpg'
  },
  {
    id: 'aksara-bugis',
    name: 'Aksara Bugis',
    origin: 'Sulawesi Selatan',
    char: '𑻠',
    description: 'Dikenal sebagai Lontara, memiliki bentuk tegas dan bersudut.',
    history: 'Digunakan untuk mencatat sejarah, hukum adat, dan epik I La Galigo.',
    function: 'Pencatatan silsilah, perjanjian, dan hukum adat.',
    philosophy: 'Sulapa Eppa, empat unsur pembentuk karakter manusia.',
    image: '/images/script/aksara-bugis.jpg'
  },
  {
    id: 'aksara-kawi',
    name: 'Aksara Kawi',
    origin: 'Nusantara Kuno',
    char: 'ꦑ',
    description: 'Aksara kuno yang menjadi induk berbagai aksara di Nusantara.',
    history: 'Digunakan sejak abad ke-8 pada prasasti kerajaan Hindu-Buddha.',
    function: 'Penulisan prasasti batu dan logam.',
    philosophy: 'Simbol kejayaan intelektual dan peradaban awal Nusantara.',
    image: '/images/script/aksara-kawi.jpg'
  },
  {
    id: 'aksara-buda',
    name: 'Aksara Buda',
    origin: 'Jawa Tengah & Jawa Timur',
    char: '𑗉',
    description: 'Varian aksara Kawi yang digunakan dalam teks religius.',
    history: 'Digunakan oleh komunitas keagamaan Hindu-Buddha.',
    function: 'Penulisan mantra dan teks spiritual.',
    philosophy: 'Ketenangan batin dan kesucian jiwa.',
    image: '/images/script/aksara-buda.jpg'
  },
  {
    id: 'aksara-batak',
    name: 'Aksara Batak',
    origin: 'Sumatera Utara',
    char: 'ᯂ',
    description: 'Dikenal sebagai Surat Batak dengan beragam varian.',
    history: 'Digunakan oleh masyarakat Batak dalam pustaha.',
    function: 'Penulisan ilmu pengobatan, mantra, dan silsilah.',
    philosophy: 'Keseimbangan hubungan manusia, leluhur, dan alam.',
    image: '/images/script/aksara-batak.jpg'
  },
  {
    id: 'aksara-pegon',
    name: 'Aksara Pegon',
    origin: 'Jawa & Madura',
    char: 'ڮ',
    description: 'Huruf Arab yang dimodifikasi untuk bahasa lokal.',
    history: 'Muncul sebagai bentuk adaptasi Islam ke budaya Nusantara.',
    function: 'Penulisan kitab kuning dan sastra pesantren.',
    philosophy: 'Akulturasi agama dan budaya.',
    image: '/images/script/aksara-pegon.jpg'
  },
  {
    id: 'aksara-rejang',
    name: 'Aksara Rejang',
    origin: 'Bengkulu',
    char: 'ꤲ',
    description: 'Bagian dari keluarga aksara Kaganga.',
    history: 'Digunakan oleh masyarakat Rejang di wilayah hulu sungai.',
    function: 'Surat-menyurat dan naskah adat.',
    philosophy: 'Ketahanan budaya dan identitas lokal.',
    image: '/images/script/aksara-rejang.jpg'
  },
  {
    id: 'aksara-lampung',
    name: 'Aksara Lampung',
    origin: 'Lampung',
    char: '꥚',
    description: 'Dikenal sebagai Had Lampung.',
    history: 'Termasuk keluarga aksara Kaganga.',
    function: 'Penulisan sastra dan adat Lampung.',
    philosophy: 'Kehormatan keluarga dan adat piil pesenggiri.',
    image: '/images/script/aksara-lampung.jpg'
  },
  {
    id: 'aksara-makassar',
    name: 'Aksara Makassar',
    origin: 'Sulawesi Selatan',
    char: '𑻱',
    description: 'Dikenal sebagai Ukiri’ Jangang-jangang.',
    history: 'Digunakan oleh Kerajaan Gowa dan Tallo.',
    function: 'Pencatatan sejarah dan administrasi kerajaan.',
    philosophy: 'Kebebasan dan kejayaan maritim.',
    image: '/images/script/aksara-makassar.jpg'
  },
  {
    id: 'aksara-kerinci',
    name: 'Aksara Kerinci (Incung)',
    origin: 'Jambi',
    char: '𑜑',
    description: 'Aksara Incung khas masyarakat Kerinci.',
    history: 'Digunakan dalam lingkungan adat dan sastra lokal.',
    function: 'Identitas budaya dan penulisan adat.',
    philosophy: 'Warisan leluhur masyarakat pegunungan.',
    image: '/images/script/aksara-kerinci-incung.jpg'
  }
];
