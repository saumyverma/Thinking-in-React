import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default function FilterableProductTable(products){

 return (
  <div>
<div className="container" style={{paddingtop:'50px'}}>
<div className="card" style={{width: '18rem'}}>
  
  <div className="card-body">
    <h5 className="card-title">Product</h5>
    <form>
         <SearchBar/>

     
        <ProductTable products={products}/>

        

    </form>
   
   
  </div>
</div>
</div>
</div>
 )

}