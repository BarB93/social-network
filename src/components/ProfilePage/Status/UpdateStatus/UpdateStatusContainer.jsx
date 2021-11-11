import React from 'react'
import UpdateStatus from './UpdateStatus'
import {useSelector} from 'react-redux'

const UpdateStatusContainer = ({status}) => {
    const {isOpenUpdateStatus} = useSelector(state => state.profile)

    return (
      isOpenUpdateStatus ? <UpdateStatus status={status} isOpen={isOpenUpdateStatus}/> : null
    )
}

export default UpdateStatusContainer