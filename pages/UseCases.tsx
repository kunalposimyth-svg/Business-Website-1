
import React from 'react';
import { Reveal } from '../components/Reveal';
import { USE_CASES } from '../constants';
import { ArrowRight, Building2, BarChart3, Clock } from 'lucide-react';

const UseCases = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Success Stories.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Real problems met with real solutions. Explore how we've helped global leaders redefine their digital boundaries.
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {USE_CASES.map((uc, index) => (
            <Reveal key={uc.id} delay={index * 0.2} width="100%">
              <div className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img src={uc.imageUrl} alt={uc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">{uc.category}</span>
                    <span className="text-sm font-semibold text-blue-600">{uc.client}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{uc.title}</h3>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Challenge</p>
                        <p className="text-slate-700 leading-relaxed">{uc.challenge}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Solution</p>
                        <p className="text-slate-700 leading-relaxed">{uc.solution}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                        <BarChart3 size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Impact</p>
                        <p className="text-slate-900 font-bold leading-relaxed">{uc.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 pb-10">
                  <button className="w-full py-4 rounded-xl border border-slate-200 font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                    Read Detailed Report <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
