import Playlists from '../Playlists'
import Additional from '../Additional'
import { Container, Header, SearchIcon} from './styles'

function Main() {
  return (
    <Container>
      <Header>
        <SearchIcon />
        <input type="text" placeholder="Buscar artista, música ou playlist" />
      </Header>
      <Playlists />
      <Additional />
    </Container>
  )
}

export default Main
