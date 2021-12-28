import React from "react";

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