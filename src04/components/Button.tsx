import React from "react";
import style from "../Todolist.module.css";

type buttonType={
    name:string
    callback: ()=>void
}

export const Button = ({name, ...props}: buttonType) => {

    const onClickHandler = () => {
      props.callback()
    }

  return(

<button onClick={onClickHandler}>{name}</button>

  )
}
