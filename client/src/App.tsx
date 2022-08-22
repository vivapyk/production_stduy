import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const onButtonClick = async () => {
    const data = await fetch(' http://localhost:8000/intro')
    console.log('hi')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button className="hoverButton" onClick={onButtonClick}>
            click!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
