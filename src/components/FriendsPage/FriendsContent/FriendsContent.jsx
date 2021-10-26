import React from 'react'
import Box from '../../UI/Box/Box'
import {Route, Switch} from 'react-router-dom'
import MyFriends from '../MyFriends/MyFriends'
import SearchFriends from '../SearchFriends/SearchFriends'

const FriendsContent = () => {

    return (
        <Box>
            <Switch>
                <Route path='/friends/search' render={() => <SearchFriends />  }/>
                <Route path='/friends' render={() => <MyFriends/>}/>
            </Switch>
        </Box>
    )
}

export default FriendsContent