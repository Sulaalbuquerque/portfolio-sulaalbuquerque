import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
    font-weight: 400;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;
