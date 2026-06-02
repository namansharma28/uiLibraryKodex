/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./demo/**/*.{js,jsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },

        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },

      animation: {
        'progress-stripes':
          'progressStripes 1s linear infinite',

        'hover-card-top':
          'hoverCardTop 0.2s ease-out',

        'hover-card-bottom':
          'hoverCardBottom 0.2s ease-out',

        'hover-card-left':
          'hoverCardLeft 0.2s ease-out',

        'hover-card-right':
          'hoverCardRight 0.2s ease-out',

        'hover-card-out-top':
          'hoverCardOutTop 0.2s ease-in forwards',

        'hover-card-out-bottom':
          'hoverCardOutBottom 0.2s ease-in forwards',

        'hover-card-out-left':
          'hoverCardOutLeft 0.2s ease-in forwards',

        'hover-card-out-right':
          'hoverCardOutRight 0.2s ease-in forwards',

        'toast-in-top':
          'toastInTop 0.3s ease-out',

        'toast-in-bottom':
          'toastInBottom 0.3s ease-out',

        'toast-out':
          'toastOut 0.2s ease-in forwards',

        'progress':
          'progress linear forwards',
      },

      keyframes: {
        progressStripes: {
          '0%': {
            backgroundPosition:
              '1rem 0',
          },

          '100%': {
            backgroundPosition:
              '0 0',
          },
        },

        hoverCardTop: {
          '0%': {
            opacity: '0',
            transform:
              'translate(-50%, 8px) scale(0.96)',
          },

          '100%': {
            opacity: '1',
            transform:
              'translate(-50%, 0px) scale(1)',
          },
        },

        hoverCardBottom: {
          '0%': {
            opacity: '0',
            transform:
              'translate(-50%, -8px) scale(0.96)',
          },

          '100%': {
            opacity: '1',
            transform:
              'translate(-50%, 0px) scale(1)',
          },
        },

        hoverCardLeft: {
          '0%': {
            opacity: '0',
            transform:
              'translate(8px, -50%) scale(0.96)',
          },

          '100%': {
            opacity: '1',
            transform:
              'translate(0px, -50%) scale(1)',
          },
        },

        hoverCardRight: {
          '0%': {
            opacity: '0',
            transform:
              'translate(-8px, -50%) scale(0.96)',
          },

          '100%': {
            opacity: '1',
            transform:
              'translate(0px, -50%) scale(1)',
          },
        },

        hoverCardOutTop: {
          '0%': {
            opacity: '1',
            transform:
              'translate(-50%, 0px) scale(1)',
          },

          '100%': {
            opacity: '0',
            transform:
              'translate(-50%, 8px) scale(0.96)',
          },
        },

        hoverCardOutBottom: {
          '0%': {
            opacity: '1',
            transform:
              'translate(-50%, 0px) scale(1)',
          },

          '100%': {
            opacity: '0',
            transform:
              'translate(-50%, -8px) scale(0.96)',
          },
        },

        hoverCardOutLeft: {
          '0%': {
            opacity: '1',
            transform:
              'translate(0px, -50%) scale(1)',
          },

          '100%': {
            opacity: '0',
            transform:
              'translate(8px, -50%) scale(0.96)',
          },
        },

        hoverCardOutRight: {
          '0%': {
            opacity: '1',
            transform:
              'translate(0px, -50%) scale(1)',
          },

          '100%': {
            opacity: '0',
            transform:
              'translate(-8px, -50%) scale(0.96)',
          },
        },

        progress: {
          '0%': {
            width: '100%',
          },

          '100%': {
            width: '0%',
          },
        },

        toastOut: {
          '0%': {
            opacity: '1',
          },

          '100%': {
            opacity: '0',
          },
        },

        toastInTop: {
          '0%': {
            opacity: '0',
            transform:
              'translateY(-20px) scale(0.95)',
          },

          '100%': {
            opacity: '1',
            transform:
              'translateY(0) scale(1)',
          },
        },

        toastInBottom: {
          '0%': {
            opacity: '0',
            transform:
              'translateY(20px) scale(0.95)',
          },

          '100%': {
            opacity: '1',
            transform:
              'translateY(0) scale(1)',
          },
        },
      },

    },
  },

  plugins: [],
}