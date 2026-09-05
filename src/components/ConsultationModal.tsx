import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Briefcase, Calendar, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Full-Stack Software Development');
  const [budget, setBudget] = useState('NPR 50,000 – 150,000 ($400 – $1,100 USD)');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !description.trim()) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-blue-50/50 dark:bg-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                Book Consultation / Collaborate
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Let's discuss software engineering, AI systems, or advisory.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Dinesh Gajurel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Email Address *</label>
                <input
                  type="email"
                  placeholder="dinesh@techexchange.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Service or Collaboration Type</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
              >
                <option value="Full-Stack Software Development">Full-Stack Software Development</option>
                <option value="AI Systems & Autonomous Agents">AI Systems & Autonomous Agents</option>
                <option value="1-on-1 Technical Consultation & Audit">1-on-1 Technical Consultation & Audit</option>
                <option value="Podcast Guest / Sponsorship">Podcast Guest / Sponsorship</option>
              </select>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Estimated Budget (NPR / USD)</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="Under NPR 50,000 (< $400 USD)">Under NPR 50,000 (&lt; $400 USD)</option>
                  <option value="NPR 50,000 – 150,000 ($400 – $1,100 USD)">NPR 50,000 – 150,000 ($400 – $1,100 USD)</option>
                  <option value="NPR 150,000 – 400,000 ($1,100 – $3,000 USD)">NPR 150,000 – 400,000 ($1,100 – $3,000 USD)</option>
                  <option value="NPR 400,000+ ($3,000+ USD)">NPR 400,000+ ($3,000+ USD / Custom)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Timeline</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="ASAP">ASAP (Immediate)</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="1-3 Months">1–3 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Project Overview & Goals *</label>
              <textarea
                placeholder="Tell us about what you want to build, challenges you are facing, or goals..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </div>

          </form>
        ) : (
          /* Submission Success View */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
              Inquiry Received!
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900 dark:text-white">{name}</span>. We have received your consultation request for <span className="font-semibold text-blue-600">{serviceType}</span> and will reply to <span className="font-bold">{email}</span> within 24 hours!
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
