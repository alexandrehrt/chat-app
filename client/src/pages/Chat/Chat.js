import React, {useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';

import { AuthContext } from '../../context/auth';

import Infobar from '../../components/Infobar';
import Messages from '../../components/Messages';
import ChatInput from '../../components/ChatInput';

import { Container, Components } from './styles';

let socket;

function Chat() {
  const {name, room} = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    // Join room
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, name, room]);

  // Save messages
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
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
      <Components>
        <Infobar room={room} />
        <Messages messages={messages} name={name} />
        <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Components>
    </Container>
  );
};

export default Chat;

