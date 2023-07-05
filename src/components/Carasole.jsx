import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

const Carasole = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div>
      <Carousel
        autoPlaySpeed={1000}
        // customTransition="all .5"
        transitionDuration={500}
        showDots={true}
        responsive={responsive}
        // infinite={true}
      >
        {product}
      </Carousel>
      ;
    </div>
  );
};

export default Carasole;
