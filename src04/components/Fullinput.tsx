import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from '../Todolist.module.css'

type propsType = {
    addTask: (title: string) => void
}
export const FullInput = (props: propsType) => {
    let [title, setTitle] = useState('');
    let [error, setError] = useState(false)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//записать в юзстейт title значение из инпута
        setError(false)
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        if (title.trim() !== '') {  //чтобы нельзя было добавить пустую строку
            props.addTask(title)
            setTitle('')
        } else {
            setError(true)
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (title.trim() !== '') {
                props.addTask(title.trim()) //убираем пробел в начале и конце
                setTitle('')
            } else {
                setError(true)
            }
        }
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
                   className={error ? style.error : ''}/>
            <button onClick={onClickHandler}>+</button>
            {error && <div className={style.errorMessage}>Title is required!</div>}
        </div>
    )
}