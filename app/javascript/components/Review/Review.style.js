import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  border: none;
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem;
  box-shadow: rgb(0 0 0 / 16%) 1px 10px 36px 0px,
    rgb(0 0 0 / 6%) 0px 0px 0px 1px;
`
export const Title = styled.div`
  padding: 0;
  margin-right: 6rem;
  font-family: "Poppins-Bold";
  font-size: 20px;
  font-weight: bold;
`

export const Description = styled.div`
  padding: 0;
  font-family: "Poppins-Bold";
  font-size: 20px;
  transition: all 0.3s;
  overflow: hidden;
  max-height: ${(props) => (props.active ? '100px' : '0')};
`

export const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 5px 0 10px 0;
`
export const RatingBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const EditCard = styled.div`
  border-radius: 4px;
  border: 5px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

export const ShowDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const ArrowSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Arrow = styled.div`
  font-size: 1rem;
  margin-left: auto;
  transition: all 0.3s;
  transform: ${(props) =>
    props.showDescription ? 'rotate(180deg)' : 'rotate(0deg)'};
`
