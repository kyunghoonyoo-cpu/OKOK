
import React from 'react';

const Contact: React.FC = () => {
  const contacts = [
    {
      label: 'Email',
      value: 'kyunghoon.yoo@gmail.com',
      href: 'mailto:kyunghoon.yoo@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Phone',
      value: '010-3936-9023',
      href: 'tel:01039369023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-teal-300 font-bold mb-2 uppercase tracking-widest">Connect</h3>
          <h2 className="text-5xl font-black mb-8 leading-tight">
            새로운 기회를<br />함께 만들고 싶습니다.
          </h2>
          <p className="text-lg text-teal-50/70 mb-12 max-w-md">
            협업 제안이나 궁금한 점이 있으시다면 언제든 편하게 연락 부탁드립니다. 변화와 성장의 여정에 함께하겠습니다.
          </p>
          
          <div className="space-y-6">
            {contacts.map((contact) => (
              <a 
                key={contact.label}
                href={contact.href}
                className="flex items-center group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-teal-500 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-teal-300 text-sm font-bold uppercase tracking-wider mb-1">{contact.label}</p>
                  <p className="text-2xl font-medium tracking-tight group-hover:text-teal-400 transition-colors">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-teal-100 mb-2">성함</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400" placeholder="이름" />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-100 mb-2">연락처</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400" placeholder="010-0000-0000" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-100 mb-2">메시지</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400" placeholder="메시지 내용을 입력하세요" />
            </div>
            <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-navy-teal font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-xl">
              메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
