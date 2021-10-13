import React from 'react'
import styled from 'styled-components'
import {darken, lighten} from 'polished'

import {styles} from '../../../styles/variables'

const StyledButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: ${props => props.width ? props.width : '100%'};
    padding: ${props => props.padding? props.padding : '0 16px'};
    background: ${props => props.secondary ? styles.colors.buttonSecondaryBg : styles.colors.buttonPrimaryBg};
    border-radius: ${styles.sizes.borderRadius};
    color: ${props => props.secondary ? styles.colors.buttonSecondaryText : styles.colors.buttonPrimaryText};
    transition: background .1s linear;
    
    &:hover {
        background: ${props => props.secondary ? darken(0.03, styles.colors.buttonSecondaryBg) : lighten(0.03, styles.colors.buttonPrimaryBg)};
    }
`

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default Button