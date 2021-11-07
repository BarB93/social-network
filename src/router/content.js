import DialogsPage from '../pages/DialogsPage'
import MessagePage from '../pages/MessagePage'
import NewsPage from '../pages/NewsPage'
import FriendsPage from '../pages/FriendsPage'
import ProfilePage from '../pages/ProfilePage'


export const publicRoutes = [
    {path: '/dialogs', component: DialogsPage},
    {path: '/dialogs/:id', component: MessagePage},
    {path: '/friends/*', component: FriendsPage},
    {path: '/news', component: NewsPage},
    {path: '/profile/:userId?', component: ProfilePage},
    {path: '/profile', component: ProfilePage},
]

export const privateRoutes = [
    {path: '/profile/:userId?', component: ProfilePage},
    {path: '/friends/search', component: FriendsPage},
]