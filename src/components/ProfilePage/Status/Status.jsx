import React from 'react'

import cn from './Status.module.scss'
import UpdateStatus from './UpdateStatus/UpdateStatus'

const Status = ({status}) => {

    return (
        <>
            {status? <div className={cn.status}>{status}</div> : null }
            <UpdateStatus />
        </>
    )
}

export default Status