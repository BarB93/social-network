import React from 'react'

import TopBlock from './TopBlock/TopBlock'
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer'

const Side = ({ isAuthUserProfile }) => {
	return (
		<div>
			<TopBlock isAuthUserProfile={isAuthUserProfile} />
			{isAuthUserProfile && <FriendsBlockContainer />}
		</div>
	)
}

export default Side
