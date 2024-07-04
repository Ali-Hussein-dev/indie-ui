/* eslint-disable import/no-anonymous-default-export */
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [
    createPreset({
      preset: 'default',
    }),
  ],
  plugins: [require('tailwind-custom-utilities')],
  theme: {
    extend: {
      boxShadow: {
        'all-sm': '0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        all: '0 0 3px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'all-md': '0 0 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'all-lg': '0 0 15px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
        'all-xl': '0 0 25px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
        'all-2xl':
          '0 0 25px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'bg-shine': 'bg-shine 2.2s linear infinite',
        'text-gradient': 'text-gradient 6s ease infinite alternate',
      },
      keyframes: {
        'bg-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        'text-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
};
