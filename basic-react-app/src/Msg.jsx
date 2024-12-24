function Msg({userName, textColor}){
    return(
        <div className="msg">
            <h3 style={{color:textColor}}>Hello, {userName}</h3>
        </div>
    )
}

export default Msg;