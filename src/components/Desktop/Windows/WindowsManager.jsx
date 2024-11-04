import DefaultWindow from '@components/Programs/DefaultWindow'
import React from 'react'
import PropTypes from 'prop-types'

const WindowsManager = (props) => {
  return (
    <div style={{zIndex:"100"}}>
        { props.programs && props.programs.length > 0 &&
          props.programs.map((program, index) => 
            <DefaultWindow 
              index={index} 
              key={program} 
              program={program}
              closeSelf={() => props.closeProgram(index)}
            />)
        }
    </div>
  )
}
WindowsManager.propTypes = {
  programs: PropTypes.array,
  closeProgram: PropTypes.func
}

export default WindowsManager