import React, {useState} from 'react'
import Box from '../../UI/Box/Box'
import Button from '../../UI/Button/Button'

import cn from './CreatePost.module.scss'

const CreatePost = ({addPost}) => {
    const [post, setPost] = useState('')

    const isActiveCreatePost = post.length > 0 ? cn.active : ''
    const isDisabledButton = post.length < 1

    const handleChangePost = (e) => {
        setPost(e.target.value)
    }

    const handleAddPost = () => {
        addPost(post)
        setPost('')
    }

    return (
        <Box  margin={'10px 0 0 0'}>
            <div className={isActiveCreatePost}>
                <textarea
                    className={cn.createPost__textarea}
                    type='text'
                    name='newPost'
                    id='newPost'
                    placeholder='Что у вас нового?'
                    value={post}
                    onChange={handleChangePost}
                />
                <div className={cn.createPost__wrapperButton}>
                    <Button
                        className={cn.createPost__button}
                        width='min-content'
                        disabled={isDisabledButton}
                        onClick={handleAddPost}
                    >Отправить</Button>
                </div>
            </div>
        </Box>
    )
}

export default CreatePost