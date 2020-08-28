import React from 'react';

import { Container } from './styles';

const ChatInput = ({ setMessage, sendMessage, message }) => {
  return (
    <Container>
      <form>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={( { target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button onClick={e => sendMessage(e)}>Send</button>
      </form>
    </Container>
  );
};

export default ChatInput;