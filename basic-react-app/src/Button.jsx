function handleOnClick(){
  console.log("Hello !")
}

function handleMouseOver(){
  console.log("Bye !")
}

function handleDblClick(){
  console.log("I juts got Double Clicked!")
}

function Button(){
    return(
      <div>
      <button onClick={handleOnClick}>Buy Now</button>
      <p onMouseOver={handleMouseOver}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam mollitia repellat beatae molestiae exercitationem ut deserunt quo eum. Nobis dolores aspernatur voluptatem hic? Quo recusandae officia voluptates rerum similique.
      </p>
      <button onDoubleClick={handleDblClick}>Double Click Me !</button>
      </div>
    )
  }

  export default Button;