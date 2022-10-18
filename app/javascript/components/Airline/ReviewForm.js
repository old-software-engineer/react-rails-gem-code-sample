import React from "react";
import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';
import { useState } from "react";

const RatingContainer =styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 5px 0 10px 0;
`
const RatingBox = styled.div`
    padding-top:20px;
    padding-bottom:20px;
`
// Used Simple-star-rating Package to take input and set review score in props 
const ReviewForm =(props) =>{
    const Stars = () => {
        const [rating, setRatingValue] = useState(0);
        const handleRating = (rate) => {
            const score = rate;
            props.review.score = score; 
            setRatingValue(rate);
          }
        return( 
                 <Rating 
                    onClick={handleRating}
                />
        )
    }
// Review form return Form to create review for Airline
    return(
        <div className="container-fluid" style={{paddingTop:"20%"}}>
            <form onSubmit={props.handleSubmit}>
                <p className="h1 text-white">Review for {props.attributes.name} Airlines</p>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" required />
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review description" required />
                </div>
                <div className="field">
                    <RatingContainer>
                        <div className="rating-title-text text-white">Rate this Airline</div>
                        <RatingBox>
                            <Stars />
                        </RatingBox>
                    </RatingContainer>
                </div>
                <button className="btn btn-success btn-lg" type="submit">Submit Your Review</button>
            </form>

        </div>
    )
}

export default ReviewForm