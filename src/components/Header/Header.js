import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <DefaultLinkText>Sale</DefaultLinkText>
            <BoldLinkText aria-hidden={true}>Sale</BoldLinkText>

          </NavLink>
          <NavLink href="/new">
            <DefaultLinkText>New&nbsp;Releases</DefaultLinkText>
            <BoldLinkText aria-hidden={true}>New&nbsp;Releases</BoldLinkText>
          </NavLink>
          <NavLink href="/men">
            <DefaultLinkText>Men</DefaultLinkText>
            <BoldLinkText aria-hidden={true}>Men</BoldLinkText>
          </NavLink>
          <NavLink href="/women">
            <DefaultLinkText>Women</DefaultLinkText>
            <BoldLinkText aria-hidden={true}>Women</BoldLinkText>
          </NavLink>
          <NavLink href="/kids">
            <DefaultLinkText>Kids</DefaultLinkText>
            <BoldLinkText aria-hidden={true}>Kids</BoldLinkText>
          </NavLink>
          <NavLink href="/collections">
            <DefaultLinkText>Collections</DefaultLinkText>
            <BoldLinkText aria-hidden={true}>Collections</BoldLinkText>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DefaultLinkText = styled.span`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 500ms ease-out;
  }
`;

const BoldLinkText = styled.span`
  display: block;
  position: absolute;
  font-weight: ${WEIGHTS.bold};
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 250ms ease-in;
  }
`;

const NavLink = styled.a`
  display: inline-block;
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:hover span:nth-child(2) {
    transform: translateY(-100%);
  }
  
  &:hover span:nth-child(1) {
    transform: translateY(-200%);
  }

  &:first-of-type {
    color: var(--color-secondary);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: var(--color-gray-900);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);

    @media (prefers-reduced-motion: no-preference) {
      transition: transform .3s ease-in-out;
    }
  }

  &:first-of-type::before {
    background-color: var(--color-secondary);
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;



export default Header;
