import React from 'react'
import PostItem from "./PostItem";

import cn from './post.module.scss'

const PostList = ({posts}) => {
    const postItems = posts.slice().reverse().map((p, index) =>
        <PostItem key={index} post={p}/>)

    return (
        <div cn={cn.post_list}>
            {postItems}
        </div>
    )
}

export default PostList