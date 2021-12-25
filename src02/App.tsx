import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type filterType= 'All' | 'Active' | 'Completed'
function App() {

    const [task, setTask] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true}
    ])
    const [filterValue, setFilterValue] = useState<filterType>('All')

    let isDoneTrue = task

    if (filterValue === 'All') {
        isDoneTrue = task
    } else if (filterValue === 'Active') {
        isDoneTrue = task.filter(f => !f.isDone)
    } else if (filterValue === 'Completed') {
        isDoneTrue = task.filter(f => f.isDone)
    }

    const filtredTask = (value: filterType) => {
        setFilterValue(value)
    }

    const removeTask = (id: number) => {
        // task=task.filter(f=>f.id!==id)
        setTask(task.filter(f => f.id !== id))
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                task={isDoneTrue}
                removeTask={removeTask}
                filtredTask={filtredTask}
            />

        </div>
    );
}

export default App;
