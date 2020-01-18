import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navLinks } from 'config';
import { theme, media, mixins } from 'styles';
const { fonts, colors, fontSizes } = theme;

const NavLinks = styled.nav`
  ${mixins.flexBetween};
  display: grid;
  grid-template-areas: 'Logo NavList';
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  text-align: center;
  color: ${colors.lightestSlate};
  padding: 30px 8vmin 25px;
`;

const Logo = styled.h1`
  color: ${colors.lightestSlate};
`;
const NavList = styled.ul`
  grid-gap: 5px;
  padding: 0;
  list-style: none;
  flex-direction: row;
`;
const NavListItem = styled.li`
  margin: 0 auto 0;
  float: left;
  font-size: ${fontSizes.xl};
`;
const NavLink = styled(Link)`
  ${mixins.lightgrey};
  padding: 3px 20px 20px;
  width: 100%;
`;
const Nav = ({ logo }) => {
  return (
    <NavLinks>
      {/* <Logo>Logo</Logo> */}
      <img src={logo} className='logo' alt='logo' />

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
