import React from 'react';
import { Scale, ShieldCheck, AlertCircle, FileText, CheckCircle2, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfServiceSection: React.FC = () => {
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
            <Scale className="w-4 h-4 text-blue-400" />
            <span>Tech Exchange Terms & Governance</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-white">
            Terms of Service
          </h1>

          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            These interim terms describe the basic rules for using the Tech Exchange website, contacting us, submitting applications, and participating in features that are currently available.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>Last Updated: September 2026</span>
            <span>•</span>
            <span>Version: 1.2</span>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        
        {/* Section 1 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
          </div>
          <p>
            By using the website, you agree to these terms. If you do not agree, please stop using the site. Some sections may be marked as coming soon and may not yet provide a complete service.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              2. Community Guidelines & Code of Conduct
            </h2>
          </div>
          <p>
            When community features are available, please use them responsibly:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong className="text-slate-900 dark:text-white">Be respectful:</strong> Do not harass, threaten, discriminate against, or impersonate other people.</li>
            <li><strong className="text-slate-900 dark:text-white">Share responsibly:</strong> Do not post spam, malware, deceptive links, private information, or unlawful content.</li>
            <li><strong className="text-slate-900 dark:text-white">Protect your work:</strong> Do not publish passwords, API keys, confidential code, or content you do not have permission to share.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-slate-800 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              3. Content Ownership & Intellectual Property
            </h2>
          </div>
          <p>
            You retain ownership of content you submit. By submitting public content, you give Tech Exchange permission to host, display, and share it as part of the website and its community features. Do not submit content that infringes someone else's rights.
          </p>
          <p>
            Tech Exchange branding, original site content, and platform code belong to Tech Exchange or their respective owners and may not be reused without permission.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              4. Applications, Services & Third-Party Links
            </h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong className="text-slate-900 dark:text-white">Applications and inquiries:</strong> Sending a form does not guarantee employment, a contract, a response, or acceptance of a proposal.</li>
            <li><strong className="text-slate-900 dark:text-white">Services:</strong> Any paid work, scope, price, timeline, or deliverable will be agreed separately in writing.</li>
            <li><strong className="text-slate-900 dark:text-white">Third-party services:</strong> Google Forms, Google Drive, YouTube, Spotify, and other linked services are operated under their own terms and policies.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              5. Availability & Contact Details
            </h2>
          </div>
          <p>
            We may change, pause, or remove a feature at any time while the site is being developed. We will make reasonable efforts to keep the website available, but we do not guarantee uninterrupted operation or that every piece of content is current or error-free. For questions about these terms, contact us below.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 font-mono text-xs space-y-1">
            <p className="font-bold text-slate-900 dark:text-white">Tech Exchange Legal & Operations</p>
            <p className="text-slate-600 dark:text-slate-400">Contact Person: Dinesh Gajurel</p>
            <p className="text-slate-600 dark:text-slate-400">Email: techexchangewithdinesh@gmail.com</p>
            <p className="text-slate-600 dark:text-slate-400">Website: https://www.techexchange.dev</p>
          </div>
        </section>

      </div>
    </div>
  );
};
