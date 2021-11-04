import React from 'react'

import cn from './MyInput.module.scss'

const MyInput = ({formik, name, label}) => {
    return (
        <>
            <input
                className={cn.input}
                placeholder={label}
                type={name}
                id={name}
                name={name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[name]}
            />
            {formik.touched[name] && <span className={cn.input__error}>{formik.errors[name]}</span>}
        </>
    )
}

export default MyInput