import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images
import Blaze from "../../assets/logos/Blaze.png";
import DHIndia from "../../assets/logos/dhinida.png";
import EMBS from "../../assets/logos/EMBS.png";
import IEEE from "../../assets/logos/iee.png";
import SB from "../../assets/logos/SB.png";
import TKMIT from "../../assets/logos/tkmitgreen.png";
import TMS from "../../assets/logos/TMS.png";

import "./Slider.css";

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={1500}
      className=""
      containerClass="container"
      draggable
      focusOnSelect={true}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 20,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
          partialVisibilityGutter: 10,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 3,
          partialVisibilityGutter: 10,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={3}
      swipeable
      transitionDuration={1000}
    >
      <img src={TKMIT} alt="tkmit" />
      <img src={IEEE} alt="ieee" />
      <img src={Blaze} alt="blaze" />
      <img src={EMBS} alt="embs" />
      <img src={SB} alt="sb" />
      <img src={TMS} alt="tms" />
      <img src={DHIndia} alt="dhinida" />
    </Carousel>
  );
};

export default Slider;
