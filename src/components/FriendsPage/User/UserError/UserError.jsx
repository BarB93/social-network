import React from 'react'
import commonStyles from "../../commonStyles.module.scss";

const UserError = () => {
    return (
        <div className={commonStyles.emptyBlock}>
            <h2 className={commonStyles.emptyBlock__title}>Произошла ошибка при загрузке пользователей</h2>
        </div>
    )
}

export default UserError