import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Review from "./Review";
import { reviewCreate } from "../../Api/AirlineApi";
import { reviewDelete } from "../../Api/AirlineApi";
import { reviewDetail } from "../../Api/AirlineApi";
import { reviewUpdate } from "../../Api/AirlineApi";
import ReviewEdit from "./ReviewEdit";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ColumnLeft = styled.div`
  background: #fff;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }
  scrollbar-width: none;
  margin-left: 70px;
  &:last-child {
    background: #000;
  }
  padding-bottom: 50px;
`;
const ColumnRight = styled.div`
  background: #fff;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }
  scrollbar-width: none;
  text-align: center;
  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;
const Airline = () => {
  let { slug } = useParams(); // useParams hook used for taking parameters from url.
  // useState causes components to re-render after state updates. useState allows us to update the state inside components.
  const [airline, setAirline] = useState({}); // Reflect state update for an Airline.

  const [reviews, setReviews] = useState([]); // Reflect state update for all reviews for an Airline.

  const [review, setReview] = useState({}); // Reflect state update for a review.

  const [loaded, setLoaded] = useState(false); // used for checking the data is loaded or not.

  const [id, setId] = useState(0);

  useEffect(() => {
    // If Slug is present then only use Get method.
    if ({ slug } != "") {
        reviewDetail(slug)
        .then((resp) => {
          setAirline(resp.data);
          setReviews(resp.data.included);
          setLoaded(true);
        })
        .catch((resp) => console.log(resp));
    }
  }, [review]);

  const handleChange = (e) => {
    e.preventDefault();
    // event target data are reflected whenever changes made in input tag assign it to review object.
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  // Create  Review
  const handleSubmit = (e) => {
    e.preventDefault();
    const airline_id = airline.data.id;
    reviewCreate(review, airline_id).then((resp) => {
      const included = [...airline.included, resp.data.data];
      setAirline({ ...airline, included });
      // review is set to empty.
      setReview({ title: "", description: "", score: 0 });
    });
  };
  //Edit review
  const handleEdit = (id, e) => {
    e.preventDefault();
    console.log(id);
    setId(id);
  }
 // Update review
  const handleUpdate = (id, e) => {
    e.preventDefault();
    console.log(id);
    reviewUpdate(review,id).then((resp)=>{
      // const included = [...reviews];
      // setAirline({ ...airline, included });
      setReview({ title: "", description: "", score: 0 });
      setId(0);
    })
  }

  // Delete Review
  const handleDestroy = (id, e) => {
    e.preventDefault();
    reviewDelete(id).then((data) => {
      const included = [...reviews];
      setAirline({ ...airline, included });
      setReview({ title: "", description: "", score: 0 });
    });
  };
  // Cancel update
  const handleCancel =() =>{
    setId(0);
  }

  let userReviews;
  if (loaded && airline.included) {
    userReviews = airline.included.map((item, index) => {
      if(id == item.id){
          return(
            <ReviewEdit
            handleChange={handleChange}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
            review={review}
            id ={id}
            attributes={item.attributes}
            />
          );
      }else{
          return(
            <Review
            key={index}
            id={item.id}
            attributes={item.attributes}
            handleDestroy={handleDestroy}
            handleEdit={handleEdit}
          />
          );
      }
    });
  }
  // Show Page for Airline which contain Header Component, and Reviews for Each user in left hand side and Form to add New review in Right hand Side.
  return (
    <div>
      <Wrapper>
        {loaded && (
          <Fragment>
            <ColumnLeft>
              <Main>
                {/* In Header Component airline data and reviews of airline is send as props to count total Reviews.*/}
                <Header
                  attributes={airline.data.attributes}
                  reviews={airline.included}
                />
              </Main>
              {userReviews}
            </ColumnLeft>
            <ColumnRight>
              <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                attributes={airline.data.attributes}
                review={review}
              />
            </ColumnRight>
          </Fragment>
        )}
      </Wrapper>
    </div>
  );
};
export default Airline;
