
import React from 'react';
import { Reveal } from '../components/Reveal';
import { TEAM } from '../constants';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Team = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Minds.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the multidisciplinary team building the next era of enterprise technology.
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {TEAM.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.1} width="100%">
              <div className="group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 mb-10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">{member.role}</p>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed max-w-sm">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <section className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="bg-slate-900 text-white p-16 rounded-[4rem]">
            <Reveal>
              <h2 className="text-4xl font-bold mb-8">Join the mission.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">We are always looking for visionary engineers, designers, and strategists to join our growing global team. If you're passionate about solving hard problems at scale, let's talk.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <button className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-slate-100 transition-all">
                View Open Positions
              </button>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.1}>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Global presence, remote roots.</h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-8">
              {[
                { city: 'San Francisco', region: 'California, US' },
                { city: 'London', region: 'United Kingdom' },
                { city: 'Berlin', region: 'Germany' },
                { city: 'Tokyo', region: 'Japan' }
              ].map((loc, i) => (
                <Reveal key={i} delay={0.2 + (i * 0.1)}>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <p className="font-bold text-slate-900">{loc.city}</p>
                      <p className="text-sm text-slate-500">{loc.region}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.6} width="100%">
              <div className="mt-12 aspect-video rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                <Globe className="text-slate-300" size={64} />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
