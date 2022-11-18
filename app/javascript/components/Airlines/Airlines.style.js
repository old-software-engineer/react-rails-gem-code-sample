import styled from 'styled-components'

export const Header = styled.div`
  padding: 50px 50px 10px 50px;
  h1 {
    font-size: 60px;
    text-align: center;
  }
`

export const Card = styled.div`
  border: 5px solid #efefef;
  text-align: center;
  height: 700px;
  width: 100%;
  margin-top:130px;
`

export const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const ColumnLeft = styled.div`
  background: #fff;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }
  scrollbar-width: none;
  &:last-child {
    background: #000;
  }
  padding-bottom: 50px;
`

export const ColumnRight = styled.div`
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    // background: transparent;
    width: 0px;
  }
  scrollbar-width: none;
  text-align: center;
`

export const Main = styled.div`
  padding-left: 50px;
`

export const Head = styled.div`
  padding: 50px 100px 50px 0px;
  font-size: 30px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: -8px;
  }
`

export const BackgroundImage = styled.div`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  background-image: ${(props) => `url(${props.background})`};
  opacity: ${(props) => (props.activeSlide ? '1' : '0.7')};
`

export const FlightName = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
  font-family: FontAwesome;
`

export const ReviewBackground = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => `url(${props.background})`};
`
