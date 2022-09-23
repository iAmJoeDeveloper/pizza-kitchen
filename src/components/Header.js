import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './../img/pizzaKitchen-logo.svg'
import sun from './../img/icons/icon-sun.svg'
import moon from './../img/icons/icon-moon.svg'

const HeaderMain = styled.header`
	box-shadow: 0 2px 20px 0 rgba(149, 158, 172, 0.3);
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 10rem;
	font-size: 1.6rem;
	font-weight: 500;
`

const Image = styled.img`
	width: 5rem;
	height: auto;
	margin-right: 1rem;
`

const Icon = styled.img`
	width: 3rem;
	height: 3rem;
`

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin-right: 10rem;
`

const Li = styled.li`
	margin-right: 1.8rem;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Lk = styled(Link)`
	text-decoration: none;
	color: #000000;
`

const Header = () => {
	return (
		<>
			<HeaderMain>
				<Nav>
					<BrowserRouter>
						<Container>
							<Image src={logo} alt='logo' />
							<p>Joe's Pizza</p>
						</Container>
						<Container>
							<Ul>
								<Li>
									<Lk>CONTACT</Lk>
								</Li>
								<Li>
									<Lk>ABOUT US</Lk>
								</Li>
								<Li>
									<Lk to='/test'>SIGN UP/LOGIN</Lk>
								</Li>
							</Ul>
							<Icon src={moon} alt='moon' />
						</Container>
					</BrowserRouter>
				</Nav>
			</HeaderMain>
		</>
	)
}

export default Header
