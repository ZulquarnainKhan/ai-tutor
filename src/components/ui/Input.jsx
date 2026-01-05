import { cn } from '../../utils/cn';

export const Input = ({ className, ...props }) => (
  <input
    className={cn(
      'flex-1 px-5 py-4 bg-slate-800/60 backdrop-blur-sm border-2 border-slate-700/60 rounded-2xl',
      'focus:outline-none focus:ring-2 focus:ring-primary-500/60 focus:border-primary-400/80',
      'placeholder:text-slate-400/80 text-white font-medium text-lg placeholder:font-normal',
      'transition-all duration-200 shadow-xl hover:shadow-2xl hover:border-slate-600/80',
      'disabled:bg-slate-900/50 disabled:text-slate-500 disabled:cursor-not-allowed',
      className
    )}
    {...props}
  />
);
