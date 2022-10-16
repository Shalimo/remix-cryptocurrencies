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
    box-shadow: 0 0 40px 40px #8a7999 inset;
  }
`;

export const CryptContainer = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 40px;
  background: #e6d2fc;
  :hover {
    transform: scale(1.1);
    transition: transform 0.25s;
    background: -webkit-linear-gradient(45deg, rgb(202, 171, 232), rgb(216, 206, 242));
    background: -moz-linear-gradient(45deg, rgb(202, 171, 232), rgb(216, 206, 242));
    background: linear-gradient(45deg, rgb(202, 171, 232), rgb(216, 206, 242));
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

export const ButtonCart = styled.button`
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
    padding: 10px 15px;
    margin-left: 20px;
    :hover {
    text-decoration: none;
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #8a7999 inset;
    }
`
