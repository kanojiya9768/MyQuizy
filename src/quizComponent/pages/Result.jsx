import React, { memo, useEffect, useState } from 'react'
import { useQuizContext } from '../quizContext/QuizContext'
import './css/Result.css'

function Result() {

  window.history.forward();

  const { state, dispatch } = useQuizContext();
  const [pass, setpass] = useState(false);

  useEffect(()=>{
    if(Number(state.result_count>6)){
      setpass(true);
    }
  })
  return (
    <div>
      {
        pass ?
          <div id='Result_card'>
            <img src="https://media0.giphy.com/media/MOWPkhRAUbR7i/giphy.gif?cid=6c09b952g4vuglghokhs8cmife8q6sreu9t61ki29tpju4b4&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Passed" />
            <h1 id='Result_count'>{state.result_count} {"/"} {20}</h1>
            <h1 id='Result_status_Pass'>PASS</h1>
          </div> : <div id='Result_card'>
            <img src="https://media.tenor.com/sAdlyyKDxogAAAAM/bart-simpson-the-simpsons.gif" alt="Passed" />
            <h1 id='Result_count'>{state.result_count} {"/"} {20}</h1>
            <h2 id='Result_status_Fail'>FAIL</h2>
          </div>
      }
    </div>
  )
}

export default memo(Result)