import "./Product.css"

function Product({title, price=1, features, options}){ //Passing Default Value as 1
    // let list = features.map((feature)=> <li>{feature}</li>)
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "lightblue" : null}
    return(
        <div className="Product" style={styles}>
        <h3>{title}</h3>
        <p>Price : {price}</p>
        {/* {price > 30000 ? <p>Discount of 5%</p> : null}         Same work, Different method */}
        { isDiscount && <p>Discount of 5%</p>}
        <p>{features.map((feature)=> <li>{feature}</li>)}</p>
        <p>Storage : {options.Storage}</p>
        <p>Colour : {options.Colour}</p>
        </div>
    )
}

export default Product;