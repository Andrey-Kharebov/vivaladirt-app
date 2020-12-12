import React from "react";
import Slider from "react-slick";
import classes from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slidor() {
  let settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider className={ classes.slider } {...settings}>
      <div className={ classes.imgSection }>
        <img src="./assets/vldl1.png" alt="slide1"></img>
      </div>
      <div className={ classes.imgSection }>
        <img src="./assets/vldl2.jpg" alt="slide2"></img>
      </div>
      <div className={ classes.imgSection }>
        <img src="./assets/vldl3.jpg" alt="slide3"></img>
      </div>
    </Slider>
  );
}

export default Slidor;


// react-responsive-carousel  (NO FADE FUNCTIONALITY)

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// <Carousel
//   className={ classes.slider }
//   showThumbs={ false }
//   autoPlay
//   showArrows={false}
//   infiniteLoop={true}
//   interval={5000}
//   >
//     <div>
//       <img src="./assets/vldl1.png" alt="slide1"></img>
//     </div>
//     <div>
//       <img src="./assets/vldl2.jpg" alt="slide2"></img>
//     </div>
//     <div>
//       <img src="./assets/vldl3.jpg" alt="slide3"></img>
//     </div>
// </Carousel>