import React, { useState } from 'react';
import { Star, Quote, TrendingUp, Maximize2, X, Play, ShieldCheck, Target, UserCheck, Image as ImageIcon } from 'lucide-react';

// --- IMPORTACIÓN DE FOTOS DE RESULTADOS ---
import img1 from '../assets/results/1.jpeg';
import img2 from '../assets/results/2.jpeg';
import img3 from '../assets/results/3.jpeg';
import img4 from '../assets/results/4.jpeg';
import img5 from '../assets/results/5.jpeg';
import img6 from '../assets/results/6.jpeg';
import img7 from '../assets/results/7.jpeg';
import img8 from '../assets/results/8.jpeg';
import img9 from '../assets/results/9.jpeg';
import img10 from '../assets/results/10.jpeg';
import img11 from '../assets/results/11.jpeg';
import img12 from '../assets/results/12.jpeg';
import ss1 from '../assets/ss1.jpeg';
const testimonials = [
  {
    name: "Kelvison", 
    location: "Rochester, NY", 
    before: "540", 
    after: "710",
    text: "Carpium changed my life. After 4 months of their dispute process, my score jumped 170 points and I just closed on my first home!",
    image: "https://collection.cloudinary.com/dziwyqnqk/12e6a30b903a34940b4b7e557a01fb70",
    videoEmbedUrl: "https://www.youtube.com/embed/DkPhnpVZQ8c", // Formato embed para Shorts
    type: "video"
  },
  {
    name: "Marcos Aneudys", 
    location: "Rochester, NY", 
    before: "580", 
    after: "745",
    text: "They removed 8 negative items that I couldn't get off my report for years. Highly recommended for anyone serious about their finances.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop", // Foto Hombre
    resultImage: ss1, // Mostramos la imagen de resultado aquí
    type: "image"
  }
];

const resultImages = [
  { id: 1, src: img1 }, { id: 2, src: img2 }, { id: 3, src: img3 }, { id: 4, src: img4 },
  { id: 5, src: img5 }, { id: 6, src: img6 }, { id: 7, src: img7 }, { id: 8, src: img8 },
  { id: 9, src: img9 }, { id: 10, src: img10 }, { id: 11, src: img11 }, { id: 12, src: img12 },
];

const SocialProof = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollImages = [...resultImages, ...resultImages];

  return (
    <section id="testimonials" className="bg-[#001A33] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* A. VIDEO MASTER (Izquierda) */}
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-3 bg-[#E5C100]/10 border border-[#E5C100]/20 px-5 py-2 rounded-full">
              <Play size={22} className="text-[#E5C100] fill-[#E5C100]" />
              <span className="text-[#E5C100] text-sm font-extrabold uppercase tracking-widest">Proven Strategy</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight text-left">
              Our Methodology <br/><span className="text-gray-500 italic">In Action.</span>
            </h3>

            <div className="bg-[#0a2540] p-4 rounded-3xl border border-white/5 shadow-2xl relative">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/5">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/0wQM0VF3wuU" 
                  title="Main Evidence"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* B. LISTA DE TESTIMONIOS (Derecha) */}
          <div className="lg:col-span-3 space-y-12">
            <div className="max-w-xl text-left mb-16">
              <h2 className="text-[#E5C100] font-bold tracking-[0.3em] uppercase text-xs mb-4 italic">Social Proof</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight text-left">
                  Real People.<span className="text-gray-500 italic"> Real Results.</span>
              </h3>
            </div>

            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} onZoomImage={setSelectedImage} />
            ))}
          </div>
        </div>

        {/* --- CARRUSEL INFERIOR --- */}
        <div className="relative pt-24 border-t border-gray-800/60">
          <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Proof is in The Numbers.</h3>
          </div>

          <div className="flex overflow-hidden relative group">
            <div className="flex animate-scroll gap-6 py-4">
              {scrollImages.map((img, index) => (
                <div 
                  key={index} 
                  className="relative flex-none w-[280px] h-[380px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-all hover:scale-[1.02]"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img.src} alt="Result" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL PARA IMAGEN GRANDE --- */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-6 right-6 text-white"><X size={28} /></button>
            <img src={selectedImage.src || selectedImage} className="max-w-full max-h-[85vh] object-contain rounded-2xl" />
        </div>
      )}
    </section>
  );
};

const TestimonialCard = ({ testimonial: t, onZoomImage }) => (
    <div className="bg-[#0a2540] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl space-y-8 text-left">
      <div className="flex items-center gap-5">
        <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#E5C100]/20" />
        <div className="text-left">
          <h4 className="text-white font-black text-xl tracking-tight">{t.name}</h4>
          <p className="text-[#E5C100] text-[10px] font-black uppercase tracking-[0.2em]">{t.location}</p>
        </div>
      </div>

      <div className="relative border-l-2 border-gray-800 pl-6 italic text-left">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">"{t.text}"</p>
      </div>

      {/* CONTENIDO MULTIMEDIA (VIDEO O IMAGEN) */}
      <div className="bg-[#001A33] p-3 rounded-2xl border border-white/5 shadow-inner relative overflow-hidden">
          <div className="absolute -top-3 -left-3 bg-[#E5C100] text-[#001A33] px-3 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-lg">
              {t.type === 'video' ? <UserCheck size={14} /> : <ImageIcon size={14} />}
              <span className="text-[10px] font-black uppercase tracking-widest">
                {t.type === 'video' ? 'Verified Client Video' : 'Verified Deletion Letter'}
              </span>
          </div>

          {t.type === 'video' ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe className="absolute inset-0 w-full h-full" src={t.videoEmbedUrl} frameBorder="0" allowFullScreen></iframe>
            </div>
          ) : (
            <div 
              className="relative aspect-video w-full overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => onZoomImage({ src: t.resultImage })}
            >
              <img src={t.resultImage} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" alt="Result" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-[#E5C100]" size={32} />
              </div>
            </div>
          )}
      </div>

      <div className="bg-[#001A33] p-5 rounded-2xl flex items-center justify-around border border-white/5">
        <div className="text-center">
          <p className="text-[10px] text-gray-500 uppercase font-black mb-1.5">Before</p>
          <span className="text-red-400 font-black text-2xl">{t.before}</span>
        </div>
        <TrendingUp size={24} className="text-[#E5C100] opacity-50" />
        <div className="text-center">
          <p className="text-[10px] text-gray-500 uppercase font-black mb-1.5">After</p>
          <span className="text-green-400 font-black text-2xl">{t.after}</span>
        </div>
      </div>
    </div>
);

export default SocialProof;