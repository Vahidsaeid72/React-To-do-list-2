import { useState } from 'react';
import SubForm from './subform'
import SubItems from './subItems';
import MyContext from './myContext';



const App = () => {
    const[myItems , setMyItem ]= useState([
        {id:1 , title: 'کار شماره 1',done : true},
        {id:2 , title: 'کار شماره 2',done : false},
        {id:3 , title: 'کار شماره 3',done : false}
    ]);

    return ( 
        <MyContext.Provider value={{
            myItems , 
            setMyItem
        }}>
            <div className="container w-100 h-100 p-3">
                <div className="row h-100 justify-content-center align-align-items-start">
                    <div className="col-12 col-md-8 col-lg-6 bg-dark shadow rounded-3 p-3 h_fit">
                    <h3 className="text-white text-center py-3 text_shdow">نرم افزار مدیریت کارها</h3>
                    <SubForm/>
                    <SubItems/>
                    </div>
                </div>
            </div> 
        </MyContext.Provider>
    );
}
 
export default App;