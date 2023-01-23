import React, {useContext} from 'react';
import { QuizContext } from '../context/quiz';

import '../assets/styles/Option.css';

const Options = ({option}) => {
  const [quizState,dispatch] = useContext(QuizContext);
  return (
    <div className='option'>
      <p>{option}</p>
    </div>
  )
}

export default Options