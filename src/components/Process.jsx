import React from 'react';
import { Search, Scale, Target, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="text-[#E5C100]" size={28} />,
    title: "1. Analysis",
    desc: "We perform a deep dive into your credit reports from all three bureaus to identify errors and negative items."
  },
  {
    icon: <Scale className="text-[#E5C100]" size={28} />,
    title: "2. Dispute",
    desc: "Our experts challenge inaccurate information using consumer protection laws to get them removed."
  },
  {
    icon: <Target className="text-[#E5C100]" size={28} />,
    title: "3. Optimize",
    desc: "We provide strategic guidance on debt-to-income ratios and credit building to boost your score further."
  },
  {
    icon: <ShieldCheck className="text-[#E5C100]" size={28} />,
    title: "4. Monitoring",
    desc: "Continuous tracking of your progress to ensure your credit health stays protected and growing."
  }
];

const Process = () => {
  return (
    <section id="process" className="bg-[#001A33] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-20">
          <h2 className="text-[#E5C100] font-bold tracking-[0.3em] uppercase text-xs mb-4">How we work</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Your Roadmap to <br/><span className="text-gray-500">Credit Success</span></h3>
        </div>

        {/* Línea de Tiempo / Steps */}
        <div className="relative">
          {/* Línea conectora (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group text-center space-y-6">
                {/* Icono con Círculo */}
                <div className="w-20 h-20 mx-auto bg-[#0a2540] border-2 border-gray-800 rounded-full flex items-center justify-center group-hover:border-[#E5C100] transition-all duration-500 shadow-xl relative">
                   <div className="absolute inset-0 bg-[#E5C100]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   {step.icon}
                </div>
                
                {/* Contenido */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón de Acción Inferior */}
        <div className="mt-20 text-center">
            <button className="border-b-2 border-[#E5C100] text-[#E5C100] pb-1 font-bold uppercase text-xs tracking-[0.2em] hover:text-white hover:border-white transition-all">
                Learn more about our methodology
            </button>
        </div>
      </div>
    </section>
  );
};

export default Process;