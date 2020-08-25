import React from 'react';
import Waldo from './components/Waldo/Waldo';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Waldo />
    </React.Fragment>
  );
}
