import {
	DialogsPage,
	ProfilePage,
	NewsPage,
	FriendsPage,
	MessagePage,
	SettingsPage,
} from '../pages'

export const publicRoutes = [
	{ path: '/dialogs', component: DialogsPage },
	{ path: '/dialogs/:userId', component: MessagePage },
	{ path: '/friends/*', component: FriendsPage },
	{ path: '/news', component: NewsPage },
	{ path: '/settings', component: SettingsPage },
	{ path: '/profile', component: ProfilePage },
	{ path: '/profile/:userId', component: ProfilePage },
]

export const privateRoutes = [
	{ path: '/profile/:userId?', component: ProfilePage },
	{ path: '/friends/search', component: FriendsPage },
]
