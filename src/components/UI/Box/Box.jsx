import React from 'react'
import styled, { css } from 'styled-components'

import { styles } from '../../../styles/variables'

const StyledBox = styled.div`
	position: ${(p) => (p.position ? p.position : 'static')};
	left: ${(p) => (p.left ? p.left : 'auto')};
	right: ${(p) => (p.right ? p.right : 'auto')};
	top: ${(p) => (p.top ? p.top : 'auto')};
	bottom: ${(p) => (p.bottom ? p.bottom : 'auto')};

	height: ${(p) => (p.height ? p.height : 'auto')};
	width: ${(p) => (p.width ? p.width : 'auto')};
	max-width: ${(p) => (p.maxWidth ? p.maxWidth : 'none')};
	min-width: ${(p) => (p.minWidth ? p.minWidth : 'none')};
	margin: ${(p) => (p.margin ? p.margin : '0')};
	padding: ${(p) => (p.padding ? p.padding : '15px')};
	border-radius: ${styles.sizes.borderRadius};

	text-align: ${(p) => (p.textAlign ? p.textAlign : 'left')};
	color: ${(p) => (p.color ? p.color : styles.colors.gray400)};
	background: ${(p) => (p.background ? p.background : styles.colors.white)};
	box-shadow: ${styles.colors.pageBlockShadow};
	cursor: ${(p) => (p.cursor ? p.cursor : 'default')};

	transform: ${(p) => (p.transform ? p.transform : 'none')};
	opacity: ${(p) => (p.opacity ? p.opacity : '1')};
	visibility: ${(p) => (p.visibility ? p.visibility : 'visible')};
	transition: ${(p) => (p.transition ? p.transition : 'none')};

	${(props) =>
		props.active &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`}
`

const Box = ({ children, ...props }) => {
	return <StyledBox {...props}>{children}</StyledBox>
}

export default Box
