import styled from 'styled-components'
import { BsGear } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 70px auto;
  padding: 12px;

  > section {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 140px;
    
    > img {
      width: 60px;
      height: 60px;
      border-radius: 2px;
    }

    .dados {
      margin-left: 10px;
      flex-direction: column;

      > h2 {
        font-size: 16px;
      }

      > span {
        display: flex;
        align-items: center;
        margin-top: 4px;
        font-size: 11px;
        color: ${props => props.theme.colors.secondary};
      }
    }

  }
`

export const GearIcon = styled(BsGear)`
  width: 11px;
  height: 11px;
  margin-left: 4px;
`