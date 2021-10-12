import React from 'react'
import PostItem from "./PostItem";

import cn from './post.module.scss'

const posts = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
]

const PostList = () => {
    return (
        <div cn={cn.post_list}>
            {posts.map(p => <PostItem post={p}/>)}
        </div>

    )
}

export default PostList