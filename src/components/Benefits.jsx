import React from 'react';
import { Home, Car, BarChart3, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: <Home size={32} className="text-[#E5C100]" />,
    title: "Unlock Home Ownership",
    desc: "Stop renting and start owning. A higher score qualifies you for the best mortgage rates and lower down payments.",
    tag: "Mortgage Ready"
  },
  {
    icon: <Car size={32} className="text-[#E5C100]" />,
    title: "Lower Auto Loan Rates",
    desc: "Save thousands of dollars in interest over the life of your vehicle loan with a tier-one credit status.",
    tag: "Drive Better"
  },
  {
    icon: <BarChart3 size={32} className="text-[#E5C100]" />,
    title: "Access Business Capital",
    desc: "Secure the funding you need to scale your business or launch a new venture with professional credit backing.",
    tag: "Business Growth"
  }
];

const Benefits = () => {
  return (
    <section id="services" className="bg-[#051f38] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#E5C100] font-bold tracking-[0.3em] uppercase text-xs mb-4 italic">The Rewards</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Benefits of Repairing <br />
              <span className="text-gray-500 italic font-light">Your Credit Today</span>
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-sm border-l border-gray-700 pl-6 hidden md:block italic">
            "A higher credit score isn't just a number, it's the key to your financial freedom."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#001A33] p-10 rounded-2xl border border-white/5 hover:border-[#E5C100]/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full shadow-2xl"
            >
              {/* Efecto de luz al pasar el mouse */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E5C100]/5 rounded-full blur-3xl group-hover:bg-[#E5C100]/10 transition-colors"></div>

              <div>
                <div className="mb-8 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-[#E5C100]/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E5C100] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
                  {item.desc}
                </p>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  {item.tag}
                </span>
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-[#E5C100] group-hover:border-[#E5C100] transition-all">
                   <ArrowUpRight size={14} className="text-gray-500 group-hover:text-[#001A33]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;