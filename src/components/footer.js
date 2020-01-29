import React from 'react';
import styled from 'styled-components';
import { IconLogo, IconLocation, IconPhone, IconEmail } from 'components/icons';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { theme, mixins } from 'styles';
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
`;
const LogoLocation = styled.div`
  width: 35%;
`;

const LogoLink = styled.a``;

const SectionContact = styled.div`
  width: 15%;
`;

const SectionLinks = styled.div`
  width: 25%;

  ul {
    list-style: none;
    column-count: 2;

    li {
      margin: 0 0 0.5rem;
    }
  }
`;

const SectionSocials = styled.div`
  width: 20%;

  a {
    margin-right: 10px;
    border: 1px solid white;
    border-radius: 50%;
    padding: 0.3rem;
  }
`;

const Footer = () => {
  return (
    <StyledContainer>
      <LogoLocation>
        <LogoLink href='#!'>
          <IconLogo />
        </LogoLink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </LogoLocation>

      <SectionContact>
        <a href='tel:+1-543-123-4567'>+1-543-123-4567</a>
        <a href='mailto:example@fylo.com'>example@fylo.com</a>
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
