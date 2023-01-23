import { createContext, useReducer } from "react";
import questions from    '../data/questions';

const STAGES = ["Start", "Playing", "End"] // diz qual é o estagio do jogo que vc está

// qdo uso o useReducer, eu posso ter um estado inicial, ou seja, o que acontece qdo o cara entra na aplicação
// definir um cenário base - gerenciar estados complexos:

const initialState = {
  gameStage: STAGES[0],
  questions, // recebe o conteúdo de questions(data)
  currentQuestion: 0,
}

// funcao criada para alterar o estado inicial
// recebe dois parametros, estate inicial que será modificado e a Action, ação que o usuario faz
const quizReducer = (state, action) => {
  console.log(state,action);

  switch(action.type) { // baseado no tipo da ação
      case 'CHANGE_STATE':
        return {
          ...state,
          gameStage: STAGES[1],
        };

      case 'REORDER_QUESTIONS':
        // console.log('reordenou')
        const reorderedQuestions = questions.sort(() => { // recebendo as perguntas que vem do arquivo, ordenando
            return Math.random() - 0.5;
        });

        return {
          ...state,
          questions: reorderedQuestions,
        }

      case "CHANGE_QUESTION": // ALTERAR O INDICE DA MINHA PERGUNTA
      const nextQuestion = state.currentQuestion + 1; // add o proximo indice a minha pergunta atual
      let endGame = false

        if(!questions[nextQuestion]) { // se nao existir:
          endGame = true;
        }

        return {
          ...state,
          currentQuestion: nextQuestion,
          gameStage: endGame ? STAGES[2] : state.gameStage // se o endGame for TRUE, vai pro End, se nao recebe o atual estagio
        };

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
