import {FaCog, FaMusic, FaRegComment, FaRegUserCircle, FaRegWindowRestore, FaUserFriends} from 'react-icons/fa'

export const routes = [
    { path: '/profile',  props: {},          icon: FaRegUserCircle,    title: 'Моя страница'},
    { path: '/news',     props: {},          icon: FaRegWindowRestore, title: 'Новости'},
    { path: '/dialogs',  props: {},          icon: FaRegComment,       title: 'Сообщения'},
    { path: '/friends',  props: {end: true}, icon: FaUserFriends,      title: 'Друзья'},
    { path: '/music',    props: {},          icon: FaMusic,            title: 'Музыка'},
    { path: '/settings', props: {},          icon: FaCog,              title: 'Настройки'},
]