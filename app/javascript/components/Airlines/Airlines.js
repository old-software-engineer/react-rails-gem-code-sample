import React, { useState, useEffect } from "react";
import { airlinesRender } from "../../api/AirlineApi";
import Slider from "react-slick";
import { Header } from "./Airlines.style";
import AirlineCard from "./AirlineCard";

const SETTINGS = {
  className: "center",
  centerMode: true,
  dots: true,
  focusOnSelect: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Airlines = () => {
  const [airlines, setAirlines] = useState([]); // Airlines data
  const [activeSlide, setActiveSlide] = useState(0);
  const [bgImage, setBgImage] = useState("/assets/flight.jpg");

  useEffect(() => {
    airlinesRender()
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const sliderSettings = {
    ...SETTINGS,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  useEffect(() => {
    airlines.length && setBgImage(airlines[activeSlide].attributes.image_url);
  }, [activeSlide]);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Header >
      </Header>
      <Slider {...sliderSettings}>
        {airlines.map((item, index) => (
          <AirlineCard
            key={index}
            attributes={item.attributes}
            activeSlide={activeSlide == index}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Airlines;
