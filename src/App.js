import React, { useEffect, useState } from 'react'
import './Fonts.css'
import './App.css'
import 'rsuite/dist/rsuite.min.css';

import DesktopMain from './components/Desktop/DesktopMain'
import TaskbarMain from './components/Taskbar/TaskbarMain'
import WindowsManager from '@components/Desktop/Windows/WindowsManager';

function App() {
  const [OpenedPrograms, setOpenedPrograms] = useState([])
  useEffect(() => {
    console.log(OpenedPrograms)
  }, [OpenedPrograms])
  
  return (
    <div className='App'>
      <WindowsManager programs={OpenedPrograms} />
      <DesktopMain 
        openProgram={(program) => { 
          setOpenedPrograms([...OpenedPrograms, program])
        }} 
      />
      <TaskbarMain />
    </div>
  )
}

export default App;
