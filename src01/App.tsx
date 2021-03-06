import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const task1 = [
        {id:1, title:'HTML&CSS', isDone:true},
        {id:2, title:'JS', isDone:false},
        {id:3, title:'React', isDone:true}
    ]
    const task2 = [
        {id:1, title:'HTML&CSS2', isDone:false},
        {id:2, title:'JS2', isDone:true},
        {id:3, title:'React2', isDone:true}
    ]

    return (
        <div className="App">
            <Todolist title={'What to learn'} task={task1}/>
            <Todolist title={'What to know'} task={task2}/>
        </div>
    );
}

export default App;
