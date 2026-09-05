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
            Your privacy is fundamental to us at Tech Exchange. This policy outlines how we collect, handle, and safeguard your information when you engage with our media, community forum, courses, and engineering services.
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
            When you visit or interact with Tech Exchange, we collect information to provide a smooth, secure developer experience:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong className="text-slate-900 dark:text-white">Account & Profile Information:</strong> When you post in our Community Forum or register for programming courses, we collect basic details such as your name, handle, avatar URL, and professional role.</li>
            <li><strong className="text-slate-900 dark:text-white">Community Contributions:</strong> Discussions, code snippets, comments, lounge messages, and project submissions shared publicly on the platform.</li>
            <li><strong className="text-slate-900 dark:text-white">Consultation Requests:</strong> Name, work email, project scope, and estimated budget details submitted via our engineering consultation forms.</li>
            <li><strong className="text-slate-900 dark:text-white">Technical Analytics:</strong> Device specifications, browser type, referrer URLs, and interactive page metrics to improve platform speed and user interface responsiveness.</li>
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
            We strictly limit data usage to fulfilling platform services and community features:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li>To display user-submitted forum posts, comments, upvotes, and developer lounge messages.</li>
            <li>To manage course enrollments, track learning progress, and issue verified completion certificates.</li>
            <li>To process consultation requests and connect engineering clients with Dinesh Gajurel and the Tech Exchange team.</li>
            <li>To prevent spam, abuse, unauthorized scraping, and illegal activity on the platform.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-slate-800 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              3. Cookies & Local Storage
            </h2>
          </div>
          <p>
            Tech Exchange uses browser local storage and essential cookies to remember your preferences (such as light/dark mode preference and active forum filters) across browser sessions without requiring intrusive third-party tracking scripts.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              4. Data Sharing & Third-Party Services
            </h2>
          </div>
          <p>
            <strong className="text-slate-900 dark:text-white">We do not sell, rent, or trade your personal information to third parties.</strong>
          </p>
          <p>
            Media embeds (such as embedded YouTube video demos or Spotify podcast episodes) may interact directly with their respective third-party provider services according to their privacy policies.
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
            If you have questions regarding this Privacy Policy, wish to request account data removal, or have security concerns, please reach out to us:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 font-mono text-xs space-y-1">
            <p className="font-bold text-slate-900 dark:text-white">Tech Exchange Legal & Data Protection</p>
            <p className="text-slate-600 dark:text-slate-400">Founder & Lead Architect: Dinesh Gajurel</p>
            <p className="text-slate-600 dark:text-slate-400">Email: dinesh@techexchange.gajureldns.com.np</p>
            <p className="text-slate-600 dark:text-slate-400">Location: Kathmandu, Nepal</p>
          </div>
        </section>

      </div>
    </div>
  );
};
