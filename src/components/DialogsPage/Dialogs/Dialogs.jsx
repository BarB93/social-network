import React from 'react'
import DialogList from './DialogList'
import { useSelector } from 'react-redux'

import cn from './dialogs.module.scss'

const Dialogs = () => {
	const dialogs = useSelector((state) => state.dialog.dialogs)

	return (
		<div className={cn.dialog}>
			<DialogList dialogs={dialogs} />
		</div>
	)
}

export default Dialogs
