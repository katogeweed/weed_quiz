import { useState } from 'react'
import { quizData } from './questions'
import './App.css'



function App(){
  // 今何問目を解いているかを記録する
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)

  const [score,setScore] = useState(0)
  const [isFinished,setIsFinished] = useState(false)

  const currentQuiz = quizData[currentQuestionIndex]

  const handleAnswerClick = (selectedIndex: number) => {
    if (selectedIndex === currentQuiz.correct) {
      alert("正解"),
      setScore(score + 1)}
    else{
      alert("不正解")
    }
  

    const nextIndex = currentQuestionIndex + 1
    console.log(nextIndex)
    if (nextIndex < quizData.length){
      setCurrentQuestionIndex(nextIndex);
    }else{
      setIsFinished(true)
    }
  }

  if(isFinished){
    return(
      <div>
        <h1>クイズ終了！</h1>
        <p>{quizData.length}問中{score}正解！</p>
      </div>
    )

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