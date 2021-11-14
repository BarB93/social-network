import React from 'react'

import cn from './UserPupup.module.scss'
import ItemsLoader from '../../../UI/Loader/ItemsLoader/ItemsLoader'

const UserPupup = ({ unfollow, isLoading }) => {
	return (
		<div className={cn.popup}>
			{isLoading ? (
				<ItemsLoader />
			) : (
				<>
					<div className={cn.popup__title}>Добавлен в друзья</div>
					<div className={cn.popup__buttonWrapper}>
						<button onClick={unfollow} className={cn.popup__button}>
							Отменить
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default UserPupup
