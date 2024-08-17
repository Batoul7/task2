import React from 'react';
import Feature from './../../../public/images/featured.jpg';
import FeatureIcon from './../../../public/images/featured-icon.png';
import './Featured.css'
import Box from '../Box/Box';
import Title from '../Title/Title';


const Featured = () => {
    const information = [
        {
            image:"/images/info-icon-01.png",
            title:"250 m2",
            desc:"Total Flat Space"
        },
        {
            image:"/images/info-icon-02.png",
            title:"Contract",
            desc:"Contract Ready"
        },
        {
            image:"/images/info-icon-03.png",
            title:"Payment",
            desc:"Payment Process"
        },
        {
            image:"/images/info-icon-04.png",
            title:"Safety",
            desc:"24/7 Under Control"
        },
    ]
  return (
    <div className='container main-padding'>
        <div className="text">
            <Title title={"Featured"}/>
            <h2>Best Appartment & Sea View</h2>
        </div> 
        <div className="featured-content">
            <div className="one">
                <div className="featured-img">
                    <img src={Feature} alt=''/>
                </div>
                <div className="featured-icon">
                    <img src={FeatureIcon} alt='' />
                </div>
            </div>
            <div className="two">
                <div className="decsription">
                    <h4>Best useful links?</h4>
                    <p>Get <b>the best villa</b> website template in HTML CSS and Bootstrapp for your business. TemplateMo provides you the <span>best free CSS templates</span> in the world. Please tell your frirnds about it.
                    </p>
                    <h4>How does this work?</h4>
                    <h4>Why is Villa Agency the best?</h4>
                </div>
            </div>
            <div style={{boxShadow:"0px 0px 10px 5px #ccc",padding:"10px", height:"480px", overflow:"hidden"}}>
                <Box info={information}/>
            </div>
        </div>
    </div>
  )
}

export default Featured;
