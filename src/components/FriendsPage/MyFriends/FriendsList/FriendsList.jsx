import React from 'react'
import FriendsItemContainer from '../FriendsItem/FriendsItemContainer'

import styles from './FriendsList.module.scss'

const FriendsList = ({ friends }) => {
	const friendsList = friends.map((f) => <FriendsItemContainer key={f.id} friend={f} />)

	return <ul className={styles.friends}>{friendsList}</ul>
}

export default FriendsList
