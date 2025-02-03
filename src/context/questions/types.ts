export type Action =
  | "UPDATE_QUESTION"
  | "UPDATE_ANSWER"
  | "CHANGE_ANSWER_TYPE"
  | "IS_QUESTION_REQUIRED"
  | "ADD_CHOICE"
  | "REMOVE_CHOICE"
  | "UPDATE_CHOICE";

export interface IAction {
  type: Action;
  payload?: Partial<IQuestionContext>;
}

export interface Answer {
  value: string | undefined;
  id: string;
}

export interface IQuestionContext {
  question: string;
  choices: Answer[];
  answer: Answer | Answer[] | null;
  required: boolean;
  image: File | null;
  isMultiple: boolean;
}

export interface IContext {
  state: Partial<IQuestionContext>;
  dispatch: React.Dispatch<IAction>;
  id: string;
}
