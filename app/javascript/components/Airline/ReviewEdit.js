import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';
const Card = styled.div`
  border-radius: 4px;
  border: 5px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`
const ReviewEdit = (props) => {
    console.log(props);
    const [title, setTitle] = useState(props.attributes.title);
    const [description, setDescription] = useState(props.attributes.description);
    props.review.title = title;
    props.review.description = description;
    props.review.score = props.attributes.score;
    const Stars = () => {
        const [rating, setRatingValue] = useState(props.attributes.score);

        const handleRating = (rate) => {
            const score = rate;
            props.review.score = score;
            setRatingValue(rate);
          }
        return(
                 <Rating
                    onClick={handleRating}
                    size={45}
                    transition
                    initialValue = {rating}
                />
        )
    }
    const Onchangetitle = (e) =>{
        setTitle(e.target.value);
        props.review.title = title;
    }
    const Onchangedescription = (e) =>{
        setDescription(e.target.value);
        props.review.description = description;
    }
    return(
        <Card>
            <form onSubmit={props.handleUpdate.bind(this, props.id)}>
                <div className="form-group">
                    <div className="col-xs-2">
                        <input onChange={Onchangetitle} value={title} style={{margin: "5px"}} type="text" name="title" placeholder="Update Title"  required/>
                    </div>
                    <div className="col-xs-2">
                        <input onChange={Onchangedescription} value={description} style={{margin: "5px"}} type="text" name="description" placeholder="Update Description" required/>
                    </div>
                    <div className="col-xs-2" style={{margin: "5px"}}>
                        <Stars />
                    </div>
                    <div>
                        <button className="btn btn-success" style={{margin: "5px"}} type="submit">Update</button>
                        <button className="btn btn-danger" onClick={props.handleCancel} type="cancel">Cancel</button>
                    </div>
                </div>
            </form>
        </Card>
    );

}

export default ReviewEdit;