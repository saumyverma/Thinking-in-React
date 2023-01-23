
export default function SearchBar(){

    return (
            <>
            <div className="row">
            <div className="col-md-12 ">
               <input type="text" placeholder="Search Product..." name="searchbox" class="form-control"/>
            </div>
            </div>
  
            <div className="row">
            <div className="col-md-12">
              <input type="checkbox" name="instock_checkbox" className="from-control"/> Only Shown Products in stock
            </div>
           </div>
          </>

    )
}