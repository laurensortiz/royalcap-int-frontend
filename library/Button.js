import styled, { css } from 'styled-components'
import { Button as antdButton } from 'antd'

export const buttonStyle = (props) => css`
  padding: 10px 20px;
  text-align: center;
  border-radius: 6px;
  font-weight: 600;
  span {
    margin-right: 0;
  }
  color: #fff;
  background: ${(props) => props.theme.colors.blue017};
  line-height: 1em;
  min-width: 129px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.blue017};
  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.blue105};
    border-color: ${(props) => props.theme.colors.blue105};
    color: #fff;
  }
  &:disabled {
    color: #fff;
  }

  text-shadow: none;

  ${(props) =>
    props.target === 'responsive' &&
    css`
      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 1em;
        min-width: 95px;
        height: 30px;
        padding: 5px;
      }
    `}

  ${(props) =>
    props.danger &&
    css`
      font-size: ${(props) => props.theme.fonts.extraLarge};
      background: transparent;
      line-height: 1em;
      min-width: 129px;
      height: 40px;
      text-transform: uppercase;
      font-weight: 800;
      border: 2px solid ${(props) => props.theme.colors.rede52};
      color: ${(props) => props.theme.colors.rede52};

      &:hover {
        background: ${(props) => props.theme.colors.red710};
        border-color: ${(props) => props.theme.colors.red710};
        color: ${(props) => props.theme.colors.white};
      }
      &:disabled {
        border-color: ${(props) => props.theme.colors.grayd6e}!important;
        color: ${(props) => props.theme.colors.grayd6e}!important;
        pointer-events: none;
      }
    `}
    ${(props) =>
    props.ghost &&
    css`
      background-color: transparent;
      border-color: #fff;
      &:hover {
        background: #fff;
        border-color: #fff;
        color: #000;
      }
    `}
  ${(props) =>
    props.ghostPrimary &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.blue017};
      border-color: ${(props) => props.theme.colors.red710};
      &:hover {
        background: ${(props) => props.theme.colors.blue105};
        border-color: ${(props) => props.theme.colors.blue105};
        color: #fff;
      }
    `}
`

const BaseButton = styled(antdButton)`
  ${buttonStyle}
`

export function Button({ ...props }) {
  return <BaseButton {...props} />
}
