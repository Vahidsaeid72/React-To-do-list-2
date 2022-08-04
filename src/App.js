import React,{useState} from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';
import TaskContext from './taskContext';


const App = ()=>{

const [taskItems,setTaskItems] = useState([
    {id : 1 , title : 'کارشماره 1',isDone : false },
    {id : 2 , title : 'کارشماره 2',isDone : false },
    {id : 3 , title : 'کارشماره 3',isDone : true },
])

    return (
    <TaskContext.Provider value={{
        taskItems,
        setTaskItems
    }}>
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">
                <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
                <TopForm/>
                <TaskItems/>
                </div>
            </div>
        </div>
    </TaskContext.Provider>
        
    ) 
}


export default App;
