import React, {ChangeEvent, KeyboardEvent} from "react";

type propsType = {
    setTitle: (title: string) => void,
    title: string
    addTask: (title: string) => void
}

export const Input = ({addTask, setTitle, title, ...props}: propsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//записать в юзстейт title значение из инпута
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask(title)
            setTitle('')
        }
    }
    return (

            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>

    )
}