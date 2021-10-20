import React from 'react'
import FrendsContent from './FrendContent/FrendsContent'
import FrendsSide from './FrendsSide/FrendsSide'


import cn from './frends.module.scss'

const Frends = () => {
    return (
        <div className={cn.frends}>
            <div>
                <FrendsContent/>
            </div>
            <div>
                <FrendsSide/>
            </div>
        </div>
    )
}

export default Frends