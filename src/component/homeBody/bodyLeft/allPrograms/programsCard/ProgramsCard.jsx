import React from 'react'
import './programsCards.css'
import { Outlet, Link } from "react-router-dom";

function ProgramsCard(props) {
  return (
    <div className='programsCard'>
        <h3 className='text-1'>{props.name}</h3>
        <Link to={`/coursedetails/${props.id}`}>{props.buttonText}</Link>
    </div>
  )
}

export default ProgramsCard