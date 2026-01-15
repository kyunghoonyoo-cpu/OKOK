
import React from 'react';

const About: React.FC = () => {
  const values = [
    { title: '사랑', desc: '사람과 일을 향한 따뜻한 마음', icon: '❤️' },
    { title: '정직', desc: '신뢰의 근간이 되는 투명함', icon: '✨' },
    { title: '노력', desc: '멈추지 않는 성장의 원동력', icon: '🔥' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-teal-600 font-bold mb-2">Introduction</h3>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            도전을 두려워하지 않는<br />기획 전문가 유경훈입니다.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            "일단 해보자!"라는 슬로건 아래 지난 20여 년간 플랜트 설계, 영업, 그리고 기획 분야에서 끊임없이 변화를 시도해 왔습니다. 
            변화는 곧 성장이라 믿으며, 정직과 노력을 바탕으로 사람을 향한 사랑을 실천하고자 합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{v.icon}</div>
                <h4 className="font-bold text-slate-900">{v.title}</h4>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Yoo Kyung Hoon" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold -rotate-12 shadow-xl border-4 border-white">
            <span className="text-center text-sm leading-tight">Expertise<br/>21+ Years</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
