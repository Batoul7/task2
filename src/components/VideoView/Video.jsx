import React from 'react';
import Title from '../Title/Title';
import './video.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoBox from './VideoBox';


const Video = () => {
    const data = [
        {
            number:34,
            text: "Buildings Finished Now",
        },
        {
            number:12,
            text: "Years Experience",
        },
        {
            number:24,
            text: "Awwards Won 2023",
        },
    ];
  return (
    <>
    <div className='video'> 
        <div className="text">
            <Title title={"Video View"} />
            <h2>Get Closer View & Different Feeling</h2>
        </div>
        <div className="video-image">
            <img src='/public/images/video-frame.jpg' alt=''/>
            <div className="play">
                <FontAwesomeIcon icon={faPlay}/>
            </div>
        </div>   
    </div>
    <div className='data container flex main-padding'>
            <VideoBox data={data}/>
    </div> 
    </>
  )
}

export default Video;
