import React from 'react'
import { NavLink } from 'react-router-dom'
import UserPupup from '../UserPopup/UserPupup'
import noAvatar from '../../../../assets/images/no_avatar.png'

import { FaUserPlus } from 'react-icons/fa'
import styles from '../User.module.scss'

const UserItem = ({ user, follow, unfollow, isLoading }) => {
	const avatar = user.photos.large ? user.photos.large : noAvatar

	return (
		<div className={styles.user__item}>
			<div className={styles.user__avatar}>
				<NavLink to={`/profile/${user.id}`}>
					<img className={styles.user__img} src={avatar} alt='avatar' />
				</NavLink>
				{(isLoading || user.followed) && <UserPupup unfollow={unfollow} isLoading={isLoading} />}
			</div>
			<div className={styles.user__info}>
				<NavLink to={`/profile/${user.id}`} className={styles.user__name}>
					{user.name}
				</NavLink>
				<div className={styles.user__button}>
					{!user.followed && (
						<button onClick={follow} className={styles.user__add}>
							<FaUserPlus className={styles.user__icon} />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default UserItem
