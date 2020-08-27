import React, {useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import Input from '../../components/input';

import { AuthContext } from '../../context/auth';

function SignIn() {
  const history = useHistory();
  const { signIn } = useContext(AuthContext);

  const handleSubmit = ({ name, room }) => {
    signIn({name, room})

    history.push('/chat');
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Join</h1>
          <Input name="name" type="text" />
          <Input name="room" type="text" />

          <button type='submit'>Sign In</button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;