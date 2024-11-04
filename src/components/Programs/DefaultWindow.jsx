import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from 'Colors'
import { t, use } from 'i18next'
import Draggable from 'react-draggable'
import Button from '@components/Shared/Button'

const DefaultWindow = (props) => {
  const defaultPosition = 50+20*props.index;
  const [Position, setPosition] = useState({ x: defaultPosition, y: defaultPosition })
  const [IsDragged, setIsDragged] = useState(false)

  useEffect(() => {
    console.log("Position: " + JSON.stringify(Position));
  }, [Position])

  return (
    <div>
      <Window index={props.index} position={Position}>
          <WindowHeader className="handle">
            <>
              {/* eslint-disable-next-line no-undef */}
              <img src={require(`@icons/${props.program.icon}`)} alt={`icon ${props.program.name}`} />
              <span>{t(`icons.${props.program.name}`)}</span>
            </>
            <Commands>
              <Button>?</Button>
              <Button>?</Button>
              <Button>X</Button>
            </Commands>
          </WindowHeader>
        </Window>
      <Draggable 
        handle=".handle"
        onStart={() => setIsDragged(true)}
        onStop={(event, data) => {
          console.log("Position: " + JSON.stringify(Position));
          console.log("Data: " + data.lastX + " " + data.lastY);

          setPosition({
            x: data.lastX + defaultPosition,
            y: data.lastY + defaultPosition
          })
          setIsDragged(false)
        }}
      >
        <WindowDragEffect isDragged={IsDragged} index={props.index}>
          <WindowHeaderBounds className="handle">
          </WindowHeaderBounds>
        </WindowDragEffect>
      </Draggable>
    </div>
  )
}

const WindowBounds = styled.div`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  min-width: 150px;
  min-height: 150px;
  width: 300px;

  top: calc(50px + 20px*${props => props.index});
  left: calc(50px + 20px*${props => props.index});
`

const WindowDragEffect = styled(WindowBounds)`
  border: ${props => props.isDragged ? '4px white solid' : 'none'};
  mix-blend-mode: difference;
  pointer-events:none;
`

const Window = styled(WindowBounds)`
  top: ${props => props.position.y}px;
  left: ${props => props.position.x}px;

  border: 2px solid ${Colors.greyTB};
  box-shadow: ${Colors.greyShadow} 2px 2px 0px, white -1px -1px 0px;
`

const WindowHeaderSize = styled.div`
  height: 18px;
  display: flex;
`

const WindowHeaderBounds = styled(WindowHeaderSize)`
  width: calc(100% - 48px);
  pointer-events: auto;
`

const WindowHeader = styled(WindowHeaderSize)`
  background-color: ${Colors.selectedBlue};
  color: white;
  font-weight: bold;
  height: 18px;
  display: flex;
  text-align: center;
  align-items: center;

  border: ${Colors.greyTB} 1px solid;

  > img {
    width: 15px;
    height: 14px;
    margin: 1px 2px;
  }

  > span {
    position: relative;
    top: 1px;
  }
`

const Commands = styled.div`
  display: flex;
  gap: 2px;
  margin-left: auto;
  margin-right: 2px;
`  

DefaultWindow.propTypes = {
  program: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default DefaultWindow