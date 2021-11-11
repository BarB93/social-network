import React from 'react'
import styled from 'styled-components'
import {darken, lighten} from 'polished'

import {styles} from '../../../styles/variables'

const StyledSpan = styled.span`
  display: inline-block;
`
const StyledButton = styled.button`
    display: inline-block;
    text-align: center;
    height: ${props => props.height ? props.height : 'auto'};
    width: ${props => props.w ? props.w : '100%'};
    padding: ${props => props.p? props.p : '7px 16px'};
    margin: ${props => props.m? props.m : '0'};
    background: ${props => props.secondary ? styles.colors.buttonSecondaryBg : styles.colors.buttonPrimaryBg};
    border-radius: ${styles.sizes.borderRadius};
    color: ${props => props.secondary ? styles.colors.buttonSecondaryText : styles.colors.buttonPrimaryText};
    font-size: ${props => props.fz ? props.fz : 'inherit'};
    line-height:  ${props => props.lh ? props.lh : 'inherit'};
    transition: background .1s linear;
    
    &:hover {
        background: ${props => props.secondary ? darken(0.05, styles.colors.buttonSecondaryBg) : lighten(0.03, styles.colors.buttonPrimaryBg)};
    }
    
    &:active ${StyledSpan}{
        transform: translateY(1px);
    }
    
    &:disabled {
        cursor: not-allowed;
        background: #999;
        
        &:hover {
            background: #999;
        }
    }
`



const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
           <StyledSpan>{children}</StyledSpan>
        </StyledButton>
    )
}

export default Button