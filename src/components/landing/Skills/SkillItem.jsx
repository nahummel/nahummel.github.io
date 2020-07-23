import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { SkillItemWrapper } from './styles';

export const SkillItem = ({ icon, name, link }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SkillItemWrapper href={link} target="_blank" theme={theme}>
      <img src={icon} alt={`${name} logo`} />
      <div>{name}</div>
    </SkillItemWrapper>
  );
};
