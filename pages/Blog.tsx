
import React from 'react';
import { Reveal } from '../components/Reveal';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Insights.</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                Expert takes on the shifting landscape of enterprise technology, design, and business strategy.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="flex gap-4 mb-2">
              <button className="px-6 py-2 rounded-full border border-slate-200 text-sm font-semibold hover:bg-slate-50">Filter by category</button>
            </div>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1} width="100%">
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 mb-8">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{post.category}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2 text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                    <span className="text-sm font-bold text-slate-800">{post.author}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 p-16 rounded-[3rem] bg-slate-50 text-center border border-slate-100">
          <Reveal>
            <h3 className="text-3xl font-bold mb-6">Never miss a beat.</h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto">Subscribe to our monthly briefing for a curated selection of insights and case studies delivered to your inbox.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <form className="max-w-md mx-auto flex gap-4">
              <input type="email" placeholder="work-email@company.com" className="flex-grow px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">Join</button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Blog;
