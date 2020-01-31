import React from 'react';
import styled from 'styled-components';
import { IconLogo, IconLocation, IconPhone, IconEmail } from 'components/icons';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { theme, media } from 'styles';
const { colors } = theme;

const StyledContainer = styled.footer`
  background-color: ${colors.darkBlueFooter};
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  padding: 15rem 8vmin 1.5rem;
  position: relative;
  display: flex;

  ${media.sm`
    display: block;
  `};
`;
const LogoLocation = styled.div`
  width: 35%;
  z-index: 1;
  bottom: 73px;
  position: relative;
  div {
  }
  ${media.sm`
    padding-top: 5rem;
    width: 100%;
    bottom: 0px;
  `};
`;

const LogoLink = styled.a`
  svg {
    width: 135px;
    margin-bottom: 2rem;

    ${media.sm`
      width: 200px;
    `};
  }
`;

const SectionLocaton = styled.div`
  span {
    display: inline-flex;
    svg {
      margin-right: 1rem;
      height: 21px;
      width: 18px;
      margin-top: 6px;
    }
  }
`;

const SectionContact = styled.div`
  margin-bottom: 3rem;
  width: 20%;
  span {
    margin-bottom: 1rem;
    display: block;
    svg {
      margin-right: 1rem;
    }
  }
  ${media.sm`
    width: 100%;
  `};
`;

const SectionLinks = styled.div`
  display: inline-flex;
  ul {
    list-style: none;
    padding-left: 0px;
    margin: 0 2.5rem 0 0;
    li {
      margin: 0 0 0.5rem;
    }
  }

  ${media.sm`
    display: block;

    ul {
      margin-bottom: 2.5rem;
    }
  `};
`;

const SectionSocials = styled.div`
  a {
    margin-right: 10px;
    border: 1px solid white;
    width: 35px;
    height: 35px;
    line-height: -1px;
    white-space: nowrap;
    vertical-align: baseline;
    position: relative;
    top: -3px;
    border-radius: 50%;
    padding: 0.35rem 0rem 0rem 0.55rem;
  }

  ${media.sm`
    text-align: center;
    a {
       padding: 0.3rem;
    }
   
  `};
`;

const Footer = () => {
  return (
    <StyledContainer>
      <LogoLocation>
        <LogoLink href='#'>
          <IconLogo />
        </LogoLink>
        <SectionLocaton>
          <span>
            <IconLocation />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </span>
        </SectionLocaton>
      </LogoLocation>

      <SectionContact>
        <span>
          <IconPhone />
          <a href='tel:+1-543-123-4567'>+1-543-123-4567</a>
        </span>

        <span>
          <IconEmail />
          <a href='mailto:example@fylo.com'>example@fylo.com</a>
        </span>
      </SectionContact>

      <SectionLinks>
        <ul>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              About Us
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Jobs
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Press
            </a>
          </li>

          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Blog
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Contact Us
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Terms Us
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Privacy
            </a>
          </li>
        </ul>
      </SectionLinks>

      <SectionSocials>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FaFacebookF />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FaTwitter />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
      </SectionSocials>
    </StyledContainer>
  );
};

export default Footer;
