import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#9D4EDD',
          cyan: '#00F5FF',
          green: '#39FF14',
          pink: '#FF10F0',
          yellow: '#FFFF00',
        },
        dark: {
          bg: '#0A0A0A',
          card: '#1A1A1A',
          border: '#2A2A2A',
        }
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.6)',
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.6)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.6)',
        'neon-pink': '0 0 20px rgba(255, 16, 240, 0.6)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
