function printHello(){
  console.log("Hello !")
}

function Button(){
    return(
      <button onClick={printHello}>Buy Now</button>
    )
  }

  export {Button};