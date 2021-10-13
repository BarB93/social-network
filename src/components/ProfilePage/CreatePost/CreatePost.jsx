import React from 'react'
import Box from "../../UI/Box/Box";
import Button from "../../UI/Button/Button";

import cn from './CreatePost.module.scss'

const CreatePost = () => {
    return (
        <Box margin={'10px 0 0 0'}>
            <div>
                <textarea placeholder='Что у вас нового нового?' className={cn.textarea} name="" id="" cols="30" rows="10"></textarea>
                <div className={cn.createPost__btn}>
                    <Button width='min-content'>Отправить</Button>
                </div>
            </div>
        </Box>
    )
}

export default CreatePost