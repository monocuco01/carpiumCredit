import React from 'react';
import { ChevronRight, Star, ShieldCheck, Briefcase } from 'lucide-react';
import photoOwner from '../../assets/owner.jpeg'; 

const Hero = () => {
  // Función para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-[#001A33]">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E5C100]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- TEXTO PRINCIPAL --- */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
          <div className="inline-flex items-center gap-2.5 bg-[#E5C100]/10 border border-[#E5C100]/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(229,193,0,0.1)]">
            <Star size={14} className="text-[#E5C100] fill-[#E5C100]" />
            <span className="text-[#E5C100] text-xs font-bold uppercase tracking-widest text-left">Personalized Elite Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter text-left">
            Rewrite Your <br />
            <span className="text-[#E5C100] italic font-light">Financial</span> Story.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed italic text-left">
            "At <span className="text-white font-semibold">Carpium</span>, we don't just repair credit; we provide the strategic blueprint to unlock the financial future you've worked for."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* BOTÓN 1: A CONTACTO */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#E5C100] text-[#001A33] px-10 py-4.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-yellow-500 transition-all shadow-[0_10px_30px_rgba(229,193,0,0.25)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              Start Your Journey
              <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* BOTÓN 2: AL PROCESO */}
            <button 
              onClick={() => scrollToSection('process')}
              className="border-2 border-gray-700 text-white px-10 py-4.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white transition-all cursor-pointer"
            >
              View Our Process
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-gray-800/60 max-w-lg text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#0a2540] rounded-xl border border-gray-800">
                <ShieldCheck size={22} className="text-[#E5C100]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-lg leading-tight">CROA</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Compliant</span>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-gray-800 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#0a2540] rounded-xl border border-gray-800">
                <Briefcase size={22} className="text-[#E5C100]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-lg leading-tight">Expert</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Consultation</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- PARTE VISUAL: FOTO DEL DUEÑO --- */}
        <div className="relative animate-in fade-in zoom-in duration-1000 lg:pl-10">
          <div className="relative bg-[#0a2540] p-2 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
            <img 
              src={photoOwner} 
              alt="Carpium Elite Solutions Owner" 
              className="w-full h-auto object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#001A33] to-transparent rounded-b-[20px]"></div>

            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#001A33]/80 backdrop-blur-sm rounded-xl border border-white/5 shadow-xl flex items-center justify-between">
              <div className="text-left">
                <h4 className="text-white font-extrabold text-lg tracking-tight">JACOBO CARPIO</h4>
                <p className="text-[#E5C100] text-xs font-bold uppercase tracking-widest mt-1">Founding Partner & Senior Consultant</p>
              </div>
              <div className="w-10 h-10 bg-[#E5C100]/10 rounded-full flex items-center justify-center border border-[#E5C100]/20">
                <ShieldCheck size={20} className="text-[#E5C100]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;