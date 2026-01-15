
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '현재 - 15년차',
      title: '기획 업무 총괄',
      category: 'Planning',
      desc: '비즈니스 전략 수립 및 프로세스 혁신 주도. 15년간의 기획 경험을 통해 복잡한 문제를 단순화하고 효율적인 솔루션을 제시합니다.',
      color: 'bg-teal-600'
    },
    {
      period: '3년',
      title: '플랜트 국내/해외 영업',
      category: 'Sales',
      desc: '다양한 환경의 시장 분석과 고객 니즈 파악을 통한 최적의 플랜트 기자재 공급 제안 및 계약 성사.',
      color: 'bg-teal-500'
    },
    {
      period: '3년',
      title: '플랜트 기자재 설계',
      category: 'Engineering',
      desc: '기초 설계 및 기계 계산(Mechanical Calculation) 기반의 정밀한 플랜트 기자재 설계 업무 수행.',
      color: 'bg-teal-400'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-teal-600 font-bold mb-2 uppercase tracking-widest">Milestones</h3>
        <h2 className="text-4xl font-black text-slate-900">활동 및 주요 성과</h2>
      </div>
      
      <div className="relative border-l-2 border-teal-100 ml-4 md:ml-0 md:left-1/2">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`mb-16 relative w-full md:w-1/2 ${
            idx % 2 === 0 ? 'md:-translate-x-[100%] md:pr-12' : 'md:pl-12'
          }`}>
            {/* Dot on the timeline */}
            <div className="absolute top-0 w-8 h-8 rounded-full border-4 border-white bg-teal-600 shadow-lg left-[-17px] md:left-auto md:right-[-17px]" 
              style={idx % 2 !== 0 ? { left: '-17px' } : {}} 
            />
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                {exp.period}
              </span>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h4>
              <p className="text-slate-500 mb-4 font-medium">{exp.category}</p>
              <p className="text-slate-600 leading-relaxed italic border-l-2 border-teal-100 pl-4">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-navy-teal rounded-[3rem] text-white text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h4 className="text-2xl font-bold mb-4">"일단 해보자!"</h4>
        <p className="text-teal-100/80 max-w-lg mx-auto leading-relaxed">
          어떠한 프로젝트든 주저하지 않고 실행에 옮기며 실질적인 성과를 만들어내는 것이 저의 가장 큰 경쟁력입니다.
        </p>
      </div>
    </div>
  );
};

export default Experience;
