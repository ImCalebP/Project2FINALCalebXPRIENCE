import React from "react"
import { beliefs } from "../../data/Data"

const beliefsCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {beliefs.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default beliefsCard
