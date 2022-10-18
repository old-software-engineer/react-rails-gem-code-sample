import React from "react";
import styled from 'styled-components';
import Rating from "../Rating/Rating";

const Card = styled.div`
  border-radius: 4px;
  border: 5px solid #E6E6E6;
  padding: 10px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`
const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 20px;
`

const Description = styled.div`
  padding: 5px 0px 20px 0px;
  font-family: 'Poppins-Bold';
  font-size: 20px;
`
// Review Component Return star rating title description and Delete Button
const Review = (props) =>{
  // console.log(props);
    const {title, description, score} = props.attributes
    return(
        <Card>
            <div>
              {/* Rating Component rendered */}
                <Rating score = {score} />
            </div>
            <Title>Title: {title}</Title>
            <Description>Description: {description}</Description>
            <button className="btn btn-danger " style={{margin: "5px"}} onClick={props.handleDestroy.bind(this, props.id)}><i className="fa fa-trash"></i></button>
            <button className="btn btn-primary" style={{margin: "5px"}} onClick={props.handleEdit.bind(this, props.id)}><i className="fa fa-pencil"></i></button>
        </Card>    
    )
}

export default Review;