import React from "react";

// passed through props: collection
const Carousel = props => {
  return (
    <div className="carousel">
      {props.collection.map(({ name, images }) => {
        return <img key={name} alt={name} src={images[0]} />;
      })}
    </div>
  );
};

export default Carousel;