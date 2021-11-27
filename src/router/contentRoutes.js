import { DialogsPage, ProfilePage, FriendsPage, MessagePage, SettingsPage } from '../pages'

export const publicRoutes = [
	{ path: '/dialogs', component: DialogsPage },
	{ path: '/dialogs/:userId', component: MessagePage },
	{ path: '/friends/*', component: FriendsPage },
	{ path: '/settings/*', component: SettingsPage },
	{ path: '/profile', component: ProfilePage },
	{ path: '/profile/:userId', component: ProfilePage },
]
