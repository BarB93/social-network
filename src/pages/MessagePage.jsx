import React from 'react'
import Message from "../components/MessagePage/Message/Message";


const MessagePage = ({state, dispatch}) => {

    return (
        <Message state={state} dispatch={dispatch}/>
    )
}

export default MessagePage