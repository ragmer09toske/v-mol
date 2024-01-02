import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import spfOne from "../../../assets/images/products/specialOffer/offer1.png"
import spfTwo from "../../../assets/images/products/specialOffer/offer2.png"
import spfThree from "../../../assets/images/products/specialOffer/offer3.png"
import spfFour from "../../../assets/images/products/specialOffer/offer4.png"
import spfFive from "../../../assets/images/products/specialOffer/offer5.png"
const SpecialOffers = () => {
  return (
    <div className="w-full pb-20 pL-5">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Iphone 13"
          price="23000.00"
          color="Blank and White"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Iphone 15"
          price="32000.00"
          color="Gray"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Airforce 1"
          price="2500.00"
          color="Mixed"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Jorden 4"
          price="2200.00"
          color="White"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1104"
          img={spfFive}
          productName="Chobani"
          price="80.00"
          color="White"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
