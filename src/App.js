import React, { useState } from 'react'
import './Fonts.css'
import './App.css'
import 'rsuite/dist/rsuite.min.css';

import DesktopMain from './components/Desktop/DesktopMain'
import TaskbarMain from './components/Taskbar/TaskbarMain'
import WindowsManager from '@components/Desktop/Windows/WindowsManager';

function App() {
  const [OpenedPrograms, setOpenedPrograms] = useState([])
  
  const closeProgram = (index) => {
    let programs = [...OpenedPrograms]
    programs.splice(index, 1)
    setOpenedPrograms(programs)
  }

  return (
    <div className='App'>
      <DesktopMain 
        openProgram={(program) => { 
          setOpenedPrograms([...OpenedPrograms, program])
        }} 
      />
      <WindowsManager programs={OpenedPrograms} closeProgram={(index) => closeProgram(index)}/>
      <TaskbarMain programs={OpenedPrograms} />
    </div>
  )
}

export default App;
