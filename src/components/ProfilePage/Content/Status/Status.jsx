import React from 'react'
import UpdateStatusContainer from '../UpdateStatus/UpdateStatusContainer'

import cn from './Status.module.scss'

const Status = React.forwardRef(
	(
		{ status, isAuthUserProfile, openUpdateStatus, closeOtherElements },
		ref,
	) => {
		const interactClass = isAuthUserProfile ? cn.interact : ''
		const handleClick = (e) => {
			e.stopPropagation()
			closeOtherElements()
		}

		return (
			<div>
				{isAuthUserProfile ? (
					<div ref={ref} onClick={handleClick}>
						<div
							onClick={openUpdateStatus}
							className={`${cn.status} ${interactClass}`}
						>
							{status ? (
								status
							) : (
								<span className={cn.status__empty}>Укажите статус</span>
							)}
						</div>
						<UpdateStatusContainer status={status} />
					</div>
				) : (
					<div className={`${cn.status}`}>{status}</div>
				)}
			</div>
		)
	},
)

Status.displayName = 'Status'

export default Status
