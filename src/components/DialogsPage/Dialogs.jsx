import React from 'react'
import Box from "../UI/Box/Box";
import {NavLink} from "react-router-dom";

import cn from './dialogs.module.scss'

const Dialogs = () => {
    return (
        <Box>
            <div className={cn.dialog}>
                <div className={cn.dialog__list}>
                    <div className={cn.dialog__item}>
                        <NavLink to={'/dialogs/1'}>Борис</NavLink>
                    </div>
                    <div className={cn.dialog__item}>
                       <NavLink to={'/dialogs/2'}>Лариса</NavLink>
                    </div>
                    <div className={cn.dialog__item}>
                        <NavLink to={'/dialogs/3'}>Андрей</NavLink>
                    </div>
                    <div className={cn.dialog__item + ' ' + cn.active}>
                        <NavLink to={'/dialogs/4'}>Натали</NavLink>
                    </div>
                    <div className={cn.dialog__item}>
                        <NavLink to={'/dialogs/5'}>Валера</NavLink>
                    </div>
                </div>
                <div className={cn.message__list}>
                    <div className={cn.message__item}>Привет</div>
                    <div className={cn.message__item}>Ты как</div>
                    <div className={cn.message__item}>Все не вренуть обратно</div>
                    <div className={cn.message__item}>Кто был, не прав</div>
                    <div className={cn.message__item}>Мы узнаем завтра</div>
                </div>
            </div>
        </Box>

    )
}

export default Dialogs