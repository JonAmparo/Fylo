import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import mixins from './mixins';
import FontFaces from './fonts';
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.darkBlueMain};
    color: ${colors.white};
    line-height: 1.5;
    font-family: ${fonts.OpenSans};
    font-size: ${fontSizes.sm};
    ${media.phablet`font-size: ${fontSizes.sm};`}

    &.hidden {
      overflow: hidden;
    }
  }

  ::selection {
    background-color: ${colors.highlight};
  }

  #root {
    // min-height: 100vh;
    // display: grid;
    // grid-template-rows: 1fr auto;
    // grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: ${colors.white};
    font-family: ${fonts.Raleway};
    margin: 0 0 10px 0;
  }

  h1 {
    font-size: ${fontSizes.display4};
  }

  h2 {
    font-size: ${fontSizes.display5};

    ${media.tablet`
      font-size: ${fontSizes.xxl};
    `}
  }
  h3 {
    font-size: ${fontSizes.xxl};
  }
  h4 {
    font-size: ${fontSizes.xl};
  }

  h5 {
    font-size: ${fontSizes.lg};
  }

  h6 {
    font-size: ${fontSizes.md};
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      ${media.md`font-size: 70px;`};
      ${media.xs`font-size: 60px;`};
      ${media.phablet`font-size: 50px;`};
      ${media.phone`font-size: 40px;`};
    }

    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      ${media.md`font-size: 50px;`};
      ${media.xs`font-size: 40px;`};
    }
  }

  img {
    width: 100%;
    // max-width: 100%;
    vertical-align: middle;
  }

  svg {
    // width: inherit;
    // height: inherit;
    fill: currentColor;
    vertical-align: middle;
    overflow: visible;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.cyan};
      border-color: ${colors.cyan};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.blue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    & > a {
      ${mixins.inlineLink};
    }

    & > code {
      background-color: ${colors.lightNavy};
      color: ${colors.offWhite};
      font-size: ${fontSizes.sm};
      border-radius: ${theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }
`;

export default GlobalStyle;
