import './App.css'

function Title(){
  return(
    <h1>Welcome to my React App</h1>
  )
}

function Button(){
  return(
    <button>Hello World</button>
  )
}

function App() {
  return(
    <div>
      <Title></Title>
      <Button/>
    </div>
  )
}

export default App
