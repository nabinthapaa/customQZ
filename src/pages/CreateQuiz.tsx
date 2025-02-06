import QuestionEditor from "@/components/features/QuestionEditor";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/Button";
import Questions from "@/components/ui/Questions";
import { QuizProvider, useQuizContext } from "@/context/quiz";
import { useMemo } from "react";

export default function CreateQuiz() {
  return (
    <>
      <QuizProvider>
        <Navbar />
        <main className="container flex-1 mx-auto px-2">
          <PublishButton />
          <div className="grid h-full max-h-full grid-cols-[0.2fr_1fr] gap-10 items-start">
            <Sidebar />
            <EditQuestions />
          </div>
        </main>
      </QuizProvider>
    </>
  );
}

const PublishButton = () => {
  const { state } = useQuizContext();
  return (
    <div className="flex justify-end my-4">
      <Button
        onClick={() => console.log(state.questions)}
        className="bg-(--primary) text-white font-bold  px-8"
      >
        Publish
      </Button>
    </div>
  );
};

const EditQuestions = () => {
  const { state } = useQuizContext();
  const selectedQuestion = useMemo(() => {
    if (!state.selectedQuestionId) return null;
    return state.questions.find((q) => q.id === state.selectedQuestionId);
  }, [state.questions, state.selectedQuestionId]);

  if (!selectedQuestion) {
    return (
      <div className="flex-1 grid place-items-center">
        Select a question to edit
      </div>
    );
  }
  return <QuestionEditor question={selectedQuestion} />;
};

const Sidebar = () => {
  const { state, dispatch } = useQuizContext();

  const handleAddQuestion = () => {
    dispatch({ type: "ADD_QUESTION" });
  };

  return (
    <div className="flex flex-col max-h-full h-full px-10 min-w-[400px]">
      <div className="flex items-center justify-between my-4 ">
        <p className="text-gray-400 font-bold text-xl">
          Questions ( {state.questions.length} )
        </p>
        <Button
          onClick={handleAddQuestion}
          className="rounded-full aspect-square text-3xl"
        >
          +
        </Button>
      </div>
      <div className="space-y-10">
        {state.questions.map((question, idx) => (
          <Questions
            id={question.id}
            key={question.id}
            question={question.question}
            isMultiple={question.isMultiple}
            questionNumber={idx + 1}
          />
        ))}
      </div>
    </div>
  );
};
