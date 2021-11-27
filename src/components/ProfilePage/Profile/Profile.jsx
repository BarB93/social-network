import React from 'react'

import Side from '../Side/Side'
import Content from '../Content/Content'
import MessageBlock from '../../UI/MessageBlock/MessageBlock'
import CircleLoader from '../../UI/Loader/CircleLoader/CircleLoader'

import styles from './profile.module.scss'
import commonStyles from '../../../styles/commonStyles.module.scss'

const Profile = ({ profile, error, isLoading, isAuthUserProfile }) => {
	return (
		<>
			{error && <MessageBlock>{error}</MessageBlock>}
			{!error &&
				(profile && !isLoading ? (
					<div className={styles.profile}>
						<Side isAuthUserProfile={isAuthUserProfile} userId={profile.userId} />
						<Content profile={profile} isAuthUserProfile={isAuthUserProfile} />
					</div>
				) : (
					<div className={commonStyles.emptyBlock}>
						<CircleLoader />
					</div>
				))}
		</>
	)
}

export default Profile
