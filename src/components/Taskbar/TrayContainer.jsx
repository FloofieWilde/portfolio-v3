import Colors from 'Colors'
import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'

const TrayContainer = () => {
  return (
    <Tray>
        <Clock/>
    </Tray>
  )
}

const Tray = styled.div`
    border-bottom: white 1px solid;
    border-right: white 1px solid;
    border-top: ${Colors.greyShadowLight} 1px solid;
    border-left: ${Colors.greyShadowLight} 1px solid;
    box-shadow: inset 1px 1px ${Colors.greyShadowLighter} ;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    height: 22px;
    font-family: "PX";
    font-weight: bold;
    padding: 0 4px;
`

export default TrayContainer