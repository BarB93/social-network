import React from 'react'

import styles from './Info.module.scss'
import InfoRow from './InfoRow'
import InfoHeader from './InfoHeader'

const Info = ({
	isShowInfo,
	lookingForAJobDescription,
	lookingForAJob,
	contacts,
	isAuthUserProfile,
}) => {
	const style = {
		display: isShowInfo ? 'block' : 'none',
	}

	const contactsList = Object.keys(contacts).map((key) => (
		<InfoRow key={key} title={key} body={contacts[key]} link={true} />
	))

	return (
		<div style={style} className={styles.full_info}>
			<div className={styles.full_info__item}>
				<div className={styles.full_info__block}>
					<InfoHeader title='Поиск работы' isAuthUserProfile={isAuthUserProfile} />
					<InfoRow title='Ищу работу:' body={lookingForAJob ? 'Да' : 'Нет'} />
					<InfoRow title='Описание:' body={lookingForAJobDescription} />
				</div>
				<div className={styles.full_info__block}>
					<InfoHeader title='Контакты' isAuthUserProfile={isAuthUserProfile} />
					{contactsList}
				</div>
			</div>
		</div>
	)
}

export default Info
