/* eslint-disable no-undef */
import React, { useState } from 'react'
import exe from '@icons/executable-0.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { t } from 'i18next'
import Colors from 'Colors'

const DesktopIcon = (props) => {
  const [Focused, setFocused] = useState(false)
  return (
    <Icon onBlur={() => {setFocused(false)}} onFocus={() => setFocused(true)} onClick={() => {/*TODO: Implement windows*/}}>
        <img src={props.icon.icon && Focused ? require(`@icons/${props.icon.icon}`) : exe} alt={`icon ${props.icon.name}`} />
        <span>{t(`icons.${props.icon.name}`)}</span>
    </Icon>
  )
}

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  gap: 4px;
  color: white;
  width: 100px;
  height: 60px;
  background-color: transparent;
  margin: 5px 0 20px 0;

  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  > img {
    width: 35px;
    height: 35px;
    position: relative;
  }

  > span {
    font-size: 11px;
  }

  &:focus {
    > img {
      image-rendering: pixelated;

    }

    > span {
      width: fit-content;
      padding: 0 3px;
      background-color: ${Colors.selectedBlue};
      border: dotted 1px white;
    }
  }
`

DesktopIcon.propTypes = {
  icon: PropTypes.object,
}

export default DesktopIcon