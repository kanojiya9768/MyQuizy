import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuizProvider } from './quizComponent/quizContext/QuizContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QuizProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </QuizProvider>
)
