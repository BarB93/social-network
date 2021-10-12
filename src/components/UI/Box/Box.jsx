import React from 'react'
import styled from 'styled-components'

import {styles} from '../../../styles/variables'

const StyledBox = styled.div`
    background: ${styles.colors.white};
    padding: 15px;
    border-radius: ${styles.sizes.borderRadius};
`

const Box = ({children}) => {
    return (
        <StyledBox>{children}</StyledBox>
    )
}

export default Box