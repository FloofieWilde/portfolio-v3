import React from 'react'
import './Fonts.css'
import './App.css'
import DesktopMain from './components/Desktop/DesktopMain'
import TaskbarMain from './components/Taskbar/TaskbarMain'

function App() {
  return (
    <div className='App'>
      <DesktopMain />
      <TaskbarMain />
    </div>
  )
}

export default App
