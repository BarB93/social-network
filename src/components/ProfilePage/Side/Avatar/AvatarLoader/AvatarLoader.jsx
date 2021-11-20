import React from 'react'

import cn from './AvatarLoader.module.scss'
import ItemsLoader from '../../../../UI/Loader/ItemsLoader/ItemsLoader'

const AvatarLoader = () => {
	return (
		<div className={cn.loader}>
			<ItemsLoader />
		</div>
	)
}

export default AvatarLoader
