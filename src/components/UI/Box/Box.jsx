import React from 'react'
import styled from 'styled-components'

import {styles} from '../../../styles/variables'

const StyledBox = styled.div`
    background: ${props => props.background ? props.background : styles.colors.white};
    padding: ${props => props.padding? props.padding : '15px'};
    margin: ${props => props.margin? props.margin : '0'};
    height: ${props => props.height? props.height : 'auto'};
    border-radius: ${styles.sizes.borderRadius};
    box-shadow: ${styles.colors.pageBlockShadow};
    text-align: ${props => props.textAlign? props.textAlign : 'left'};
    color:  ${props => props.color? props.color : styles.colors.grey400};
    //overflow: hidden;
    
    
`

const Box = ({children, ...props}) => {

    return (
        <StyledBox {...props}>{children}</StyledBox>
    )
}

export default Box