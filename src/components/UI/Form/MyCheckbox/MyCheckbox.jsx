import React from 'react'
import styled from 'styled-components'

import {styles} from '../../../../styles/variables'

const StyledCheckbox = styled.input`
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
`
const StyledFake = styled.div`
  position: relative;
  display: inline-block;
  width:${props => props.width ? props.width : '20px'};
  height:${props => props.width ? props.width : '20px'};
  border: 1px solid ${styles.colors.gray100};
  border-radius: ${styles.sizes.borderRadius};
  cursor: pointer;
  
  ${StyledCheckbox}:checked + & {
    background: ${styles.colors.primary}
    
  };

  &::after {
    content: '';
    position: absolute;
    top: 26%;
    left: 20%;
    width: 60%;
    height: 35%;
    background: transparent;
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    
    opacity: 0;
    transform: rotate(-40deg);

    ${StyledCheckbox}:checked + & {
      opacity: 1;
    }
  }
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`

const StyledSpan = styled.span`
  margin: 0 0 0 10px;
`

const MyCheckbox = ({name, label = '', children,...props}) => {
    return (
        <StyledLabel>
            <StyledCheckbox {...props} type='checkbox' name={name} />
            <StyledFake />
            <StyledSpan>{children}</StyledSpan>
        </StyledLabel>
    )
}

export default MyCheckbox