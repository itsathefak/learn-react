function handleFormSubmit(event){
    event.preve
    console.log("The form was submitted !")
}

function Form(){
    <form onSubmit={handleFormSubmit}>
        <input placeholder="Enter" />
        <button>Submit</button>
    </form>
}

export default Form;