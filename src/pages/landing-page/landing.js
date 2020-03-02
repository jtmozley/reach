import React from 'react'
import './landing.scss'
import { IoMdArrowDroprightCircle } from 'react-icons/io'

const Landing = () => {
  return (
    <div className="page">
      <section className="container formContainer">
        <div className="form">
          <h2>Athlete Readiness Assessment</h2>
          <form
            action="https://mailthis.to/danny@reachoutcomes.com"
            method="POST"
            className="inputContainer"
          >
            <div className="input">
              <input type="text" name="Name" placeholder="Name" />
            </div>

            <div className="slideContainer">
              <p>How many hourse of sleep did you get?</p>
              <input type="range" min="0" max="10" class="slider" />
              <div className="slideRange">
                <p>0 hours</p>
                <p>10 hours</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How would you rate the quality of your sleep?</p>
              <input type="range" min="0" max="10" class="slider" />
              <div className="slideRange">
                <p>0 Worst</p>
                <p>10 Best</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How would you rate the difficulty of yesterday’s training?</p>
              <input type="range" min="0" max="10" class="slider" />
              <div className="slideRange">
                <p>0 RPE</p>
                <p>10 RPE</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How fueled do you feel for today’s training?</p>
              <input type="range" min="0" max="10" class="slider" />
              <div className="slideRange">
                <p>0 Not Fueled</p>
                <p>10 Very Fueled</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How motivated are you for today's training?</p>
              <input type="range" min="0" max="10" class="slider" />
              <div className="slideRange">
                <p>0 Not Ready</p>
                <p>10 Very Ready</p>
              </div>
            </div>
            <div className="submitButton">
              <IoMdArrowDroprightCircle className="submitIcon">
                <button type="submit" />
              </IoMdArrowDroprightCircle>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Landing
