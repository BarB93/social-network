import React from 'react'

import TopBlock from './TopBlock/TopBlock'
import FriendsBlock from './FriendsBlock/FriendsBlock'

const Side = ({ photos, isAuthUserProfile }) => {
	return (
		<div>
			<TopBlock photos={photos} isAuthUserProfile={isAuthUserProfile} />
			<FriendsBlock />
		</div>
	)
}

export default Side
