// react, componentes, estáticos
import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

// estáticos
import '../assets/styles/Welcome.css';
import Quiz from '../assets/img/quiz.svg';

const Welcome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id='welcome'>
      <h2> Seja bem-vindo </h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt='Inicio do Quiz'></img>
    </div>
  )
}

export default Welcome