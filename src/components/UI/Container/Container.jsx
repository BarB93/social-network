import cn from './Container.module.scss'

const Container  = ({children, ...props}) => {
    return (
        <div {...props} className={cn.container}>
            {children}
        </div>
    )
}

export default Container