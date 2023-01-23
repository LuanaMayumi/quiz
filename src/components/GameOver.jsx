import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from '../assets/img/welldone.svg';

import '../assets/styles/GameOver.css';


const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='gameover'>
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.
        {/* TODO: Fazer lógica de pontuação de perguntas mais dificeis (1 valendo 10, outra valendo 5) */}
      </p>
      <img src={WellDone} alt='Fim do Quiz'/>
      <button
        onClick={() => dispatch({type: 'NEW_GAME'})}
      >
        Reiniciar
      </button>
    </div>
  )
}

export default GameOver