
import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. A Nexus Prime strategist will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Let's Talk.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, we're ready to start the conversation.
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Email us</h4>
                    <p className="text-slate-600 mb-1">General Inquiries: hello@nexusprime.io</p>
                    <p className="text-slate-600">Sales & Partnerships: sales@nexusprime.io</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Call us</h4>
                    <p className="text-slate-600 mb-1">Mon - Fri, 9am - 6pm PST</p>
                    <p className="text-slate-900 font-bold text-lg">+1 (555) 902-3456</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Visit us</h4>
                    <p className="text-slate-600 leading-relaxed">
                      101 California St, Suite 2710<br />
                      San Francisco, CA 94111<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Request a demo</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">See how our Enterprise Suite can transform your specific workflow with a personalized walk-through.</p>
                <button className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">
                  Schedule Demo
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2} width="100%">
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-10">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Jane Doe" 
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="jane@company.com" 
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Company / Organization</label>
                    <input 
                      type="text" 
                      placeholder="Nexus Tech" 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">How can we help?</label>
                    <textarea 
                      required
                      rows={5} 
                      placeholder="Tell us about your project..." 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-100">
                    Send Inquiry <Send size={20} />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
