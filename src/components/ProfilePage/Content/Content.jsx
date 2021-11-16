import React from 'react'
import Info from './Info/Info'
import CreatePostContainer from './CreatePost/CreatePostContainer'
import PostListContainer from './Post/PostListContainer'

import cn from '../Profile/profile.module.scss'

const Content = ({ profile, isAuthUserProfile }) => {
	return (
		<div className={cn.profile__content}>
			<Info {...profile} isAuthUserProfile={isAuthUserProfile} />
			{isAuthUserProfile && <CreatePostContainer />}
			<PostListContainer />
		</div>
	)
}

export default Content
