import { useState } from "react"
import { Card } from "./Card"
import { subList, randomizer } from "./giffer"

function Content ({ round, list, onClick }) {
    const [sub, setSub] = useState(subList(list, round))
    function randomizeSub () {
        let clone = [...sub]
        randomizer(clone)
        setSub(clone)
    }
    
    return (
        <main>
        {sub.map(e => {
          return (
            <Card key={e.url} onClick={() => {
                onClick(e.picked)
                randomizeSub()
                }}>
              <p>{e.url}</p>
            </Card>
          )
        })}
      </main>
    )
}

export { Content }