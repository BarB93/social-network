import React from 'react'
import UpdateStatusContainer from './UpdateStatus/UpdateStatusContainer'

import cn from './Status.module.scss'

const Status = React.forwardRef(({status, isConditional, openUpdateStatus}, ref) => {

    const interactClass = isConditional ? cn.interact : ''

    return (
        <div  ref={ref} onClick={(e) => e.stopPropagation()}>
            {
                status ?
                <div >
                    <div onClick={openUpdateStatus} className={`${cn.status} ${interactClass}`}>{status}</div>
                    {isConditional && <UpdateStatusContainer status={status} isConditional={isConditional}/>}
                </div>
                : isConditional ?
                    <div  className={interactClass} onClick={openUpdateStatus}>Укажите статус</div>
                    :
                    null

            }
        </div>
    )
})

export default Status