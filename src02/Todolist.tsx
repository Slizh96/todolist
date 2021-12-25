import React from "react";
import {filterType} from "./App";


type propsType = {
    title: string
    task: Array<propsTaskType>
    removeTask: (id:number)=>void
    filtredTask: (value: filterType)=>void
}
type propsTaskType = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props: propsType) => {



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map(item => {
                    return (
                        <li key={item.id}>
                            <button onClick={()=>props.removeTask(item.id)}>X</button>
                            <input type="checkbox" checked={item.isDone}/>
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=> props.filtredTask('All')}>All</button>
                <button onClick={()=> props.filtredTask('Active')}>Active</button>
                <button onClick={()=> props.filtredTask('Completed')}>Completed</button>
            </div>
        </div>
    )
}