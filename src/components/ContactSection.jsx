import React from 'react';

const ContactSection = () => {
  const phoneNumber = "5855367084"; 
  const whatsappLink = `https://wa.me/1${phoneNumber}?text=Hola!%20Vi%20los%20resultados%20en%20la%20web%20y%20quiero%20mi%20análisis%20de%20crédito.`;
  const instagramLink = "https://www.instagram.com/carpium_credit/"; 

  return (
    <section id="contact" className="bg-[#001A33] py-24 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5C100]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO IZQUIERDA */}
          <div className="space-y-8 text-left">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-[#E5C100]/10 border border-[#E5C100]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#E5C100] text-[10px] font-black uppercase tracking-widest">Immediate Attention</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Talk to a <br />
                <span className="text-gray-500 italic">Specialist.</span>
              </h3>
            </div>
            
            <p className="text-gray-400 text-lg max-w-md leading-relaxed italic border-l-2 border-gray-800 pl-6 text-left">
              "Dedicated to repairing your credit history and unlocking the financial opportunities you deserve."
            </p>

            <div className="space-y-6 pt-4 text-left">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                   <span className="text-[#E5C100]">@</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-black">Email Us</p>
                  <p className="font-bold">You@carpiumelitesolutionsllc.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTONES DERECHA */}
          <div className="grid gap-6">
            {/* WHATSAPP */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] p-8 rounded-[30px] flex items-center justify-between transition-all hover:scale-[1.02] shadow-xl"
            >
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl">
                  {/* WhatsApp SVG Manual */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-black text-2xl tracking-tighter">WhatsApp Chat</h4>
                  <p className="text-white/80 text-sm font-medium">Instant Analysis</p>
                </div>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-8 rounded-[30px] flex items-center justify-between transition-all hover:scale-[1.02] shadow-xl"
            >
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl">
                  {/* Instagram SVG Manual */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-black text-2xl tracking-tighter">Instagram</h4>
                  <p className="text-white/80 text-sm font-medium">Daily Results</p>
                </div>
              </div>
            </a>

            {/* LLAMADA */}
            <div className="bg-[#0a2540] border border-white/5 p-8 rounded-[30px] flex items-center justify-between group hover:border-[#E5C100]/20 transition-all">
              <div className="flex items-center gap-6">
                <div className="bg-[#E5C100]/10 p-4 rounded-2xl border border-[#E5C100]/20 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E5C100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.81 12.81 0 0 0 2.81.62A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-black text-2xl tracking-tighter">Direct Call</h4>
                  <p className="text-[#E5C100] font-black text-xl tracking-widest pt-1">+1 {phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;