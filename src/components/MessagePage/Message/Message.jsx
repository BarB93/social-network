import React from 'react'
import Box from "../../UI/Box/Box"
import MessageTopSection from "../MessageTopSection/MessageTopSection"
import MessageListContainer from './MessageListContainer'
import CreateMessageContainer from '../CreateMessage/CreateMessageContainer'

import cn from './message.module.scss'

const Message = () => {

    return (
        <div className={cn.message}>
            <Box height='100%' padding='47px 0 62px'>
                <MessageListContainer/>
            </Box>
            <MessageTopSection />
            <CreateMessageContainer/>
        </div>
    )
}

export default Message