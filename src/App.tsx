import React from 'react';
import logo from './KOTIK.png';
import './App.css';
import fire from './fire.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='punk'>
         WE ARE PUNKOTIKI
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={fire} className='fire'/>
        <p>(типа панки типи крутые)</p>
      </header>
    </div>
  );
}

export default App;
