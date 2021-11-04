import React from 'react'
import Avatar from "../../Avatar/Avatar";

import cn from '../profile.module.scss'

const ProfileSide = ({photos}) => {


    return (
        <div className={cn.profile__side}>
            <Avatar photos={photos}/>
        </div>
    )
}

export default ProfileSide
