import Msg from "./Msg"

function MsgBox(){
    return(
        <div>
            <Msg userName = "Ronaldo" textColor={"yellow"}/>
            <Msg userName = "Messi" textColor={"pink"}/>
            <Msg userName = "Neymar" textColor={"blue"}/>
        </div>
    )
}

export default MsgBox;