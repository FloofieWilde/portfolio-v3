import React from 'react'
import winLogo from '@icons/windows-0.png'
import TrayButton from './TrayButton'

const TaskbarButton = () => {
  return <TrayButton>
      <span className='overlayStart'>&nbsp;</span>
      <img alt="W98 icon" src={winLogo} />
      <span style={{position:"relative", top:"1px"}}>Démarrer</span>
    </TrayButton>
}

export default TaskbarButton
