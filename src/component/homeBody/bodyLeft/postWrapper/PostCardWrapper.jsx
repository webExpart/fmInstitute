import React from 'react'
import './postCardWrapper.css'
import PostCard from './postCard/PostCard'
import { PostData } from '../../../allInfo/PostData'

function PostCardWrapper() {
  return (
    <div className="post-card-wrapper">
        <h4 className='text-2'>All Post</h4>
        <div className="post-cards">
          {
            PostData.map((post)=>(
              <PostCard key={post.id} postTitle={post.postTitle} postImage = {post.postImage}/>
            ))
          }

        </div>
    </div>
  )
}

export default PostCardWrapper