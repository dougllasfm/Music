import styled, { css } from 'styled-components'
import {
  FaGlobe,
  FaMusic,
  FaRegNewspaper,
  FaSignal,
  FiMessageSquare,
  MdOutlineAccountCircle,
  MdOutlineNotificationsNone,
  MdOutlineDashboard
} from '../../styles/icons'
import theme from '../../styles/theme'

export const Container = styled.div`

  > ul {
    width: 100%;
    border-top: 0.5px solid #ececec11;
    padding: 15px 0;
    cursor: pointer;

    > li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 5px 0;
      color: ${props => theme.colors.secondary};
      font-size: 13px;
      transition: color 0.18s linear;
      
      &:hover {
        color: ${props => theme.colors.text};
      }
    }
  }

  > ul:nth-child(2) {
    margin-top: 20px;
  }
`

const iconCss = css`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`

export const GlobeIcon = styled(FaGlobe)`
  ${iconCss}
`
export const NewsIcon = styled(FaRegNewspaper)`
  ${iconCss}
`
export const MusicIcon = styled(FaMusic)`
  ${iconCss}
`
export const SignalIcon = styled(FaSignal)`
  ${iconCss}
`
export const DashboardIcon = styled(MdOutlineDashboard)`
  ${iconCss}
`
export const MessageIcon = styled(FiMessageSquare)`
  ${iconCss}
`
export const NotificationIcon = styled(MdOutlineNotificationsNone)`
  ${iconCss}
`
export const AccountIcon = styled(MdOutlineAccountCircle)`
  ${iconCss}
`
