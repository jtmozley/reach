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
            <div class="form__group field">
              <input
                type="text"
                class="form__field"
                placeholder="Name"
                name="Name"
                id="name"
                required
              />
              <label for="name" class="form__label">
                Name
              </label>
            </div>

            <div className="slideContainer">
              <p>How many hourse of sleep did you get?</p>
              <input
                type="range"
                min="0"
                max="10"
                class="slider"
                name="Sleep-Hours"
              />
              <div className="slideRange">
                <p>0 hours</p>
                <p>10 hours</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How would you rate the quality of your sleep?</p>
              <input
                type="range"
                min="0"
                max="10"
                class="slider"
                name="Sleep-Quality"
              />
              <div className="slideRange">
                <p>0 Worst</p>
                <p>10 Best</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How would you rate the difficulty of yesterday’s training?</p>
              <input
                type="range"
                min="0"
                max="10"
                class="slider"
                name="Yesterday\'s-Training Difficulty"
              />
              <div className="slideRange">
                <p>0 RPE</p>
                <p>10 RPE</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How fueled do you feel for today’s training?</p>
              <input
                type="range"
                min="0"
                max="10"
                class="slider"
                name="How fueled for today"
              />
              <div className="slideRange">
                <p>0 Not Fueled</p>
                <p>10 Very Fueled</p>
              </div>
            </div>
            <div className="slideContainer">
              <p>How motivated are you for today's training?</p>
              <input
                type="range"
                min="0"
                max="10"
                class="slider"
                name="Motivated for today"
              />
              <div className="slideRange">
                <p>0 Not Ready</p>
                <p>10 Very Ready</p>
              </div>
            </div>
            <div className="submitButton">
              <button type='submit' ><IoMdArrowDroprightCircle className="submitIcon" /></button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Landing
