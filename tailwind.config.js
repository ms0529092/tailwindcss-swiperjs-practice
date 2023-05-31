module.exports = {
  /** developer */
  // safelist: [
  //   {
  //     pattern: /./
  //   },
  // ],
  //content: ["./Views/**/*.cshtml", "./Content/js/home.js", "./Content/js/quizs.js",  "./Content/js/gbi.js", "./Content/js/tbi.js"],
  content: ["./src/**/*.{html,js}"],
  prefix: "u-",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '415px',
      'sm': '769px',
      '921': '921px',
      'md': '961px',
      'lg': '1025px',
      'xl': '1281px',
      '1200':'1200px',
      '2xl': '1537px',
      'any-hover': { raw: '(any-hover: hover)'}
    },
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
        10: '10px'
      },
      borderRadius: {
        '15px': '15px'
      },
      boxShadow: {
        'sm': '0px 5px 10px rgba(0,0,0,0.05)',
        'sm-hover': '0px 5px 10px rgba(0,0,0,0.25)',
        'md': '0px 20px 15px -13px rgba(192, 192, 192, 0.5)',
        'btn': '0px 8px 20px -5px rgba(0,40,61, 0.3)'
      },
      colors: {
        gray: {
          100: "#fff",
          200: "#fafafa",
          300: "#eee",
          400: "#ddd",
          500: "#bebebe",
          600: "#888",
          700: "#6f6f6f",
          800: "#555",
          900: "#444",
          1000: "#333",
          1100: "#1a1a1a",
          1200: "#000",
        },
        blue: {
          old: {
            700: '#1A63B9',
            1200: '#1C2537'
          },
          new: {
            600: '#239EE1',
            700: '#1c89c4',
            900: '#0E5F8B',
            1200: '#00283D'
          }
        },
        green: {
          500: '#129246',
          600:'#008a46'
        },
        purple: {
          600: '#595EBE'
        },
        orange: {
          600: '#FF6000'
        }
      },
      fontFamily: {
        'noto': '"Noto Sans", "Noto Sans TC", "Helvetica Neue", Helvetica, Arial, sans-serif'
      },
      fontSize: {
        xs: ['0.75rem', 1.6],
        sm: ['0.875rem', 1.6],
        base: ['1rem', 1.6],
        lg: ['1.125rem', 1.6],
        xl: ['1.25rem', 1.6],
        '2xl': ['1.5rem', 1.6],
        '3xl': ['1.75rem', 1.6],
        '4xl': ['2.25rem', 1.6],
        '5xl': ['3rem', 1.6],
        '6xl': ['3.75rem', 1.6],
        '7xl': ['4rem', 1.6],
        '8xl': ['6rem', 1.6],
        '9xl': ['8rem', 1.6],
        '30px': ['30px', 1.6],
        '34px': ['34px', 1.6]
      },
      gap: {
        '2.5':　'0.625rem',
        '7.5': '1.875rem',
      },
      margin: {
        '1px': '1px',
        '2px': '2px',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        15: '3.75rem',
        '25': '6.25rem',
        '15px': '15px'
      },
      padding: {
        '7.5': '1.875rem',
        '10': '2.5rem',
        '12.5': '3.125rem',
        15: '3.75rem',
        '9/16': '56.25%',
        '3/4': '75%',
      },
      rotate: {
        '135': '135deg',
      },
      screens: {
        'xs': '415px',
        'sm': '769px',
        'md': '961px',
        'lg': '1025px',
        'xl': '1281px',
        '2xl': '1537px',
        'any-hover': { raw: '(any-hover: hover)'},
        'lottie-ct':'515px' // NOTE:簡單三步驟lottie會與下方文字連動變化大小,暫時以這個方式處理(KevinChen) TODO: 有更好的做法可以拿掉
      },
      space: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '25': '6.25rem'
      },
      keyframes: {
        fadeIn:{
          '0%': { 'transform': 'translateY(20px)', opacity: 0 },
          '100%': { 'transform':' translateY(0px)',opacity: 1 },
        },
        fadeOut:{
          '0%': { opacity: 1, },
          '100%': { opacity: 0 },
        },
        moveLeft20:{
          '0%': { 'margin-left': '0', },
          '100%': { 'margin-left': '-1.2rem' },
        },
        recoverLeft20:{
          '0%': { 'margin-left': '-1.2rem', },
          '100%': { 'margin-left': '0rem' },
        },
        progress:{
          '0%': { 'width': '0px', },
          '100%': { 'width': '50px' },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s linear',
        'triangle-fadeIn': 'fadeIn 1s cubic-bezier(.47,0,.21,1)',
        'triangle-fadeOut': 'fadeOut 1s cubic-bezier(.47,0,.21,1)',
        'step-active': 'moveLeft20 1s cubic-bezier(.47,0,.21,1)',
        'step-finish': 'recoverLeft20 1s cubic-bezier(.47,0,.21,1)',
        'step3-loading': 'progress 7s linear',
        'step2-loading': 'progress 7s linear',
        'step1-loading': 'progress 7s linear',
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
