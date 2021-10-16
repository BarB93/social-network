import {ADD_POST, ADD_MESSAGE} from "../store";

export const addPostActionCreator = (post) =>  ({
    type: ADD_POST,
    payload: post
})

