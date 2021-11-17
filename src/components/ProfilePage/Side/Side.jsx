import React from 'react'

import TopBlock from './TopBlock/TopBlock'

const Side = ({ photos, isAuthUserProfile }) => {
	return (
		<div>
			<TopBlock photos={photos} isAuthUserProfile={isAuthUserProfile} />
		</div>
	)
}

export default Side
