import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Natalie Hummel</h2>
        <span>
          Built with {" "}
          <a href="https://github.com/nahummel/nahummel.github.io" rel="noopener noreferrer" target="_blank">
          GatsbyJS
          </a>.
          Credit to <a href="https://github.com/smakosh/gatsby-portfolio-dev" rel="noopener noreferrer" target="_blank">
          Smakosh
          </a> for the GatsbyJS template.
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
