import React from 'react'
import {profileAPI} from '../../../api/services/profileService'
import Status from './Status'

const StatusContainer = ({userId}) => {
    const {data:status} = profileAPI.useFetchStatusQuery(userId)

    return (
        <>
            <Status status={status}/>
        </>
    )
}

export default StatusContainer