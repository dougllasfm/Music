import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: linear-gradient(to right, #0d1226 0%, #1f1734 100%);

  @media (max-width: 1260px) {
    display: flex;
    justify-content: center;
  }
`

export const Aside = styled.div`
  background: ${props => props.theme.colors.preto};

  @media (max-width: 1260px) {
    display: none;
  }
`
