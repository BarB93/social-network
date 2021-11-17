import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../../UI/Button/Button'
import Box from '../../../UI/Box/Box'
import Avatar from '../Avatar/Avatar'
import SubscriptionButtonContainer from '../SubscriptionButton/SubscriptionButtonContainer'

// import cn from './TopBlock.module.scss'

const TopBlock = ({ photos, isAuthUserProfile }) => {
	return (
		<Box height='fit-content'>
			<div>
				<Avatar photos={photos} />
				{isAuthUserProfile ? (
					<Link to='/settings'>
						<Button secondary>Редактировать</Button>
					</Link>
				) : (
					<SubscriptionButtonContainer />
				)}
			</div>
		</Box>
	)
}

export default TopBlock
