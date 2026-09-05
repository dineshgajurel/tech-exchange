import React, { useState } from 'react';
import {
  Users,
  Target,
  Sparkles,
  Award,
  Heart,
  Globe,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Zap,
  BookOpen,
  Mic,
  Send,
  X,
  Building2,
  Smile,
  ShieldCheck,
  Laptop
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OpenRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

const INTERNAL_ROLES: OpenRole[] = [
  {
    id: 'te-role-1',
    title: 'Full-Stack Developer (React / Node.js / TS)',
    department: 'Engineering',
    location: '100% Remote',
    type: 'Full-time',
    salary: 'Competitive Salary',
    description: 'Help build and scale Tech Exchange platform modules, developer tools, interactive web applications, and backend APIs.',
    requirements: [
      'Strong hands-on experience with React, TypeScript, and Node.js',
      'Experience building responsive web applications and REST / GraphQL APIs',
      'Solid understanding of database systems (PostgreSQL / MongoDB / Redis)',
      'Self-motivated, proactive, and comfortable working in a fully remote setup'
    ]
  },
  {
    id: 'te-role-2',
    title: 'Content Creator & Media Manager',
    department: 'Media & Community',
    location: '100% Remote',
    type: 'Full-time / Part-time',
    salary: 'Competitive Salary',
    description: 'Manage Tech Talk podcasts, write step-by-step developer tutorials, publish tech news, and foster developer community growth.',
    requirements: [
      'Experience in technical content creation, developer guides, or tech media',
      'Comfortable hosting podcasts, interviewing tech experts, or writing code blogs',
      'Basic video/audio production and editing skills for web media',
      'Passionate about software technology, learning, and developer community building'
    ]
  }
];

export const AboutSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<OpenRole | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantGithub, setApplicantGithub] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedRole(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantGithub('');
      setApplicantNote('');
    }, 2800);
  };

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl border border-slate-800">
        
        {/* Background Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-950/80 text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>About Tech Exchange</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Talk • Learn • Build <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              One Home for Software Developers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tech chats were scattered everywhere — across dozens of server channels, hidden forums, and fragmented feeds. 
            We created <strong>Tech Exchange</strong> to unify developers around high-craft technical discussions, 
            hands-on tutorials, tech industry insights, and custom software engineering services.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>50,000+ Developer Readers</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>120+ Shipped Apps & Services</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>100% Remote Global Culture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our 3 Core Pillars */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Our Core Mission & Pillars
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Built by engineers, for engineers. Here is how we empower the global developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: TALK */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. TALK — Tech Talk Podcasts</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We host open tech conversations, architectural deep dives, and founder interviews. From system scaling to AI model architecture, we cut through hype and get into real engineering.
            </p>
          </div>

          {/* Pillar 2: LEARN */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200 dark:border-cyan-800">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. LEARN — Guides & News</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Big ideas, explained simply. We author comprehensive step-by-step developer tutorials, code snippets, and aggregate breaking tech news so engineers stay ahead of trends.
            </p>
          </div>

          {/* Pillar 3: BUILD */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. BUILD — Agency Services</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We design and ship high-performance software solutions for startups and enterprises — fullstack web apps, custom AI workflow automation, and cloud microservice pipelines.
            </p>
          </div>

        </div>
      </section>

      {/* Company Values */}
      <section className="bg-slate-50 dark:bg-slate-900/60 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            Our Operating Principles
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            What Drives Tech Exchange
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Engineering Craft</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              We value clean architecture, maintainability, and security above quick hacks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <Heart className="w-6 h-6 text-red-500" />
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Community First</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              We foster inclusive, high-quality developer discussions without toxic noise.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <Laptop className="w-6 h-6 text-emerald-500" />
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Open Sharing</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              We publish our learnings, code snippets, and architectural blueprints freely.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <Zap className="w-6 h-6 text-amber-500" />
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Speed with Purpose</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              Iterate fast, test continuously, and ship robust code to production with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* Careers Section */}
      <section className="space-y-8 pt-4">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
              <Briefcase className="w-4 h-4" />
              <span>Careers at Tech Exchange</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Join Our Engineering & Media Team
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            We are a 100% remote, developer-first team building tools, content, and software solutions for tech creators globally.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-1">
            <span className="text-2xl">🌍</span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">100% Fully Remote</div>
            <div className="text-[11px] text-slate-500">Work from anywhere</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-1">
            <span className="text-2xl">⏰</span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Flexible Schedule</div>
            <div className="text-[11px] text-slate-500">Async-first work culture</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-1">
            <span className="text-2xl">📚</span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Learning Support</div>
            <div className="text-[11px] text-slate-500">Books, courses & tooling</div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-1">
            <span className="text-2xl">🚀</span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Growth & Impact</div>
            <div className="text-[11px] text-slate-500">Build core platform tools</div>
          </div>
        </div>

        {/* Open Internal Roles List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            Open Internal Positions ({INTERNAL_ROLES.length})
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {INTERNAL_ROLES.map((role) => (
              <div
                key={role.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {role.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {role.location}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      {role.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {role.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                    {role.description}
                  </p>

                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                    💰 {role.salary}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => setSelectedRole(role)}
                    className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Role Details & Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {appliedSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Application Received!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Thank you for applying for <strong>{selectedRole.title}</strong> at Tech Exchange. Our engineering team will review your application and contact you soon.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                    Tech Exchange Careers
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {selectedRole.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mt-2">
                    <span>{selectedRole.department}</span>
                    <span>•</span>
                    <span>{selectedRole.location}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{selectedRole.salary}</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-b border-slate-100 dark:border-slate-800 py-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                    Key Requirements & Skills:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {selectedRole.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Form */}
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                    Apply for this position
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Dinesh Gajurel"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="dinesh@techexchange.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      GitHub Profile or Portfolio URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={applicantGithub}
                      onChange={(e) => setApplicantGithub(e.target.value)}
                      placeholder="https://github.com/dineshgajurel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Short Note / Background
                    </label>
                    <textarea
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Tell us briefly why you want to join Tech Exchange..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>

              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
};
