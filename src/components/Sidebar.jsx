import { useStudentLevel } from '../hooks/useStudentLevel';
import { Button } from './ui/Button';
import { BookOpen, Brain, GraduationCap, X, Sparkles } from 'lucide-react';
import { useChat } from '../hooks/useChat';




const levels = [
  { 
    id: 'beginner', 
    icon: BookOpen, 
    label: 'Beginner', 
    subtitle: 'Foundations',
    color: 'from-emerald-400/30 to-emerald-500/30', 
    ring: 'ring-emerald-500/30' 
  },
  { 
    id: 'intermediate', 
    icon: Brain, 
    label: 'Intermediate', 
    subtitle: 'Practice',
    color: 'from-amber-400/30 to-amber-500/30', 
    ring: 'ring-amber-500/30' 
  },
  { 
    id: 'advanced', 
    icon: GraduationCap, 
    label: 'Advanced', 
    subtitle: 'Mastery',
    color: 'from-violet-400/30 to-violet-500/30', 
    ring: 'ring-violet-500/30' 
  },
];

export const Sidebar = ({ onClose }) => {
  const { studentLevel, updateLevel } = useStudentLevel();
  const {  clearChat } = useChat();

  return (
    <div className="h-dvh w-full flex flex-col p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 lg:gap-8 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent bg-gradient-to-b from-slate-900/70 to-slate-950/90 backdrop-blur-3xl border-r border-white/10 shadow-2xl">
      
      {/* Compact responsive header */}
      <div className="glass-card p-4 sm:p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
              <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-primary-400 drop-shadow-md" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg lg:text-2xl font-black bg-gradient-to-r from-white via-slate-100/80 to-slate-200 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                Your Level
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5 hidden sm:block">Adaptive learning</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2.5 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 lg:hidden shadow-lg flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" />
          </button>
        </div>
      </div>
      
      {/* Compact responsive level cards - fixed compact height */}
      <div className="space-y-3 sm:space-y-4 flex-1 min-h-0">
        {levels.map(({ id, icon: Icon, label, subtitle, color, ring }) => (
          <div 
            key={id}
            className={`
              glass-card group cursor-pointer p-3 sm:p-4 lg:p-6 h-28 sm:h-32 lg:h-auto 
              rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
              flex items-center gap-3 sm:gap-4 ${studentLevel === id ? 'min-h-[120px]' : 'h-[110px] sm:h-[120px]'}
              ${studentLevel === id 
                ? `bg-gradient-to-br ${color} border-white/50 shadow-[0_0_24px_rgba(255,255,255,0.15)] ring-2 ${ring}` 
                : 'border-white/10 hover:border-white/30 bg-white/3 hover:bg-white/8'
              }
            `}
            onClick={() => updateLevel(id)}
          >
            {/* Compact icon */}
            <div className={`
              w-12 h-12 sm:w-14 sm:h-14 p-2.5 sm:p-3 rounded-xl backdrop-blur-xl shadow-xl flex items-center justify-center transition-all flex-shrink-0
              ${studentLevel === id ? 'bg-white/25 border border-white/40 shadow-white/30' : 'bg-white/10 hover:bg-white/20'}
            `}>
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${studentLevel === id ? 'text-white drop-shadow-lg' : 'text-white/80 group-hover:text-white'}`} />
            </div>
            
            {/* Compact text - responsive sizing */}
            <div className="flex-1 min-w-0 flex flex-col justify-center pr-2">
              <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white leading-tight truncate drop-shadow-md">
                {label}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-0.5 leading-tight">
                {subtitle}
              </p>
            </div>
            
            {/* Active indicator */}
            {studentLevel === id && (
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse drop-shadow-lg" />
                <div className="w-1.5 h-6 bg-gradient-to-b from-white/60 to-transparent rounded-sm shadow-lg" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Compact footer */}
      <div className="glass-card p-4 sm:p-6 border-t border-white/10 space-y-3 pt-4 sm:pt-6">
        <Button 
          className="w-full h-11 sm:h-12 bg-gradient-to-r from-red-500/95 to-red-600/95 
                     backdrop-blur-xl shadow-2xl border border-white/20 hover:shadow-red-500/40
                     text-white font-semibold text-sm sm:text-base hover:scale-105"
          onClick={clearChat}
        >
          New Session
        </Button>
        <div className="text-center text-xs sm:text-sm text-white/50 pt-2 border-t border-white/10">
          Powered by Gemini
        </div>
      </div>
    </div>
  );
};
