/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        secondary: '#6b7280',
        background: '#0f172a',
        surface: '#1e293b',
        error: '#ef4444',
        success: '#22c55e',
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
        },
        sage: {
          50: '#f8faf8',
          100: '#f0f4f1',
          200: '#dce5dd',
          300: '#bccebe',
          400: '#9ab39c',
          500: '#75917a',
          600: '#5c735f',
          700: '#4a5c4c',
          800: '#3d4c3e',
          900: '#2c372d',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3d4c3e',
            a: {
              color: '#5c735f',
              '&:hover': {
                color: '#4a5c4c',
              },
            },
            strong: {
              color: '#2c372d',
            },
            code: {
              color: '#4a5c4c',
            },
            pre: {
              backgroundColor: '#f0f4f1',
            },
          },
        },
        sage: {
          css: {
            '--tw-prose-body': '#3d4c3e',
            '--tw-prose-headings': '#2c372d',
            '--tw-prose-lead': '#4a5c4c',
            '--tw-prose-links': '#5c735f',
            '--tw-prose-bold': '#2c372d',
            '--tw-prose-counters': '#75917a',
            '--tw-prose-bullets': '#75917a',
            '--tw-prose-hr': '#dce5dd',
            '--tw-prose-quotes': '#2c372d',
            '--tw-prose-quote-borders': '#75917a',
            '--tw-prose-captions': '#75917a',
            '--tw-prose-code': '#4a5c4c',
            '--tw-prose-pre-code': '#4a5c4c',
            '--tw-prose-pre-bg': '#f0f4f1',
            '--tw-prose-th-borders': '#bccebe',
            '--tw-prose-td-borders': '#dce5dd',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};