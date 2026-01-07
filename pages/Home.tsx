
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Shield, Rocket, Layers, Search, DraftingCompass, Cpu, TrendingUp } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SERVICES, TEAM, PROCESS_STEPS } from '../constants';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                The Next Generation of Business Intelligence
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Scale your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">innovation engine.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Nexus Prime delivers high-performance digital architectures and enterprise-grade consulting to transform how the world's leading companies operate.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="flex flex-col sm:row gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                  Book Strategy Audit <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-full font-semibold border border-slate-200 hover:bg-slate-50 transition-all text-center">
                  Capabilities
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.6} width="100%">
            <div className="relative group">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Modern office workspace" className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl shadow-2xl border border-white hidden sm:block animate-float">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Efficiency delta</p>
                    <p className="text-2xl font-black text-slate-900">+42.8%</p>
                  </div>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Team member" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">+2k</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Engineered for absolute reliability.</h2>
          </Reveal>
          
          <div className="bento-grid">
            {/* Large Card */}
            <div className="col-span-12 lg:col-span-8 glow-card bg-slate-900 text-white p-12 rounded-[2.5rem] flex flex-col justify-between h-[500px]">
              <div>
                <div className="w-14 h-14 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
                  <Layers size={28} />
                </div>
                <h3 className="text-4xl font-bold mb-6">Decoupled Architecture</h3>
                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Our core systems are built on microservices that communicate via high-speed asynchronous events, ensuring your business stays online even during massive scaling events.
                </p>
              </div>
              <div className="flex items-center gap-8 pt-8 border-t border-slate-800">
                <div>
                  <p className="text-sm font-bold text-blue-500">Uptime</p>
                  <p className="text-2xl font-bold">99.999%</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-500">Latency</p>
                  <p className="text-2xl font-bold">&lt;15ms</p>
                </div>
              </div>
            </div>

            {/* Square Card 1 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glow-card bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-[500px]">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero-Trust Protocol</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                Identity-driven security that validates every request, every time. Protection that moves at the speed of your enterprise.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                  <span>Security Score</span>
                  <span className="text-green-500">A+ Verified</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Square Card 2 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glow-card bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-[500px]">
              <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mb-8">
                <Rocket size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Deployment</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                Automatic multi-region synchronization. Your data lives exactly where your users are, with sub-millisecond propagation.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Another Large Card */}
            <div className="col-span-12 lg:col-span-8 glow-card bg-blue-600 text-white p-12 rounded-[2.5rem] flex flex-col justify-between h-[500px]">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-md">
                  <h3 className="text-4xl font-bold mb-6">Real-time Data Intelligence</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Move from historical reporting to predictive analytics. Our AI layers ingest millions of events to give you the competitive edge before the market shifts.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                  <TrendingUp size={64} className="text-blue-200" />
                </div>
              </div>
              <Link to="/use-cases" className="group flex items-center gap-3 text-lg font-bold">
                Learn how we did it for GlobalPay <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Process */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">How we work.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Our proven methodology ensures a seamless transition from legacy complexity to modern agility.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-slate-200 z-0"></div>
            
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={i} delay={0.1 * i} width="100%">
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center mb-8 text-blue-600 group hover:bg-blue-600 hover:text-white transition-all duration-500">
                    {step.icon === 'Search' && <Search size={32} />}
                    {step.icon === 'DraftingCompass' && <DraftingCompass size={32} />}
                    {step.icon === 'Cpu' && <Cpu size={32} />}
                    {step.icon === 'TrendingUp' && <TrendingUp size={32} />}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">0{i+1}. {step.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Condensed) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tailored Solutions.</h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-slate-600">Deep technical expertise meeting strategic foresight.</p>
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 group border-b-2 border-transparent hover:border-blue-600 transition-all pb-1">
                Explore all services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={0.1 * index} width="100%">
                <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {index === 0 ? <Layers size={28} /> : index === 1 ? <TrendingUp size={28} /> : <Shield size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-10">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services`} className="text-sm font-bold text-slate-900 flex items-center gap-2 group/link">
                    Case Study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-white">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight">The future is <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">modular.</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">Join the next wave of enterprise leaders who have chosen resilience over complexity.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl">
                Get Started
              </Link>
              <Link to="/team" className="text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Meet the Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
