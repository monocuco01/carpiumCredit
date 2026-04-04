import React from 'react';
import { Target, ShieldCheck, MapPin, Mail, Scale } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2540] border-t border-white/5 py-16 px-6 relative overflow-hidden">
      {/* Círculo de luz sutil en el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E5C100]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        <div className="grid md:grid-cols-4 gap-12 text-left">
          
          {/* Lado Izquierdo: Marca y Propuesta */}
          <div className="md:col-span-2 space-y-5 text-left">
            <h4 className="text-3xl font-black text-white uppercase tracking-tighter">
              Carpium<span className="text-[#E5C100]">Credit</span>
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm italic">
              "Dedicated to repairing your credit history and unlocking the financial opportunities you deserve through professional, personalized elite solutions."
            </p>
            <div className="flex items-center gap-3 pt-2">
                <div className="p-2.5 bg-[#001A33] rounded-lg border border-white/10 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-[#E5C100]" />
                </div>
                <div className="text-left">
                    <p className="text-white font-black text-sm tracking-tight">CROA Compliant</p>
                    <p className="text-[10px] text-gray-600 uppercase font-black">Credit Repair Organizations Act</p>
                </div>
            </div>
          </div>

          {/* Sección Media: Contacto Rápido */}
          <div className="space-y-4 text-left">
            <h5 className="text-[#E5C100] font-black uppercase tracking-widest text-xs mb-5">Quick Contact</h5>
            <div className="flex items-center gap-3 text-white/70 group">
              <Mail size={18} className="text-[#E5C100]/60 group-hover:text-[#E5C100]" />
              <p className="text-sm font-semibold">You@carpiumelitesolutionsllc.com</p>
            </div>
            <div className="flex items-center gap-3 text-white/70 group">
              <MapPin size={18} className="text-[#E5C100]/60 group-hover:text-[#E5C100]" />
              <p className="text-sm font-semibold">Rochester NY</p>
            </div>
            <div className="flex items-center gap-3 text-white/70 group">
              <Scale size={18} className="text-[#E5C100]/60 group-hover:text-[#E5C100]" />
              <p className="text-sm font-semibold">FICO Certified Partner</p>
            </div>
          </div>

          {/* Sección Derecha: Legal y Burós */}
          <div className="space-y-4 text-left">
            <h5 className="text-[#E5C100] font-black uppercase tracking-widest text-xs mb-5">Trust Partners</h5>
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-[#001A33] rounded-lg border border-white/10 hover:border-[#E5C100]/30 transition-all flex items-center gap-3">
                  <Target size={18} className="text-[#E5C100]" />
                  <span className="text-white/60 font-bold text-xs uppercase tracking-tight">EQUIFAX</span>
              </div>
              <div className="p-3 bg-[#001A33] rounded-lg border border-white/10 hover:border-[#E5C100]/30 transition-all flex items-center gap-3">
                  <Target size={18} className="text-[#E5C100]" />
                  <span className="text-white/60 font-bold text-xs uppercase tracking-tight">Experian</span>
              </div>
              <div className="p-3 bg-[#001A33] rounded-lg border border-white/10 hover:border-[#E5C100]/30 transition-all flex items-center gap-3">
                  <Target size={18} className="text-[#E5C100]" />
                  <span className="text-white/60 font-bold text-xs uppercase tracking-tight">TransUnion</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR: COPYRIGHT Y LEGAL --- */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-600 text-[11px] font-black uppercase tracking-widest">
            © {currentYear} Carpium Elite Solutions. <span className="text-white/20">All rights reserved.</span>
          </p>
          
          <div className="flex items-center gap-8 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
            {['Privacy Policy', 'Terms of Service', 'CROA Disclosure'].map((item, i) => (
              <a 
                key={i} 
                href="/legal" 
                className="hover:text-[#E5C100] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;