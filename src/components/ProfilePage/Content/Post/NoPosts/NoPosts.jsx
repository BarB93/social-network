import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'
import Box from '../../../../UI/Box/Box'

import cn from './NoPosts.module.scss'

const NoPosts = () => {
	return (
		<Box className={cn.noPosts} padding='0'>
			<div className={cn.noPosts__header}>Нет постов</div>
			<div className={cn.noPosts__content}>
				<div className={cn.noPosts__icon}>
					<FaRegNewspaper />
				</div>
				<div>Пока нет ни одного поста</div>
			</div>
		</Box>
	)
}

export default NoPosts
