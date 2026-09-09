import React from 'react';
import { motion } from 'motion/react';
import { X, ShieldCheck, Eye } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface LegalModalProps {
  type: 'privacy' | 'accessibility' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left text-slate-700"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                {type === 'privacy' ? 'Privacy Policy' : 'Accessibility Statement'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {COMPANY_DETAILS.name} · Corporate Governance
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-sm leading-relaxed text-slate-600">
            <p>
              Zone Souq (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates as a licensed commercial trading entity registered in the Ras Al Khaimah Economic Zone (RAKEZ), United Arab Emirates, at Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah.
            </p>
            <h4 className="text-slate-900 font-bold pt-2 text-base">1. Data Collection & Trade Inquiries</h4>
            <p>
              We collect information provided directly by commercial counterparties, including entity name, authorized representatives, work email addresses, telephone numbers, and specific consignment requirements submitted through our contact channels.
            </p>
            <h4 className="text-slate-900 font-bold pt-2 text-base">2. Commercial Purpose & Confidentiality</h4>
            <p>
              All trade specifications, bulk pricing inquiries, and partner data are handled with rigorous commercial confidentiality and utilized solely to facilitate wholesale trading, import & export customs operations, and procurement delivery.
            </p>
            <h4 className="text-slate-900 font-bold pt-2 text-base">3. Direct Inquiries & Contact</h4>
            <p>
              To update company information or request disclosure regarding communication records, please contact our compliance desk directly at{' '}
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-700 font-bold hover:underline">
                {COMPANY_DETAILS.email}
              </a>{' '}
              or by phone at{' '}
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-700 font-bold hover:underline">
                {COMPANY_DETAILS.phone}
              </a>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-sm leading-relaxed text-slate-600">
            <p>
              Zone Souq is committed to providing a digital trading interface that is accessible to all partners, suppliers, and merchants across global markets, regardless of assistive technology or device capability.
            </p>
            <h4 className="text-slate-900 font-bold pt-2 text-base">Accessibility Standards</h4>
            <p>
              This website is designed and constructed in alignment with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Key accessibility implementations include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>High-contrast color pairings meeting WCAG AA minimum 4.5:1 ratios for typography.</li>
              <li>Complete keyboard navigability for interactive buttons, tabs, links, and forms.</li>
              <li>Semantic HTML5 landmark tags (header, nav, main, section, footer).</li>
              <li>Clear form field labeling and unambiguous error notifications.</li>
              <li>Responsive zoom and fluid reflow across desktop, tablet, and mobile screens.</li>
            </ul>
            <p className="pt-2 text-xs text-slate-500">
              For any accessibility inquiries or assistance regarding Zone Souq digital services, please email{' '}
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-700 font-bold underline">
                {COMPANY_DETAILS.email}
              </a>.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
