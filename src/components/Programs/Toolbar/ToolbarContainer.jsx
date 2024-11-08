import Separator from '@components/Shared/Separator'
import Colors from 'Colors'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import windowsFlag from '@imgs/WindowsTb.png'

const ToolbarContainer = (props) => {
  return (
    <Toolbar>
      <ToolbarLeft>
        <Separator height="80%" />
        {props.children}
      </ToolbarLeft>
      {props.winFlag && <img style={{height:"100%"}} src={windowsFlag} />}
    </Toolbar>
  )
}

const Toolbar = styled.div`
  height: 24px;
  background-color: ${Colors.greyTB};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.greyBorders};
  box-shadow: white -1px -1px;
  box-sizing: border-box;
`

const ToolbarLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 2px;
  height: inherit;
`

ToolbarContainer.propTypes = {
  children: PropTypes.node,
  winFlag: PropTypes.bool,
}

export default ToolbarContainer