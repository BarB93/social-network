import React, {useState} from 'react'
import Box from "../../UI/Box/Box";

import cn from './Info.module.scss'
import InfoFull from "./InfoFull";
import InfoShort from "./InfoShort";

const Info = () => {
    const [isShowMoreInfo, setShowMoreInfo] = useState(false)
    const handleToggleMoreInfo = () => {
        setShowMoreInfo(prev => !prev)
    }

    return (
        <Box>
            <div className={cn.info}>
                <div className={cn.info__top}>
                    <div className={cn.info__name}>Борис Баровский</div>
                </div>
                <InfoShort isShowInfo={isShowMoreInfo} handleToggleMoreInfo={handleToggleMoreInfo}/>
                <InfoFull isShowInfo={isShowMoreInfo}/>
            </div>
        </Box>
    )
}

export default Info