import React from 'react'
import styled from 'styled-components'
import TaskbarButton from '@components/Taskbar/TaskbarButton'
import TooltipComp from '@components/Shared/TooltipComp'
import TrayContainer from './TrayContainer'

const TaskbarMain = () => {
  return (
    <TaskbarContainer>
      <div>
        <TooltipComp text={"Cliquez ici pour commencer."}>
          <><TaskbarButton/></>
          </TooltipComp>
      </div>
      <div>
        <TrayContainer/>
      </div>
    </TaskbarContainer>
  )
}

const TaskbarContainer = styled.div`
  height: 28px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  border-top: white 1px solid;
  background-color: #c7cbcf;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px;
  
  align-items: center;
`


export default TaskbarMain