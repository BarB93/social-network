import React from 'react'
import DialogsItem from "./DialogItem";

import cn from './dialogs.module.scss'

const DialogList = ({dialogs}) => {
    dialogs = dialogs.map((el) => <DialogsItem key={el.id} id={el.id} name={el.name}/>)

    return (
        <div className={cn.dialog__list}>
            {dialogs}
        </div>
    )
}

export default DialogList