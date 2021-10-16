import React from 'react'
import Box from "../../UI/Box/Box"
import MessageTopSection from "../MessageTopSection/MessageTopSection"
import MessageList from "./MessageList"
import CreateMessage from "../CreateMessage/CreateMessage";

import cn from './message.module.scss'

const Message = ({state, dispatch}) => {

    return (
        <div className={cn.message}>
            <Box height='100%' padding='47px 0 62px'>
                <MessageList messages={state.messages}/>
            </Box>
            <MessageTopSection />
            <CreateMessage dispatch={dispatch}/>
        </div>
    )
}

export default Message