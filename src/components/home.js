import React from 'react';
import styled from 'styled-components';
import IllustrationIntro from '../images/illustration-intro.png';
import IllustrationProductive from '../images/illustration-stay-productive.png';
import BgCurvyDesktop from '../images/bg-curvy-desktop.svg';
import BgQoutes from '../images/bg-quotes.png';
import Profile1 from '../images/profile-1.jpg';
import Profile2 from '../images/profile-2.jpg';
import Profile3 from '../images/profile-3.jpg';

import {
  IconBgCurvyDesktop,
  IconAccessAnywhere,
  IconSecurity,
  IconCollaboration,
  IconAnyFile,
  IconArrow,
  IconArroww
} from 'components/icons';
import { theme, mixins, media } from 'styles';
const { colors, fontSizes } = theme;

const StyledContainer = styled.main`

  div.curvy {
    background-image: url(${BgCurvyDesktop});
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 13rem;
    background-size: cover;
  }
`;

const SectionLanding = styled.section`
  background-color: ${colors.darkBlueIntroEmail};
`;

const Centered = styled.div`
  ${mixins.flexCenter};
  ${mixins.Container};

  img {
    width: 531px;
    ${media.xs`
      width: 350px; 
    `};

    ${media.phone`
      width: 250px;
    `};
  }
`;

const CenteredText = styled.div`
  ${mixins.Container};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CenteredButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  ${mixins.Button};
`;

const SectionIcon = styled.section`
  background-color: ${colors.darkBlueMain};
`;

const Flex = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 4vmin;
  // padding: 20px;
  // margin: 0 20px 20px;
`;

const StayProductive = styled.div`
  ${mixins.ContainerFluid};
  flex-wrap: wrap;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 45%;
`;

const Right = styled.div`
  width: 45%;
`;

const Testimonials = styled.div`
  ${mixins.ContainerFluid};
  flex-wrap: wrap;
  display: flex;

  &:before {
    content: '';
    background-image: url(${BgQoutes});
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
  }
`;

const Box = styled.div`
  outline: 0px white;
  width: 30%;
  padding: 1rem;
  margin: 0rem 0.7rem;
  margin-top: 37px;
  background-color: ${colors.darkBlueTestimonials};

  span {
    display: flex;
    flex-wrap: wrap;

    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }

    p {
      margin: 0px;
    }

    &.name {
      // width: 90%;
    }

    &.position {
      font-size: 10px;
      display: block;
      // width: 90%;
    }
  }
`;

const Email = styled.div`
  ${mixins.Container};
  background-color: ${colors.darkBlueIntroEmail};
  padding: 3rem;
  top: 45px;
  position: relative;
  margin-top: 3rem;
  z-index: 1;
  text-align: center;

  input {
    border-radius: 10px;
    padding: 0.3rem 4rem;
    font-size: ${fontSizes.xl};
  }
`;

const Home = () => {
  return (
    <StyledContainer>
      <SectionLanding>
        <Centered>
          <img alt='Illustration intro' srcSet={IllustrationIntro} />
        </Centered>
        <div className='curvy'>
          <CenteredText>
            <h2>
              All your files in one secure location, accessible anywhere.
            </h2>

            <p>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and&nbsp;co-workers.
            </p>
            <CenteredButton>
              <Button>Get Started</Button>
            </CenteredButton>
          </CenteredText>
        </div>
      </SectionLanding>

      <SectionIcon>
        <Flex>
          <Icons>
            <IconAccessAnywhere />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Icons>
          <Icons>
            <IconSecurity />

            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </Icons>
          <Icons>
            <IconCollaboration />
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </Icons>
          <Icons>
            <IconAnyFile />
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </Icons>
        </Flex>
      </SectionIcon>

      <StayProductive>
        <Left>
          <img
            alt='Illustration Stay Productive'
            srcSet={IllustrationProductive}
          />
        </Left>
        <Right>
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href='#!'>
            See how Fylo works
            <IconArroww />
          </a>
        </Right>
      </StayProductive>

      <Testimonials>
        <Box>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <span>
            <img alt='Satish Patel' srcSet={Profile1} />
            <p className='name'>
              Satish Patel{' '}
              <span className='position'>Founder & CEO, Huddle</span>
            </p>
          </span>
        </Box>
        <Box>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <span>
            <img alt='Satish Patel' srcSet={Profile2} />
            <p className='name'>
              Satish Patel{' '}
              <span className='position'>Founder & CEO, Huddle</span>
            </p>
          </span>
        </Box>
        <Box>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <span>
            <img alt='Satish Patel' srcSet={Profile3} />
            <p className='name'>
              Satish Patel{' '}
              <span className='position'>Founder & CEO, Huddle</span>
            </p>
          </span>
        </Box>
      </Testimonials>

      <Email>
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.{' '}
        </p>
        <input type='text' name='' id='' />
        <Button> Get Started For Free</Button>
      </Email>
    </StyledContainer>
  );
};

export default Home;
