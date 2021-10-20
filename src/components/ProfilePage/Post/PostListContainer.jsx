import React from 'react'
import {useSelector} from 'react-redux'
import PostList from "./PostList";

const PostListContainer = () => {
    const posts = useSelector(state => state.profile.posts)

    return <PostList posts={posts}/>
}

export default PostListContainer