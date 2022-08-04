import { useContext, useState } from 'react';
import MyContext from './myContext';

const SubForm = () => {

    const[task,setTask]= useState('')


    const{myItems , setMyItem }=useContext(MyContext);

    function handleChange(e){
        setTask(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        setMyItem([...myItems,{id:Math.random(),title:task , done : false}])
         setTask('');
    }
    return ( 
    <>
        <form onSubmit={handleSubmit} class="form-group d-flex">
            <input onChange={handleChange} className="form-control m-1 " placeholder="کار جدید را وارد کنید ..." type="text" value={task}/>
            <button className="btn btn-success px-4 m-1" type="submit">ثبت</button>
        </form>
    </> 
    );
}
 
export default SubForm;