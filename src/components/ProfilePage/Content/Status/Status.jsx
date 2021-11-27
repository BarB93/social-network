import React from 'react'
import UpdateStatusContainer from '../UpdateStatus/UpdateStatusContainer'

import styles from './Status.module.scss'

const Status = React.forwardRef(
	({ status, isAuthUserProfile, openUpdateStatus, closeOtherElements }, ref) => {
		const interactClass = isAuthUserProfile ? styles.interact : ''
		const handleClick = (e) => {
			e.stopPropagation()
			closeOtherElements()
		}

		return (
			<div>
				{isAuthUserProfile ? (
					<div ref={ref} onClick={handleClick}>
						<div onClick={openUpdateStatus} className={`${styles.status} ${interactClass}`}>
							{status ? status : <span className={styles.status__empty}>Укажите статус</span>}
						</div>
						<UpdateStatusContainer status={status} />
					</div>
				) : (
					<div className={`${styles.status}`}>{status}</div>
				)}
			</div>
		)
	},
)

Status.displayName = 'Status'

export default Status
