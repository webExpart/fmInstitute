import React from 'react'
import { PostData } from '../../../allInfo/PostData'

import Notice from './noticeBord/Notice'
import './noticeBoardWrapper.css'
function NoticeBoardWrapper() {
  return (
    <div className="notice-board-wrapper">
    <h4 className='text-2 w-100'>Notices Board</h4>
    <div className="notification-wrapper">
        {
            PostData.map((post)=>(
                <Notice key={post.id} notice = {post.postTitle}/>
            ))
        }
    </div>
    </div>
  )
}

export default NoticeBoardWrapper