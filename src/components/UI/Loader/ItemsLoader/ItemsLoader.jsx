import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const loading1 = keyframes`
  0% {
    background: rgba(255,255,255, 0.3);
  }
  10% {
    background: rgba(255,255,255, 1);
  }
`

const templateLoaderItem = styled.div`
	display: inline-block;
	width: 10px;
	height: 5px;
	background: rgba(255, 255, 255, 0.3);
	animation: ${loading1} 1s ease-in-out infinite;

	${(props) =>
		props.dots &&
		css`
			width: ${(p) => (p.dotsWidth ? p.width : '5px')};
			height: ${(p) => (p.dotsWidth ? p.width : '5px')};
			border-radius: 50%;
		`}
`

const LoaderItem1 = styled(templateLoaderItem)``

const LoaderItem2 = styled(templateLoaderItem)`
	margin: ${(props) => (props.dots ? '0 4px' : '0 5px')};
	animation-delay: 0.2s;
`

const LoaderItem3 = styled(templateLoaderItem)`
	animation-delay: 0.4s;
`

const Wrapper = styled.div`
	display: flex;
	width: fit-content;
	padding: ${(p) => (p.dots ? '0' : '7px 15px')};
	background: ${(p) => (p.dots ? 'transparent' : '#000')};
`

const ItemsLoader = (props) => {
	return (
		<Wrapper {...props}>
			<LoaderItem1 {...props} />
			<LoaderItem2 {...props} />
			<LoaderItem3 {...props} />
		</Wrapper>
	)
}

export default ItemsLoader
