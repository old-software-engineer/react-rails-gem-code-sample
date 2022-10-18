import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 50px 100px 50px 0px;
    font-size: 30px;
    img{
        height: 50px ;
        width: 50px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.5);
        margin-bottom: -8px;
    }

`
const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`
// Header return Airline Name , Image and Average Score.
const Header = (props) => {
    const {name, image_url} = props.attributes
    const total = props.reviews.length
    return(
        <Wrapper>
            <h1 style={{paddingBottom:"20px"}}><img src={image_url} alt={name}/> {name}</h1>
            <div>
            <div style={{paddingLeft:"20px"}}>Total Review: {total}</div>
            <div className="starRating"></div>
            </div>
        </Wrapper>
    )
}

export default Header;