import React, { useEffect } from 'react'
import './App.css'
import Home from './quizComponent/pages/Home';
import Quiz from './quizComponent/pages/Quiz';
import Result from './quizComponent/pages/Result';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Choices from './quizComponent/pages/Choices';

function App() {

  useEffect(() => {
    window.history.forward;
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Choices' element={<Choices />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App