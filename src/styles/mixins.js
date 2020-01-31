import { css } from 'styled-components';
import theme from './theme';
import media from './media';

const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ContainerFluid: css`
    margin: 0vmin auto;
    max-width: 95%;
    width: 90rem;

    ${media.lg`
      max-width: 80rem;
    `};

    ${media.md`
      max-width: 67rem;
    `};

    ${media.sm`
      max-width: 52rem;
    `};

    ${media.xs`
    max-width: 24rem;
    `};
  `,

  Container: css`
    margin: 0vmin auto;
    max-width: 46.875rem;

    ${media.lg`
      max-width: 46.875rem;
    `};

    ${media.md`
      max-width: 40.625rem;
    `};

    ${media.sm`
      max-width: 39.0625rem;
    `};

    ${media.phone`
      margin: 0 15px;
    `};
  `,

  outline: css`
    outline: 1px solid red;
  `,

  boxShadow: css`
    box-shadow: 2px 3px 5px ${colors.darkBlueFooter};
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.green};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.green};
    font-family: ${fonts.Raleway};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.green};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.green} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.green};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  Button: css`
    color: ${colors.white};
    background-color: ${colors.blue};
    border-radius: ${theme.borderRadius};
    outline: 0px;
    padding: 0.85rem 4rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.Raleway};
    line-height: 1;
    font-weight: bold;
    text-decoration: bold;
    cursor: pointer;
    transition: ${theme.transition};
    text-align: center;
    &:hover,
    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.lightBlue};
    }
    &:after {
      display: none !important;
    }

    &:disabled,
    &:disabled:hover {
      background-color: transparent;

      cursor: default;
      color: ${colors.darkGray};
      border: 1px solid ${colors.darkGray};
    }
  `
};

export default mixins;
