import Colors from 'Colors'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <ButtonStyle onClick={props.handler}>{props.children}</ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  height: 12px;
  width: 14px;
  font-family: "PX";
  color: black;
  font-weight: bold;
  font-size: 7px;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.greyButton};
  cursor: default;

  border-top: 1px white solid;
  border-left: 1px white solid;
  border-bottom: 1px black solid;
  border-right: 1px black solid;

  &:active {
    border-bottom: 1px white solid;
    border-right: 1px white solid;
    border-top: 1px black solid;
    border-left: 1px black solid;

    box-shadow: inset 1px 1px #000 ;
  }
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handler: PropTypes.func,
}

export default Button