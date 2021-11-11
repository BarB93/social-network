import React from 'react'
import styled from 'styled-components'

import {styles} from '../../../../styles/variables'

const StyledInput = styled.input`
  width: ${props => props.width ? props.width : '100%'};
  padding: 6px 12px 8px;
  margin: 0 5px 15px 0;
  border-radius: ${styles.sizes.borderRadius};
  border: 1px solid ${styles.colors.gray100};
  

  &:focus {
    outline: none;
  }

  &:focus::-webkit-input-placeholder {
    color: ${styles.colors.gray100};
  }
`


const MyInput = ({formik, name, label, type = 'text', ...props}) => {

    return (
        <StyledInput
                {...props}
                placeholder={label}
                type={type}
                id={name}
                name={name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[name]}
        />

    )
}

export default MyInput