import {
  Container,
  GlobeIcon,
  NewsIcon,
  MusicIcon,
  SignalIcon,
  DashboardIcon,
  MessageIcon,
  NotificationIcon,
  AccountIcon
} from './styles'

function Nav() {
  return (
    <Container>
      <ul>
        <li>
          <GlobeIcon />
          Overview
        </li>
        <li>
          <NewsIcon />
          News
        </li>
        <li>
          <MusicIcon />
          Playlists
        </li>
        <li>
          <SignalIcon />
          Discover
        </li>
      </ul>
      <ul>
        <li>
          <DashboardIcon />
          Dashboard
        </li>
        <li>
          <MessageIcon />
          Messages
        </li>
        <li>
          <NotificationIcon />
          Notifications
        </li>
        <li>
          <AccountIcon />
          Account
        </li>
      </ul>
    </Container>
  )
}

export default Nav
