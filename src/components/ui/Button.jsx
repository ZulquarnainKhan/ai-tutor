import { cn } from '../../utils/cn';

export const Button = ({ children, className, variant = 'default', isLoading, ...props }) => {
  const baseClasses = cn(
    'px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-xl backdrop-blur-md border border-white/20',
    'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
    className
  );

  if (variant === 'ghost') {
    return (
      <button className={cn(baseClasses, 'bg-white/5 hover:bg-white/15 hover:shadow-lg hover:shadow-white/20')} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button 
      className={cn(baseClasses, 'bg-gradient-to-r from-primary-500/90 to-primary-600/90 hover:from-primary-600 hover:to-primary-700 shadow-primary-500/30 hover:shadow-primary-400/50 text-white hover:shadow-2xl')} 
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
          {children}
        </>
      ) : children}
    </button>
  );
};
