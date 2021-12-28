import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType} from "./App";
import {Button} from "./components/Button";
import {Button2} from "./components/Button2";


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
//     props.filtredTask('all')
// }
// const changeFilterActiveHandler=()=>{
//     props.filtredTask('active')
// }
// const changeFilterCompletedHandler=()=>{
//     props.filtredTask('completed')
// }
    const changeFilterHandler =(valueFilter: filterType) =>{
        props.filtredTask(valueFilter)
    }
    const removeTask =(tID:string)=>{
        props.removeTask(tID) // почему стринг?
    }
    const removeTaskHandler =(tId:string)=>{
        props.removeTask(tId)
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
                            <input type="checkbox" checked={item.isDone}/>
                            <span>{item.title}</span>
                            {/*<button onClick={()=>props.removeTask(item.id)}>X</button>*/}
                            {/*<button onClick={()=>removeTask(item.id)}>X</button>*/}
                            <Button2 name={'x'} callback={()=>removeTaskHandler(item.id)}/>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'all'} callback={()=>changeFilterHandler('all')} />
                <Button name={'active'} callback={()=>changeFilterHandler('active')}/>
                <Button name={'completed'} callback={()=>changeFilterHandler('completed')}/>

                {/*// на эти 3 кнопки 3 отдельные функции закоменчены*/}
                {/*// <button onClick={changeFilterAllHandler}>All</button>*/}
                {/*// <button onClick={changeFilterActiveHandler}>Active</button>*/}
                {/*// <button onClick={changeFilterCompletedHandler}>Completed</button>*/}
                {/*// // общая функция на 3 кнопки*/}

                {/*<button onClick={()=>changeFilterHandler('all')}>All</button>*/}
                {/*<button onClick={()=>changeFilterHandler('active')}>Active</button>*/}
                {/*<button onClick={()=>changeFilterHandler('completed')}>Completed</button>*/}
            </div>
        </div>
    )
}