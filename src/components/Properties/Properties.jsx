import React from 'react'
import Title from '../Title/Title'
import './properties.css'
import Card from './Card'

const Properties = () => {
    const infoCard = [
       {
        image: "/public/images/property-01.jpg",
        desc:"Luxury Villa",
        price:"$2.264.000",
        title:"18 New Street Miami, OR 97219",
        bedrooms:8,
        bathrooms:8,
        area:545,
        floor:3,
        parking:"6 spots",
       },
       {
        image: "/public/images/property-02.jpg",
        desc:"Luxury Villa",
        price:"$1.180.000",
        title:"54 Mid Street Florida, OR 27001",
        bedrooms:6,
        bathrooms:5,
        area:450,
        floor:3,
        parking:8,
       },
       {
        image: "/public/images/property-03.jpg",
        desc:"Luxury Villa",
        price:"$1.460.000",
        title:"26  Old Street Miami, OR 38540",
        bedrooms:5,
        bathrooms:4,
        area:225,
        floor:3,
        parking:10,
       },
       {
        image: "/public/images/property-04.jpg",
        desc:"Luxury Villa",
        price:"$584.500",
        title:"12 New Street Miami, OR 12650",
        bedrooms:4,
        bathrooms:3,
        area:125,
        floor:"25th",
        parking:"2 cars",
       },
       {
        image: "/public/images/property-05.jpg",
        desc:"Luxury Villa",
        price:"$3.264.000",
        title:"34 Beach Street Maiami, OR 42680",
        bedrooms:4,
        bathrooms:4,
        area:180,
        floor:"38th",
        parking:"2 cars",
       },
       {
        image: "/public/images/property-06.jpg",
        desc:"Luxury Villa",
        price:"$3.264.000",
        title:"18 New Street Maiami",
        bedrooms:8,
        bathrooms:6,
        area:545,
        floor:3,
        parking:6,
       },
    ]
  return (
    <div id='properties' className='properties container main-padding'>
        <div className="text"> 
            <Title title={"Properties"}/>
            <h2>We Provide The Beast Property You Like</h2>
        </div>
        <div className="property-content">
            <Card data={infoCard}/>
        </div>
    </div>
  )
}

export default Properties
