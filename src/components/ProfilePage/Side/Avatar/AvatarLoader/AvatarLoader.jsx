import React from 'react'

import styles from './AvatarLoader.module.scss'
import ItemsLoader from '../../../../UI/Loader/ItemsLoader/ItemsLoader'

const AvatarLoader = () => {
	return (
		<div className={styles.loader}>
			<ItemsLoader />
		</div>
	)
}

export default AvatarLoader
