import './App.css'
import Title from "./Title.jsx"
import Button from './Button.jsx'
import Description from "./Description.jsx"
import ProductTab from "./ProductTab.jsx"
import MsgBox from "./MsgBox.jsx"
import Form from "./Form.jsx"
import Count from "./Count.jsx"


function App() {
  return(
    <>
      <Title></Title>
      <Description/>
      <ProductTab/>
      <Button/>
      <MsgBox/>
      <Form></Form>
      <Count></Count>
    </>
  )
}

export default App
