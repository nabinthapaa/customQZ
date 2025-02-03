import { useQuestionContext } from "@/context/questions";
import { FocusEvent, memo, useCallback } from "react";

export const Question = memo(() => {
  const { dispatch } = useQuestionContext();

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) =>
      dispatch({
        type: "UPDATE_QUESTION",
        payload: { question: e.target.value },
      }),
    [dispatch],
  );

  return (
    <textarea
      onBlur={handleBlur}
      className="w-full h-20 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="What does UI stand for in the context of design?"
    />
  );
});
