import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { MdMenu } from 'react-icons/md'
import MobileNavMenu from './mobile-nav-menu'
import CustomLink from './custom-link'
import LocaleSwitch from '../locale-switch'
import NextImage from 'components/elements/image'
import getFeatureFlag from 'helpers/getFeatureFlag'

import { Link } from 'library'

const Navbar = ({ navbar, pageContext, logo, globalLinks, featureFlag }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  const loginButton = globalLinks.find((link) => link.slug === 'login')
  const createAccountButton = globalLinks.find((link) => link.slug === 'createAccount')
  const loginWebtraderButton = globalLinks.find((link) => link.slug === 'loginWebtrader')

  const isRussianActive = getFeatureFlag(featureFlag, 'russianLang')

  return (
    <>
      {/* The actual navbar */}
      <MenuWrapper>
        <nav className="border-gray-200 border-b-2 py-6 sm:py-2">
          <div className="container-fluid container-navbar flex flex-row items-center justify-between">
            {/* Content aligned to the left */}
            <div className="flex flex-row items-center">
              <Logo>
                <Link href="/">
                  <NextImage width="228" height="52" media={logo} />
                </Link>
              </Logo>

              {/* List of links on desktop */}
              {!isRussianActive.isActive && (
                <NavList>
                  <ul className="list-none md:flex flex-row gap-4 items-baseline">
                    {navbar.links.map((navLink) => (
                      <li key={navLink.id} className="menu-item">
                        <CustomLink link={navLink} locale={router.locale}>
                          <div className="px-2 py-1">{navLink.text}</div>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </NavList>
              )}
            </div>
            {!isRussianActive.isActive && (
              <div className="flex">
                {/* CTA button on desktop */}
                <ActionContainer>
                  {/* <LoginButtons> */}
                  {loginButton && (
                    <Link
                      href={loginButton.url}
                      target={loginButton.newTab ? '_blank' : ''}
                      isButton={true}
                      ghostPrimary
                      // className="mb-2"
                    >
                      {loginButton.text}
                    </Link>
                  )}
                  {loginWebtraderButton && (
                    <Link
                      href={loginWebtraderButton.url}
                      target={loginWebtraderButton.newTab ? '_blank' : ''}
                      isButton={true}
                      ghostPrimary
                    >
                      {loginWebtraderButton.text}
                    </Link>
                  )}
                  {/* </LoginButtons> */}
                  {createAccountButton && (
                    <Link href={createAccountButton.url} isButton={true} ghost>
                      {createAccountButton.text}
                    </Link>
                  )}
                </ActionContainer>
                {/* Locale Switch Mobile */}
                {pageContext.localizedPaths && (
                  <div className="md:hidden" style={{ display: 'none' }}>
                    <LocaleSwitch pageContext={pageContext} />
                  </div>
                )}
                {/* Hamburger menu on mobile */}
                <MenuIconMobile>
                  <button onClick={() => setMobileMenuIsShown(true)} className="p-1">
                    <MdMenu className="h-8 w-auto" />
                  </button>
                </MenuIconMobile>

                {/* Locale Switch Desktop */}
                {pageContext.localizedPaths && (
                  <div className="hidden md:block">
                    <LocaleSwitch pageContext={pageContext} />
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile navigation menu panel */}
        {!isRussianActive.isActive && mobileMenuIsShown && (
          <MobileNavMenu
            loginButton={loginButton}
            loginWebtraderButton={loginWebtraderButton}
            createAccountButton={createAccountButton}
            navbar={navbar}
            closeSelf={() => setMobileMenuIsShown(false)}
          />
        )}
      </MenuWrapper>
    </>
  )
}

const MenuWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray101};
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 3px 6px rgba(54, 54, 54, 0.08);

  .menu-item {
    a {
      color: #fff;
      font-weight: 600;
      font-size: 0.8rem;

      &:hover,
      &:active {
        color: ${(props) => props.theme.colors.blue017};
      }
    }
  }
`

const ActionContainer = styled.div`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
  }

  a {
    font-size: 0.8rem;
    height: 32px;
    margin: 0 5px;
    padding: 8px;
  }
`

const MenuIconMobile = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`

const NavList = styled.div`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: block;
    padding: 0 15px;
  }
`

const Logo = styled.div`
  float: left;
`
const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
`

export default Navbar
