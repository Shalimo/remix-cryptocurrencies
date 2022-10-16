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
  background: rgb(64, 64, 64);
  padding: 20px;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`

export const Table = styled.table`
  border-radius: 5px;
  margin-right: 20px;
  width: 400px;
`

export const Row = styled.tr`

`

export const Colums = styled.td`    
  padding: 20px;
`