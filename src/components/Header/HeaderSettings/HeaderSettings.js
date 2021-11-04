import React, {useEffect, useRef} from 'react'
import noAvatar from '../../../assets/images/no_avatar.png'
import {FaAngleDown} from 'react-icons/fa'
import HeaderMenu from './HeaderMenu/HeaderMenu'

import cn from './HeaderSettings.module.scss'

const HeaderSettings = ({profile, isMenuOpen, toggleMenu, closeMenu}) => {
    const menuRef = useRef()
    const imageURL = profile?.photos.small ?  profile.photos.small : noAvatar
    const activeClass = isMenuOpen ? cn.active : ''

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(menuRef.current)) closeMenu()
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    },[])


    if(!profile) return null
    return (
        <div ref={menuRef} className={`${cn.menu} ${activeClass}`} onClick={toggleMenu}>
            <div className={cn.menu__name}>{profile.fullName}</div>
            <div className={cn.menu__img}>
                <img src={imageURL} alt="avatar"/>
            </div>
            <FaAngleDown className={cn.menu__icon}/>

            <HeaderMenu profile={profile} imageURL={imageURL} isMenuOpen={isMenuOpen}/>
        </div>
    )
}

export default HeaderSettings