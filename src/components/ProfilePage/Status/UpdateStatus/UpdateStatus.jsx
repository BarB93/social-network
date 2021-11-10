import React from 'react'
import {Form, Formik, Field} from 'formik'

import Box from '../../../UI/Box/Box'
import Button from '../../../UI/Button/Button'

import cn from './UpdateStatus.module.scss'

const UpdateStatus = () => {
    return (
        <Box>
            <Formik initialValues={{status: ''}}
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values))
                    }}
            >
                <Form>
                    <Field name='status' type='text'/>
                    <Button type='submit' width='fit-content'>Сохранить</Button>
                </Form>
            </Formik>
        </Box>
    )
}

export default UpdateStatus