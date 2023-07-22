import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { Link } from "react-router-dom";

const HeroF = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Viens expériencer Jésus ' subtitle='RECHERCHE UN MINISTERE OU ÉVÉNEMENT' />

          <form className='flex'>
            <div className='box'>
              <span>Age</span>
              <input type='text' placeholder='Bébé/enfant/ados/Adulte/Senior' />
            </div>
            <div className='box'>
              <span>Gender</span>
              <input type='text' placeholder='Homme/Femme' />
            </div>
            <div className='box'>
              <span>Interest</span>
              <input type='text' placeholder='Baptême/Activité/Conference/Mission' />
            </div>
            <div className='box'>
              
            </div>
          
            <Link to="/about">
              <button className='btn1'>
                <i className='fa fa-search'></i>
              </button>
            </Link>
          </form>
        </div>
        <div className="button-container">
            <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>
              <button className="btn1">Je suis nouveau</button>
            </Link>
          </div>
        
      </section>
    </>
  )
}

export default HeroF
