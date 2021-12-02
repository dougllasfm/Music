import Nav from '../Nav'
import { Container, GearIcon } from './styles'

function Profile() {
  return (
    <Container>
      <section className="profile">
        <img
          src="https://image.shutterstock.com/image-photo/exampleexample-on-paper-hanging-clothesline-260nw-475770580.jpg"
          alt=""
        />
        <div className="dados">
          <h2>Douglas Munaro</h2>
          <span>Edit profile <GearIcon /></span>
        </div>
      </section>
      <Nav />
    </Container>
  )
}

export default Profile
