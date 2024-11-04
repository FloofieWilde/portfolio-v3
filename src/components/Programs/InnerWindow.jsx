import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IE5 from './IE/IE5'

const InnerWindow = (props) => {
  return (
    <WinViewport>
        {props.program.name === "ie" && <IE5 />}
    </WinViewport>
  )
}

const WinViewport = styled.div`
    width: 100%;
    height: 100%;
    /* overflow: auto; */
    background-color: white;
    flex: 1 1 auto;
    box-sizing: border-box;
    padding: 0px;
`

InnerWindow.propTypes = {
  program: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default InnerWindow