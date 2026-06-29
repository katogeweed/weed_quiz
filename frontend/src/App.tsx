import { useEffect, useState } from 'react'
import { quizData } from './questions'
import './App.css'



function App(){
  // 今何問目を解いているかを記録する
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
  const [score,setScore] = useState(0)
  const [isFinished,setIsFinished] = useState(false)

  const [backendMessage, setBackendMessage] = useState("")
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then(response => response.json())            
      //.then(...)（〜が終わったら、次に）
      // 通信は一瞬ではなく「待ち時間」が発生します。そのため、「データが届くのを待って、届いたら次にこの処理をやってね」と予約をするのが .then
      .then(data => {
        setBackendMessage(data.message)
      })
      .catch(error => console.error("通信エラー:",error))//thenがうまく行かなかった時にブロックするのがcatch
  }, [])//最後のからの配列は超重要で画面が最初に表示された時の『1回だけ』実行してね」というおまじない

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

      <p style={{ color: "blue",fontWeight: "bold"}}>
        バックエンド通信{backendMessage}
      </p>

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