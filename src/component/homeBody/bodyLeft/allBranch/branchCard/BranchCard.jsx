import React from 'react'
import './branchCard.css'
import { FiPhoneCall } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { ImLocation2 } from 'react-icons/im';

function BranchCard(props) {
  return (
    <div className='branchCard'>
        <h2>{props.branchName}</h2>
        <a href={`tel:${props.phone}`}>
          <FiPhoneCall/>
          {props.phone}
        </a>
        <a href='#'>
          <FiPhoneCall/>
          {props.phone}
        </a>
        <a href={`mailto:${props.gmail}`}>
          <CgMail/>
          {props.gmail}
        </a>
        <span>
          <ImLocation2/>
          {props.address}
        </span>
    </div>
  )
}

export default BranchCard