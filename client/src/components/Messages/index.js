import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message';

import { Container } from './styles';

const Messages = ({ messages, name }) => (
  <Container>
    <ScrollToBottom className="messages">
      {messages.map((message, index) => <div key={index}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
  </Container>
);

export default Messages;