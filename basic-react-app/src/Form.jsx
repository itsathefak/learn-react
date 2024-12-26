import { useState } from "react"

export default function Form(){
    let [fullName, setFullName] = useState("")

    let handleOnChange = (event)=>{
        setFullName(event.target.value)
    }

    return(
    <form>
        <input placeholder="Enter Your Full Name" type="text" value={fullName} onChange={handleOnChange}/>
        <button>Submit</button>
    </form>
    )
}

