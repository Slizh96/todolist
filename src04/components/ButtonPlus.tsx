import React from "react";

type propsType={
name: string,
    callBack: ()=>void
}

const ButtonPlus = (props:propsType) => {
    const onClickHandler =()=>{
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
          )

}

export default ButtonPlus;