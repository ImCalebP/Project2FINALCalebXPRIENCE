import React from "react"
import { list } from "../../data/DataF"
import { Link } from "react-router-dom";
const RecentCardF = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  
                  
                </div>
                <h4>{name}</h4>
                <p>
                   {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                <Link to="/booking">
                    <button className="btn2">{price}</button>
                  </Link>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCardF
