import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle, Copy, Clock, Building2, Check } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: initialService || SERVICES_DATA[0].title,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Commercial Engagement</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display"
          >
            Contact Zone Souq
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Connect with our trading desk for wholesale volume inquiries, import/export facilitation, or custom procurement requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Credentials & Hub Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Corporate Trading Office
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating out of the Al Hamra Industrial Free Zone in Ras Al Khaimah, United Arab Emirates, facilitating cross-continental cargo and regional trade distribution.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start justify-between gap-4 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Telephone / Direct Line</div>
                      <a
                        href={`tel:${COMPANY_DETAILS.phone}`}
                        className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors"
                      >
                        {COMPANY_DETAILS.phone}
                      </a>
                      <div className="text-[11px] text-slate-400 font-medium">{COMPANY_DETAILS.phoneFormatted} (International)</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_DETAILS.phone, 'phone')}
                    className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? (
                      <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start justify-between gap-4 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Corporate Email</div>
                      <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors break-all"
                      >
                        {COMPANY_DETAILS.email}
                      </a>
                      <div className="text-[11px] text-slate-400 font-medium">Official Inquiries & Consignments</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_DETAILS.email, 'email')}
                    className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedField === 'email' ? (
                      <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Address */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start justify-between gap-4 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Physical & Free Zone Address</div>
                      <div className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
                        {COMPANY_DETAILS.address.building}, {COMPANY_DETAILS.address.street}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5 font-normal">
                        {COMPANY_DETAILS.address.zone}, {COMPANY_DETAILS.address.emirate}-U.A.E
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_DETAILS.address.full, 'address')}
                    className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy Full Address"
                  >
                    {copiedField === 'address' ? (
                      <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Operating Hours & Dispatch Notice */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Trading Hours: Monday – Saturday (Gulf Standard Time, GST UTC+4)</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                Send a Trade Inquiry
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Please provide your consignment specifications or procurement requirements. Our desk will respond with verification details and trade timelines.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">Inquiry Transmitted Successfully</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName || 'Trade Partner'}. Your inquiry regarding <span className="text-amber-800 font-bold">{formData.service}</span> has been forwarded to the Zone Souq trading desk at <span className="text-slate-900 font-semibold">{COMPANY_DETAILS.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        service: SERVICES_DATA[0].title,
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    Send Another Trade Request
                  </button>
                </motion.div>
              ) : (
                <form id="zone-souq-contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-fullName" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Tariq Al Mansoori"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-companyName" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Company / Entity Name *
                      </label>
                      <input
                        id="contact-companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Gulf Horizon Merchants Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Service Requirement *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-white text-slate-900">
                          {srv.title} — {srv.tagline}
                        </option>
                      ))}
                      <option value="General Commercial Trade Inquiry" className="bg-white text-slate-900">
                        General Commercial Trade Inquiry
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Consignment Specifications / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify item categories, approximate bulk volumes, target delivery timeline, or trade documentation requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:opacity-70 active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Trade Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
