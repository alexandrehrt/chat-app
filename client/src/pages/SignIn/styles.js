import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;  
  margin: 0 auto;
  height: 100vh;


  display: flex;
  justify-content: center;  
  align-items: center;
`;

export const Content = styled.div`
  border: none;
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

  button {
    width: 100%;
    margin-top: 10px;
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
  }`;
  





