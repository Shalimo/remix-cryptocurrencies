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
  background: #d5c8e0;
  padding: 20px;
  margin-top: 25px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`

export const Table = styled.table`
  border-radius: 5px;
  display: flex;

`

export const MainRow = styled.tr`
  color: #81609c;
  font-weight: 700;
  font-size: 24px;

`

export const Row = styled.tr`
  font-weight: 500;
  font-size: 18px;
`

export const Colums = styled.td`    
  padding: 20px 80px;
`
