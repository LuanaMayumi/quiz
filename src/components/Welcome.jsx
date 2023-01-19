// react, componentes, estáticos
import React from 'react'

// estáticos
import '../assets/styles/Welcome.css';
import Quiz from '../assets/img/quiz.svg';

const Welcome = () => {
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