import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import me from 'assets/images/me.jpeg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Thumbnail>
          <img src={me} alt="I’m Natalie and I’m a software engineer!!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Natalie and I’m a software engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
