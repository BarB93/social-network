import React from 'react'

import TopBlock from './TopBlock/TopBlock'
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer'

const Side = ({ isAuthUserProfile, userId }) => {
	return (
		<div>
			<TopBlock isAuthUserProfile={isAuthUserProfile} userId={userId} />
			{isAuthUserProfile && <FriendsBlockContainer />}
		</div>
	)
}

export default Side
