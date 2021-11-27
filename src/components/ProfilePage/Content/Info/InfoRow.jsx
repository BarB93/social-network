import React from 'react'

import styles from './Info.module.scss'

const InfoRow = ({ title, body, link = false }) => {
	let value = body
	if (link) {
		const href = /^(http|https):\/\/[^ "]+$/.test(body) ? body : 'https://' + body
		value = (
			<a href={href} target='_blank' rel='noreferrer'>
				{href}
			</a>
		)
	}

	return (
		<div>
			<div className={styles.info__row}>
				<div className={styles.info__label}>{title}</div>
				<div className={styles.info__value}>
					{body ? value : <span className={styles.info__notSpecified}>не указано</span>}
				</div>
			</div>
		</div>
	)
}

export default InfoRow
