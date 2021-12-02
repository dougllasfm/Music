import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;

  .profiles {
    display: flex;
    flex-direction: column;

    .flex {
      height: 164px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        background: #49349c11;
        width: 6px;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgb(32, 15, 86);
        width: 6px;
        border-radius: 6px;
      }

      @media (max-width: 800px) {
        height: 124px;
      }
    }
    @media (max-width: 675px) {
      justify-content: center;
      align-items: center;
    }
  }

  .tracks {
    display: flex;
    flex-direction: column;
    margin-left: 240px;
    max-width: 450px;

    .flex {
      display: flex;
      align-items: center;
      max-width: 450px;
      width: 100%;
      overflow-x: auto;

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
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin: 10px 20px 10px 0;

        opacity: 0.6;
        transition: opacity 0.2s linear;
        cursor: pointer;

        > img {
          width: 100px;
          height: 100px;
          border-radius: 2px;
          margin-bottom: 4px;

          @media (max-width: 800px) {
            width: 70px;
            height: 70px;
          }
        }

        > p {
          font-size: 12px;
          letter-spacing: 1px;
          width: 100px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          @media (max-width: 800px) {
            width: 70px;
          }
        }

        > span {
          font-size: 10px;
          letter-spacing: 2px;
          width: 100px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          @media (max-width: 800px) {
            width: 70px;
          }
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }

    @media (max-width: 1040px) {
      width: 450px;
      margin-left: 150px;
    }

    @media (max-width: 940px) {
      width: 250px;
    }

    @media (max-width: 800px) {
      width: 200px;
      margin-left: 100px;
    }

    @media (max-width: 675px) {
      width: 450px;
      margin: 20px 0;
      justify-content: center;
    }

    @media (max-width: 475px) {
      width: 150px;
      justify-content: center;
    }
  }

  @media (max-width: 675px) {
    display: block;
  }

  
`
