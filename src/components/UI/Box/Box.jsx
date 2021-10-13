import React from 'react'
import styled from 'styled-components'

import {styles} from '../../../styles/variables'

const StyledBox = styled.div`
    background: ${styles.colors.white};
    padding: ${props => props.padding? props.padding : '15px 15px 10px'};
    margin: ${props => props.margin? props.margin : '0'};
    border-radius: ${styles.sizes.borderRadius};
    box-shadow: ${styles.colors.pageBlockShadow}
`

const Box = ({children, ...props}) => {
    return (
        <StyledBox {...props}>{children}</StyledBox>
    )
}

export default Box