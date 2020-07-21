import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 flex-wrap: wrap;
 margin-left:40px;
`;

export const SkillItemWrapper = styled.a`
  display: flex;
  margin-right:40px;
  margin-bottom: 40px;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 40em) {
    min-width: 'calc(100% / 7 - 1px)'
  }

  img {
      height: 75px;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;