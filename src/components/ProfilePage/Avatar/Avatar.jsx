import React from 'react'
import Box from '../../UI/Box/Box'
import Button from '../../UI/Button/Button'
import noAvatar from '../../../assets/images/no_avatar.png'

import cn from './Avatar.module.scss'

const Avatar = ({photos}) => {
    const imageURL = photos.large ? photos.large : noAvatar

    return (
        <Box>
            <div className={cn.avatar}>
                <a href='#' className={cn.avatar__image}>
                    <img src={imageURL} alt='avatar'/>
                </a>
                <div className={cn.avatar__btn}>
                    <Button secondary={true}>Редактировать</Button>
                </div>
            </div>
        </Box>
    )
}

export default Avatar