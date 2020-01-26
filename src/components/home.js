import React from 'react';
import styled from 'styled-components';
import { theme, mixins, media } from 'styles';
const { colors, fontSizes } = theme;

const StyledContainer = styled.main``;

const Centered = styled.div`
  ${mixins.flexCenter}
  margin: 4vmin 8vmin;
`;

const Home = () => {
  return (
    <StyledContainer>
      <Centered>Home</Centered>
    </StyledContainer>
  );
};

export default Home;
