import React from 'react'
import styled from 'styled-components'
import TaskbarButton from '@components/Taskbar/TaskbarButton'

const TaskbarMain = () => {
  return (
    <TaskbarContainer>
      <div>
        <TaskbarButton/>
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

  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px;
  
  align-items: center;
  /* background-color: #c2c6ca; */
`


export default TaskbarMain