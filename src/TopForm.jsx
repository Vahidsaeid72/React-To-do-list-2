import React, { useState,useContext } from 'react';
import TaskContext from './taskContext';


const TopForm = ()=>{

    const{taskItems,setTaskItems}=useContext(TaskContext);

    const [task,setTask]=useState("");

    const handleSetTask =(e)=>{
        setTask(e.target.value);
    }
    const handleAddtask =(e)=>{
        e.preventDefault();
        setTaskItems([...taskItems,{id:Math.random() , title : task , isDone : false}]);
        setTask("");
    }
    return(
        <>
            <form onSubmit={handleAddtask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={task} onChange={handleSetTask}/>
                    <button type="submit" className="btn btn-success me-1" >ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;