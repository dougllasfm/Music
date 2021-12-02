import { Container } from './styles'

function Playlists() {
  return (
    <Container>
      <h1>Playlists em destaque</h1>
      <div className="flex">
        <div>
          <img src="/playlist1.jpg" alt="" />
          <h2>Nome da Playlist</h2>
          <span>124 músicas</span>
        </div>
        <div>
          <img src="/playlist2.jpg" alt="" />
          <h2>Nome da Playlist</h2>
          <span>35 músicas</span>
        </div>
        <div>
          <img src="/playlist3.jpg" alt="" />
          <h2>Nome da Playlist</h2>
          <span>88 músicas</span>
        </div>
        <div>
          <img src="/playlist4.jpg" alt="" />
          <h2>Nome da Playlist</h2>
          <span>88 músicas</span>
        </div>
      </div>
    </Container>
  )
}

export default Playlists
