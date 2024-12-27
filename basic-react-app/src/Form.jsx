import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullName : "",
        username : "",
        password: ""
    })

    // let handleOnChange = (event)=>{
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event)=>{
    //     setUsername(event.target.value)
    // }

    let handleInputChange = (event) =>{
        let fieldName= event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            currData[fieldName] = newValue;
            return {...currData, [fieldName]: newValue};
        });
    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
        fullName : "",
        username : "",
        password: ""
        });
    };

    return(
    <form onChange={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input placeholder="Enter Your Full Name" type="text" id="fullName" value={formData.fullName} onChange={handleInputChange} name="fullName"/>

        <br /><br /><br /><br />

        <label htmlFor="username">User Name</label>
        <input placeholder="Enter Your Full Name" type="text" id="username" value={formData.username} onChange={handleInputChange} name="username"/>

        <label htmlFor="password">Password</label>
        <input placeholder="Enter Your Password" type="password" id="password" value={formData.password} onChange={handleInputChange} name="password"/>
        <button>Submit</button>
    </form>
    )
}