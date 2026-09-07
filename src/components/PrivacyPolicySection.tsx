import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicySection: React.FC = () => {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-10 border border-blue-900/60 shadow-xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-600/30 text-blue-300 border border-blue-500/40">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Tech Exchange Legal & Trust</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-white">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            This interim policy explains, in plain language, what information Tech Exchange may receive when you browse the site, contact us, apply for a role, or use an available community feature.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>Last Updated: September 2026</span>
            <span>•</span>
            <span>Effective Date: Immediate</span>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        
        {/* Section 1 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              1. Information We Collect
            </h2>
          </div>
          <p>
            We collect only the information needed for the feature you choose to use:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong className="text-slate-900 dark:text-white">Information you submit:</strong> Name, email, phone number, project details, budget or timeline, portfolio links, CV links, and application messages submitted through our forms.</li>
            <li><strong className="text-slate-900 dark:text-white">Public contributions:</strong> Posts, comments, messages, or other content you choose to publish in a community feature may be visible to other visitors.</li>
            <li><strong className="text-slate-900 dark:text-white">Basic technical data:</strong> Your browser may provide ordinary request information to our hosting provider. We do not use this page to intentionally collect sensitive personal data.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              2. How We Use Your Information
            </h2>
          </div>
          <p>
            We use submitted information to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li>Respond to consultation requests, questions, and other messages.</li>
            <li>Review career applications and contact applicants about a role.</li>
            <li>Display and moderate content that you voluntarily publish in available community features.</li>
            <li>Operate, secure, and improve the website.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-slate-800 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              3. Browser Storage
            </h2>
          </div>
          <p>
            The site uses browser local storage to remember your light/dark mode preference. Career application details may also be stored locally in your browser after you submit an application. You can clear this data through your browser settings. We do not currently require an account or use non-essential advertising cookies.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              4. Third-Party Services
            </h2>
          </div>
          <p>
            <strong className="text-slate-900 dark:text-white">We do not intentionally sell your personal information.</strong>
          </p>
          <p>
            Consultation and career forms are submitted through Google Forms. Links or media from services such as Google Drive, YouTube, Spotify, or other providers are governed by those providers' own policies when you use them. We may share submitted information with a service provider only when needed to operate the relevant feature or respond to you.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              5. Contact & Privacy Inquiries
            </h2>
          </div>
          <p>
            If you have questions regarding this Privacy Policy, wish to request deletion of information you submitted, or have security concerns, please reach out to us:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 font-mono text-xs space-y-1">
            <p className="font-bold text-slate-900 dark:text-white">Tech Exchange Legal & Data Protection</p>
            <p className="text-slate-600 dark:text-slate-400">Founder & Lead Architect: Dinesh Gajurel</p>
            <p className="text-slate-600 dark:text-slate-400">Email: techexchangewithdinesh@gmail.com</p>
            <p className="text-slate-600 dark:text-slate-400">Location: Kathmandu, Nepal</p>
          </div>
        </section>

      </div>
    </div>
  );
};
