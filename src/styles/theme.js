const theme = {
  colors: {
    darkBlueIntroEmail: 'hsl(217, 28%, 15%)',
    darkBlueMain: 'hsl(218, 28%, 13%)',
    darkBlueFooter: 'hsl(216, 53%, 9%)',
    darkBlueTestimonials: 'hsl(219, 30%, 18%)',

    cyan: 'hsl(176, 68%, 64%)',
    blue: 'hsl(198, 60%, 50%)',
    white: 'hsl(0, 0%, 100%)',

    black: '#141618',
    red: '#b4001e',
    gray: '#b5b3b3',
    lightSlateGray: '#949394',
    highlight: 'rgba(41, 61, 90, 0.99)',
    lightNavy: '#172a45',
    offWhite: '#dce7ff',
    lightBlue: '#92ABE1',
    dark: '#000007',
    darkestNavy: '#01050b',
    darkGray: '#333f58',
    mediumGray: '#2d3952',
    lightGray: '#606a86',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    pink: '#FF647F',
    yellow: '#FFC464',
    orange: '#FF9E64'
  },

  fonts: {
    Raleway:
      'Raleway, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    OpenSans:
      'Open Sans, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace'
  },

  fontSizes: {
    small: '10px',
    xs: '12px',
    smish: '13px',
    sm: '14px',
    smd: '15px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    display5: '32px',
    display4: '36px',
    display3: '40px',
    display2: '44px',
    display1: '48px',
    title: '69px'
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '50px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`
};

export default theme;
