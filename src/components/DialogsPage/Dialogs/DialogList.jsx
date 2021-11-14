import React from 'react'
import DialogsItem from './DialogItem'

import cn from './dialogs.module.scss'
import Box from '../../UI/Box/Box'

const DialogList = ({ dialogs }) => {
	dialogs = dialogs.map((el) => (
		<DialogsItem key={el.id} id={el.id} name={el.name} />
	))

	return (
		<div className={cn.dialog__list}>
			<Box padding='0'>
				<ul>{dialogs}</ul>
			</Box>
		</div>
	)
}

export default DialogList
