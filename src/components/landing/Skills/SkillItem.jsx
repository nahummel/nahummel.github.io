import React from 'react';
import { SkillItemWrapper } from './styles';

export const SkillItem = ({ icon, name, link }) => {

    return (
        <SkillItemWrapper href={link} target="_blank">
            <img
            src={icon}
            alt={`${name} logo`}
        />
            <div>{name}</div>
        </SkillItemWrapper>
    );
};