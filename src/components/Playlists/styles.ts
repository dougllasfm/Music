import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .flex {
    display: flex;
    overflow-x: auto;
    max-width: 960px;

    &::-webkit-scrollbar {
      background: #49349c11;
      height: 6px;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(32, 15, 86);
      height: 6px;
      border-radius: 6px;
    }

    > div {
      margin-right: 15px;
      margin-bottom: 10px;
      cursor: pointer;

      > img {
        width: 300px;
        height: 180px;
        border-radius: 12px;
        margin-bottom: 5px;
        opacity: 0.6;
        transition: opacity 0.2s linear;

        &:hover {
          opacity: 1;
        }

        @media (max-width: 800px) {
          width: 200px;
          height: 140px;
        }
      }

      > h2 {
        font-size: 18px;
        ${props => props.theme.colors.text};
      }

      > span {
        font-size: 11px;
        color: ${props => props.theme.colors.secondary};
      }
    }

    @media (max-width: 1080px) {
      width: 800px;
    }

    @media (max-width: 940px) {
      width: 700px;
    }

    @media (max-width: 800px) {
      width: 650px;
    }

    @media (max-width: 675px) {
      width: 550px;
    }

    @media (max-width: 570px) {
      width: 400px;
    }

    @media (max-width: 475px) {
      width: 150px;
    }
  }

  @media (max-width: 475px) {
    justify-content: center;
    align-items: center;
  }
`
