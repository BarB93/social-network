import React from 'react'

import styles from './UserPupup.module.scss'
import ItemsLoader from '../../../UI/Loader/ItemsLoader/ItemsLoader'

const UserPupup = ({ unfollow, isLoading }) => {
	return (
		<div className={styles.popup}>
			{isLoading ? (
				<ItemsLoader />
			) : (
				<>
					<div className={styles.popup__title}>Добавлен в друзья</div>
					<div className={styles.popup__buttonWrapper}>
						<button onClick={unfollow} className={styles.popup__button}>
							Отменить
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default UserPupup
