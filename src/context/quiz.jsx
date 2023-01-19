import { createContext, useReducer } from "react";
import questions from    '../data/questions';

const STAGES = ["Start", "Playing", "End"]

// qdo uso o useReducer, eu posso ter um estado inicial, ou seja, o que acontece qdo o cara entra na aplicação
// definir um cenário base - gerenciar estados complexos:

const initialState = {
  gameStage: STAGES[0],
  questions
}

// funcao criada para alterar o estado inicial
// recebe dois parametros, estate inicial que será modificado e a Action, ação que o usuario faz
const quizReducer = (state, action) => {
  console.log(state,action);

  switch(action.type) { // baseado no tipo da ação
      case 'CHANGE_STATE':
        return state;

      default:
        return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState); // modifica o Value baseado no Reducer, modificação do estado
  // initialStage pra padronizar o estado inicial

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};
