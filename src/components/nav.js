import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from 'config';
import { theme, mixins } from 'styles';
const { colors, fontSizes } = theme;

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
  font-size: ${fontSizes.xl};
`;
const NavLink = styled(Link)`
  ${mixins.lightgrey};
  padding: 3px 20px 20px;
  width: 100%;
`;
const Nav = () => {
  return (
    <NavLinks>
      <h3>Navigation Title/Logo</h3>

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
