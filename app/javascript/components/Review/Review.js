import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import {
  Card,
  Title,
  Description,
  ShowDescription,
  Arrow,
  ArrowSection,
} from "./Review.style";

// Review Component Return star rating title description and Delete Button
const Review = ({id, attributes}) => {
  const { title, description, score } = attributes || {};
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Card>
      <ShowDescription onClick={() => setShowDescription(!showDescription)}>
        <Title>{title}</Title>
        <ArrowSection>
          <StarRatingComponent
            name={id}
            value={score}
            editing={false}
            renderStarIcon={() => (
              <span className="fa fa-star " style={{ fontSize: "25px" }}></span>
            )}
          />
          {
            <Arrow
              className="fa fa-solid fa-chevron-down"
              showDescription={showDescription}
            ></Arrow>
          }
        </ArrowSection>
      </ShowDescription>
      {<Description active={showDescription}>{description}</Description>}
    </Card>
  );
};

export default Review;
