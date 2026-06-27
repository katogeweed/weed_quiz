import { useState } from 'react'
import { quizData } from './questions'
import './App.css'



function App(){
  // 今何問目を解いているかを記録する
  const [currentQuestionIndex,setcurrentQuestionIndex]=useState(0)

  const currentQuiz = quizData[currentQuestionIndex]

  const handleAnswerClick = (selectedIndex: number) => {
    if (selectedIndex === currentQuiz.correct) 
      alert("正解")
    else
      alert("不正解")
  }

  return (
    <div>
      <h1>雑草クイズアプリ</h1>

      <h2>
        {currentQuiz.context}
      </h2>
      <div>
          {currentQuiz.choices.map((choice,index) =>(
            <button key={index} 
              onClick={()=>handleAnswerClick(index)}
            >{choice}</button>
          ))}
      </div>
    </div>
  )
}

export default App