import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Itemlist from './Itemlist';
    const Content = ({items,setItems,handlecheck,handledelete}) => {
        
         return (
            
            <>
                {items.length?(<Itemlist
                items={items} setItems={setItems}
                handlecheck={handlecheck} handledelete={handledelete}
                />
            ):(
                <p style={{marginTop:'2rem'}}>YOUR LIST IS EMPTY</p>
            )}
            </>
        )
    }
    export default Content