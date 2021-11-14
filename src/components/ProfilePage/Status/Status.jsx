import React from 'react'
import UpdateStatusContainer from './UpdateStatus/UpdateStatusContainer'

import cn from './Status.module.scss'

const Status = React.forwardRef(
	({ status, isConditional, openUpdateStatus, closeOtherElements }, ref) => {
		const interactClass = isConditional ? cn.interact : ''
		const handleClick = (e) => {
			e.stopPropagation()
			closeOtherElements()
		}

		return (
			<div>
				{isConditional ? (
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
						<UpdateStatusContainer
							status={status}
							isConditional={isConditional}
						/>
					</div>
				) : (
					<div className={`${cn.status}`}>{status}</div>
				)}
			</div>
		)
	}
)

Status.displayName = 'Status'

export default Status
