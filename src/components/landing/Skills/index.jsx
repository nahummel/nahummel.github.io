import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';
import { languages, technologies, workflow } from '../../../data/skills';
import {SkillItem} from './SkillItem';

export const Skills = () => {

    return (
        <Wrapper as={Container} id="skills">
            <h2>Skills</h2>
            <h4>Languages</h4>
            <Grid>{languages.map(skill => (
                <SkillItem name={skill.name} icon={skill.icon} link={skill.link} />
            ))}</Grid>
            <h4>Frameworks and Libraries</h4>
            <Grid>{technologies.map(skill => (
                <SkillItem name={skill.name} icon={skill.icon} link={skill.link} />
            ))}</Grid>
            <h4>Workflow and Tools</h4>
            <Grid>{workflow.map(skill => (
                <SkillItem name={skill.name} icon={skill.icon} link={skill.link} />
            ))}</Grid>
        </Wrapper>
    );
};
