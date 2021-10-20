import React from 'react'
import {useDispatch} from 'react-redux'
import {addMessage} from "../../../redux/slices/messageSlice";

import CreateMessage from "./CreateMessage";

const CreateMessageContainer = () => {
    const dispatch = useDispatch()

    const handleAddMessage = (value) => {
        dispatch(addMessage(value))
    }

    return <CreateMessage addMessage={handleAddMessage}/>
}

export default CreateMessageContainer