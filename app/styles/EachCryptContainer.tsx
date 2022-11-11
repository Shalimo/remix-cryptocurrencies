import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  background: #F5F5DC;
  padding: 20px;
  margin-top: 25px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  @media (max-width: 970px) {
    padding: 10px;
  }
`

export const Table = styled.table`
  border-radius: 5px;
  display: flex;

`

export const MainRow = styled.tr`
  color: #2B2B2B;
  font-weight: 900;
  font-size: 24px;

`

export const Row = styled.tr`
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 670px) {
    font-size: 14px;
  }
`

export const Colums = styled.td`    
  padding: 20px 40px;
  @media (max-width: 670px) {
    padding: 20px 10px;
  }
  @media (max-width: 470px) {
    padding: 10px 0;
  }
`
