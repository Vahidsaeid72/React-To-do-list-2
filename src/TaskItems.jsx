import React, { createContext, useContext } from 'react';
import TaskContext from './taskContext';

const TaskItems = ()=>{

   const{taskItems,setTaskItems}=useContext(TaskContext);
   
   
    const handleChangeDone =(id)=>{
       let index =  taskItems.findIndex(t =>t.id === id);
       let newTaskItem =[...taskItems];
       newTaskItem[index].isDone = !newTaskItem[index].isDone;
       setTaskItems(newTaskItem);
    }
    

    const handleDelete =(id)=>{
        let newTaskItem = taskItems.filter(t =>t.id !== id);
        setTaskItems(newTaskItem);
    }

    if (taskItems.length !== 0){
        return (
            <>
                <ul className="list-group m-0 p-0 mt-2">
                    {taskItems.map(taskItem =>(
                        <li className={`list-group-item d-flex justify-content-between ${taskItem.isDone?'list-group-item-success':''}`}>
                            {taskItem.title}
                            <span>
                                <i onClick={()=>{handleChangeDone(taskItem.id)}} className={`me-3 pointer ${taskItem.isDone?'fas fa-times text-warning':'fas fa-check text-success'} transition_200 text_hover_shadow`}></i>
                                <i onClick={()=>{handleDelete(taskItem.id)}} className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                            </span>
                        </li> 
                    ))}                   
                </ul>
            </>    
            )
        }else{
            return (
                <h4 className="text-center my-4 text-danger">هیچ کاری ثبت نشده ...!</h4>
            )
    }
     
}

export default TaskItems;