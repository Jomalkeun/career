
import React from 'react';
import type { Career } from '../types';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Career | null;
}

export const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="w-full sm:max-w-md h-full bg-white dark:bg-[#0d141c] shadow-2xl pointer-events-auto flex flex-col animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-[#0d141c]/90 backdrop-blur-md px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <h2 className="font-bold text-lg dark:text-white text-[#111418]">Project Details</h2>
          <button 
            onClick={onClose}
            className="size-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {/* Screenshot Area */}
          <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 relative">
            <img 
                alt="Project Screenshot" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0StVSpViEDkfUrIAJDtpj7lMaUzzkGLQHQbIrxqoMJBTk_ohoF3mE6xHm04Gs1nfMGT4weyMTBciol1x--q3lbAz_BFjz_P4aeGKmgHucUY_IrFNzVNEdtp31azX4Am-mXhhJ1TheIk1nnF1XwfJeJPDRM_BLs--i59Os3GzWyaiv7wdKWpktHyTbJnjY3X1mp_unR3_7NdXn1_KdYAm7Iq0heA1754f00hZZ144bYMC67NOhrqkm_gsaMzsNE8r6S7Q8wX-a5yk" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Featured Project</span>
            </div>
          </div>

          <div className="p-6 space-y-8">
            <section>
              <h1 className="text-2xl font-extrabold text-[#111418] dark:text-white leading-tight mb-2">
                {project.projectName || project.role}
              </h1>
              <div className="flex flex-wrap gap-y-4">
                <div className="w-1/2">
                  <p className="text-[10px] text-[#637588] dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Company</p>
                  <p className="text-sm font-semibold dark:text-gray-200">{project.company}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-[10px] text-[#637588] dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Duration</p>
                  <p className="text-sm font-semibold dark:text-gray-200">{project.period}</p>
                </div>
                <div className="w-full">
                  <p className="text-[10px] text-[#637588] dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Client Location</p>
                  <p className="text-sm font-semibold dark:text-gray-200">{project.client || 'N/A'}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20">
                    {tech}
                    </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">terminal</span> Core Contribution
              </h3>
              <ul className="space-y-3">
                 <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </li>
                 {/* Mock contributions for design fidelity if description is short, or structure actual data if available */}
                 <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">Engineered the micro-frontend architecture allowing 5 independent teams to deploy concurrently.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">Reduced average API latency by 40% through strategic implementation of Redis caching layers.</p>
                </li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xs font-bold text-[#637588] dark:text-gray-400 uppercase tracking-widest mb-3">Architecture & Challenges</h3>
              <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed mb-3">
                The primary hurdle was maintaining strict financial compliance while scaling real-time transaction processing. We transitioned from a monolithic event-bus to an AWS EventBridge driven architecture.
              </p>
              <p className="text-sm text-[#3e4d5b] dark:text-gray-300 leading-relaxed">
                This allowed us to decouple critical services, ensuring that data consistency was maintained even during peak traffic periods of 10,000+ requests per second.
              </p>
            </section>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white dark:bg-[#0d141c] border-t border-gray-100 dark:border-gray-800 p-6 grid grid-cols-2 gap-3">
          <a className="flex items-center justify-center gap-2 h-12 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">language</span>
            <span>Live Demo</span>
          </a>
          <a className="flex items-center justify-center gap-2 h-12 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
