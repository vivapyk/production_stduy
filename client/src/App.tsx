import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('home')
  const [isRetrospectOpen, setRetorSpect] = useState(false)
  const [retrospectContent, setRetorSpectContent] = useState('')


  const onButtonClick = async () => {
    const res = await fetch('http://localhost:8000/intro')
    const data = await res.json()
    setText(data.intro)
  }

  const onRetroSpectButtonClick = () => {
    setRetorSpect(prevState => !prevState)
  }

  const handleRetrospectInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRetorSpectContent(e.target.value)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(JSON.stringify(retrospectContent))
    console.log(typeof (JSON.stringify(retrospectContent)))

    const res = await fetch('http://localhost:8000/retrospect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: retrospectContent })
    })

    console.log(await res.json())
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
          <button className="hoverButton" onClick={onRetroSpectButtonClick}>
            일기
          </button>
        </div>
        {isRetrospectOpen &&
          <div>
            <form onSubmit={handleSubmit}>
              <textarea rows={10} cols={50} onChange={handleRetrospectInput} value={retrospectContent} />
              <button type="submit" className="submitButton" >
                기록
              </button>
            </form>
          </div>

        }

      </header>
    </div >
  );
}

export default App;
