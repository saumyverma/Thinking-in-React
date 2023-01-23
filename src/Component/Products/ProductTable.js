import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function  ProductTable(products){
//   console.log(products.products.products);
  var row=[];
  var lastCategory=null;
  let all_products=products.products.products
  all_products.forEach(element => {
    if (element.category !== lastCategory) {
   row.push(<ProductCategoryRow category={element.category} key={element.category} />);
    } 
   row.push(<ProductRow name={element.name} price={element.price} />);
    lastCategory = element.category;
    
  });



  
    return(

        <>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
       
            {row}
            
              
           
            </tbody>
            </table>
                
        </>
    )
}