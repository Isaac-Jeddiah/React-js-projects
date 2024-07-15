    import './App.css';
    import Head from './Head';
    import Content from './content';
    import Footer from './Footer';
    import './index.css';
    import { useState,useEffect } from 'react';
    import Additems from './Additems';
    import Searchitem from './Searchitem';
    import apirequest from './apirequest';
    function App() {
  const [items, setItems]=useState( []/*JSON.parse(localStorage.getItem('shoppinglist'))
      || []  [
            {id:1,checked:false,item:'rice'},
            {id:2,checked:true,item:'wheat'},
            {id:3 ,checked:false,item:'dhal'}
  ]*/);
  const[search,setsearch]=useState('')
  const[newItem,setNewItem]=useState('')
  const[Fetcherror,setfetcherror]=useState(null);
  const [isloading,setisloading]=useState(true);

  const API_URL='http://localhost:3500/items'
  //reading operation by isaac
  useEffect(()=>{
    const fetchItems = async () =>{
      try{
        const result = await fetch(API_URL);
        if(!result.ok) throw Error('did not receive data');
      const data = await result.json();
      setItems(data);
    setfetcherror(null);
  }
      catch(err){
         console.log(err.message)
         setfetcherror(err.message)
      }
      finally{
        setisloading(false);
      }
    }
    setTimeout(()=>{
    ( async () => await fetchItems())();},1000)
  },[])
  
  const handlecheck = (id) =>{
    const listItems =items.map((item)=>item.id===id ? {...item, checked:!item.checked}: item);
    saveitems(listItems);

    const myItem =listItems.filter((item)=>item.id===id)
    const updateoptions={
      method:'PATCH',headers:{ 'Content-type':'application/json'},body:JSON.stringify({checked:myItem[0].checked})
    }

    const result =  apirequest(`${API_URL}/${id}`,updateoptions);
    if (!result) setfetcherror(result);
  }
  const handledelete =(id)=>{
    const listItems =items.filter((item)=>item.id!==id);
    saveitems(listItems);

    const deleteoptions={
      method:'DELETE',headers:{ 'Content-type':'application/json'}}
      const result =  apirequest(`${API_URL}/${id}`,deleteoptions);
    if (!result) setfetcherror(result);
    
  }

  

  const saveitems=(Items)=>{
    setItems(Items);
    localStorage.setItem('shoppinglist',JSON.stringify(Items));
  }
 
  const addItem =(item)=>{
    const id =items.length? items[items.length-1].id+1 :"1";
    const mynewitem={id,checked:false,item};
    const listItems=[...items,mynewitem];
    saveitems(listItems);

    const postoptions={
      method:'POST',headers:{ 'Content-type':'application/json'},
      body: JSON.stringify(mynewitem)
    }  
    const result = apirequest(API_URL,postoptions);
  
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
 
  
      return (
        <div className="App">
          <Head title='YOUR TASK LIST'/>
          <Additems
          newItem={newItem}
          setNewItem={setNewItem}
          handlesubmit={handlesubmit}
          />
          <Searchitem
          search={search}
          setsearch={setsearch}
          />

          <main>
            {isloading && <p style={{color:"red"}}>loading items....</p>}
            {Fetcherror && <p style={{color:"red"}}>{'error : '}{Fetcherror} </p>}
          {!Fetcherror && !isloading && <Content 
          items={items.filter((item)=>((item.item).toUpperCase()).includes(search.toUpperCase()))} 
          setItems={setItems}
          handlecheck={handlecheck} handledelete={handledelete}
          />}
          </main>
          <Footer length={items.length}/>
          
        </div>
        
      );
    }
    function App1() {
      const name='HELLO WORLD'
      const hall = () => {
        const names=['abc','def','ghi','jkl'];
        const int =Math.floor(Math.random()*4);
        return names[int];
      }
      return (
        <div className="App">
          <header className="App-header">
            
            <h6>value is {hall()}</h6>
            <p>hello this is {hall()}</p>
            
          </header>
          <footer>
            end of file
          </footer>
        </div>
      );
    }
    export default App;
