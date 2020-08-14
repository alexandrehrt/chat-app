import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1120px;  
  margin: 0 auto;
  height: 100vh;
  

  display: flex;
  justify-content: center;  
  align-items: center;
`;

export const InnerContainer = styled.div`
  border: none;
  border-radius: 8px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
  }
  

  input {
    margin-top: 20px;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
  }
`;

export const SignInLink = styled(Link)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  text-decoration: none;

  button {
    flex: 1;
    padding: 20px;
    border-radius: 5px;
    border: none;
    background-color: #2979FF;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.2s;
  
    &:hover {
      background-color: #186BFA;
    }
  }
`;
