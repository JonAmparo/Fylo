import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from 'config';
import { IconLogo } from 'components/icons';
import { theme, mixins, media } from 'styles';
const { colors, fontSizes } = theme;

const NavLinks = styled.nav`
  ${mixins.flexBetween};
  background-color: ${colors.darkBlueIntroEmail};
  display: grid;
  grid-template-areas: 'Logo NavList';
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  text-align: center;
  color: ${colors.lightestSlate};
  padding: 30px 8vmin 25px;
  align-items: center;
`;

const LogoLink = styled.a`
  svg {
    ${media.phone`
    height:50px;
    width:50px;
  `};
  }
`;

const NavList = styled.ul`
  grid-gap: 5px;
  padding: 0;
  list-style: none;
  flex-direction: row;
`;
const NavListItem = styled.li`
  ${mixins.link};
  margin: 0 auto 0;
  float: left;
  font-size: ${fontSizes.smish};
`;
const NavLink = styled(Link)`
  ${mixins.lightgrey};
  padding: 0 20px 0;
  width: 100%;
`;
const Nav = () => {
  return (
    <NavLinks>
      <LogoLink href='#!'>
        <IconLogo />
      </LogoLink>

      <NavList>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <NavListItem key={i}>
              <NavLink to={url}>{name}</NavLink>
            </NavListItem>
          ))}
      </NavList>
    </NavLinks>
  );
};

export default Nav;
