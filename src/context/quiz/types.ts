export interface QuizContextProps {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

export interface Answer {
  id: string;
  value: string | undefined;
}

export interface Question {
  id: string;
  question: string;
  choices: Answer[];
  answer: Answer | Answer[] | null;
  required: boolean;
  image: File | null;
  isMultiple: boolean;
  answerWithImage: boolean;
}

export interface QuizState {
  questions: Question[];
  selectedQuestionId: string | null;
}

export type QuizAction =
  | { type: "ADD_QUESTION" }
  | { type: "REMOVE_QUESTION"; payload: { id: string } }
  | { type: "UPDATE_QUESTION"; payload: Partial<Question> & { id: string } }
  | { type: "SELECT_QUESTION"; payload: { id: string | null } };
