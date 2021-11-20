import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../../UI/Button/Button'
import Box from '../../../UI/Box/Box'
import SubscriptionButtonContainer from '../SubscriptionButton/SubscriptionButtonContainer'
import AvatarContainer from '../Avatar/AvatarContainer'

const TopBlock = ({ isAuthUserProfile }) => {
	return (
		<Box height='fit-content' margin='0 0 10px 0'>
			<div>
				<AvatarContainer isAuthUserProfile={isAuthUserProfile} />
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
