import React from 'react'

import Content from './Content/Content'
import Side from './Side/Side'

import cn from './Settings.module.scss'

const Settings = () => {
	return (
		<div className={cn.settings}>
			<Content />
			<Side />
		</div>
	)
}

export default Settings
