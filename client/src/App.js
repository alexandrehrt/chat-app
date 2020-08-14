import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import SignIn from './components/SignIn/SignIn';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <Route path='/' exact component={SignIn} /> 
      <Route path='/chat' component={Chat} /> 
      
      <GlobalStyle />
    </Router>
  )
}

export default App;
