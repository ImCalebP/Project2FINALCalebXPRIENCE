import React from "react";
import Heading from "../../common/Heading";

import "./ceremony.css";
import image from "./p-3.png";





const ceremony= () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <div className="flex">
            <div className="message">
              <Heading title="JESUS AT OUR CEREMONY" subtitle="Come experience" />
              <p>
                Our dedicated team of worship leaders, musicians, and volunteers have prepared diligently to provide you with an unforgettable experience. From the moment you walk through our doors, you will be greeted with warmth and hospitality, instantly feeling a sense of belonging within our vibrant community. Every Sunday at 10 AM.
              </p>
            </div>
            <div className="image-container">
              <img src={image} alt="Image description" className="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ceremony;