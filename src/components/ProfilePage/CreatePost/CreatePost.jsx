import React, {useState} from 'react'
import Box from "../../UI/Box/Box";
import Button from "../../UI/Button/Button";

import cn from './CreatePost.module.scss'
import {addPostActionCreator} from "../../../myRedux/actions/actions";


const CreatePost = ({dispatch, ...props}) => {
    const [value, setValue] = useState('')
    const activeClass = value.length > 0 ? cn.active : ''
    const isDisabled = value.length < 1

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPostActionCreator(value))
        setValue('')
    }

    return (
        <Box width='300px' margin={'10px 0 0 0'}>
            <form onSubmit={handleSubmit} className={activeClass}>
                <textarea
                    className={cn.form__textarea}
                    {...props}
                    type='text'
                    name='newPost'
                    id='newPost'
                    placeholder='Что у вас нового?'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className={cn.form__wrapperButton}>
                    <Button disabled={isDisabled} width='min-content'>Отправить</Button>
                </div>
            </form>

        </Box>
    )
}

export default CreatePost