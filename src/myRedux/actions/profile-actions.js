import { ADD_POST } from '../store'

export const addPostActionCreator = (post) => ({
	type: ADD_POST,
	payload: post,
})
