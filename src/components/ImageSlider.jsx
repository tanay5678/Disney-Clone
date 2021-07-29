import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slid {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" srcset="" />
      </Wrap>
    </Slid>
  );
}

export default ImageSlider;

const Slid = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 159, 171);
    }
  }
  .slick-list {
    overflow: visible;
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    transition-duration: 300ms;
    &:hover {
      border: 2px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
