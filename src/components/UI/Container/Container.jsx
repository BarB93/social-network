import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    max-width: 990px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    min-width: ${props => props.minWidth ? props.minWidth : 'auto'};
`

const Container  = ({children, ...props}) => {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>

    )
}

export default Container