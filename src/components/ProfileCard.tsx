
export function ProfileCard() {
  return (
    <div className="card-surface p-8 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-2xl overflow-hidden border border-light-gray-border dark:border-slate-700 p-1 bg-white dark:bg-slate-800 transition-colors">
          <img
            alt="Professional portrait of developer"
            className="w-full h-full object-cover rounded-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4fYaICniJTGh-PknkBHiYIG7xWHpb6B-ytVatTanwGWUs8mR-pzHztn-Ri1S5gHIx_K1-M2PyQXf2hPe9v_UTgTlceQiktF7HpOtcNNs7IWcp3lkxrCn-y2KJBQx6eSrdYo6TnJ81VuGohf8sfkcZjB0Rvdi8X15QIcyIlWTHPBG4HN336aj7ooSNurDAQVGGDsKbcE94DvpdcdVeHktfXYI7VU7cXv6kCRwxWR2ps-Vk4EnOrmbzubNgEjfRb_QsEQk6Pha9Wb4"
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
        Crafting clean, data-driven web experiences with 15 years of pixel-perfect precision. Specializing in React,
        complex UI systems, and performance optimization.
      </p>
      <div className="flex gap-3 justify-center w-full">
        <a
          className="p-3 border border-light-gray-border dark:border-slate-600 rounded-xl hover:bg-silver-bg dark:hover:bg-slate-700 transition-all text-medium-gray dark:text-slate-400 hover:text-deep-charcoal dark:hover:text-white"
          href="#"
        >
          <img
            alt="GitHub"
            className="w-5 h-5 opacity-70 grayscale contrast-125 dark:invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXey3pfLqWJfLiFOmiSdYjG06nt4AqgQTh3IY4VVVLXXM9qdWy-m48J3KMle9d9a2pnC_K85cm25dRsG8vt3PVyvP4BjtGQTtHScC87LTEbFLZQCOGUHPTwcCxz7ZG5FacWn8RdhjtVZ3zoJEf09cVOeJHTS9qeoRMH1enyuaTvwFs8ryfQf3p1x2CQdDLS06KnkYfNz4uINy5INCWmdd8y1iGI-olllpQYruZUse0Q_irUilfimp4LcGoCE4rnhUmigIdMkj8sI0"
          />
        </a>
        <a
          className="p-3 border border-light-gray-border dark:border-slate-600 rounded-xl hover:bg-silver-bg dark:hover:bg-slate-700 transition-all text-medium-gray dark:text-slate-400 hover:text-deep-charcoal dark:hover:text-white"
          href="#"
        >
          <img
            alt="LinkedIn"
            className="w-5 h-5 opacity-70 grayscale contrast-125 dark:invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE2xxe31Othl1Ya5QZWidxyi50Dz_6P0ZJpLPqyYqOMPyvAPLw1msk1KATmgCxP1aTf-6TXA23VsWrhznKPQfJtkdVZNUbs1ykVqsIetu0iuBF40T_F9dyE8CdBXbQdy_2UKdwbRiAgkCSrCq-UVC0O6JePf2PkfYK2UXJvX3s8aPvRmGnh4JGUZ77y4oDXSXeRbqDLSPw99yIPQsmffBcgU4Z2jA9kyG_5etHvU-HW7QPI43fdVSXpJlelYw2Pdbk6g1tx8K6Ue4"
          />
        </a>
        <a
          className="p-3 border border-light-gray-border dark:border-slate-600 rounded-xl hover:bg-silver-bg dark:hover:bg-slate-700 transition-all text-medium-gray dark:text-slate-400 hover:text-deep-charcoal dark:hover:text-white"
          href="#"
        >
          <span className="material-symbols-outlined text-[20px]">email</span>
        </a>
      </div>
    </div>
  );
}
