import { memo, useReducer, useState, type PropsWithChildren } from "react";
import { reducer } from "./reducer";
import { QuestionContext } from "./useQuestionContext";
import { IQuestionContext } from "./types";

export default memo(function QuestionContextProvider({
  children,
  ...defaultValues
}: PropsWithChildren & Partial<IQuestionContext>) {
  const [id] = useState(crypto.randomUUID());
  const [state, dispatch] = useReducer(reducer, {
    question: defaultValues?.question ?? "",
    choices: defaultValues?.choices ?? [],
    answer: defaultValues?.answer ?? null,
    required: !!defaultValues?.required,
    image: defaultValues?.image ?? null,
    isMultiple: defaultValues?.isMultiple ?? false,
  });

  return (
    <QuestionContext.Provider value={{ state, dispatch, id }}>
      {children}
    </QuestionContext.Provider>
  );
});
