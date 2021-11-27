import React from 'react'
import DialogsItem from './DialogItem'

import styles from './dialogs.module.scss'

const DialogList = ({ dialogs }) => {
	dialogs = dialogs.map((d) => <DialogsItem key={d.id} item={d} />)

	return (
		<div className={styles.dialog__list}>
			<ul>{dialogs}</ul>
		</div>
	)
}

export default DialogList
