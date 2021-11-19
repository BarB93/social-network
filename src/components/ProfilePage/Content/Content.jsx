import React from 'react'
import Info from './Info/Info'
import CreatePostContainer from './CreatePost/CreatePostContainer'
import PostListContainer from './Post/PostListContainer'

import cn from '../Profile/profile.module.scss'
import commonStyle from '../../../styles/commonStyles.module.scss'

const Content = ({ profile, isAuthUserProfile }) => {
	return (
		<div className={cn.profile__content}>
			<Info {...profile} isAuthUserProfile={isAuthUserProfile} />
			{isAuthUserProfile && <CreatePostContainer />}
			{isAuthUserProfile ? (
				<PostListContainer />
			) : (
				<div className={commonStyle.emptyBlock}>
					<span className={commonStyle.emptyBlock__title}>
						Пока ни одного поста не добавлено :(
					</span>
				</div>
			)}
		</div>
	)
}

export default Content
