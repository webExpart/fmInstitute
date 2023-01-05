import React from 'react'
import './postCard.css'

function PostCard(props) {
  return (
    <a href='#' className='post-card'>
        <div className="post-image">
            <img src={props.postImage} alt="post Image" />
        </div>
        <div className="post-title">
            <h4>{props.postTitle}</h4>
        </div>
    </a>
  )
}

export default PostCard