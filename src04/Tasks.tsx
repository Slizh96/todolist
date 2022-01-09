import React from "react";
import {propsTaskType} from "./Todolist";
import style from './Todolist.module.css'
import {Button2} from "./components/Button2";

type propsType = {
    task: Array<propsTaskType>
    removeTaskHandler: (tId: string)=>void
    onChangeCheckBox: (tID: string, value: boolean)=>void
}

export const TasksMap = ({task, removeTaskHandler, onChangeCheckBox,...props}: propsType ) => {
  return(
      <div>
          <ul>
          {task.map(item => {

              // const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
              //     props.changeCheckBoxStatus(item.id, event.currentTarget.checked)
              // }

              return (
                  <li key={item.id}  className={item.isDone? style.isDone:''}>
                      <input type="checkbox" checked={item.isDone} onChange={(event)=>onChangeCheckBox(item.id, event.currentTarget.checked)}/>
                      <span>{item.title}</span>
                      {/*<button onClick={()=>props.removeTask(item.id)}>X</button>*/}
                      {/*<button onClick={()=>removeTask(item.id)}>X</button>*/}
                      <Button2 name={'x'} callback={() => removeTaskHandler(item.id)}/>
                  </li>

              )
          })}
          </ul>
      </div>
  )
}