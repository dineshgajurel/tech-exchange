import React, { useState } from 'react';
import { COURSES } from '../data/initialData';
import { Course } from '../types';
import { GraduationCap, Sparkles, BookOpen, Clock, Users, Star, CheckCircle, Search, Award, ChevronRight, X, ArrowRight, ShieldCheck, PlayCircle, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

type CategoryFilter = 'All' | 'Fullstack Web' | 'AI & LLM Engineering' | 'Data & Python' | 'DevOps & Cloud' | 'Mobile Dev';
type LevelFilter = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export const CoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [enrolledCourseId, setEnrolledCourseId] = useState<string | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Fullstack Web',
    'AI & LLM Engineering',
    'Data & Python',
    'DevOps & Cloud',
    'Mobile Dev'
  ];

  const levels: LevelFilter[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.skillsLearned.some((s) => s.toLowerCase().includes(q));
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleEnroll = (course: Course) => {
    setEnrolledCourseId(course.id);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-10 border border-blue-900/60 shadow-2xl relative overflow-hidden">
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-600/30 text-blue-300 border border-blue-500/40">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Tech Exchange Academy — Practical Programming Courses</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            Master Software Engineering & AI Engineering
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Practical, project-based courses built for production development in Nepal & global markets. Hands-on code, real-world architecture, and industry-recognized certificates.
          </p>

          {/* Quick Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">12,500+</div>
              <div className="text-[11px] text-slate-400 font-medium">Students Enrolled</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span>4.9 / 5</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">Average Student Rating</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100%</div>
              <div className="text-[11px] text-slate-400 font-medium">Hands-on Code Projects</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">NPR & Free</div>
              <div className="text-[11px] text-slate-400 font-medium">Localized Options</div>
            </div>
          </div>

        </div>

      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Level Filter Controls */}
        <div className="flex items-center gap-3">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as LevelFilter)}
            className="px-3.5 py-2 text-xs rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold focus:outline-none cursor-pointer"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl === 'All' ? 'All Difficulty Levels' : `${lvl} Level`}
              </option>
            ))}
          </select>

          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <div className="font-heading font-bold text-slate-800 dark:text-slate-200 text-base">No programming courses found</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try adjusting your filters or search query.</div>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-amber-500 text-slate-950 uppercase tracking-wider">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.skillsLearned.slice(0, 4).map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                      #{skill}
                    </span>
                  ))}
                </div>

                {/* Meta Details */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 py-3 border-y border-slate-100 dark:border-slate-800 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span>{course.lessonsCount} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-500" />
                    <span>{course.studentsEnrolled.toLocaleString()} Students</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{course.rating} ({course.reviewsCount})</span>
                  </div>
                </div>

                {/* Instructor Profile */}
                <div className="flex items-center gap-3 mb-5">
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/50" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{course.instructor.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{course.instructor.role}</div>
                  </div>
                </div>
              </div>

              {/* Price & Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                    {course.price}
                  </div>
                  {course.originalPrice && (
                    <div className="text-[11px] text-slate-400 line-through font-mono">
                      {course.originalPrice}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
                  >
                    Syllabus
                  </button>

                  <button
                    onClick={() => handleEnroll(course)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold text-white shadow-md transition-all cursor-pointer transform active:scale-95 ${
                      enrolledCourseId === course.id
                        ? 'bg-emerald-600 shadow-emerald-500/20'
                        : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                    }`}
                  >
                    {enrolledCourseId === course.id ? 'Enrolled ✓' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Course Syllabus Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {activeCourseModal.category} • {activeCourseModal.level}
                </span>
                <h3 className="font-heading text-2xl font-black text-slate-900 dark:text-white mt-2">
                  {activeCourseModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeCourseModal.description}
            </p>

            {/* Week-by-Week Syllabus */}
            <div className="space-y-3">
              <h4 className="font-heading text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Detailed Course Syllabus ({activeCourseModal.syllabus.length} Modules)
              </h4>
              <div className="space-y-2.5">
                {activeCourseModal.syllabus.map((module) => (
                  <div key={module.week} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                      <span>Module {module.week}: {module.title}</span>
                      <span className="text-[11px] font-mono text-slate-400">{module.duration}</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites & Certificate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-2">Prerequisites:</div>
                <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                  {activeCourseModal.prerequisites.map((req, idx) => (
                    <li key={idx}>• {req}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Verified Certificate Included</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-1">
                    Receive an official Tech Exchange verified certificate upon 100% course completion.
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xl font-black text-slate-900 dark:text-white font-mono">
                  {activeCourseModal.price}
                </div>
                <div className="text-[11px] text-slate-400">Full Lifetime Access</div>
              </div>

              <button
                onClick={() => {
                  handleEnroll(activeCourseModal);
                  setActiveCourseModal(null);
                }}
                className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-lg shadow-blue-500/30 cursor-pointer transition-all"
              >
                Enroll Now in Course →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
