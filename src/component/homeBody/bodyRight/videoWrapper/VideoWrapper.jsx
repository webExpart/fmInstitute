import React from 'react'
import VideoGallery from './videoGallery/VideoGallery'

function VideoWrapper() {
  return (
    <div className="video-gallery-wrapper">
    <h4 className='text-2 w-100'>Video Gallery</h4>
        <VideoGallery/>
    </div>
  )
}

export default VideoWrapper