import { Answer, useQuizContext } from "@/context/quiz";
import { memo, useCallback } from "react";
import { Choice } from "./Choice";

export const ChoicesList = memo(() => {
  const { state, dispatch } = useQuizContext();
  const selectedQuestion = state.questions.find(
    (q) => q.id === state.selectedQuestionId,
  );

  const addChoice = useCallback(() => {
    if (!selectedQuestion) return;
    dispatch({
      type: "UPDATE_QUESTION",
      payload: {
        id: selectedQuestion.id,
        choices: [
          ...selectedQuestion.choices,
          { value: "New Choice", id: crypto.randomUUID(), isAnswer: false },
        ],
      },
    });
  }, [dispatch, selectedQuestion]);

  const removeChoice = useCallback(
    (choice: Answer) => {
      if (!selectedQuestion) return;
      dispatch({
        type: "UPDATE_QUESTION",
        payload: {
          id: selectedQuestion.id,
          choices: selectedQuestion.choices.filter((c) => c.id !== choice.id),
        },
      });
    },
    [dispatch, selectedQuestion],
  );

  const updateAnswer = useCallback(
    (choice: Answer) => {
      if (!selectedQuestion) return;
  
      const updatedChoices = selectedQuestion.isMultiple
        ? selectedQuestion.choices.map((c) =>
            c.id === choice.id ? { ...c, isAnswer: !c.isAnswer } : c
          )
        : selectedQuestion.choices.map((c) => ({
            ...c,
            isAnswer: c.id === choice.id,
          }));
  
      dispatch({
        type: "UPDATE_QUESTION",
        payload: {
          id: selectedQuestion.id,
          choices: updatedChoices,
        },
      });
    },
    [dispatch, selectedQuestion],
  );

  return (
    <div className="space-y-2">
      {selectedQuestion?.choices.map((choice) => (
        <Choice
          type={selectedQuestion.isMultiple ? "checkbox" : "radio"}
          onDelete={removeChoice}
          key={choice.id}
          value={choice}
          onValueChange={updateAnswer}
          isAnswer={choice.isAnswer}
        />
      ))}
      <button
        onClick={addChoice}
        className="mt-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
      >
        + Add answers
      </button>
    </div>
  );
});
