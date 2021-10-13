import React from 'react'
import PostItem from "./PostItem";

import cn from './post.module.scss'

const PostList = ({posts}) => {
    posts = posts.map((p, index) => <PostItem key={index} post={p}/>)

    return (
        <div cn={cn.post_list}>
            {posts}
        </div>

    )
}

export default PostList