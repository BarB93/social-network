import React, { useEffect } from 'react'
import Info from './Info/Info'
import CreatePostContainer from './CreatePost/CreatePostContainer'
import PostList from './Post/PostList'
import NoPosts from './Post/NoPosts/NoPosts'
import { useSelector } from 'react-redux'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

import cn from '../Profile/profile.module.scss'

const Content = ({ profile, isAuthUserProfile }) => {
	const defaultPosts = [
		{
			id: 1,
			userId: 14640,
			text: 'Едва ли ни единственное, что можно сказать твердо о том, как прожить классную жизнь — надо обязательно делать то, что нужно…и не делать того, чего не нужно. От этого и будем отталкиваться.',
			date: 1559854800000,
			likeCount: 7,
			usersIdLiked: [1234, 312, 454, 4534],
		},
		{
			id: 2,
			userId: 14640,
			text: 'Да. Теперь я официально могу танцевать, когда моё приложение работает, и плакать, когда не работает, потому что, теперь я работаю из дома. Раньше мне приходилось скрывать свои чувства.',
			date: 1637235449721,
			likeCount: 13,
			usersIdLiked: [5454, 654, 645, 756, 7456, 756, 765],
		},
		{
			id: 3,
			userId: 14640,
			text: 'Чтобы понять рекурсию, нужно сперва понять рекурсию.',
			date: 1637269200000,
			likeCount: 13,
			usersIdLiked: [5454, 654, 645, 756, 7456, 756, 765, 545, 6532, 5344],
		},
	]
	const authId = useSelector((state) => state.auth.userId)
	const [posts, setPosts] = useLocalStorage(`post${authId}`, defaultPosts)

	useEffect(() => {}, posts)

	return (
		<div className={cn.profile__content}>
			<Info {...profile} isAuthUserProfile={isAuthUserProfile} />
			{isAuthUserProfile && <CreatePostContainer setPosts={setPosts} posts={posts} />}
			{isAuthUserProfile ? <PostList posts={posts} setPosts={setPosts} /> : <NoPosts />}
		</div>
	)
}

export default Content
