import React, { useContext } from 'react';

import { QuizContext } from '../context/quiz';

import '../assets/styles/Question.css';

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  console.log(quizState);
  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
        <div id="options-container">
         <p>Opções</p>
        </div>
      <button 
      onClick={() => dispatch({type: "CHANGE_QUESTION"})} // DISPATCH Muda para esse type, o dispatch ativa a funnção QuizReducer que tem o Switch Case (criada pra mudar o estado)
      >
        Continuar</button>
    </div>
  )
}

export default Question