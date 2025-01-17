import React from 'react'
import Title from '../Title/Title'
import './properties.css'
import Card from './Card'
import { PropertyCard } from '../../Data/PropertiesData'

const Properties = () => {
  
  return (
    <div id='properties' className='properties container main-padding'>
        <div className="text"> 
            <Title title={"Properties"}/>
            <h2>We Provide The Beast Property You Like</h2>
        </div>
        <div className="property-content">
            <Card data={PropertyCard}/>
        </div>
    </div>
  )
}

export default Properties
