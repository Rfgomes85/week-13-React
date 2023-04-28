// App.js
import React from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div className="center">
        <LoginForm />
      </div>
    </div>
  );
}

export default App; 