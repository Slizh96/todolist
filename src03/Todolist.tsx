import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType} from "./App";


type propsType = {
    title: string
    task: Array<propsTaskType>
    removeTask: (id:string)=>void
    filtredTask: (value: filterType)=>void
    addTask: (newTitle:string)=>void

}
type propsTaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export const Todolist = (props: propsType) => {

    const [title, setTitle]=useState('')
    console.log(title)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//записать в юзстейт значение из инпута
        setTitle(event.currentTarget.value)
}
const onClickHandler=()=>{
    props.addTask(title)
    setTitle('')
}
const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) =>  {
  if(event.key==='Enter')
  {props.addTask(title)
      setTitle('')}

}
// const changeFilterAllHandler=()=>{
//     props.filtredTask('All')
// }const changeFilterActiveHandler=()=>{
//     props.filtredTask('Active')
// }const changeFilterCompletedHandler=()=>{
//     props.filtredTask('Completed')
// }
    const changeFilterHandler =(valueFilter: filterType) =>{
        props.filtredTask(valueFilter)
    }
    const removeTask =(tID:string)=>{
        props.removeTask(tID) // почему стринг?
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPress}/>
                <button onClick={onClickHandler}>+</button>
            </div>
            <ul>
                {props.task.map(item => {
                    return (
                        <li key={item.id}>
                            {/*<button onClick={()=>props.removeTask(item.id)}>X</button>*/}
                            <button onClick={()=>removeTask(item.id)}>X</button>
                            <input type="checkbox" checked={item.isDone}/>
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>changeFilterHandler('all')}>All</button>
                <button onClick={()=>changeFilterHandler('active')}>Active</button>
                <button onClick={()=>changeFilterHandler('completed')}>Completed</button>
            </div>
        </div>
    )
}