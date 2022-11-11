import styled from 'styled-components';
import { Link as RemixLink } from '@remix-run/react';

export const Link = styled(RemixLink)`
  width: 30px;
  text-align: center;
  background: transparent;
  opacity: 0.9;
  border: 1px solid #000;
  border-radius: 0.6em;
  color: #000;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  font-size: 16px;
  padding: 10px 30px;
  :hover {
    text-decoration: none;
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #2B2B2B inset;
  }
`;

export const CryptContainer = styled.div`
  width: 250px;
  height: 200px;
  border: 4px solid #FFF;
  border-radius: 10px;
  margin: 40px;
  background: #F5F5DC;
  :hover {
    transform: scale(1.01);
    transition: transform 0.25s;
    background: -webkit-linear-gradient(45deg, rgb(245, 255, 220), rgb(245, 255, 220));
    background: -moz-linear-gradient(45deg, rgb(245, 255, 220), rgb(245, 255, 220));
    background: linear-gradient(45deg, rgb(245, 255, 220), rgb(245, 255, 220));
  }
`

export const CryptInfo = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`

export const CryptName = styled.p`
  font-size: 20px;
  font-weight: 600;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`
