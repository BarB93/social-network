import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../../UI/Button/Button'
import Box from '../../../UI/Box/Box'
import SubscriptionButtonContainer from '../SubscriptionButton/SubscriptionButtonContainer'
import AvatarContainer from '../Avatar/AvatarContainer'

const TopBlock = ({ isAuthUserProfile, userId }) => {
	return (
		<Box height='fit-content' margin='0 0 10px 0'>
			<AvatarContainer isAuthUserProfile={isAuthUserProfile} />
			{isAuthUserProfile ? (
				<Link to='/settings'>
					<Button secondary>Редактировать</Button>
				</Link>
			) : (
				<>
					<Link to={`/dialogs/${userId}`}>
						<Button m='0 0 10px 0'>Написать сообщение</Button>
					</Link>
					<SubscriptionButtonContainer />
				</>
			)}
		</Box>
	)
}

export default TopBlock
