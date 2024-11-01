/* eslint-disable import/no-anonymous-default-export */
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
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
  theme: {
	  extend: {
		  boxShadow: {
			  'all-sm': '0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
			  all: '0 0 3px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
			  'all-md': '0 0 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
			  'all-lg': '0 0 15px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
			  'all-xl': '0 0 25px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
			  'all-2xl': '0 0 25px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
			  embossed: '`-2px -2px 2px 0px var(--embossed-top-left-shadow), 2px 2px 2px 0px var(--embossed-bottom-right-shadow)`',
			  dembossed: '`inset -2px -2px 2px 0px var(--dembossed-top-left-shadow), inset 2px 2px 2px 0px var(--dembossed-bottom-right-shadow)`'
		  },
		  animation: {
			  'bg-shine': 'bg-shine 2.2s linear infinite',
			  'text-gradient': 'text-gradient 6s ease infinite alternate'
		  },
		  keyframes: {
			  'bg-shine': {
				  from: {
						backgroundPosition: '0 0'
					},
					to: {
					  backgroundPosition: '-200% 0'
				  }
			  },
			  'text-gradient': {
				  '0%': {
					  backgroundPosition: '0% 50%'
				  },
				  '50%': {
					  backgroundPosition: '100% 50%'
				  },
				  '100%': {
					  backgroundPosition: '0% 50%'
				  }
			  }
		  },
		  borderRadius: {
			  lg: 'var(--radius)',
			  md: 'calc(var(--radius) - 2px)',
			  sm: 'calc(var(--radius) - 4px)'
		  },
		  colors: {
			  background: 'hsl(var(--background))',
			  foreground: 'hsl(var(--foreground))',
			  card: {
				  DEFAULT: 'hsl(var(--card))',
				  foreground: 'hsl(var(--card-foreground))'
			  },
			  popover: {
				  DEFAULT: 'hsl(var(--popover))',
				  foreground: 'hsl(var(--popover-foreground))'
			  },
			  primary: {
				  DEFAULT: 'hsl(var(--primary))',
				  foreground: 'hsl(var(--primary-foreground))'
			  },
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
			  border: 'hsl(var(--border))',
			  input: 'hsl(var(--input))',
			  ring: 'hsl(var(--ring))',
			  chart: {
				  '1': 'hsl(var(--chart-1))',
				  '2': 'hsl(var(--chart-2))',
				  '3': 'hsl(var(--chart-3))',
				  '4': 'hsl(var(--chart-4))',
				  '5': 'hsl(var(--chart-5))'
			  }
		  }
	  }
	},
	plugins: [require('tailwind-custom-utilities'), require("tailwindcss-animate")],
};
