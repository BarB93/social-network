import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    max-width: 990px;
    margin: 0 auto;
    padding: 0 15px;
`

const Container  = ({children, ...props}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>

    )
}

export default Container