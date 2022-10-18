import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating/Rating";
const Card = styled.div`
    border: 10px solid #efefef;
    background: #fff;
    text-align: center;
`
const AirlineLogo = styled.div`
    padding-top: 10px;
    width:50px;
    text-align: center;
    margin-left: auto;
    margin-right:auto;
    img{
        // background-image: url(default.png);
        height: 60px;
        width: 60px;
        border-radius: 100%;
        border: 1px solid black;
    }
`
const AirlineName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a:link, a:visited{
        color: white;
        background: #000;    
        padding: 10px 50px; 
        width: 100%
        text-decoration: none;
        display: inline-block;
    }
`
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
// Render Each airlines details in Index page.
const Airlineindex = (props) => {
    return(
        <Card>
            <AirlineLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </AirlineLogo>
            <AirlineName>{props.attributes.name}</AirlineName>
            <Rating score = {props.attributes.avg_score}/>
            {/* <LinkWrapper > */}
                <Link to={`/airlines/${props.attributes.slug}` } style={{ textDecoration: 'none' }} className="btn btn-dark link-margin">Flight Details</Link>
            {/* </LinkWrapper> */}
        </Card>
    )
}
export default Airlineindex