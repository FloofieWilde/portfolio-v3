import React from 'react'
import PropTypes from 'prop-types'
import "./Desktop.css"
import styled from 'styled-components'
import DesktopIcon from './DesktopIcon'
import IconList from './DesktopIconList.json'

const DesktopMain = (props) => {
  return (
    <div className={"wallpaper"}>
      <IconGrid>
        {
          IconList.map((iconRow, rowIndex) => (
            <IconCol key={rowIndex}>
              {
              iconRow.map((icon, index) => (
                <div key={index} onDoubleClick={() => { props.openProgram(icon.name)}}>
                  <DesktopIcon 
                    key={index} 
                    icon={icon} 
                  />
                </div>
              ))
              }
            </IconCol>
          ))
        }
      </IconGrid>
    </div>
  )
}

DesktopMain.propTypes = {
  openProgram: PropTypes.func.isRequired,
}

const IconGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const IconCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default DesktopMain