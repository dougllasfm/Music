import styled from 'styled-components'
import { BiSearch } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

  @media (max-width: 800px) {
    padding: 20px 10px;
  }

  @media (max-width: 475px) {
    justify-content: center;
    align-items: center;
  }
`

export const Header = styled.div`
  display: flex;
  margin-bottom: 30px;

  > input {
    background: none;
    color: ${props => props.theme.colors.text};
    
    outline: none;
    border: 0;
    font-size: 12px;

    width: 300px;

    @media (max-width: 350px) {
      width: 100px;
    }
  }

  

`

export const SearchIcon = styled(BiSearch)`
  width: 18px;
  height: 18px;
  margin-right: 8px;  
  opacity: 0.6;
`
