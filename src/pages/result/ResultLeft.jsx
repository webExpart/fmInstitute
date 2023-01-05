import React from 'react'
import './result.css'

function ResultLeft() {
  return (
    <div className='homeLeftSection'>
      <div className="result-wrapper">
        <div className="result-item">
            <h1>Korean Language Training Exam Result</h1>
          <span className='date'>12/12/2022</span>
          <a href="./result/01.jpg" download>Downliad</a>
          <div className="result-image">
            <img src="./result/01.jpg" alt="Result" />
          </div>
        </div>
        <div className="result-item">
            <h1>Korean Language Training Exam Result</h1>
          <span className='date'>12/12/2022</span>
          <a href="./result/01.jpg" download>Downliad</a>
          <div className="result-image">
            <img src="./result/01.jpg" alt="Result" />
          </div>
        </div>
        <div className="result-item">
            <h1>Korean Language Training Exam Result</h1>
          <span className='date'>12/12/2022</span>
          <a href="./result/01.jpg" download>Downliad</a>
          <div className="result-image">
            <img src="./result/01.jpg" alt="Result" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultLeft