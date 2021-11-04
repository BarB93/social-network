import React from 'react'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/actions/authAction'
import Button from '../UI/Button/Button'
import * as Yup from 'yup'
import MyInput from '../UI/MyInput/MyInput'

// import cn from './LoginForm.module.scss'

const LoginForm = () => {
    const dispatch = useDispatch()
    const {wrongData} = useSelector(state => state.auth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
        <form onSubmit={formik.handleSubmit}>
            <div>
                <MyInput formik={formik} name='email' label='Email'/>
            </div>
            <div>
                <MyInput formik={formik} name='password' label='Пароль' />
            </div>
            {wrongData ? <div>Неправильный логин или пароль</div> : null}
            <Button padding='10px 20px' width='content-fit'>Войти</Button>
        </form>
    )
}

export default LoginForm