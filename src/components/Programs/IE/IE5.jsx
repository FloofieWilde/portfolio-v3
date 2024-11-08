import React from 'react'
import ToolbarContainer from '../Toolbar/ToolbarContainer'
import Colors from 'Colors'
import ToolbarButton from '../Toolbar/ToolbarButton'

const IE5 = () => {
  return (
    <>
      <ToolbarContainer winFlag>
        <ToolbarButton name="Fichier" />
        <ToolbarButton name="Edition" />
        <ToolbarButton name="Affichage" />
        <ToolbarButton name="Favoris" />
        <ToolbarButton name="Outils" />
        <ToolbarButton name="?" />
      </ToolbarContainer>

      <ToolbarContainer></ToolbarContainer>
      <iframe style={iFrameStyle} src="https://www.koogel.fr/?l=fr"></iframe>
    </>
  )
}

const iFrameStyle = {
  width: "100%",
  height: "100%",
  padding: "0px",
  margin: "0px",
  borderTop: "1.5px solid #000",
  borderLeft: "1.5px solid #000",
  borderRight: "1.5px solid " + Colors.greyShadowLighter,
  borderBottom: "1.5px solid " + Colors.greyShadowLighter,
}

export default IE5