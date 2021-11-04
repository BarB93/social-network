import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Header from './Header'
import {fetchMyProfile} from '../../redux/actions/myProfileAction'
import {toggleMenu, closeMenu} from '../../redux/slices/headerSlice'


const HeaderContainer = () => {
    const dispatch = useDispatch()
    const {isAuth, userId} = useSelector(state => state.auth)
    const {myProfile} = useSelector(state => state.myProfile)
    const {isMenuOpen} = useSelector(state => state.header)

    const handleToggleMenu = () => {dispatch(toggleMenu())}
    const handleCloseMenu = () => {dispatch(closeMenu())}

    useEffect(() => {
        if(isAuth) {
            dispatch(fetchMyProfile(userId))
        }
    },[userId])

    return (
        <Header isAuth={isAuth}
                profile={myProfile}
                toggleMenu={handleToggleMenu}
                closeMenu={handleCloseMenu}
                isMenuOpen={isMenuOpen}
        />
    )
}

export default HeaderContainer