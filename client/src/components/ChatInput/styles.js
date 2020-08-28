import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;

    display: flex;

    input{
      padding: 8px;
      width: 90%;
      margin: 0 15px;
      border: 1px solid black;
      border-radius: 8px;
    };

    button {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      background-color: #2979FF;
      width: 10%;
      margin-right: 10px;
      border: 1px solid #2979FF;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #1460E4
    }
  };
`;
