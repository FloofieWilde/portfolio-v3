import React from 'react'
import "./Desktop.css"
import styled from 'styled-components'

const DesktopMain = () => {
  return (
    <div className={"wallpaper"}>
      <IconGrid>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </IconGrid>
    </div>
  )
}

const IconGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

`

export default DesktopMain