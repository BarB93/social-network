import React, {useState} from 'react'
import {addMessageActionCreator} from "../../../myRedux/actions/actions";
import cn from './CreateMessage.module.scss'

const CreateMessage = ({dispatch}) => {

    const [value, setValue] = useState('')

    const handleAddMessage = () => {
        dispatch(addMessageActionCreator(value))
        setValue('')
    }

    return (
        <div className={cn.create}>
            <input
                className={cn.create__input}
                type="text"
                placeholder='Напишите сообщение...'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={handleAddMessage}>Отправить</button>
        </div>
    )
}

export default CreateMessage