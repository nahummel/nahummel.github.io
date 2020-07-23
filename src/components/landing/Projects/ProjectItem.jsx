import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ProjectItemWrapper, Details } from './styles';

export const ProjectItem = ({ image, name, description, link }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ProjectItemWrapper href={link} target="_blank">
      <img src={image} alt={`${name}`} height="350" />
      <Details theme={theme}>
        <h3>{name}</h3>
        <p>{description}</p>
      </Details>
    </ProjectItemWrapper>
  );
};
