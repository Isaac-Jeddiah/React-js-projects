import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Content = () => {

    const[items,index]=useState(
        [
            {id:1,checked:false,item:'rice'},
             {id:2,checked:true,item:'wheat'},
             {id:3 ,checked:false,item:'dhal'}
        ]
    );
    const a=items.map(item=>{<label>{item.id}</label>});
    var h=890;
    return (
        
        <main>
        
            <FaTrashAlt type="button"></FaTrashAlt>
            <li>
         {items.forEach(item=>{<label>{item}</label>})}
            </li>
          <ul>
           {items.forEach((item)=>{
                <li className="items" key={item.id}>
                     <input type="checkbox" checked={item.checked}></input>
                     <label>{item.item}</label>
                     <FaTrashAlt type="button"></FaTrashAlt>
                </li>
            })}
          </ul>
            
        </main>
    )
}
export default Content