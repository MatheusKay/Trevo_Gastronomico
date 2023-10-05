import styled from 'styled-components'
import { cores } from '../../estiloGlobal'

import { Props } from '.'

export const TagName = styled.span<Props>`
  padding: 4px 6px;
  background-color: ${cores.violeta};
  font-size: 12px;
  font-weight: ${(props) => (props.tag === 'normal' ? 'normal' : 'bold')};
`
