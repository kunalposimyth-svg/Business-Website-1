
import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

// Added key?: React.Key to prop types to resolve TS errors when mapping over FAQS
const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={index * 0.1} width="100%">
      <div className="border-b border-slate-200 last:border-0 py-8">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors"
        >
          <span className="text-2xl font-bold text-slate-900 hover:text-inherit">{question}</span>
          <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? <Minus className="text-blue-600" /> : <Plus />}
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

const FAQs = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-24 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Common Inquiries.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-600 leading-relaxed">
              Transparency is at our core. Here are some of the most common questions about our partnership model.
            </p>
          </Reveal>
        </header>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} {...faq} index={idx} />
          ))}
        </div>

        <div className="mt-32 p-12 glass border border-slate-200 rounded-3xl text-center">
          <Reveal>
            <h4 className="text-xl font-bold mb-4">Still have questions?</h4>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 mb-8">Can't find the answer you're looking for? Reach out directly and we'll get back to you within 24 hours.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="mailto:support@nexusprime.io" className="text-blue-600 font-bold hover:underline text-lg underline-offset-4">
              Contact Support Support Team
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
