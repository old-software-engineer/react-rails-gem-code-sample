import React, { useState, useEffect } from "react";
import { airlinesRender } from "../../api/AirlineApi";
import Slider from "react-slick";
import { Header } from "./Airlines.style";
import AirlineCard from "./AirlineCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Airlines = ({ token }) => {
  const [airlines, setAirlines] = useState([]); // Airlines data
  const [activeSlide, setActiveSlide] = useState(0);
  const [bgImage, setBgImage] = useState("/assets/flight.jpg");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    airlinesRender(token)
      .then((resp) => {
        setAirlines(resp.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setLoading(false);
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
    <div>
      <ToastContainer theme="dark" closeOnClick position="bottom-right" />
      {loading ? (
        <div className="loader-container" id="background-cover">
          <div className="spinner"></div>
        </div>
      ) : (
        <div
          className="home"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          {" "}
          <Header />
          <Slider {...sliderSettings}>
            {airlines.map((item, index) => (
              <AirlineCard
                key={index}
                attributes={item.attributes}
                activeSlide={activeSlide === index}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Airlines;
