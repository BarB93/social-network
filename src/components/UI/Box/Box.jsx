import React from 'react'
import styled from 'styled-components'

import styles from '../../../styles/variables.scss'

const StyledBox = styled.div`
    background: ${styles.white};
    padding: 10px;
    border-radius: ${styles.borderRadius};
`

const Box = ({children}) => {
    return (
        <StyledBox>{children}</StyledBox>
    )
}

export default Box