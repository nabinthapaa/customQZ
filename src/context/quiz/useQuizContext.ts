import { createContext, useContext } from "react";
import { QuizContextProps } from "./types";

export const QuizContext = createContext<QuizContextProps | undefined>(
  undefined,
);

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
}
