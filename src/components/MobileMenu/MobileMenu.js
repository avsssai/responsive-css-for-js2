/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<Wrapper onDismiss={onDismiss} isOpen={isOpen}>
			<Content>
				<CloseButton onClick={onDismiss}>
					<Icon id='close' />
				</CloseButton>
				<NavLinks>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</NavLinks>
				<Footer>
					<NavLinkFooter href='/terms'>Terms and Conditions</NavLinkFooter>
					<NavLinkFooter href='/privacy'>Privacy Policy</NavLinkFooter>
					<NavLinkFooter href='/contact'>Contact Us</NavLinkFooter>
				</Footer>
			</Content>
		</Wrapper>
	);
};

const Wrapper = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: hsl(0deg 0% 0% / 0.5);
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 16px;
	right: 16px;
`;
const Content = styled(DialogContent)`
	position: absolute;
	right: 0;
	height: 100%;
	width: 60%;
	background: white;
`;

const NavLinks = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 1.5rem;
`;

const NavLink = styled.a`
	text-decoration: none;
	font-size: 1rem;
	color: inherit;
	font-weight: 600;
`;

const Footer = styled.footer`
	display: flex;
	font-size: 0.725rem;
	justify-content: space-evenly;
`;

const NavLinkFooter = styled(NavLink)`
	font-size: 0.75rem;
	font-weight: 400;
`;

export default MobileMenu;
