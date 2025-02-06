import { useQuizContext } from "@/context/quiz";
import { ChangeEvent, memo, useCallback } from "react";

export const Question = memo(() => {
  const { state, dispatch } = useQuizContext();
  const selectedQuestion = state.questions.find(
    (q) => q.id === state.selectedQuestionId,
  );

  const updateQuestion = useCallback(
    (id: string, question: string) => {
      dispatch({
        type: "UPDATE_QUESTION",
        payload: { id, question },
      });
    },
    [dispatch],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!selectedQuestion) return;
      updateQuestion(selectedQuestion.id, e.target.value);
    },
    [selectedQuestion, updateQuestion],
  );

  return (
    <textarea
      onChange={handleChange}
      value={selectedQuestion?.question || ""}
      className="w-full h-20 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="What does UI stand for in the context of design?"
    />
  );
});
