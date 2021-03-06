import React, {ChangeEvent} from "react";
import {TaskType} from "./Todolist";
type propsType={
    tasks: Array<TaskType>
    removeTask:(todolistID: string, taskId: string) => void
        changeTaskStatus:(todolistID:string, taskId: string, isDone: boolean) => void
    todolistID:string
}
export const MapTasks = ({tasks, removeTask, changeTaskStatus, todolistID, ...props}:propsType) => {
  return(
      <ul>
          {
              tasks.map(t => {
                  const onClickHandler = () => removeTask(todolistID, t.id)
                  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                      changeTaskStatus(todolistID, t.id, e.currentTarget.checked);
                  }

                  return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                      <input type="checkbox"
                             onChange={onChangeHandler}
                             checked={t.isDone}/>
                      <span>{t.title}</span>
                      <button onClick={onClickHandler}>x</button>
                  </li>
              })
          }
      </ul>
  )
}