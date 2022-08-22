import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('home')

  const onButtonClick = async () => {
    const res = await fetch(' http://localhost:8000/intro')
    const data = await res.json()
    setText(data.intro)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
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
