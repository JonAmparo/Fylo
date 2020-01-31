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
  IconAccessAnywhere,
  IconSecurity,
  IconCollaboration,
  IconAnyFile,
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

    ${media.xs`
      padding-bottom: 0;
      margin-bottom: 9rem;
    `}
  }
`;

const SectionLanding = styled.section`
  background-color: ${colors.darkBlueIntroEmail};
`;

const Centered = styled.div`
  ${mixins.flexCenter};
  ${mixins.Container};

  img {
    padding-top: 3rem;
    width: 41rem;
    ${media.xs`
      width: 95%;
    `};
  }
`;

const CenteredText = styled.div`
  ${mixins.Container};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    margin: 25px 75px 0;
  }

  ${media.xs`
    p{
      margin: 1.5rem 1rem;
    }
  `}
`;

const CenteredButton = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  ${mixins.Button};
`;

const SectionIcon = styled.section`
  ${mixins.ContainerFluid};
  position: relative;
  top: 0rem;
`;

const Flex = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Icons = styled.div`
  text-align: center;
  flex-direction: column;
  width: 22rem;
  margin: 0 9rem;

  h5 {
    margin: 1rem 0 0.5rem 0;
    ${media.tablet`
      margin-top: 2rem;
    `};
  }

  p {
    margin-bottom: 5rem;
  }

  ${media.lg`
    margin: 0 4rem;
  `}

  ${media.sm`
    margin: 0 1rem;
  `};

  ${media.phone`
    width: 22rem;
  `};
`;

const StayProductive = styled.section`
  ${mixins.ContainerFluid};
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  margin: 2rem auto 0;
  justify-content: center;

  ${media.sm`
    margin-top: 7rem;
  `};
`;

const Left = styled.div`
  width: 42%;

  ${media.xs`
    width: 85%;
  `};
`;

const Right = styled.div`
  width: 39%;
  margin-left: 3rem;

  a {
    color: ${colors.cyan};
    padding-bottom: 5px;
    border-bottom: 1px solid ${colors.cyan};

    svg {
      margin-left: 5px;
    }

    &:hover {
      font-size: ${fontSizes.smd};
    }
  }

  ${media.xs`
    width: 85%;
    margin: 4rem auto 0;
  `};
`;

const Testimonials = styled.section`
  ${mixins.ContainerFluid};
  flex-wrap: wrap;
  display: flex;
  margin: 7rem auto 0;
  justify-content: center;

  div.quotes {
    &:before {
      content: '';
      background-image: url(${BgQoutes});
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      position: absolute;
      z-index: -1;
    }
  }
`;

const Box = styled.div`
  outline: 0px white;
  padding: 2rem 1.5rem 1rem;
  margin: 0rem 0.7rem;
  margin-top: 37px;
  background-color: ${colors.darkBlueTestimonials};
  width: 21rem;
  align-items: center;
  justify-content: center;
  ${mixins.boxShadow};

  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }

    p {
      margin: 0 0 0 10px;
      font-weight: 600;
    }

    &.position {
      font-size: ${fontSizes.small};
      font-weight: 500;
      color: ${colors.gray};
    }
  }
`;

const Email = styled.section`
  ${mixins.Container};
  background-color: ${colors.darkBlueIntroEmail};
  padding: 3rem 4rem;
  top: 105px;
  position: relative;
  margin-top: 3rem;
  z-index: 2;
  text-align: center;
  border-radius: 7px;
  ${mixins.boxShadow};

  ${media.xs`
    padding: 3rem 1.5rem;
    top: 150px;
  `}

  ${media.phablet`
    top: 170px;
  `}  

    form {
    flex-wrap: wrap;
    display: inline;
  }

  input {
    font-size: ${fontSizes.sm};
    border-radius: ${theme.borderRadius};
    padding: 0.5rem 0 7px 0.9rem;
    width: 60%;
    margin: 0 0.5rem 0 1rem;

    ${media.sm`
        width: 100%;
        margin: 0 0 1.5rem;
      `};
  }

  button {
    padding: 0.8rem 1rem;
    width: 35%;

    ${media.sm`
        width: 100%;
      `};
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
            <h2>All your files in one secure location, accessible anywhere.</h2>

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
            <h5>Access your files, anywhere</h5>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Icons>
          <Icons>
            <IconSecurity />

            <h5>Security you can trust</h5>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </Icons>
          <Icons>
            <IconCollaboration />
            <h5>Real-time collaboration</h5>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </Icons>
          <Icons>
            <IconAnyFile />
            <h5>Store any type of file</h5>
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
          <h2>Stay productive, wherever you&nbsp;are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href='#'>
            See how Fylo works
            <IconArroww />
          </a>
        </Right>
      </StayProductive>

      <Testimonials>
        <div className='quotes'></div>
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
          be happy to help you.
        </p>
        <form>
          <input
            type='text'
            placeholder='email@example.com'
            name='email'
            id='email'
            for='email'
          />

          <Button> Get Started For Free</Button>
        </form>
      </Email>
    </StyledContainer>
  );
};

export default Home;
