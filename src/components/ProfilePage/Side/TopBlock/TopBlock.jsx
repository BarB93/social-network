import React from 'react'

import Button from '../../../UI/Button/Button'
import Box from '../../../UI/Box/Box'
import Avatar from '../Avatar/Avatar'

// import cn from './TopBlock.module.scss'

const TopBlock = ({ photos }) => {
	return (
		<Box height='fit-content'>
			<div>
				<Avatar photos={photos} />
				<div>
					<Button secondary>Редактировать</Button>
				</div>
			</div>
		</Box>
	)
}

export default TopBlock
