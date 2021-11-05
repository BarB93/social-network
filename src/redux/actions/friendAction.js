import {createAsyncThunk} from '@reduxjs/toolkit'
import {userAPI} from '../../api/userAPI'
import {createFetchUsersThunk, createFollowUserThunk, createUnfollowUserThunk} from './commonFuncions'


export const fetchAllFriends = createFetchUsersThunk('friend/fetchFriends')
export const followFriend = createFollowUserThunk('friend/FollowUser')
export const unfollowFriend = createUnfollowUserThunk('friend/UnfollowUser')