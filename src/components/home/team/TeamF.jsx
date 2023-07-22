import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/DataF";
import "./team.css";
import { Link } from "react-router-dom";

const TeamF = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Témoignages' subtitle='Témoignanges de votre expérience avec Jésus' />

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
                Partage ton témoignage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamF;
