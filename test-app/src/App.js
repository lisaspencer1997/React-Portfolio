import React from 'react';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import WelcomeMessage from './components/project.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <WelcomeMessage name="Lisa" />
    </div>
  );
}

export default App;
