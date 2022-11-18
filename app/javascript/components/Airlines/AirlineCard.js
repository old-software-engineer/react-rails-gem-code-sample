import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { Card, FlightName, BackgroundImage } from "./Airlines.style";

const AirlineCard = ({ activeSlide, attributes }) => {
  const { image_url, name, avg_score, slug } = attributes || {};

  return (
    <div>
      <Card>
        <BackgroundImage background={image_url} activeSlide={activeSlide}>
          <div>
            <FlightName className="h1 text-white">{name}</FlightName>
            <StarRatingComponent
              name="home"
              value={avg_score}
              renderStarIcon={() => (
                <span
                  className="fa fa-star"
                  style={{ fontSize: "50px", padding: "10px" }}
                ></span>
              )}
            />
            <br />
            <Link
              to={`/airlines/${slug}`}
              style={{
                textDecoration: "none",
                marginTop: "50%",
                padding: "2%",
              }}
              className="btn btn-dark btn-lg link-margin"
            >
              Flight Details
            </Link>
          </div>
        </BackgroundImage>
      </Card>
    </div>
  );
};
export default AirlineCard;
