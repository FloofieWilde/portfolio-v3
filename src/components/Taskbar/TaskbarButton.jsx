import React from 'react'
import styled from 'styled-components'
import winLogo from '@icons/windows-0.png'
import Colors from "Colors"

const TaskbarButton = () => {
  return <StartButton>
      <img alt="W98 icon" src={winLogo} />
      <span style={{position:"relative", top:"px"}}>Démarrer</span>
    </StartButton>
}

const StartButton = styled.button`
  font-family: "MS98";
  font-weight: bold;
  line-height: 1.5;
  font-size: 11.5px;

  height: 22px;
  margin: 0;
  padding: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background-color: ${Colors.greyTB};
  
  border-top: 1px white solid;
  border-left: 1px white solid;
  box-shadow : 1px 1px #dfdfdf, 1px 0 #000,0 1px #000,1px 1px #000

  
  `

export default TaskbarButton
