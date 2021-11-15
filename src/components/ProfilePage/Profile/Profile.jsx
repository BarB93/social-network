import React from 'react'

import Side from '../Side/Side'
import Content from '../Content/Content'
import MessageBlock from '../../UI/MessageBlock/MessageBlock'
import CircleLoader from '../../UI/Loader/CircleLoader/CircleLoader'

import cn from './profile.module.scss'
import commonStyles from '../../../styles/commonStyles.module.scss'

const Profile = ({ profile, error, isLoading }) => {
	return (
		<>
			{error && <MessageBlock>{error}</MessageBlock>}
			{!error &&
				(profile && !isLoading ? (
					<div className={cn.profile}>
						<Side photos={profile.photos} />
						<Content profile={profile} />
					</div>
				) : (
					<MessageBlock
						background='transparent'
						className={commonStyles.emptyBlock}
					>
						<CircleLoader />
					</MessageBlock>
				))}
		</>
	)
}

export default Profile
