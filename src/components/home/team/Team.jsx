import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Testimonies' subtitle='Testimonies of your experience in your encounter with Jesus' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className='button-container'>
            <Link to="/contact">
              <button className='register-button'>
                <i></i>
                Share your testimony
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
