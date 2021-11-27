import React from 'react'
import UserItemContainer from '../UserItem/UserItemContainer'

import styles from '../User.module.scss'

const UserList = ({ users }) => {
	const usersItems = users.map((u) => <UserItemContainer key={u.id} user={u} />)

	return <ul className={styles.user__list}>{usersItems}</ul>
}

export default UserList
