import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from 'styles';
const { fonts, colors, fontSizes } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexBetween};
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  text-align: center;
  // color: ${colors.lightSlateGray};
  padding: 30px 8vmin 25px;
  display: block;
  position: relative;
  background-color: ${colors.black};
`;


const Footer = () => {
  return (
    <StyledContainer>
      <p>Footer</p>
    </StyledContainer>
  );
};

export default Footer;
