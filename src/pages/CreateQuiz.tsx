import QuestionEditor from "@/components/features/QuestionEditor";
import Navbar from "@/components/shared/Navbar";
import { QuestionContextProvider } from "@/context/questions";
import { memo } from "react";

export default function CreateQuiz() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-2">
        <EditQuestions />
      </main>
    </>
  );
}

const EditQuestions = memo(() => (
  <div className="container mx-auto px-2 py-8 grid grid-cols-2">
    <QuestionContextProvider>
      <QuestionEditor />
    </QuestionContextProvider>
    <QuestionContextProvider>
      <QuestionEditor />
    </QuestionContextProvider>
  </div>
));
