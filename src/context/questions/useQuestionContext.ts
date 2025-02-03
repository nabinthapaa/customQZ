import { createContext, useContext } from "react";
import { IContext } from "./types";

export const QuestionContext = createContext<IContext | undefined>(undefined);

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("Question Context not defined");
  }

  return context;
};
