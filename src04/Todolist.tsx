import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterType} from "./App";
// import {Button} from "./components/Button";
import {Button2} from "./components/Button2";
import {FullInput} from "./components/Fullinput";
import {Input} from "./components/Input";
import style from "./Todolist.module.css";
import {TasksMap} from "./Tasks";


type propsType = {
    title: string
    task: Array<propsTaskType>
    removeTask: (id: string) => void
    filtredTask: (value: filterType) => void
    addTask: (newTitle: string) => void
    changeCheckBoxStatus: (tID: string, value: boolean) => void
    filterValue: filterType

}
export type propsTaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export const Todolist = (props: propsType) => {

    let [title, setTitle] = useState('');
    console.log(title);

    // const [title, setTitle]=useState('')
    // console.log(title)
//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
// //записать в юзстейт значение из инпута
//         setTitle(event.currentTarget.value)
// }
// const onClickHandler=()=>{
//     props.addTask(title)
//     setTitle('')
// }
// const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) =>  {
//   if(event.key==='Enter')
//   {props.addTask(title)
//       setTitle('')}
//
// }
    const changeFilterAllHandler = () => {
        props.filtredTask('all')
    }
    const changeFilterActiveHandler = () => {
        props.filtredTask('active')
    }
    const changeFilterCompletedHandler = () => {
        props.filtredTask('completed')
    }
    const changeFilterHandler = (valueFilter: filterType) => {
        props.filtredTask(valueFilter)
    }
    // const removeTask =(tID:string)=>{
    //     props.removeTask(tID) // почему стринг?
    // }
    const removeTaskHandler = (tId: string) => {
        props.removeTask(tId)
    }
    const blockButton = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeCheckBox = (tID: string, value: boolean) => {
        props.changeCheckBoxStatus(tID, value)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <FullInput addTask={props.addTask}/>

            {/*<Input setTitle={setTitle} title={title} addTask={props.addTask}/>*/}
            {/*<Button name={'+'} callback={blockButton}/>*/}
            {/*<FullInput addTask={props.addTask}/>*/}
            {/*<div>*/}
            {/*    <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>*/}
            {/*    <button onClick={onClickHandler}>+</button>*/}
            {/*</div>*/}
            <TasksMap task={props.task} removeTaskHandler={removeTaskHandler} onChangeCheckBox={onChangeCheckBox}/>
            {/*{props.task.map(item => {*/}

            {/*    // const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {*/}
            {/*    //     props.changeCheckBoxStatus(item.id, event.currentTarget.checked)*/}
            {/*    // }*/}

            {/*    return (*/}
            {/*        <li key={item.id}  className={item.isDone? style.isDone:''}>*/}
            {/*            <input type="checkbox" checked={item.isDone} onChange={(event)=>onChangeCheckBox(item.id, event.currentTarget.checked)}/>*/}
            {/*            <span>{item.title}</span>*/}
            {/*            /!*<button onClick={()=>props.removeTask(item.id)}>X</button>*!/*/}
            {/*            /!*<button onClick={()=>removeTask(item.id)}>X</button>*!/*/}
            {/*            <Button2 name={'x'} callback={() => removeTaskHandler(item.id)}/>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*})}*/}

            <div>
                {/*<Button name={'all'} callback={() => changeFilterHandler('all')}  />*/}
                {/*<Button name={'active'} callback={() => changeFilterHandler('active')}/>*/}
                {/*<Button name={'completed'} callback={() => changeFilterHandler('completed')}/>*/}

                {/*// на эти 3 кнопки 3 отдельные функции закоменчены*/}
                <button className={props.filterValue === 'all' ? style.activeFilter : ''}
                        onClick={changeFilterAllHandler}>All
                </button>
                <button className={props.filterValue === 'active' ? style.activeFilter : ''}
                        onClick={changeFilterActiveHandler}>Active
                </button>
                <button className={props.filterValue === 'completed' ? style.activeFilter : ''}
                        onClick={changeFilterCompletedHandler}>Completed
                </button>
                {/*// // общая функция на 3 кнопки*/}

                {/*    <button  onClick={()=>changeFilterHandler('all')} >All</button>*/}
                {/*    <button onClick={()=>changeFilterHandler('active')} className={style.activeFilter}>Active</button>*/}
                {/*    <button onClick={()=>changeFilterHandler('completed')} className={style.activeFilter}>Completed</button>*/}
            </div>
        </div>
    )
}