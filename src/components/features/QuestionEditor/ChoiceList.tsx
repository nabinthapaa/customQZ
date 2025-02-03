import { memo, useCallback } from "react";
import { Choice } from "./Choice";
import { useQuestionContext, Answer } from "@/context/questions";

export const ChoicesList = memo(() => {
  const { state, dispatch } = useQuestionContext();

  const addChoice = useCallback(() => {
    dispatch({
      type: "ADD_CHOICE",
      payload: { choices: [{ value: "New Choice", id: crypto.randomUUID() }] },
    });
  }, [dispatch]);

  const removeChoice = useCallback(
    (choice: Answer) => {
      dispatch({
        type: "REMOVE_CHOICE",
        payload: { choices: [choice] },
      });
    },
    [dispatch],
  );

  return (
    <div className="space-y-2">
      {state?.choices?.map((choice) => (
        <Choice
          type={state?.isMultiple ? "checkbox" : "radio"}
          onDelete={removeChoice}
          key={choice.id}
          value={choice}
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
