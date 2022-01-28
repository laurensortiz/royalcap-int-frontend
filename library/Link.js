import styled, { css } from 'styled-components'
import NextLink from 'next/link'
import { buttonStyle } from './Button'

const linkStyles = css`
  cursor: pointer;
  display: inline-block;
  margin: 10px 0;
`

const BaseLink = styled.a`
  ${buttonStyle}
  ${linkStyles}
`

export function Link({ children, isButton = false, ...props }) {
  return (
    <NextLink {...props}>
      {isButton ? (
        <BaseLink {...props}>{children}</BaseLink>
      ) : (
        <a target={props.target || '_self'}>{children}</a>
      )}
    </NextLink>
  )
}
