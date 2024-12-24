import { useState } from "react"

export default function Count(){
    let [count, setCount] = useState(0)

 let incCount = ()=>{
    setCount(count+1)
}

    return(
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}