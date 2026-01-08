import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, MousePointer2, Info} from 'lucide-react';
import { PROVINCE_DATA } from '../data/languageData';
import LanguageDetailView from './LanguageDetailView';

const geoUrl = "/indonesia-province-simple.json";

const LanguageSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("DI. ACEH");
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-[#080808] rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {!showDetail ? (
          <motion.div
            key="map-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header (Sama seperti kode lama kamu) */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16 px-6 text-white">
              <div className="flex-1 text-left">
                <p className="text-yellow-500 font-bold tracking-[0.4em] mb-4 uppercase text-xs">Pusat Leksikon Nusantara</p>
                <h2 className="text-4xl md:text-7xl font-serif mb-6 leading-none tracking-tighter italic font-bold">
                  Harmoni <br/><span className="text-yellow-500 not-italic">718 Bahasa</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed max-w-lg font-sans">
                  Klik wilayah pada peta untuk melihat statistik bahasa ibu di setiap provinsi Nusantara.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <span className="text-4xl font-serif text-yellow-500 leading-none font-bold">718+</span>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2 font-bold font-sans">Bahasa Daerah</p>
                </div>
                <div className="bg-red-900/20 p-8 rounded-3xl border border-yellow-500/20 text-center">
                  <span className="text-4xl font-serif text-yellow-500 leading-none font-bold">1.340</span>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2 font-bold font-sans">Etnis Budaya</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 px-6 items-stretch font-sans">
              {/* MAP */}
              <div className="lg:col-span-8 bg-[#0c0c0c] rounded-[3rem] border border-white/5 relative shadow-inner overflow-hidden flex items-center justify-center min-h-[500px]">
                <div className="absolute top-6 left-8 flex items-center gap-2 text-yellow-500/30 text-[10px] uppercase font-bold tracking-widest z-10">
                  <MousePointer2 size={12} />
                  <span>Peta Interaktif (Klik Wilayah)</span>
                </div>
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 1000, center: [118, -2] }}
                  width={800} height={400} style={{ width: "100%", height: "auto" }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const name = geo.properties.Propinsi;
                        if (!name) return null;
                        const isSelected = selectedId === name;
                        return (
                          <Geography
                            key={geo.rsmKey} geography={geo}
                            onClick={() => setSelectedId(name)}
                            style={{
                              default: { fill: isSelected ? "#EAB308" : "#222", stroke: "#444", outline: "none", transition: "all 300ms" },
                              hover: { fill: "#EAB308", stroke: "#FFF", cursor: "pointer", outline: "none" },
                              pressed: { fill: "#CA8A04", outline: "none" }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              </div>

              {/* PANEL INFO */}
<div className="lg:col-span-4 h-full">
  <div className="bg-gradient-to-br from-red-950/20 to-[#111] p-10 rounded-[3rem] border border-yellow-500/30 h-full flex flex-col justify-between shadow-2xl relative">
    <div>
      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-yellow-500 rounded-2xl shadow-xl shadow-yellow-500/10">
          <Languages className="text-black" size={24} />
        </div>
        <div>
          <h3 className="text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Wilayah</h3>
          <p className="text-2xl font-serif text-white uppercase leading-tight font-bold">
            {PROVINCE_DATA[selectedId]?.displayName || selectedId}
          </p>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-2 font-sans">Jumlah Bahasa</p>
        <div className="flex items-baseline gap-2">
          <span className="text-8xl font-serif text-yellow-500 leading-none italic font-bold">
            {PROVINCE_DATA[selectedId]?.count || "0"}
          </span>
          <span className="text-white/40 italic text-xl font-serif">Ragam</span>
        </div>
      </div>

      {/* --- BAGIAN DESKRIPSI YANG DITAMBAHKAN --- */}
      <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 shadow-inner">
        <Info size={18} className="text-yellow-500 shrink-0 mt-1" />
        <p className="text-white/60 text-sm leading-relaxed italic font-sans">
          {PROVINCE_DATA[selectedId]?.fact || "Informasi dialek sedang dalam proses sinkronisasi."}
        </p>
      </div>
      {/* ------------------------------------------ */}
    </div>

    <button 
      onClick={() => setShowDetail(true)}
      className="w-full mt-10 py-5 bg-yellow-500 text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-xl shadow-yellow-500/10 font-sans"
    >
      Detail Bahasa Lokal
    </button>
  </div>
</div>
            </div>
          </motion.div>
        ) : (
          <LanguageDetailView 
            provinceId={selectedId} 
            onBack={() => setShowDetail(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSection;