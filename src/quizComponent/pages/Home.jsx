import React, { memo } from 'react'
import './css/Home.css'
import { useNavigate } from 'react-router-dom'


function Home() {

  const history = useNavigate();

  return (
    <>

      <div className="Home_page">
        <div className="left">
          <img src="https://www.pngmart.com/files/19/Quiz-Logo-Transparent-Background.png" alt="" />
        </div>
        <div className="right">
          <p className='Home_title'>Live Quiz.</p>
          <p className='Home_Description'>Select Your Subject To Take MCQ Test On It..Click Below To Get Started.⬇️</p>
          <button onClick={() => history('Choices')}>Get Started</button>
        </div>
      </div>

    </>
  )
}

export default memo(Home)