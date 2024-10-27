import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Whisper } from 'rsuite';
import "./Tooltip.css"

const TooltipComp = (props) => {
  return (
    <Whisper 
      followCursor
      placement={props.placement ?? "auto"}
      delayOpen={750}
      speaker={<Tooltip className='tooltip'>{props.text}</Tooltip>}
    >
        {props.children}
    </Whisper>
  )
}

TooltipComp.propTypes = {
  children: PropTypes.node.isRequired,
  text : PropTypes.string.isRequired,
  placement: PropTypes.string
};

export default TooltipComp