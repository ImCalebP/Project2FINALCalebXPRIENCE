import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="Come experience Jesus" subtitle="SEARCH A MINISTRY OR AN EVENT" />

          <form className="flex">
            <div className="box">
              <span>Age</span>
              <input type="text" placeholder="Baby/Kid/Teen/Adult/Senior" />
            </div>
            <div className="box">
              <span>Gender</span>
              <input type="text" placeholder="Male/Female" />
            </div>
            <div className="box">
              <span>Interest</span>
              <input type="text" placeholder="Baptism/Activity/Conference/Mission" />
            </div>
            <div className="box">
            </div>
          
          <Link to="/about">
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </Link>
        </form>
     

          <div className="button-container">
            <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>
              <button className="btn1">I am new</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
