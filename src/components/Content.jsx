import { useState } from "react"
import { Card } from "./Card"
import { subList, randomizer } from "./giffer"

function Content ({ round, list, onClick, roundOver }) {
    const [sub, setSub] = useState(subList(list, round))
    function randomizeSub () {
        let clone = [...sub]
        randomizer(clone)
        setSub(clone)
    }
    function endRound () {
      if(sub.every((e) => e.picked)) {
        roundOver(round+1)
        setSub(subList(list,round+1))
      }
      else randomizeSub()
    }
    
    return (
        <>
        {sub.map(e => {
          return (
            <Card key={e.url} onClick={() => {
                onClick(e.picked)
                e.picked = true
                endRound()
                }}>
                  <img src={e.url} alt="gif" />
            </Card>
          )
        })}
      </>
    )
}

export { Content }