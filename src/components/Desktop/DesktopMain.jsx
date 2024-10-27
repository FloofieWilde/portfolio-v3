import React from 'react'
import "./Desktop.css"
import styled from 'styled-components'
import DesktopIcon from './DesktopIcon'
import IconList from './DesktopIconList.json'

const DesktopMain = () => {
  return (
    <div className={"wallpaper"}>
      <IconGrid>
        {
          IconList.map((iconRow, rowIndex) => (
            <IconCol key={rowIndex}>
              {
              iconRow.map((icon, index) => (
                <DesktopIcon key={index} icon={icon} />
              ))
              }
            </IconCol>
          ))
        }
      </IconGrid>
    </div>
  )
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