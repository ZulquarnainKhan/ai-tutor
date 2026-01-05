/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      /* Map your CSS vars to Tailwind utilities */
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        /* Primary brand color */
        primary: {
          DEFAULT: 'hsl(221.2 83.2% 53.3%)',
          foreground: 'hsl(210 40% 98%)',
        },
        /* Dark mode gradients */
        slate: {
          950: 'hsl(224 71% 4%)',
        },
        blue: {
          950: 'hsl(221 94% 5%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundOpacity: {
        5: '0.05',
        10: '0.1',
        20: '0.2',
      }
    },
  },
  
  plugins: [],
  
  darkMode: 'class',  // Enables your .dark selector
}
