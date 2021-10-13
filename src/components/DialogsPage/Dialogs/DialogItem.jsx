import React from 'react'
import {NavLink} from "react-router-dom";

import cn from './dialogs.module.scss'

const DialogsItem = ({id, name}) => {
    return (
        <NavLink to={`/dialogs/${id}`} className={cn.dialog__item} activeClassName={cn.active}>
            <img className={cn.dialog__avatar} src="https://vk.com/images/camera_200.png" alt="ava"/>
            <span className={cn.dialog__name}>{name}</span>
        </NavLink>
    )
}

export default DialogsItem