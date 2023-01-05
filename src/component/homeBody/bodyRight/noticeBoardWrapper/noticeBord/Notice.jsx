import React from 'react'
import './notice.css'
import { MdNotificationsActive } from 'react-icons/md';

function Notice(props) {
  return (
    <a href='#' className='noti-card'>
        <MdNotificationsActive className='iconColor'/>
        <span>{props.notice}</span>
    </a>
  )
}

export default Notice