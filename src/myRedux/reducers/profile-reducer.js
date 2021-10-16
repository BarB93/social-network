export const ADD_POST = 'ADD_POST'

const initialState = {
    posts: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = action.payload
            return {...state, posts: [...state.posts, newPost]}
        }
        default:
            return state
    }
}

export default profileReducer