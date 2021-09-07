import PropTypes from 'prop-types'
import { MdClose, MdChevronRight } from 'react-icons/md'
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from 'utils/types'
import { useLockBodyScroll } from 'utils/hooks'
import { getButtonAppearance } from 'utils/button'
import ButtonLink from './button-link'
import NextImage from './image'
import CustomLink from './custom-link'
import { Link } from '../../library'
import React from 'react'
import styled from 'styled-components'

const MobileNavMenu = ({ navbar, closeSelf, loginButton, createAccountButton }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <NavMenuWrapper>
      {/* Top section */}
      <MenuHeader>
        {/* Company logo */}
        <NextImage width="228" height="52" media={navbar.logo} />
        {/* Close button */}
        <ActionBar>
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </ActionBar>
      </MenuHeader>
      {/* Bottom section */}
      <NavDropdown>
        <NavListContainer>
          <NavList>
            {navbar.links.map((navLink) => (
              <li key={navLink.id} onClick={closeSelf}>
                <CustomLink link={navLink}>
                  <div className="nav-item flex flex-row justify-between items-center">
                    <span>{navLink.text}</span>
                    <MdChevronRight className="h-8 w-auto" />
                  </div>
                </CustomLink>
              </li>
            ))}
          </NavList>
          <NavFooter>
            {loginButton && (
              <Link
                href={loginButton.url}
                target={loginButton.newTab ? '_blank' : ''}
                isButton={true}
                onClick={closeSelf}
              >
                {loginButton.text}
              </Link>
            )}

            {createAccountButton && (
              <Link href={createAccountButton.url} isButton={true} ghost onClick={closeSelf}>
                {createAccountButton.text}
              </Link>
            )}
          </NavFooter>
        </NavListContainer>
      </NavDropdown>
    </NavMenuWrapper>
  )
}

const NavMenuWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray101};
  transition: opacity .3s cubic-bezier(.645,.045,.355,1);
  opacity: 1;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
}
`

const MenuHeader = styled.div`
  padding: 13px 10px 13px 15px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1120px;
  width: 100%;
`

const ActionBar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavDropdown = styled.div`
  opacity: 1;
  height: calc(100% - 78px);
  position: fixed;
  top: 62px;
  left: 0;
  right: 0;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.gray101};
`

const NavListContainer = styled.div`
  padding: 25px 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  a {
    color: #fff;
  }

  li {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  }

  .nav-item {
    padding: 10px 0;

    svg {
      display: none;
    }
  }
`

const NavFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
  }
`

// MobileNavMenu.propTypes = {
//   navbar: PropTypes.shape({
//     logo: mediaPropTypes,
//     links: PropTypes.arrayOf(linkPropTypes),
//     button: buttonLinkPropTypes,
//   }),
//   closeSelf: PropTypes.func,
// }

export default MobileNavMenu
