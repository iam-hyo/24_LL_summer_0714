import { useState } from 'react'
import LL_logo from './assets/LL_logo.png'; 
import notion_logo from './assets/notion_logo.png'
import './App.css'
import CountdownTimer from './components/CountdownTimer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.notion.so/12-c4b0fe28ce314725a86ff2ae3d5c6fc1?pvs=4" target="_blank">
          <img src={LL_logo} className="logo" alt="LL logo" />
        </a>
        <a href="https://opposite-people-a71.notion.site/0707_React-hook-84dac68305c840d1940e60da4ec23aa9?pvs=4" target="_blank">
          <img src={notion_logo} className="logo" alt="notion logo"/>
        </a>
      </div>
      <h1>다음 세션까지 남은 시간</h1>
      <header className="App-header">
        <CountdownTimer />
      </header>

      <p>위 노션 로고를 클릭해서 hook에 대해 알아봐요!</p>
    </>
  )
}

export default App
