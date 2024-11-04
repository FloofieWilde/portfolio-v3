import React, { useEffect, useState } from 'react'
import './Fonts.css'
import './App.css'
import 'rsuite/dist/rsuite.min.css';

import DesktopMain from './components/Desktop/DesktopMain'
import TaskbarMain from './components/Taskbar/TaskbarMain'
import WindowsManager from '@components/Desktop/Windows/WindowsManager';

function App() {
  const [OpenedPrograms, setOpenedPrograms] = useState([])
  
  return (
    <div className='App'>
      <DesktopMain 
        openProgram={(program) => { 
          setOpenedPrograms([...OpenedPrograms, program])
        }} 
      />
      <WindowsManager programs={OpenedPrograms} />
      <TaskbarMain />
    </div>
  )
}

export default App;
