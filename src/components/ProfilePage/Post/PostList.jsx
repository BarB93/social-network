import React from 'react'
import PostItem from "./PostItem";

import cn from './post.module.scss'

const PostList = ({posts}) => {
    const postList = posts.slice().reverse().map((p, index) => <PostItem key={index} post={p}/>)

    return (
        <div cn={cn.post_list}>
            {postList}
        </div>

    )
}

export default PostList