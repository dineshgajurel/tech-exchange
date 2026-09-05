import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  Search, 
  Filter, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  ExternalLink, 
  Send, 
  X, 
  ArrowUpRight,
  Layers,
  Globe,
  Award,
  UserCheck,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { JobListing } from '../types';
import confetti from 'canvas-confetti';

interface JobsSectionProps {
  jobs: JobListing[];
  onAddJob: (job: Omit<JobListing, 'id' | 'postedDate'>) => void;
}

export const JobsSection: React.FC<JobsSectionProps> = ({ jobs, onAddJob }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Modal States
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeApplyingJob, setActiveApplyingJob] = useState<JobListing | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // New Job Form State
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobCompany, setNewJobCompany] = useState('');
  const [newJobLocation, setNewJobLocation] = useState('');
  const [newJobType, setNewJobType] = useState<'Full-time' | 'Part-time' | 'Contract' | 'Remote'>('Remote');
  const [newJobCategory, setNewJobCategory] = useState<'Frontend' | 'Backend' | 'Fullstack' | 'AI & ML' | 'DevOps & Cloud' | 'Mobile' | 'Media & Growth'>('Fullstack');
  const [newJobLevel, setNewJobLevel] = useState<'Entry Level' | 'Mid Level' | 'Senior' | 'Lead' | 'Executive'>('Senior');
  const [newJobSalary, setNewJobSalary] = useState('$80,000 - $140,000 / yr');
  const [newJobDescription, setNewJobDescription] = useState('');
  const [newJobRequirements, setNewJobRequirements] = useState('');
  const [newJobSkills, setNewJobSkills] = useState('');
  const [newJobApplyUrl, setNewJobApplyUrl] = useState('');

  // Apply Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantResume, setApplicantResume] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  // Categories list
  const categories = ['All', 'Fullstack', 'Frontend', 'Backend', 'AI & ML', 'DevOps & Cloud', 'Mobile'];
  const types = ['All', 'Remote', 'Full-time', 'Contract', 'Part-time'];
  const levels = ['All', 'Entry Level', 'Mid Level', 'Senior', 'Lead', 'Executive'];

  // Filter Jobs logic
  const filteredJobs = jobs.filter((job) => {
    // Category match
    if (selectedCategory !== 'All' && job.category !== selectedCategory) {
      return false;
    }
    // Type match
    if (selectedType !== 'All' && job.type !== selectedType) {
      return false;
    }
    // Level match
    if (selectedLevel !== 'All' && job.experienceLevel !== selectedLevel) {
      return false;
    }
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchLocation = job.location.toLowerCase().includes(q);
      const matchSkills = job.skills.some((s) => s.toLowerCase().includes(q));
      const matchDesc = job.description.toLowerCase().includes(q);
      return matchTitle || matchCompany || matchLocation || matchSkills || matchDesc;
    }
    return true;
  });

  const handlePostJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim() || !newJobCompany.trim() || !newJobDescription.trim()) {
      return;
    }

    const reqs = newJobRequirements
      .split('\n')
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    const sks = newJobSkills
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    onAddJob({
      title: newJobTitle,
      company: newJobCompany,
      location: newJobLocation || 'Remote / Worldwide',
      type: newJobType,
      category: newJobCategory,
      experienceLevel: newJobLevel,
      salaryRange: newJobSalary,
      description: newJobDescription,
      requirements: reqs.length > 0 ? reqs : ['Strong communication & problem solving skills', 'Experience working in modern software teams'],
      skills: sks.length > 0 ? sks : ['TypeScript', 'React', 'Node.js'],
      applyUrl: newJobApplyUrl || 'https://example.com/apply',
      featured: true,
      companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80'
    });

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Reset Form
    setNewJobTitle('');
    setNewJobCompany('');
    setNewJobDescription('');
    setNewJobRequirements('');
    setNewJobSkills('');
    setNewJobApplyUrl('');
    setIsPostModalOpen(false);
  };

  const handleOpenApplyModal = (job: JobListing) => {
    setActiveApplyingJob(job);
    setApplicationSubmitted(false);
    setIsApplyModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim()) return;

    setApplicationSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-xl">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-blue-500/20 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-400/20 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500/20 border border-blue-400/30 text-blue-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>Tech Exchange Nepal — Jobs & Careers</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Engineering & Tech Jobs in Nepal
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 mt-2 leading-relaxed">
              Discover top technical positions from AI labs, cloud platforms, and innovative software teams worldwide.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-blue-500/30">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">{jobs.length}+</div>
                <div className="text-xs text-blue-200">Active Roles</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-300">100%</div>
                <div className="text-xs text-blue-200">Verified Teams</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-amber-300">$95K+</div>
                <div className="text-xs text-blue-200">Avg Tech Compensation</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-blue-200">Verified</div>
                <div className="text-xs text-blue-200">Direct Employers</div>
              </div>
            </div>
          </div>

          {/* Action CTA buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => setIsPostModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer transform active:scale-95"
            >
              <Plus className="w-4 h-4 text-blue-600" />
              <span>Post a Tech Job</span>
            </button>
            
            <a
              href="#explore-jobs"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 text-white font-extrabold text-sm transition-all cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>Browse All Positions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div id="explore-jobs" className="bg-white dark:bg-slate-900 rounded-2xl p-5 mb-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
        
        {/* Search Row */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by job title, company, location, or skill (e.g. React, Python, Rust)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Type Dropdown */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-44">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2.5 text-xs font-semibold rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Work Types' : t}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Level Dropdown */}
            <div className="relative w-full sm:w-44">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2.5 text-xs font-semibold rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                {levels.map((l) => (
                  <option key={l} value={l}>
                    {l === 'All' ? 'All Experience Levels' : l}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'}
        </div>
        {(searchQuery || selectedCategory !== 'All' || selectedType !== 'All' || selectedLevel !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedType('All');
              setSelectedLevel('All');
            }}
            className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Jobs Feed */}
      {filteredJobs.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200/80 dark:border-slate-800">
          <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
            No matching job listings found
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Try adjusting your search query, clearing your filters, or be the first to post a role in this category!
          </p>
          <button
            onClick={() => setIsPostModalOpen(true)}
            className="mt-6 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Post a Job Listing</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <div
                key={job.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden ${
                  job.featured
                    ? 'border-blue-500/50 dark:border-blue-500/40 shadow-sm ring-1 ring-blue-500/20'
                    : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                }`}
              >
                {/* Main Card Item */}
                <div className="p-5 sm:p-6">
                  
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    
                    {/* Left: Company Logo & Details */}
                    <div className="flex items-start gap-4 flex-1">
                      {job.companyLogo ? (
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-lg shrink-0">
                          {job.company.charAt(0)}
                        </div>
                      )}

                      <div className="space-y-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                            {job.company}
                          </span>

                          {job.featured && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              <span>Featured Role</span>
                            </span>
                          )}

                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {job.category}
                          </span>
                        </div>

                        <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>

                        {/* Location, Type, Salary Bar */}
                        <div className="flex items-center flex-wrap gap-y-1 gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.location}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                            <span className="font-bold text-slate-700 dark:text-slate-300">{job.type}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Award className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.experienceLevel}</span>
                          </div>

                          <div className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>{job.salaryRange}</span>
                          </div>

                          <div className="flex items-center gap-1 text-slate-400 ml-auto sm:ml-0">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{job.postedDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Action buttons */}
                    <div className="flex sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                      <button
                        onClick={() => handleOpenApplyModal(job)}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-sm cursor-pointer transition-all active:scale-95"
                      >
                        <span>Apply Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1"
                      >
                        <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                  </div>

                  {/* Description snippet */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-4 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex items-center flex-wrap gap-1.5 mt-4">
                    {job.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => setSearchQuery(skill)}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-200/80 dark:border-slate-800 space-y-4">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                        About the Position
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {job.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                        Key Requirements & Qualifications
                      </h4>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-xs text-slate-500 font-medium">
                        Listing ID: {job.id} • Posted {job.postedDate}
                      </div>

                      <button
                        onClick={() => handleOpenApplyModal(job)}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md cursor-pointer flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Application for {job.title}</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      )}

      {/* POST A JOB MODAL */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  Post a Tech Job Opening
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Share your position directly with the Tech Exchange developer community.
                </p>
              </div>

              <button
                onClick={() => setIsPostModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePostJobSubmit} className="space-y-4 pt-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Full-Stack Engineer"
                    value={newJobTitle}
                    onChange={(e) => setNewJobTitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TechFlow Systems"
                    value={newJobCompany}
                    onChange={(e) => setNewJobCompany(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newJobCategory}
                    onChange={(e) => setNewJobCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="Fullstack">Fullstack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="DevOps & Cloud">DevOps & Cloud</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Work Type
                  </label>
                  <select
                    value={newJobType}
                    onChange={(e) => setNewJobType(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Experience Level
                  </label>
                  <select
                    value={newJobLevel}
                    onChange={(e) => setNewJobLevel(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior">Senior</option>
                    <option value="Lead">Lead</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. San Francisco, CA / Remote"
                    value={newJobLocation}
                    onChange={(e) => setNewJobLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $150,000 - $190,000 / yr"
                    value={newJobSalary}
                    onChange={(e) => setNewJobSalary(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Job Description *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe role responsibilities, tech stack, and team culture..."
                  value={newJobDescription}
                  onChange={(e) => setNewJobDescription(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Requirements (One per line)
                </label>
                <textarea
                  rows={3}
                  placeholder="4+ years experience with React and TypeScript&#10;Experience with GraphQL and Node.js microservices"
                  value={newJobRequirements}
                  onChange={(e) => setNewJobRequirements(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Required Skills (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="React, TypeScript, Node.js, Next.js, Tailwind"
                  value={newJobSkills}
                  onChange={(e) => setNewJobSkills(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsPostModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Job Listing</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* APPLY JOB MODAL */}
      {isApplyModalOpen && activeApplyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-blue-600 dark:text-blue-400">
                  Quick Tech Application
                </span>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  Apply to {activeApplyingJob.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {activeApplyingJob.company} • {activeApplyingJob.location}
                </p>
              </div>

              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  Application Submitted! 🎉
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto">
                  Your candidate profile for <span className="font-bold">{activeApplyingJob.title}</span> at <span className="font-bold">{activeApplyingJob.company}</span> has been successfully delivered.
                </p>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dinesh Gajurel"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dinesh@techexchange.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    GitHub / Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/yourusername"
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Resume Link (PDF / Google Drive)
                  </label>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/your-resume.pdf"
                    value={applicantResume}
                    onChange={(e) => setApplicantResume(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Note to Hiring Team
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief highlight of your relevant experience..."
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Application</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </main>
  );
};
