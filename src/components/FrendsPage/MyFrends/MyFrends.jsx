import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../../UI/Button/Button'

import cn from './MyFrends.module.scss'
import commonStyles from '../commonStyles.module.scss'

const MyFrends = ({frends = []}) => {
    const frendsCount = frends.length

    return (
        <div className={cn.myFrends}>
            <div className={commonStyles.title}>
               <h4 className={cn.myFrends__title}>Все друзья</h4>
                <NavLink to='/frends/search'>
                    <Button
                        fontSize='0.9rem'
                        height='25px'
                    >
                        Найти друзей</Button>
                </NavLink>
            </div>
            {frendsCount
                ? <div>Мои друзья</div>
                : <div className={commonStyles.emptyBlock}>Ни одного друга не добавлено</div>
            }
        </div>
    )
}

export default MyFrends