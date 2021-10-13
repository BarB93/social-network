import React from 'react'
import Box from "../../UI/Box/Box";
import DialogList from "./DialogList";
import MessageList from "../Messages/MessageList";

import cn from './dialogs.module.scss'

const Dialogs = ({state}) => {
    return (
        <Box>
            <div className={cn.dialog}>
                <DialogList dialogs={state.dialogs}/>
                <MessageList messages={state.messages}/>
            </div>
        </Box>
    )
}

export default Dialogs