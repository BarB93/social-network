import React, {useEffect} from 'react'
import Profile from './Profile'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProfile} from '../../../redux/actions/profileAction'
import {useParams} from 'react-router-dom'

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profileData = useSelector(state => state.profile)
    let {userId} = useParams()
    userId = userId ? userId : 14640
    useEffect(() => {
        dispatch(fetchProfile(userId))
    },[])

    return (
        <Profile {...profileData}/>
    )
}

export default ProfileContainer