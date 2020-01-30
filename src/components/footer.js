import React from 'react';
import styled from 'styled-components';
import { IconLogo, IconLocation, IconPhone, IconEmail } from 'components/icons';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { theme, mixins, media } from 'styles';
const { fonts, colors, fontSizes } = theme;

const StyledContainer = styled.footer`
  background-color: ${colors.darkBlueFooter};
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  padding: 30px 8vmin 25px;
  position: relative;
  padding-top: 100px;
  display: flex;

  ${media.phone`
    display: block;
  `};
`;
const LogoLocation = styled.div`
  ${media.phone`
    padding-top: 4rem;
  `};
`;

const LogoLink = styled.a`
  svg {
    width: 135px;
    margin-bottom: 2rem;

    ${media.phone`
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
  p {
  }
  ${media.phone`

  `}
`;

const SectionContact = styled.div`
  margin-bottom: 3rem;
  span {
    margin-bottom: 1rem;
    svg {
      margin-right: 1rem;
    }
  }

  span {
    ${media.phone`
      display: block;
    `};
  }
`;

const SectionLinks = styled.div`
  ul {
    list-style: none;
    column-count: 2;
    padding-left: 0px;
    margin-bottom: 2.5rem;
    li {
      margin: 0 0 0.5rem;
    }
  }

  ${media.phone`
    ul {
      column-count: 1;
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
    padding: 0.3rem;
  }

  ${media.phone`
    text-align: center;
  `};
`;

const Footer = () => {
  return (
    <StyledContainer>
      <LogoLocation>
        <LogoLink href='#!'>
          <IconLogo />
        </LogoLink>
      </LogoLocation>

      <SectionLocaton>
        <span>
          <IconLocation />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </span>
      </SectionLocaton>

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
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              About Us
            </a>
          </li>
          <li>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Jobs
            </a>
          </li>
          <li>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Press
            </a>
          </li>

          <li>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Blog
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Contact Us
            </a>
          </li>
          <li>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Terms Us
            </a>
          </li>
          <li>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Privacy
            </a>
          </li>
        </ul>
      </SectionLinks>

      <SectionSocials>
        <a href='#!' target='_blank' rel='noopener noreferrer'>
          <FaFacebookF />
        </a>
        <a href='#!' target='_blank' rel='noopener noreferrer'>
          <FaTwitter />
        </a>
        <a href='#!' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
      </SectionSocials>
    </StyledContainer>
  );
};

export default Footer;
