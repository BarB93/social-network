import {createFetchUsersThunk, createFollowUserThunk, createUnfollowUserThunk} from './commonFuncions'

export const fetchUsers = createFetchUsersThunk('user/FetchAll')
export const followUser = createFollowUserThunk('user/FollowUser')
export const unfollowUser = createUnfollowUserThunk('user/UnfollowUser')