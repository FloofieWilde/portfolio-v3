import Colors from 'Colors'
import styled from 'styled-components'

const Separator = styled.div`
  display: inline-block;
  height: ${props => props.height ?? "65%"};
  border-left: 2px solid ${Colors.whiteTrayFocus};
  border-radius: 1px;
  box-shadow : 1px 1px ${Colors.greyShadowLight}, 1px 0 ${Colors.greyShadowLight},0 1px ${Colors.greyShadowLight}, 1px 1px white;
  margin-right: 2px;
`

export default Separator