
import React from 'react';
import { Reveal } from '../components/Reveal';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Capabilities.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We provide deep technical expertise and strategic foresight to help enterprises overcome complex digital challenges.
            </p>
          </Reveal>
        </header>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <Reveal delay={0.1}>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                    Service Line 0{index + 1}
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{service.title}</h2>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">{service.description}</p>
                </Reveal>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-blue-600"></span> Problems Solved
                    </h4>
                    <ul className="space-y-3">
                      {service.problemsSolved.map((p, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2 italic">
                          "{p}"
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-green-500"></span> Expected Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-green-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Reveal delay={0.5}>
                  <div className="mt-12">
                    <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 w-fit hover:bg-slate-800 transition-all">
                      Consult with an expert <ArrowRight size={18} />
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="lg:w-1/2 w-full">
                <Reveal delay={0.4} width="100%">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
                    <img src={`https://picsum.photos/seed/${service.id}/1200/900`} className="w-full h-full object-cover" alt={service.title} />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
