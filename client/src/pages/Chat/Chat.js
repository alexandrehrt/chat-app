import React, {useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import { AuthContext } from '../../context/auth';

import { Container, InnerContainer } from './styles';

let socket;

function Chat() {
  const {name, room} = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // const history = useHistory();

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  // Save messages
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    })
  }, [messages]);

  // Send messages
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    };
  };

  console.log(message, messages);

  return (
    <Container>
      <InnerContainer>
        <input 
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
      </InnerContainer>
    </Container>
  );
};

export default Chat;

