import React, { memo } from 'react'
import './css/Choices.css'
import { useNavigate } from 'react-router-dom'
import { useQuizContext } from '../quizContext/QuizContext';

function Choices() {

    window.history.forward();

    const history = useNavigate();

    let categories = [
        { categoryName: 'html' },
        { categoryName: 'javascript' },
        { categoryName: 'linux' },
        { categoryName: 'bash' },
        { categoryName: 'wordpress' },
        { categoryName: 'laravel' },
        { categoryName: 'mysql' }
    ]


    //context
    const { state, dispatch } = useQuizContext();
    const setCategory = (data) => {
        dispatch({ type: 'SET_CATEGORY', payload: data.categoryName });

        confirm('Continue?') ? history('/Quiz') : ''

    }


    return (
        <>
            <div className="body">
                <div className="card_container">
                    {
                        categories.map((data, ind) => {
                            return (
                                <div className="card" key={ind}>
                                    <p>{data.categoryName}</p>
                                    <button onClick={() => setCategory(data)}>Start</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default memo(Choices)