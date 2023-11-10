import { ClockLoader } from 'react-spinners'

import { cores } from '../../estiloGlobal'
import { Container } from './style'

const Carregando = () => (
  <Container>
    <ClockLoader color={cores.violeta} />
  </Container>
)

export default Carregando
