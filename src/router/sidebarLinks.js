import {
	FaCog,
	FaRegComment,
	FaRegUserCircle,
	FaUserFriends,
} from 'react-icons/fa'

export const routes = [
	{ path: '/profile', props: {}, icon: FaRegUserCircle, title: 'Моя страница' },
	{ path: '/dialogs', props: {}, icon: FaRegComment, title: 'Сообщения' },
	{
		path: '/friends',
		props: { end: true },
		icon: FaUserFriends,
		title: 'Друзья',
	},
	{ path: '/settings', props: {}, icon: FaCog, title: 'Настройки' },
]
