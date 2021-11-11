import React from 'react'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../../redux/actions/authAction'
import Button from '../../UI/Button/Button'
import * as Yup from 'yup'
import MyInput from '../../UI/Form/MyInput/MyInput'
import Box from '../../UI/Box/Box'

import cn from './LoginForm.module.scss'
import MyCheckbox from '../../UI/Form/MyCheckbox/MyCheckbox'

const LoginForm = () => {
    const dispatch = useDispatch()
    const {wrongData} = useSelector(state => state.auth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Некорректный email').required('Обязательное поле'),
            password: Yup.string().required('Обязательное поле')
        }),
        onSubmit: values => {
            dispatch(login({email: values.email, password: values.password}))
        }

    })

    return (
            <form onSubmit={formik.handleSubmit} className={cn.form}>
                <Box padding='25px 30px'>
                    <div className={cn.form__title}>Войти в аккаунт</div>
                    <div>
                        <MyInput formik={formik} name='email' label='Email'/>
                    </div>
                    <div>
                        <MyInput formik={formik} type='password' name='password' label='Пароль' />
                    </div>
                    <div>
                        <MyCheckbox formik={formik} name='rememberMe'>Запомнить меня</MyCheckbox>
                    </div>

                    {wrongData ? wrongData : null}
                    <Button m='10px 0 0 0' p='10px 20px' w='content-fit'>Войти</Button>
                </Box>
            </form>
    )
}

export default LoginForm