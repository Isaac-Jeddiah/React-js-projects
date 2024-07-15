import { FaTrashAlt } from "react-icons/fa"
const Itemlist=({items,setItems,handlecheck,handledelete})=>{
    return(
        <ul>
            
        {items.map((item) => (
                <li className="item" key={item.id}>
                <input type="checkbox"  checked={item.checked}  onChange={()=>handlecheck(item.id)}/>
                <label 
                style={(item.checked)?{textDecoration:'line-through'}:null}
                onDoubleClick={()=>handlecheck(item.id)}>
                    {item.item.toUpperCase() }
                </label>
                <FaTrashAlt onClick={()=>handledelete(item.id)} type="button" tabIndex="0"/>
                </li>))}
                
            </ul>
    )
}
export default Itemlist