import "./Product.css"

function Product({title, price=1, features, options}){ //Passing Default Value as 1
    // let list = features.map((feature)=> <li>{feature}</li>)
    return(
        <div className="Product">
        <h3>{title}</h3>
        <p>Price : {price}</p>
        <p>{features.map((feature)=> <li>{feature}</li>)}</p>
        <p>Storage : {options.Storage}</p>
        <p>Colour : {options.Colour}</p>
        </div>
    )
}

export default Product;