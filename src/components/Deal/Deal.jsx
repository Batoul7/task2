import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import './deal.css'
import Box from '../Box/Box'
import Schedule from '../Schedule/Schedule'
import imgDeal from '/src/assets/images/deal-01.jpg'
import { ButtonData, Information } from '../../Data/DealData'

const Deal = () => {
    
  return (
    <div className="deal main-padding">
        <div className='container '>
            <Title title={"Best Deal"}/>
            <h2 style={{marginBottom:"20px"}}>Find Your Best Deal Right Now!</h2>
            <div className='buttons'>
                <Button data={ButtonData}/>
            </div>
            <div className="deal-content main-padding">
                <div style={{boxShadow:"0px 0px 10px 5px #ccc", height:"500px"}}>
                    <Box info={Information}/>
                </div>
                <div className="image">
                    <img src={imgDeal} alt='deal'/>
                </div>
                <div className="extra-info">
                    <h3 style={{marginBottom:"10px"}}>Extra Info About Property</h3>
                    <p style={{lineHeight:"1.7", marginBottom:"20px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloribus aliquid sequi aliquam in officia quasi saepe est alias libero. Accusantium voluptates sapiente minima minus, rerum suscipit. Similique, pariatur nostrum?
                        <br/><br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore, temporibus repellat labore, perferendis deserunt, porro corrupti accusantium ab omnis doloribus! Quisquam rerum quibusdam fuga et neque quae sapiente quos.
                        <br/>
                    </p>
                    <Schedule display={"block"}/>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deal
