/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        k: {
          base: '#030303',
          surface: '#0A0A0A',
          surfaceHighlight: '#141414',
          card: '#111111',
          border: '#1F1F1F',
          borderLight: '#222222',
          borderDim: '#333333',
          lime: '#CCFF00',
          limeDim: 'rgba(204, 255, 0, 0.15)',
          limeLight: 'rgba(204, 255, 0, 0.1)',
          limeBorder: 'rgba(204, 255, 0, 0.2)',
          text: '#FFFFFF',
          textSecondary: '#E5E5E5',
          textMuted: '#666666',
          textMutedLight: '#888888',
          textDisabled: '#444444',
        },
        success: '#22c55e',
        successDim: 'rgba(34, 197, 94, 0.2)',
        danger: '#ef4444',
        dangerDim: 'rgba(239, 68, 68, 0.2)',
        warning: '#f59e0b',
        warningDim: 'rgba(245, 158, 11, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
        'lime-gradient': 'linear-gradient(to bottom right, #CCFF00, #88aa00)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(204, 255, 0, 0.15)',
        glowStrong: '0 0 20px rgba(204, 255, 0, 0.3)',
        card: '0 0 0 1px #1F1F1F, 0 4px 20px rgba(0,0,0,0.5)',
        cardHover: '0 0 0 1px rgba(204,255,0,0.3), 0 10px 40px -10px rgba(0,0,0,0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'dash': 'dash 1.5s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        dash: {
          '0%': { strokeDasharray: '0, 100' },
          '100%': { strokeDasharray: 'var(--value), 100' },
        },
      },
    }
  },
  plugins: [],
};
