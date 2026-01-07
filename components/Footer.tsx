
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-white mb-6 block">
            Nexus<span className="text-blue-500">Prime</span>
          </Link>
          <p className="text-sm leading-relaxed mb-8">
            Pioneering the future of enterprise intelligence. We build the systems that power the world's most innovative companies.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Capabilities</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Strategic Consulting</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Data Science & AI</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/blog" className="hover:text-white transition-colors">Insights Blog</Link></li>
            <li><Link to="/use-cases" className="hover:text-white transition-colors">Success Stories</Link></li>
            <li><Link to="/faqs" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Support Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2024 Nexus Prime Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <p className="flex items-center gap-2"><Mail size={14} /> contact@nexusprime.io</p>
          <p>San Francisco, CA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
