import React from 'react'
import './landing.scss'
import './slider.scss'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import useForm from '../../hooks/useForm'

const Landing = () => {
  const { handleInputChange, inputs } = useForm({
    Name: '',
    SleepHours: '',
    SleepQuality: '',
    PriorDayTrainingDiff: '',
    HowFueledToday: '',
    MotivationToday: '',
  })

  console.log(inputs)

  return (
    <div className="page">
      <section className="container formContainer">
        <div className="form">
          <h2>Athlete Readiness Questionairre</h2>
          <form
            action="https://mailthis.to/danny@reachoutcomes.com"
            method="POST"
            className="inputContainer"
          >
            <input
              type="hidden"
              name="_subject"
              value={inputs.Name + ': Rediness Report'}
            />
            <input type="hidden" name="_honeypot" value="" />
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Name"
                name="Name"
                id="name"
                onChange={handleInputChange}
                value={inputs.name}
                required
              />
              <label className="form__label">Name</label>
            </div>

            <div className="slideContainer">
              <span>
                <p>How many hours of sleep did you get? </p>
                <p>{inputs.SleepHours}</p>
              </span>
              <input
                type="range"
                min="0"
                max="10"
                className="slider"
                name="SleepHours"
                onChange={handleInputChange}
                value={inputs.SleepHours}
              />
              <div className="slideRange">
                <p>0 hours</p>
                <p>10 hours</p>
              </div>
            </div>

            <div className="slideContainer">
              <span>
                <p>How would you rate the quality of your sleep?</p>
                <p>{inputs.SleepQuality}</p>
              </span>
              <input
                type="range"
                min="0"
                max="10"
                className="slider"
                name="SleepQuality"
                onChange={handleInputChange}
                value={inputs.SleepQuality}
              />
              <div className="slideRange">
                <p>0 Worst</p>
                <p>10 Best</p>
              </div>
            </div>

            <div className="slideContainer">
              <span>
                <p>
                  How would you rate the difficulty of your previous training
                  day?
                </p>
                <p>{inputs.PriorDayTrainingDiff}</p>
              </span>
              <input
                type="range"
                min="0"
                max="10"
                className="slider"
                name="PriorDayTrainingDiff"
                onChange={handleInputChange}
                value={inputs.PriorDayTrainingDiff}
              />
              <div className="slideRange">
                <p>0 RPE</p>
                <p>10 RPE</p>
              </div>
            </div>

            <div className="slideContainer">
              <span>
                <p>How fueled do you feel for today’s training?</p>
                <p>{inputs.HowFueledToday}</p>
              </span>
              <input
                type="range"
                min="0"
                max="10"
                className="slider"
                name="HowFueledToday"
                onChange={handleInputChange}
                value={inputs.HowFueledToday}
              />
              <div className="slideRange">
                <p>0 Not Fueled</p>
                <p>10 Very Fueled</p>
              </div>
            </div>

            <div className="slideContainer">
              <span>
                <p>How motivated are you for today's training?</p>
                <p>{inputs.MotivationToday}</p>
              </span>
              <input
                type="range"
                min="0"
                max="10"
                className="slider"
                name="MotivationToday"
                onChange={handleInputChange}
                value={inputs.MotivationToday}
              />
              <div className="slideRange">
                <p>0 Not Ready</p>
                <p>10 Very Ready</p>
              </div>
            </div>

            <div className="submitButton">
              <button type="submit">
                <IoMdArrowDroprightCircle className="submitIcon" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Landing
