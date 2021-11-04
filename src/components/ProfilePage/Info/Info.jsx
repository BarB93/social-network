import React, {useState} from 'react'
import Box from "../../UI/Box/Box";

import cn from './Info.module.scss'
import InfoFull from "./InfoFull";
import InfoShort from "./InfoShort";

const Info = ({aboutMe, contacts, name, lookingForAJob, lookingForAJobDescription}) => {
    const [isShowMoreInfo, setShowMoreInfo] = useState(false)
    const handleToggleMoreInfo = () => {
        setShowMoreInfo(prev => !prev)
    }

    return (
        <Box>
            <div className={cn.info}>
                <div className={cn.info__top}>
                    <div className={cn.info__name}>{name}</div>
                </div>
                <InfoShort aboutMe={aboutMe} isShowInfo={isShowMoreInfo} handleToggleMoreInfo={handleToggleMoreInfo}/>
                <InfoFull isShowInfo={isShowMoreInfo}
                          contacts={contacts}
                          lookingForAJob={lookingForAJob}
                          lookingForAJobDescription={lookingForAJobDescription}
                />
            </div>
        </Box>
    )
}

export default Info