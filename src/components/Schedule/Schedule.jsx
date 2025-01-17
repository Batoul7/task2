import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Schedule = (props) => {
  return (
    <div className='schedule' style={{display:`${props.display}`}}>
      <div className='icon'>
        <FontAwesomeIcon icon={faCalendar} />
      </div>
      <a>Schedule a visit</a>
    </div>
  )
}

export default Schedule;
