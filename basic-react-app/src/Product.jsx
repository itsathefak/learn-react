import "./Product.css"

function Product({title, price=1}){ //Passing Default Value as 1
    return(
        <div className="Product">
        <h3>{title}</h3>
        <p>Price = {price}</p>
        </div>
    )
}

export default Product;