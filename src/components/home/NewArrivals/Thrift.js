import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import  newArrOne from "../../../assets/images/products/thrift/blured.png"
import  newArrTwo from "../../../assets/images/products/thrift/clothes.png"
import  newArrThree from "../../../assets/images/products/thrift/shoes.png"
import  newArrFour from "../../../assets/images/products/thrift/town.png"

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { Box } from "@mui/material";

const Thrift = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        pt: 2
      }}>
          <Heading heading="Second Hand" />
      </Box>
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Coats"
            price="250.00"
            color="Black"
            // badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Jackets"
            price="250.00"
            color="Black"
            // badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Snickers"
            price="580.00"
            color="Mixed"
            // badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Swearters"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Swearters"
            price="160.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default Thrift;
