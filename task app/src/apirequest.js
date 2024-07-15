const apirequest =async (url='',optionsObj=null,errmsg=null)=>{
    try{
        //error for no sync btwn data and content
        const result = await fetch(url,optionsObj);
        if(!result.ok) throw Error('please reload app');
      const data = await result.json();
    
  }
      catch(err){
         errmsg=err.message
         //setfetcherror(err.message)
      }
      finally{
        //setisloading(false);
       return errmsg;  
    }
}
export default apirequest;