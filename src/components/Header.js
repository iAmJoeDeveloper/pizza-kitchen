import React from 'react'
import styled from 'styled-components'

const HeaderMain = styled.header`
	box-shadow: 0 2px 20px 0 rgba(149, 158, 172, 0.3);
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 1.5rem;
`

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
`

const Header = () => {
	return (
		<>
			<HeaderMain>
				<Nav>
					<img src='logo' alt='' />
					<Ul>
						<li>CONTACT</li>
						<li>ABOUT US </li>
						<li>SIGN UP / LOGIN</li>
					</Ul>
					<li>LIGTH/DARK</li>
				</Nav>
			</HeaderMain>
		</>
	)
}

export default Header
