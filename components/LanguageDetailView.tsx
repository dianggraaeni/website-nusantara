import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Quote, Map as MapIcon } from 'lucide-react';
import { LANGUAGE_DETAILS, PROVINCE_DATA } from '../data/languageData';

interface Props {
  provinceId: string;
  onBack: () => void;
}

const LanguageDetailView: React.FC<Props> = ({ provinceId, onBack }) => {
  const languages = LANGUAGE_DETAILS[provinceId] || [];
  const info = PROVINCE_DATA[provinceId];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-6 text-white"
    >
      {/* Tombol Kembali */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-yellow-500 hover:text-white transition-colors mb-8 font-bold uppercase text-[10px] tracking-[0.3em]"
      >
        <ArrowLeft size={16} /> Kembali ke Peta
      </button>

      {/* HEADER: Judul Wilayah */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl font-serif italic font-bold leading-none">
          {info?.displayName || provinceId}
        </h2>
        <p className="text-yellow-500 tracking-[0.4em] text-xs font-bold uppercase mt-4">
          Arsip Leksikon Lokal & Distribusi Bahasa
        </p>
      </div>

      {/* KONTEN UTAMA: Stack Vertikal */}
      <div className="flex flex-col gap-12">
        
        {/* 1. BAGIAN GAMBAR PETA (WIDE) */}
        <div className="w-full">
          <div className="relative rounded-[3rem] border border-white/10 overflow-hidden bg-white/5 shadow-2xl">
            <img 
              src={info?.image || "https://via.placeholder.com/1200x600"} 
              alt={provinceId}
              className="w-full h-auto object-contain max-h-[600px] mx-auto block"
              // Menggunakan object-contain agar seluruh isi peta dari PDF terlihat tanpa terpotong
            />
            {/* Overlay Gradient Halus */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080808]/40 to-transparent" />
          </div>
        </div>

        {/* 2. BAGIAN TABEL DATA */}
        <div className="w-full">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-yellow-500" size={24} />
            <h3 className="text-2xl font-serif italic">Daftar Bahasa Daerah</h3>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 font-sans">
                  <th className="py-4 px-6 text-yellow-500 uppercase text-[10px] tracking-widest font-bold w-16">No</th>
                  <th className="py-4 px-6 text-yellow-500 uppercase text-[10px] tracking-widest font-bold w-1/4">Nama Bahasa</th>
                  <th className="py-4 px-6 text-yellow-500 uppercase text-[10px] tracking-widest font-bold">Deskripsi Distribusi Wilayah</th>
                </tr>
              </thead>
              <tbody className="font-sans">
                {languages.length > 0 ? languages.map((lang, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                    <td className="py-6 px-6 text-white/30 font-mono text-sm align-top">{index + 1}</td>
                    <td className="py-6 px-6 font-bold text-white group-hover:text-yellow-500 transition-colors align-top">
                        {lang.name}
                    </td>
                    <td className="py-6 px-6 text-sm text-white/70 leading-relaxed italic font-light">
                        {lang.desc}
                    </td>
                  </tr>
                )) : (
                    <tr>
                        <td colSpan={3} className="py-20 text-center text-white/20 italic">Data belum tersedia untuk wilayah ini.</td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Sumber Data & Footer */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 bg-yellow-500/5 rounded-[2rem] border border-yellow-500/10">
            <div className="flex gap-4">
                <Quote className="text-yellow-500 shrink-0" size={20} />
                <p className="text-[11px] text-white/40 leading-relaxed italic max-w-2xl">
                <span className="text-yellow-500 font-bold not-italic font-sans">SUMBER:</span> <br/>
                Badan Pengembangan dan Pembinaan Bahasa. (2017). <span className="text-white/60">Bahasa dan Peta Bahasa di Indonesia.</span> Jakarta: Kementerian Pendidikan dan Kebudayaan Republik Indonesia.
                </p>
            </div>
            <div className="px-6 py-3 border border-white/10 rounded-full text-[9px] tracking-[0.2em] text-white/20 uppercase font-bold">
                Kemendikbud © 2024
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default LanguageDetailView;