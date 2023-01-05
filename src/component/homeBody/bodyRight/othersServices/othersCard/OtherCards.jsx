import React from 'react'

function OtherCards(props) {
  return (
    <div className='otherCards'>
        <h4 className="name">{props.name}</h4>
        <p className="dec">{props.dec}</p>
        <a href={props.linkText}>visit</a>
    </div>
  )
}

export default OtherCards