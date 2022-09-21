import React from 'react'
import styled from 'styled-components'
import logo from './../img/pizzaKitchen-logo.svg'

const HeaderMain = styled.header`
	box-shadow: 0 2px 20px 0 rgba(149, 158, 172, 0.3);
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	font-size: 1.6rem;
	font-weight: 500;
`

const Image = styled.img`
	width: 5rem;
	height: auto;
	margin-right: 1rem;
`

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
`

const Li = styled.li`
	margin-right: 1.8rem;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Header = () => {
	return (
		<>
			<HeaderMain>
				<Nav>
					<Container>
						<Image src={logo} alt='logo' />
						<p>Joe's Pizza</p>
					</Container>
					<Container>
						<Ul>
							<Li>CONTACT</Li>
							<Li>ABOUT US </Li>
							<Li>SIGN UP/LOGIN</Li>
						</Ul>
						<li>LIGTH/DARK</li>
					</Container>
				</Nav>
			</HeaderMain>
		</>
	)
}

export default Header
