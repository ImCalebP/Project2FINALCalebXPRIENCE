import React from "react";
import Heading from "../common/Heading";
import { team } from "./Data4";
import "./team.css";
import SearchBox from './SearchBox.jsx';
import { Link } from "react-router-dom";

const About4 = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Select what type of event or ministry you are searching for' subtitle='faceted search' />
          <SearchBox />
          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                 
                  <div className='button flex'>
                  <Link to="/Contact">
                      <button>
                        <i className="fa fa-envelope"></i>
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About4;
