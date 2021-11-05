import React from 'react'
import styled, { keyframes } from 'styled-components'

const loading1 = keyframes`
  0% {
      background: rgba(255,255,255, 0.3)
  }
  10% {
      background: rgba(255,255,255, 1)
  }
`

const templateLoaderItem = styled.div`
  display: inline-block;
  width: 10px;
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  animation: ${loading1} 1s ease-in-out infinite;
`

const LoaderItem1 = styled(templateLoaderItem)`

`

const LoaderItem2 = styled(templateLoaderItem)`
    margin: 0 5px;
    animation-delay: 0.2s;
`

const LoaderItem3 = styled(templateLoaderItem)`
    animation-delay: .4s; 
 `

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 7px 15px;
  background: transparent;
`

const SubscribeLoader = () => {
    return (
        <Wrapper>
            <LoaderItem1 />
            <LoaderItem2 />
            <LoaderItem3 />
        </Wrapper>
    )
}

export default SubscribeLoader