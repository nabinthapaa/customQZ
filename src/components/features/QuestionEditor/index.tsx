import Divider from "@/components/ui/Divider";
import { ErrorView } from "@/components/ui/Error";
import { ImageUpload } from "@/components/ui/ImageUpload";
import Switch from "@/components/ui/Switch";
import { Question as IQuestion, useQuizContext } from "@/context/quiz";
import { useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ChoicesList } from "./ChoiceList";
import { Footer } from "./Footer";
import { Question } from "./Question";

const QuestionEditor = ({ question }: { question: IQuestion }) => {
  const [answerWithImage, setAnswerWithImage] = useState(false);
  const { state, dispatch } = useQuizContext();

  const handleRequiredChange = useCallback(() => {
    if (!question) return;
    dispatch({
      type: "UPDATE_QUESTION",
      payload: {
        id: question.id,
        required: !question.required,
      },
    });
  }, [dispatch, question]);

  const handleAnswerType = useCallback((value: boolean) => {
    dispatch({
      type: "UPDATE_QUESTION", 
      payload: {
        id: question.id,
        answerWithImage: value
      }
    });
  }, [answerWithImage, dispatch, question]);

  const handleMulitpleAnswer = useCallback(() => {
    if (!question) return;
    dispatch({
      type: "UPDATE_QUESTION",
      payload: {
        id: question.id,
        isMultiple: !question.isMultiple,
      },
    });
  }, [dispatch, question]);

  const handleImageChange = useCallback(
    (image: File) => {
      if (!question) return;
      dispatch({
        type: "UPDATE_QUESTION",
        payload: { id: question.id, image },
      });
    },
    [dispatch, question],
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      <div className="w-full bg-white p-6 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <select className="border p-2 rounded text-gray-700 focus:outline-none">
              <option>Multiple choice</option>
              <option>Short answer</option>
            </select>
          </div>
          <Switch
            id={`required-${state.selectedQuestionId}`}
            label={`Required`}
            checked={!!question?.required}
            onChange={handleRequiredChange}
          />
        </div>
        <Divider />

        <div className="mt-4 flex space-x-4">
          <div className="flex-1">
            <Question />
          </div>
          <ImageUpload
            onImageChange={handleImageChange}
            id={`image-upload-${state.selectedQuestionId}`}
          />
        </div>

        <div className="mt-4 flex space-x-4">
          <Switch
            id={`answer-type-toggle-${state.selectedQuestionId}`}
            label="Multiple answer"
            checked={!!question?.isMultiple}
            onChange={handleMulitpleAnswer}
          />
          <Switch
            id={`answer-with-image-${state.selectedQuestionId}`}
            label="Answer with image"
            checked={answerWithImage}
            onChange={handleAnswerType}
          />
        </div>

        <div className="mt-4">
          <ChoicesList />
        </div>

        <Divider />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default QuestionEditor;
