import React from 'react'
import {Form, Formik, Field} from 'formik'

import Box from '../../../UI/Box/Box'
import Button from '../../../UI/Button/Button'

import cn from './UpdateStatus.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const UpdateStatus = ({status, isOpen}) => {
    const styleBox = {
        position: 'absolute',
        padding: '0',
        left: '-20px',
        right: '-20px',
        top: '3px',
        visibility: 'hidden',
        opacity: '0',
        transform: 'translateY(10px)',
        transition: 'opacity 200ms linear, transform 200ms linear, visibility 200ms linear',
        active: isOpen,
    }

    return (
        <Box {...styleBox} >
            <Formik initialValues={{status:status}}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values))
                    }}
            >
                <Form className={cn.form}>
                    <Field className={commonStyle.input} placeholder='Введите статус' name='status' type='text'/>
                    <div className={cn.form__button}>
                        <Button p='7px 16px 8px' lh='11px' type='submit' w='fit-content'>Сохранить</Button>
                    </div>
                </Form>
            </Formik>
        </Box>
    )
}

export default UpdateStatus