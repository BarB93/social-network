import React from 'react'
import Content from './Content/Content'
import Side from './Side/Side'

import cn from './friends.module.scss'

const Friends = () => {
    return (
        <div className={cn.friends}>
            <Content/>
            <Side/>
        </div>
    )
}

export default Friends