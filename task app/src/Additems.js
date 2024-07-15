import { FaPlus} from "react-icons/fa"
const Additems = ({newItem,setNewItem,handlesubmit})=>{
        return(

            <form className='addform' onSubmit={handlesubmit}>
                <label htmlFor="additem"></label>
                <input 
                  autoFocus 
                  id='additem'
                  type='text'
                  placeholder='Add item'
                  required
                  value={newItem}
                  onChange={(e)=>setNewItem(e.target.value)}
                  />
                <button
                 type='submit'
                 aria-label="add item">
                    <FaPlus/>
                 </button>
            </form>
        )
}
export default Additems