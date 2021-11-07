import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {closeMenu, toggleMenu} from '../../../redux/slices/headerSlice'
import Settings from './Settings'
import {logout} from '../../../redux/actions/authAction'

const SettingsContainer = () => {
    const dispatch = useDispatch()
    const {myProfile} = useSelector(state => state.myProfile)
    const {isMenuOpen} = useSelector(state => state.header)
    const {isAuth} = useSelector(state => state.auth)
    const menuRef = useRef()

    const handleToggleMenu = () => {dispatch(toggleMenu())}
    const handleCloseMenu = () => {dispatch(closeMenu())}

    const handleLogout = () => {
        console.log('logout')
        dispatch(logout())
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(menuRef.current)) handleCloseMenu()
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    },[])


    if(!isAuth || !myProfile) return null
    return (
        <Settings profile={myProfile}
                  isMenuOpen={isMenuOpen}
                  toggleMenu={handleToggleMenu}
                  logout={handleLogout}
                  ref={menuRef}
        />
    )
}

export default SettingsContainer