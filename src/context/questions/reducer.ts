import { IQuestionContext, IAction } from "./types";

export function reducer(
  state: Partial<IQuestionContext>,
  action: IAction,
): Partial<IQuestionContext> {
  const { payload, type } = action;
  let choice;
  switch (type) {
    case "IS_QUESTION_REQUIRED":
      return { ...state, required: !state?.required };
    case "UPDATE_QUESTION":
      return { ...state, question: payload?.question };
    case "ADD_CHOICE":
      return {
        ...state,
        choices: [...(payload?.choices ?? []), ...(state?.choices ?? [])],
      };
    case "REMOVE_CHOICE":
      return {
        ...state,
        choices: state?.choices?.filter(
          (c) => c.id !== payload?.choices?.[0]?.id,
        ),
      };
    case "UPDATE_CHOICE":
      choice = state?.choices?.find((c) => c.id === payload?.choices?.[0]?.id);
      if (choice) choice.value = payload?.choices?.[0]?.value;
      return {
        ...state,
        choices: state?.choices,
      };
    case "CHANGE_ANSWER_TYPE":
      return {
        ...state,
        isMultiple: !state?.isMultiple,
      };
    default:
      return state;
  }
}
