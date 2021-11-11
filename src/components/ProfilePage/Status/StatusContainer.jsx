import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Status from './Status'

import {closeUpdateStatus, openUpdateStatus} from '../../../redux/slices/profileSlice'
import {profileAPI} from '../../../api/services/profileService'


const StatusContainer = ({userId}) => {
    const dispatch = useDispatch()
    const {data:status, isError} = profileAPI.useFetchStatusQuery(userId)
    const {userId: authUserId} = useSelector(state => state.auth)
    const {userId: currentUserId} = useSelector(state => state.profile.profile)
    const isConditional = currentUserId === authUserId
    const statusRef = useRef()


    const closeChangeStatus = () => { dispatch((closeUpdateStatus()))}
    let openChangeStatus = () => {}
    if(isConditional)  openChangeStatus = () => { dispatch((openUpdateStatus()))}
    const handleCloseUpdateStatus = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(statusRef.current)) {
            closeChangeStatus()
        }
    }

    useEffect(() => {

        document.body.addEventListener('click', handleCloseUpdateStatus)

        return () => {
            document.body.removeEventListener('click', handleCloseUpdateStatus)
        }
    },[])

    return (
        <>
            {isError && <div>Произошла ошибка призагрузке статуса</div>}
            {status && <Status ref={statusRef} status={status} isConditional={isConditional} openUpdateStatus={openChangeStatus}/>}
        </>
    )
}

export default StatusContainer