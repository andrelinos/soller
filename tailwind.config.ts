import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        brand: {
          text: {
            primary: '#0F172A',
            secondary: '#475569',
            tertiary: '#1F2937',
            quaternary: '#27374D',
            quinary: '#374151',
            senary: '#4B5563',
          },

          blue: {
            200: '#E0F2FE',
            400: '#BAE6FD',
            500: '#0369A1',
          },
          orange: {
            600: '#78350F',
          },
          purple: {
            200: '#A855F7',
            300: '#A252EE',
            400: '#7E22CE',
            500: '#581C87',
          },
          yellow: {
            400: '#FCD34D',
            500: '#FBBF24',
            600: '#F59E0B',
            700: '#D97706',
          },
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      lineClamp: {
        7: '7',
      },
      lineHeight: {
        'text-base': '1.375rem' /* 22px */,
        'text-sm': '1.75rem' /* 28px */,
        'text-lg': '1.8125rem' /* 29px */,
        'text-xl': '2.375rem' /* 38px */,
        'text-2xl': '2.5rem' /* 40px */,
        'text-3xl': '3.875rem' /* 62px */,
        'text-4xl': '4.9375rem' /* 79px */,

        title: '3.875rem' /* 62px */,
      },
      screens: {
        '3xl': '119rem', // '1920px'
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '120rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
