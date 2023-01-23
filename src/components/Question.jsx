import React, { useContext } from 'react';

import { QuizContext } from '../context/quiz';

import Option from './Option';

import '../assets/styles/Question.css';


function Question() {

  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onselectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer: currentQuestion.answer, option } // a resposta da perguta e a resposta que o usuário vai escolher
    })
  };

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
        <div id="options-container">
         {currentQuestion.options.map((option) => (
          <Option 
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={onselectOption}
          />
         ))} 
         {/* // pega o objeto do arquivo com as options e faz o map */}
        </div>
         {quizState.answerSelected && 
            <button 
            onClick={() => dispatch({type: "CHANGE_QUESTION"})} // DISPATCH Muda para esse type, o dispatch ativa a funnção QuizReducer que tem o Switch Case (criada pra mudar o estado)
            >
              Continuar</button>
         }

    </div>
  )
}

export default Question