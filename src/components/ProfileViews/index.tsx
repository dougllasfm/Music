import { Container } from './styles'

type Props = {
  nameImage: string
  nameArtist: string
  days: string
  album: string
}

type PropsViews = {
  props: Props
}

function ProfileViews({props}: PropsViews) {
  return (
    <Container>
      <img
        src={props.nameImage}
        alt=""
      />
      <div>
        <p>{props.nameArtist}</p>
        <span>{props.days} dia atrás</span>
      </div>
      <span>{props.album} álbum</span>
    </Container>
  )
}

export default ProfileViews
