
import profilePhoto from '../assets/profile-photo.png';
import { ExternalLink, Mail } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="card-surface p-8 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-2xl overflow-hidden border border-light-gray-border dark:border-slate-700 p-1 bg-white dark:bg-slate-800 transition-colors">
          <img
            alt="Professional portrait of developer"
            className="w-full h-full object-cover rounded-xl"
            src={profilePhoto}
          />
        </div>
        <div
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-soft-gold rounded-full border-4 border-white dark:border-slate-800 transition-colors"
          title="Available for work"
        ></div>
      </div>
      <h1 className="text-2xl font-bold text-deep-charcoal dark:text-white mb-1 tracking-tight">조맑은</h1>
      <p className="text-medium-gray dark:text-slate-400 font-medium text-[11px] tracking-wider uppercase mb-6 bg-silver-bg dark:bg-slate-700 px-4 py-1.5 rounded-full border border-light-gray-border dark:border-slate-600 transition-colors">
        Web Publisher &amp; Frontend Architect
      </p>
      <p className="text-sm font-normal text-medium-gray dark:text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed">
        15년간의 웹 퍼블리싱 경험을 바탕으로, 사용성과 완성도를 모두 고려한 UI를 구현합니다. React 기반의
        프론트엔드 개발과 체계적인 디자인 시스템 구축에 강점이 있습니다.
      </p>
      <div className="flex flex-wrap gap-3 justify-center w-full">
        <a
          className="inline-flex items-center gap-2 px-4 py-3 border border-light-gray-border dark:border-slate-600 rounded-xl hover:bg-silver-bg dark:hover:bg-slate-700 transition-all text-sm font-medium text-medium-gray dark:text-slate-400 hover:text-deep-charcoal dark:hover:text-white"
          href="https://jomalkeun.github.io/Lucid-UI-UX/?path=/docs/welcome-introduction--docs"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink aria-hidden="true" className="w-4 h-4" />
          UI 가이드
        </a>
        <a
          className="inline-flex items-center gap-2 px-4 py-3 border border-light-gray-border dark:border-slate-600 rounded-xl hover:bg-silver-bg dark:hover:bg-slate-700 transition-all text-sm font-medium text-medium-gray dark:text-slate-400 hover:text-deep-charcoal dark:hover:text-white"
          href="mailto:steady.seller.author@gmail.com"
        >
          <Mail aria-hidden="true" className="w-4 h-4" />
          이메일
        </a>
      </div>
    </div>
  );
}
