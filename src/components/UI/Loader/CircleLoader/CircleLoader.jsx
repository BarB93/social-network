import React from 'react'
import styled, {keyframes} from 'styled-components'
import {styles} from '../../../../styles/variables'

const rotate = keyframes`
  0% {
      transform: rotate(30deg)
  }
  100% {
    transform: rotate(390deg)
  }
`;

const CircleLoader = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.size? props.size : `25px`};
  height: ${props => props.size? props.size : `25px`};
  border-radius: 50%;

  background: conic-gradient(#bababa 270deg, ${styles.colors.primary} 270deg);
  animation: ${rotate} 2s infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background: #fff;

    transform: translate(-50%, -50%);
  }
`;

export default CircleLoader;