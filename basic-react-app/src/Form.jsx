import { useState } from "react"

export default function Form(){
    let [fullName, setFullName] = useState("")

    let handleOnChange = (event)=>{
        setFullName(event.target.value)
    }

    return(
    <form>
        <label htmlFor="username">Full Name</label>
        <input placeholder="Enter Your Full Name" type="text" id="username" value={fullName} onChange={handleOnChange}/>
        <button>Submit</button>
    </form>
    )
}