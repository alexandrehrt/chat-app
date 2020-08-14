import React, { useState } from 'react';

import { Container, InnerContainer, SignInLink } from './styles';

function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>
      <InnerContainer>
        <h1>Join</h1>
        <div><input placeholder='' type='text' onChange={(e) => setName(e.target.value)} /></div>
        <div><input placeholder='' type='text' onChange={(e) => setRoom(e.target.value)} /></div>

        <SignInLink 
          onClick={e => (!name || !room) ? e.preventDefault() : null} 
          to={`/chat/?name=${name}&room=${room}`}>
          <button type='submit'>Sign In</button>
        </SignInLink>
      </InnerContainer>
    </Container>
  )
}

export default SignIn;