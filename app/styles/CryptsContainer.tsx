import styled from "styled-components";
import { Link as RemixLink } from "@remix-run/react";

export const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
`;

export const Crypts = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
justify-items: center;
margin: 40px 140px;
`;

export const Link = styled(RemixLink)`
    width: 170px;
    height: 50px;
    text-align: center;
	box-sizing: border-box;
	appearance: none;
	background-color: #fafafa;
	border: 1px solid #000;
	border-radius: 0.6em;
	color: #000;
	cursor: pointer;
    margin-bottom: 20px;
	font-weight: 400;
	text-decoration: none;
	text-align: center;
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
	transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    padding: 15px 10px;
  :hover {
    text-decoration: none;
    color: #000;
	outline: 0;
    box-shadow: 0 0 40px 40px #f0e2bd inset;
  };
`;
