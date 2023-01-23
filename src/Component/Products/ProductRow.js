export default function ProductRow(list){

    return(
         <>
        <tr className="table-info">
         <th scope="row">1</th>
         <td>{list.name}</td>
         <td>{list.price}</td>
         </tr>
        </>
    )
}