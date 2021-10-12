import React from 'react'
import Box from "../../UI/Box/Box";
import Button from "../../UI/Button/Button";

import cn from './Avatar.module.scss'

const Avatar = () => {
    return (
        <Box>
            <div className={cn.avatar}>
                <a className={cn.avatar__image}>
                    <img src="https://static-cse.canva.com/blob/652716/1600w-2so4RyuRmfc.jpg" alt="avatar"/>
                </a>
                <div className={cn.avatar__btn}>
                    <Button secondary={true}>Редактировать</Button>
                </div>
            </div>
        </Box>
    )
}

export default Avatar