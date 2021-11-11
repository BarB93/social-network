import React from 'react'
import UpdateStatusContainer from './UpdateStatus/UpdateStatusContainer'

import cn from './Status.module.scss'

const Status = React.forwardRef(({status, isConditional, openUpdateStatus, closeOtherElements}, ref) => {
    const interactClass = isConditional ? cn.interact : ''
    const handleClick = (e) => {
        e.stopPropagation()
        closeOtherElements()
    }

    return (
        <div  ref={ref} onClick={handleClick}>
            {
                status ?
                <div >
                    <div onClick={openUpdateStatus} className={`${cn.status} ${interactClass}`}>{status}</div>
                    {isConditional && <UpdateStatusContainer status={status} isConditional={isConditional }/>}
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