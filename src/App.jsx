// react, componentes, estáticos
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext); // USEcONTEXT TEM DOIS PARAMETROS, O PRIMEIRO ELEMENTO É A CHAVE DO STATE E O SEGUNDO ELEMENTO É A FUNC QUE ALTERA ESSE STATE
  // a chave quizStte recebe o state que vem do quizContext

  useEffect(() => {
    // hook - embaralhar as perguntas
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
      {/* quizState é o estado, acessa o gameStage que é uma chave  */}
    </div>
  )
}

export default App;
