import React from 'react'
import ContentRouter from '../Routers/ContentRouter'

import  cn from  './Content.module.scss'

const Content = () => {

    return (
        <main className={cn.main}>
            <ContentRouter />
        </main>
    )
}

export default Content
