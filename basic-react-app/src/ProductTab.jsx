import Product from "./Product"

function ProductTab(){
    return(
        <>
        {/* Passing Props for populating the component*/}
        <Product title="Phone" price={30000} features={["Fast", "Durable", "Hi-Speed"]} options={{Storage:"512gb", Colour:"White"}}/>  
        <Product title="Laptop" price={40000}features={["Fast", "Durable", "Hi-Speed"]} options={{Storage:"512gb", Colour:"White"}}/>
        <Product title="Watch" price={20000}features={["Fast", "Durable", "Hi-Speed"]} options={{Storage:"512gb", Colour:"White"}}/>
        </>
    )
}
export default ProductTab;