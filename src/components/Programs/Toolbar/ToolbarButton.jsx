import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from 'Colors'

const ToolbarButton = (props) => {
  return (
    <TbButton>{props.name}</TbButton>
  )
}

const TbButton = styled.button`
    background-color: transparent;
    font-size: 11px;
    padding: 0px 7px;
    box-sizing: content-box;
    border: 1.5px solid transparent;
    height: 80%;

    &:hover {
        border-top: 1.5px solid white;
        border-left: 1.5px solid white;
        border-right: 1.5px solid ${Colors.greyShadowLighter};
        border-bottom: 1.5px solid ${Colors.greyShadowLighter};
    }

    &:focus {
        border-top: 1.5px solid ${Colors.greyShadowLighter};
        border-left: 1.5px solid ${Colors.greyShadowLighter};
        border-right: 1.5px solid white;
        border-bottom: 1.5px solid white;
    }
`

ToolbarButton.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ToolbarButton