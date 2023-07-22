// Contact.jsx

import React from "react";
import img from "../images/pricing.png";
import Back from "../common/Back";
import { Link } from "react-router-dom"; 
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='REGISTER FOR AN EVENT or get in touch with us or Share your testimony' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            
            <Link to="/thank">
              <button>Submit Request</button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
