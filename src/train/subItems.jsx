import { useContext } from 'react';
import MyContext from './myContext';


const SubItems = () => {
    const{myItems , setMyItem }=useContext(MyContext);

const handleChengeDone = (id)=> {
   let Index = myItems.findIndex(i => i.id === id);
   const newMyItems =[...myItems];
   newMyItems[Index].done = !newMyItems[Index].done;
   setMyItem(newMyItems);
}
const handleDelete = (id)=> {
    let newMyItems = myItems.filter(i=>i.id !== id);
    setMyItem(newMyItems);
}


    if(myItems.length !== 0){
        return ( 
            <>
                <ul className="list-group m-1 p-0 pb-4 mt-2">
    
               { myItems.map(item => (
                        <li className={`list-group-item w-100 d-flex justify-content-between ${item.done?'list-group-item-success':''}`}>
                            <p className="m-0 p-0">{item.title}</p> 
                               <span>
                                  <i onClick={() => {handleChengeDone(item.id)}} className={`${item.done?'fas fa-times text-warning':'fas fa-check text-success'} me-3 text_hover_shadow`}></i>
                                  <i onClick={() => {handleDelete(item.id)}} className="fas fa-trash text-danger me-3 text_hover_shadow "></i>
                               </span>
                        </li>
               ))}
    
                </ul>
            </>
         )
    }else{
        return (  <h4 className="text-danger text-center m-2 p-3">هیچ کاری ثبت نشده ...!</h4> )
    }
    
}
 
export default SubItems;