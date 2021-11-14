import React from 'react'

import ProfileSide from './ProfileSide/ProfileSide'
import ProfileContent from './ProfileContent/ProfileContent'
import MessageBlock from '../../UI/MessageBlock/MessageBlock'
import CircleLoader from '../../UI/Loader/CircleLoader/CircleLoader'

import cn from './profile.module.scss'
import commonStyles from '../../../styles/commonStyles.module.scss'

const Profile = ({ profile, post, error, isLoading }) => {
	return (
		<>
			{error && <MessageBlock>{error}</MessageBlock>}
			{!error &&
				(profile && !isLoading ? (
					<div className={cn.profile}>
						<ProfileSide photos={profile.photos} />
						<ProfileContent profile={profile} />
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
