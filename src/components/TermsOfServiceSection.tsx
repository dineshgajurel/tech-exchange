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
            Welcome to Tech Exchange. These Terms of Service govern your access to and use of our platform, forum, media broadcasts, programming courses, and software development services.
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
            By accessing or using the Tech Exchange platform (including our web application, community lounge, media broadcasts, courses, and job directory), you agree to be bound by these Terms of Service. If you do not agree, please refrain from using the platform.
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
            Tech Exchange is dedicated to fostering a professional, respectful, and constructive software engineering community. All members must adhere to the following rules:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong className="text-slate-900 dark:text-white">Respect & Professionalism:</strong> Zero tolerance for harassment, discrimination, hate speech, personal attacks, or abusive behavior in forum posts or lounge chats.</li>
            <li><strong className="text-slate-900 dark:text-white">Authentic Content:</strong> Do not post deceptive links, automated promotional spam, malware, or unauthorized commercial advertisements.</li>
            <li><strong className="text-slate-900 dark:text-white">Code Integrity:</strong> Ensure code snippets and open-source contributions shared on the forum do not violate third-party licenses or contain secret keys/credentials.</li>
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
            You retain ownership of the original content, tutorials, and code snippets you publish on Tech Exchange. By posting on the platform, you grant Tech Exchange a non-exclusive, worldwide, royalty-free license to display, index, and distribute your content across our community channels.
          </p>
          <p>
            All original Tech Exchange logos, brand assets, course curriculums, and platform source code are the intellectual property of Dinesh Gajurel / Tech Exchange.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              4. Programming Courses & Service Consultations
            </h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li><strong className="text-slate-900 dark:text-white">Course Materials:</strong> Enrollment grants individual, non-transferable access to course lectures and repositories for personal educational purposes.</li>
            <li><strong className="text-slate-900 dark:text-white">Engineering Consultations:</strong> Software development proposals and service quotes submitted via the platform are non-binding until a formal Master Services Agreement (MSA) or Statement of Work (SOW) is executed.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              5. Governing Law & Contact Details
            </h2>
          </div>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of Nepal. Any legal disputes arising under these terms shall be subject to the jurisdiction of the competent courts in Kathmandu, Nepal.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 font-mono text-xs space-y-1">
            <p className="font-bold text-slate-900 dark:text-white">Tech Exchange Legal & Operations</p>
            <p className="text-slate-600 dark:text-slate-400">Contact Person: Dinesh Gajurel</p>
            <p className="text-slate-600 dark:text-slate-400">Email: dinesh@techexchange.gajureldns.com.np</p>
            <p className="text-slate-600 dark:text-slate-400">Website: https://techexchange.gajureldns.com.np</p>
          </div>
        </section>

      </div>
    </div>
  );
};
