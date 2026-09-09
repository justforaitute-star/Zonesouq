import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, BellRing } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid business email address.');
      return;
    }
    if (!agreed) {
      setError('Please check the confirmation box to subscribe.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
        >
          <div className="max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mx-auto shadow-xs">
              <BellRing className="w-6 h-6" />
            </div>

            <h3
              id="newsletter-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 font-display"
            >
              Stay Connected with Us
            </h3>

            <p className="text-sm text-slate-600">
              Receive periodic trade intelligence, regional shipping updates, and wholesale consignment opportunities from Zone Souq.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Thank you. You are now subscribed to Zone Souq trade updates.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="newsletter-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your corporate email"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                  <button
                    id="newsletter-subscribe-btn"
                    type="submit"
                    className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Exact preserved agreement line */}
                <div className="flex items-center justify-center gap-2.5 pt-1">
                  <input
                    id="newsletter-terms-checkbox"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);
                      if (error) setError('');
                    }}
                    className="w-4 h-4 rounded border-slate-300 bg-white text-amber-600 focus:ring-amber-500 cursor-pointer"
                  />
                  <label
                    htmlFor="newsletter-terms-checkbox"
                    className="text-xs text-slate-600 cursor-pointer select-none font-medium"
                  >
                    Yes, subscribe me to our newsletter.
                  </label>
                </div>

                {error && (
                  <p className="text-xs text-rose-600 font-semibold pt-1">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
