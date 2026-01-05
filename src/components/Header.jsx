import { Menu } from "lucide-react";

export const Header = ({ onMenuClick }) => (
  <header className="
    bg-gradient-to-r from-slate-900/95 to-blue-900/30
    border border-white/20
    p-4 backdrop-blur-xl sticky top-0 z-40 shrink-0
    shadow-2xl
  ">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3 min-w-0">
        
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2.5 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm flex-shrink-0"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            💬
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-white/50 bg-clip-text text-transparent truncate">
              AI Tutor
            </h1>
            <p className="text-xs text-white/60 -mt-1">
              Personalized learning
            </p>
          </div>
        </div>
      </div>

      {/* Desktop subtitle */}
      <p className="text-white/60 text-sm hidden md:block">
        Adaptive explanations • Encourages thinking
      </p>
    </div>
  </header>
);
