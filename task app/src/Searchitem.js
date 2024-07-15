import { FaSearch } from "react-icons/fa";
import './index.css'

const Searchitem=({search,setsearch})=>{
    return(
        <form classname="searchform" onSubmit={(e)=>e.preventDefault()} >
           <label htmlFor="search"></label>
           <input type='text' role="searchbox" placeholder="Search item"
           value={search}
           onChange={(e)=>setsearch(e.target.value)}
           />
           
        </form>
    )
}
export default Searchitem;