import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';
import { ProjectItem } from './ProjectItem';
import { projects } from '../../../data/projects';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      <Grid>
        {projects.map(project => (
          <ProjectItem
            name={project.name}
            image={project.image}
            link={project.link}
            description={project.description}
          />
        ))}
      </Grid>
    </Grid>
  </Wrapper>
);
