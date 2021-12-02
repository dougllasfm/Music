import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 14px;

  opacity: 0.6;
  transition: opacity 0.2s linear;
  cursor: pointer;
  
  > img {
    width: 44px;
    height: 44px;
    border-radius: 4px;
  }

  > div {
    margin-left: 10px;
    > p {
      font-size: 14px;
      color: ${props => theme.colors.text};
    }
    > span {
      font-size: 10px;
      color: ${props => theme.colors.secondary};
    }
  }

  > span {
    margin-left: 80px;
    font-size: 10px;
    color: ${props => theme.colors.secondary};

    @media (max-width: 350px) {
      margin-left: 40px;
    }
  }

  &:hover {
    opacity: 0.9;
  }
`
