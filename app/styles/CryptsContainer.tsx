import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const Crypts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
  justify-items: center;
`;