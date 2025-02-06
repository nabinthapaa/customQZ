import { PropsWithChildren, useReducer } from "react";
import { quizReducer } from "./reducer";
import { QuizContext } from "./useQuizContext";

export function QuizProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(quizReducer, {
    questions: [],
    selectedQuestionId: null,
  });

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
