import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ProjectItemWrapper = styled.a`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin-right: 50px;
  max-width: 450px;
  margin-bottom: 20px;

  img {
    border-radius: 5px;
  }
`;

export const Details = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  h3 {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
  }

  p {
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};
  }
`;
