import React, { memo, useCallback, useEffect, useState } from 'react'
import { useQuizContext } from '../quizContext/QuizContext'
import { useNavigate } from 'react-router-dom';
import './css/Quiz.css'


function Quiz() {

  const history = useNavigate();

  window.history.forward();

  const [Quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz(`https://quizapi.io/api/v1/questions?apiKey=56O2wo7Yw7hG0tAJkHG9kCxil3ZDRiHAfvOLOPIt&tags=${state.category}`);
  }, [])


  const fetchQuiz = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setQuiz(() => data);
  }




  const [selected, setSelected] = useState(false);

  let [num, setnum] = useState(0);

  const handleNext = () => {
    if (selected) {
      setnum(() => {
        return num >= 0 && num < 19 ? num + 1 : num;
      })

      //refresh state of selected option to false for the nect question
      setSelected(false);
      //remove previous selected answers
      document.getElementById('selected_answer').innerText = ``;

    } else {
      alert("Select Atleast One Option.!")
    }
  }



  const { state, dispatch } = useQuizContext();
  const checkRightAnswers = (data, selectedAnswer) => {

    //if option is right the increase points
    if (data.correct_answer === selectedAnswer) {
      dispatch({ type: "SET_RESULT" })
    }

    //check user has selected the option
    setSelected(true);

    //show what user has selected
    document.getElementById('selected_answer').innerText = `SELECTED ➡️ ${data.answers[selectedAnswer]}`;

  }




  const handleQuizSubmit = () => {
    history('/Result')
  }



  return (
    <>
      {
        Quiz ? Quiz.slice(num, num + 1).map((data, ind) => {
          return (
            <div className="quizCard" key={ind}>
              <h2>{"<."}{num + 1}{".> "}{data.question}</h2>
              <div className="options">
                <p className='Option' onClick={() => checkRightAnswers(data, "answer_a")}>{data.answers.answer_a}</p>
                <p className='Option' onClick={() => checkRightAnswers(data, "answer_b")}>{data.answers.answer_b}</p>
                <p className='Option' onClick={() => checkRightAnswers(data, "answer_c")}>{data.answers.answer_c}</p>
                <p className='Option' onClick={() => checkRightAnswers(data, "answer_d")}>{data.answers.answer_d}</p>
                <p className='Option' onClick={() => checkRightAnswers(data, "answer_e")}>{data.answers.answer_e}</p>
                <p className='Option' onClick={() => checkRightAnswers(data, "answer_f")}>{data.answers.answer_f}</p>
              </div>
              <p id='selected_answer'></p>
              {num >= 19 ? <button onClick={handleQuizSubmit}>Submit</button> : <button onClick={() => handleNext()}>Next</button>}
            </div >
          )
        }) : <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
      }
    </>
  )
}

export default memo(Quiz)