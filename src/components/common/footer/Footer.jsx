import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
  

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='images/logo-light.png' alt='T logo' />
              <h2>Come experience Jesus</h2>
              

              
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 XPRIENCE church. Designd By Caleb Paradis #300170549.</span>
      </div>
    </>
  )
}

export default Footer
