import React from 'react'
import Box from '../../UI/Box/Box'
import {Route, Switch} from 'react-router-dom'
import MyFrends from '../MyFrends/MyFrends'
import SearchFrends from '../SearchFrends/SearchFrends'

const FrendsContent = () => {

    return (
        <Box>
            <Switch>
                <Route path='/frends/search' render={() => <SearchFrends />  }/>
                <Route path='/frends' render={() => <MyFrends/>}/>
            </Switch>
        </Box>
    )
}

export default FrendsContent