import React, { useState } from 'react';
import './button.css'

const Button = ({data}) => {
  const [current, setCurrent] = useState("");

  function activeLink(index) {
    setCurrent(index);
}

  return (
   <>
      {data.map((item, index) => (
        <div key={index} className="button">
          <a 
          className={current === index ? 'active' : ''}
          onClick={() => activeLink(index)} >{item.name}</a>
    </div>))}
    </>
  )
}

export default Button
