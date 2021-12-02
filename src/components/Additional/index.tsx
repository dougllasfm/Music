import ProfileViews from '../ProfileViews'
import { Container } from './styles'

function Additional() {
  return (
    <Container>
      <div className="profiles">
        <h1>Perfis vistos</h1>
        <div className="flex">
          <ProfileViews
            props={{
              nameImage: '/view1.jpg',
              nameArtist: 'Artista 1',
              days: '4',
              album: '6'
            }}
          />
          <ProfileViews
            props={{
              nameImage: '/view2.jpg',
              nameArtist: 'Artista 2',
              days: '12',
              album: '2'
            }}
          />
          <ProfileViews
            props={{
              nameImage: '/view3.jpg',
              nameArtist: 'Artista 3',
              days: '2',
              album: '4'
            }}
          />
        </div>
      </div>
      <div className="tracks">
        <h1>Músicas</h1>
        <div className="flex">
          <div>
            <img src="/track1.jpg" alt="" />
            <p>Nome do artista</p>
            <span>Música</span>
          </div>
          <div>
            <img src="/track2.jpg" alt="" />
            <p>João Gomes</p>
            <span>Música</span>
          </div>
          <div>
            <img src="/track3.jpg" alt="" />
            <p>Nome do artista</p>
            <span>Música</span>
          </div>
          <div>
            <img src="/track4.jpg" alt="" />
            <p>Nome do artista</p>
            <span>Música</span>
          </div>
          <div>
            <img src="/track5.jpg" alt="" />
            <p>Nome do artista</p>
            <span>Música</span>
          </div>
          <div>
            <img src="/track6.jpg" alt="" />
            <p>Nome do artista</p>
            <span>Música</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Additional
