import Product from "./Product"

function ProductTab(){
    return(
        <>
        {/* Passing Props for populating the component*/}
        <Product title="Phone" price={30000}/>  
        <Product title="Laptop" price={40000}/>
        <Product title="Watch" price={20000}/>
        </>
    )
}
export default ProductTab;