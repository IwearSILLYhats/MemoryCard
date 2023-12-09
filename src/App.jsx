import { Content } from './components/Content.jsx'
import { Scoreboard } from '/src/components/Scoreboard.jsx'
import { Victory } from '/src/components/Victory.jsx'
import { Start } from './components/Start.jsx'
import { useState } from 'react'

function App() {
  const [round, setRound] = useState(1)
  const [fullList, setFullList] = useState(null)
  const [score, setScore] = useState({current: 0, best: 0})
  
  function changeScore (bool) {
    //three states: reset current score to 0, increase only current score, or increase current and best (when they're tied)
    if(bool) {setScore({...score, current:0})}
    else {
      const inc = score.current +1;
      (score.best > score.current) ? 
      setScore({...score, current: inc}) :
      setScore({current: inc, best: inc})
    }
  }

  return (
    <div>
      <header>
      <h1>Memory Cards!</h1>
      <h2>{`Round ${round}`}</h2>
        <Scoreboard current={score.current} best={score.best} />
      </header>
      <main>
        {
          (!fullList) ? <Start theme={setFullList} />
          : (fullList && round < 6) ? <Content round={round} list={fullList} onClick={changeScore} roundOver={setRound} />
          : <Victory />
        }

      </main>
    </div>
  )
}

export default App
