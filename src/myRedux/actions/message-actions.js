import {ADD_MESSAGE} from "../store";

export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE,
    payload: message
})