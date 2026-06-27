import { useState } from 'react'
import { quizData } from './questions'
import './App.css'



function App(){
  // 今何問目を解いているかを記録する
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)

  const currentQuiz = quizData[currentQuestionIndex]

  const handleAnswerClick = (selectedIndex: number) => {
    if (selectedIndex === currentQuiz.correct) 
      alert("正解")
    else
      alert("不正解")

    const nextIndex = currentQuestionIndex + 1
    console.log(nextIndex)
    if (nextIndex < quizData.length){
      setCurrentQuestionIndex(nextIndex);
    }else{
      alert("全問終了")
    }
  }


  return (
    <div>
      <h1>雑草クイズアプリ</h1>

      <p>
        {currentQuiz.context}
      </p>
      <div>
          {currentQuiz.choices.map((choice,index) =>(
            <button key={index} 
            //クリックされたら handleAnswerClick に index を渡して実行するという無名関数をその場で作って、ボタンに渡している
              onClick={()=>handleAnswerClick(index)}
            >{choice}</button>
          ))}
      </div>
    </div>
  )
}

export default App