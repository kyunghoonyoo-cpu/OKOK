
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with abstract elements */}
      <div className="absolute inset-0 bg-navy-teal">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.1" />
            <circle cx="20" cy="30" r="15" fill="white" fillOpacity="0.05" />
            <circle cx="80" cy="70" r="25" fill="white" fillOpacity="0.05" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-teal-300 font-medium tracking-widest uppercase mb-4 animate-fade-in">
          변화를 즐기는 자유로운 영혼
        </h2>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
          유경훈
        </h1>
        <p className="text-xl md:text-3xl text-slate-200 font-light italic mb-12">
          "일단 해보자!"
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-4 bg-white text-navy-teal font-bold rounded-full hover:bg-teal-50 transition-all transform hover:scale-105 shadow-xl"
          >
            포트폴리오 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
