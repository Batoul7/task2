import React from 'react'
import './contact.css'
import Title from '../Title/Title'
import Footer from '../Footer/Footer'

const Contact = () => {
    const data = [
        {
            image:"/public/images/phone-icon.png",
            title:"010-020-0340",
            desc:"Phone Number",
        },
        {
            image:"/public/images/email-icon.png",
            title:"info@villa.co",
            desc:"Busniss Email",
        }
    ]
  return (
    <>
    <div id='contact' className='contact'>
        <div className="text">
                <Title title={"Contact Us"} />
                <h2>Get In Touch With Our Agents</h2>
            </div>
        <div className="contact-content container">
            <div className="section">
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.044484467344!2d-80.10441745413671!3d25.93914628600728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723839562469!5m2!1sar!2s"
                        style={{ allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}} >
                    </iframe>
                </div>
                    <div className="call">
                        {data.map((data, index) => (
                        <div key={index} className='one-box'>
                        <div className="img">
                            <img src={data.image}/> 
                        </div>
                        <div className="desc">
                                <h3>{data.title}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    
                ))}
                    </div>
            </div>
            <div className="form">
                <form action="">
                    <label>Full Name</label>
                    <input className="input" type="text" placeholder='Your Name...' />
                    <label>Email Adderss</label>
                    <input className="input" type="email"  placeholder='Your E-mail...' />
                    <label>Subject</label>
                    <input className="input" type="text"  placeholder='Subject...' />
                    <label>Message</label>
                    <textarea className="input" type="text"  placeholder='Your Message'></textarea>  
                </form>
                <div className="button" style={{borderRadius:"50px",textAlign:"left"}}>
                        <a>Send Message</a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Contact
