import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  function signIn({ name, room }) {
    setName(name);
    setRoom(room);
  }

  return (
    <AuthContext.Provider value={{signed: !!name, signIn, name, room}}>
      { children }
    </AuthContext.Provider>
  );
};
