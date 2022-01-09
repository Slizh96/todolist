import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterType = 'all' | 'active' | 'completed'

function App() {

    const [task, setTask] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'React', isDone: true}
    ])
    const [filterValue, setFilterValue] = useState<filterType>('all')

    let isDoneTrue = task

    if (filterValue === 'all') {
        isDoneTrue = task
    } else if (filterValue === 'active') {
        isDoneTrue = task.filter(f => !f.isDone)
    } else if (filterValue === 'completed') {
        isDoneTrue = task.filter(f => f.isDone)
    }

    const filtredTask = (value: filterType) => {
        setFilterValue(value)
    }
    const addTask = (newTitle:string) => {
        setTask([{id: v1(), title: newTitle, isDone: true}, ...task])
    }
    const changeCheckBoxStatus = (id: string, value: boolean)=>{
        setTask(task.map(m=>m.id===id ? {...m, isDone: value} : m))
        console.log(value)
    }
    const removeTask = (id: string) => {
        // task=task.filter(f=>f.id!==id)
        //console.log (id)
        setTask(task.filter(f => f.id !== id))
    }

      return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                task={isDoneTrue}
                removeTask={removeTask}
                filtredTask={filtredTask}
                addTask={addTask}
                changeCheckBoxStatus={changeCheckBoxStatus}
                filterValue={filterValue}
            />

        </div>
    );
}

export default App;
