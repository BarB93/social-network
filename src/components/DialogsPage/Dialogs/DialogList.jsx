import React from 'react'
import DialogsItem from './DialogItem'

import cn from './dialogs.module.scss'

const DialogList = ({ dialogs }) => {
	dialogs = dialogs.map((d) => <DialogsItem key={d.id} item={d} />)

	return (
		<div className={cn.dialog__list}>
			<ul>{dialogs}</ul>
		</div>
	)
}

export default DialogList
