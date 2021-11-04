import React from 'react'
import Box from '../Box/Box'
import styled from 'styled-components'

const Title = styled.h4`
  font-size: ${props => props.fontSize ? props.fontSize : '1.4rem'};
`
const MessageBlock = ({children, fontSize, background}) => {
    return (
        <Box background={background} padding='50px' textAlign='center'>
            <Title fontSize={fontSize}>{children}</Title>
        </Box>
    )
}

export default MessageBlock