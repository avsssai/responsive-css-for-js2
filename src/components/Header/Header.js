import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</Nav>
				<Side />
				<MobileSide>
					<NavLink href='/shop'>
						<Icon id='shopping-bag' />
					</NavLink>
					<NavLink href='#'>
						<Icon id='search' />
					</NavLink>
					<NavLink href='#'>
						<Icon id='menu' onClick={() => setShowMobileMenu(true)} />
					</NavLink>
				</MobileSide>
			</MainHeader>

			<MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	height: 72px;
	border-bottom: 1px solid var(--color-gray-300); ;
`;

const Nav = styled.nav`
	display: flex;
	gap: clamp(1rem, 48px, 3.5rem);
	margin: 0px 48px;
	flex: 2;
	justify-content: space-between;
	@media ${QUERIES.tabletAndDown} {
		display: none;
	}
`;

const Side = styled.div`
	flex: 1;
`;

const MobileSide = styled.div`
	display: flex;

	gap: 16px;
	justify-content: space-between;
	@media ${QUERIES.tabletAndUp} {
		display: none;
	}
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

export default Header;
