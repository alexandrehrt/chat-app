import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn/SignIn';
import Chat from './pages/Chat/Chat';

import { AuthProvider } from './context/auth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Route path='/' exact component={SignIn} /> 
        <Route path='/chat' component={Chat} /> 
      </AuthProvider>
      
      <GlobalStyle />
    </Router>
  )
}

export default App;
