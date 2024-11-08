import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TooltipComp from '@components/Shared/TooltipComp'
import TrayContainer from './TrayContainer'
import { t } from 'i18next'
import TrayButton from './TrayButton'
import TaskbarButton from './TaskbarButton'
import Colors from 'Colors'
import Separator from '@components/Shared/Separator'

const TaskbarMain = (props) => {
  return (
    <TaskbarContainer>
      <TaskbarLeftMember>
        <TooltipComp 
          text={"Cliquez ici pour commencer."}
          placement='topStart'
        >
          <><TaskbarButton/></>
        </TooltipComp>
        <Separator />
        {props.programs.map((program, index) => 
          <TaskbarProgram key={index}>
            {/* eslint-disable-next-line no-undef*/}
            <img src={require(`@icons/${program.icon}`)} alt={`icon ${program.name}`} />
            <span>{t(`icons.${program.name}`)}</span>
          </TaskbarProgram>
        )}
      </TaskbarLeftMember>
      <div>
        <TrayContainer/>
      </div>
    </TaskbarContainer>
  )
}

const TaskbarProgram = styled(TrayButton)`
  height: 22px !important;
  width: 150px;
  align-items: center;
  justify-content: start;
  line-height: 1;
  font-weight: normal;
  gap: 3px;

  &:focus {
    background-color: ${Colors.whiteTrayFocus};
    font-weight: bold;
  }
  
  > img {
    height: 16px;
    width: 18px;
    padding-left: 2px;
  }

  > span {
    position: relative;
    top: 1px;
  }
`

const TaskbarLeftMember = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: inherit;
`

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

TaskbarMain.propTypes = {
  programs: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TaskbarMain