import "./Product.css"

function Product({title, price=1, features, options}){ //Passing Default Value as 1
    return(
        <div className="Product">
        <h3>{title}</h3>
        <p>Price = {price}</p>
        <p>Features = {features}</p>
        <p>Storage = {options.Storage}</p>
        <p>Colour = {options.Colour}</p>
        </div>
    )
}

export default Product;