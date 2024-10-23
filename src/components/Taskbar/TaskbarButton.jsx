import React from 'react'
import styled from 'styled-components'
import winLogo from '@icons/windows-0.png'
import Colors from "Colors"

const TaskbarButton = () => {
  return <StartButton>
      <span className='overlayStart'>&nbsp;</span>
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
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: ${Colors.greyTB};
  
  border-top: 1px white solid;
  border-left: 1px white solid;
  border-bottom: 1px black solid;
  border-right: 1px black solid;
  box-shadow : 1px 1px #393b3d, 1px 0 #000,0 1px #000,1px 1px #000;

  > .overlayStart {
     visibility: hidden;
      position: absolute;
      width: 95%;
      height: 70%;
      border: 1px black dotted;
      border-radius: 2px;
  }

  &:focus {
    border-bottom: 1px white solid;
    border-right: 1px white solid;
    border-top: 1px black solid;
    border-left: 1px black solid;

    box-shadow: inset 1px 1px #000 ;
    
    > .overlayStart {
     visibility: visible;
      
    }
  }
  `

export default TaskbarButton
