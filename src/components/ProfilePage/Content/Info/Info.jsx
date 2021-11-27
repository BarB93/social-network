import React, { useState } from 'react'

import Box from '../../../UI/Box/Box'
import InfoFull from './InfoFull'
import InfoShort from './InfoShort'

import styles from './Info.module.scss'
import StatusContainer from '../Status/StatusContainer'

const Info = ({
	aboutMe,
	contacts,
	fullName,
	lookingForAJob,
	lookingForAJobDescription,
	userId,
	isAuthUserProfile,
}) => {
	const [isShowMoreInfo, setShowMoreInfo] = useState(true)
	const handleToggleMoreInfo = () => {
		setShowMoreInfo((prev) => !prev)
	}

	return (
		<Box margin='0 0 10px 0'>
			<div className={styles.info}>
				<div className={styles.info__top}>
					<div className={styles.info__name}>{fullName}</div>
					<StatusContainer isAuthUserProfile={isAuthUserProfile} userId={userId} />
				</div>
				<InfoShort
					aboutMe={aboutMe}
					isShowInfo={isShowMoreInfo}
					handleToggleMoreInfo={handleToggleMoreInfo}
				/>
				<InfoFull
					isShowInfo={isShowMoreInfo}
					contacts={contacts}
					lookingForAJob={lookingForAJob}
					lookingForAJobDescription={lookingForAJobDescription}
					isAuthUserProfile={isAuthUserProfile}
				/>
			</div>
		</Box>
	)
}

export default Info
