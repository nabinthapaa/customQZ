import { Question, QuizState, QuizAction } from "./types";

const defaultQuestion = (): Omit<Question, "id"> => ({
  question: "",
  choices: [],
  answer: null,
  required: false,
  image: null,
  isMultiple: false,
});

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "ADD_QUESTION": {
      const newQuestion: Question = {
        id: crypto.randomUUID(),
        ...defaultQuestion(),
      };
      return {
        questions: [...state.questions, newQuestion],
        selectedQuestionId: newQuestion.id,
      };
    }
    case "REMOVE_QUESTION": {
      const newQuestions = state.questions.filter(
        (q) => q.id !== action.payload.id,
      );
      let newSelected = state.selectedQuestionId;
      if (newSelected === action.payload.id) {
        newSelected = newQuestions.length > 0 ? newQuestions[0].id : null;
      }
      return {
        ...state,
        questions: newQuestions,
        selectedQuestionId: newSelected,
      };
    }
    case "UPDATE_QUESTION": {
      const newQuestions = state.questions.map((q) =>
        q.id === action.payload.id ? { ...q, ...action.payload } : q,
      );
      return { ...state, questions: newQuestions };
    }
    case "SELECT_QUESTION": {
      return { ...state, selectedQuestionId: action.payload.id };
    }
    default:
      return state;
  }
}
