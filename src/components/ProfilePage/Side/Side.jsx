import React from 'react'

import TopBlock from './TopBlock/TopBlock'
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer'

const Side = ({ photos, isAuthUserProfile }) => {
	return (
		<div>
			<TopBlock photos={photos} isAuthUserProfile={isAuthUserProfile} />
			{isAuthUserProfile && <FriendsBlockContainer />}
		</div>
	)
}

export default Side
