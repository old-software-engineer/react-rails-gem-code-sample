import React, { useEffect, useState } from "react";
import { reviewCreate } from "../../../api/AirlineApi";
import FormFields from "./FormFields";
import Rating from "./Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Used Simple-star-rating Package to take input and set review score in props
const Form = ({ airline_id, attributes, setAirlineSubmitForm }) => {
  // let attributes.checkuser;
  const enabled = attributes.checkuser || false;
  const [reviewValue, setReviewValue] = useState({
    title: "",
    description: "",
    score: 0,
    airline_id: airline_id,
    user_id: attributes.current_user,
  });


  const handleReviewChange = (e) => {
    setReviewValue({ ...reviewValue, [e.target.name]: e.target.value });
  };

  const handleStarRating = (nextValue) => {
    setReviewValue({ ...reviewValue, score: nextValue });
  };
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewValue.score) {
      reviewCreate(reviewValue)
        .then((resp) => {
          setAirlineSubmitForm(resp);
          setReviewValue({ title: "", description: "", score: 0 });
          toast.success("Review enter successfully");
        })
        .catch((error) => {
          toast.error("Please Enter Correct Fields");
        });
    } else {
      toast.error("Please Provide Rating");
    }
  };
  // Review form return Form to create review for Airline
  return (
    <div>
      <ToastContainer theme="dark" closeOnClick position="bottom-right" />
      <div className="container-fluid" style={{ paddingTop: "20%" }}>
        <form onSubmit={handleReviewSubmit.bind()}>
          <p className="display-3 text-white">
            Review for {attributes.name} Airlines
          </p>
          <FormFields
            reviewValue={reviewValue}
            handleReviewChange={handleReviewChange}
          />
          <Rating
            reviewValue={reviewValue}
            handleStarRating={handleStarRating}
          />
          <button
            className="btn btn-success btn-lg"
            disabled={!enabled}
            type="submit"
          >
            {(enabled)? "Submit Your Review":"Review Already Submitted"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
