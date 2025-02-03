import { ErrorView } from "@/components/ui/Error";
import { ImageUpload } from "@/components/ui/ImageUpload";
import Switch from "@/components/ui/Switch";
import { useQuestionContext } from "@/context/questions";
import { useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ChoicesList } from "./ChoiceList";
import { Footer } from "./Footer";
import { Question } from "./Question";
import Divider from "@/components/ui/Divider";

const QuestionEditor = () => {
  const [answerWithImage, setAnswerWithImage] = useState(false);
  const { state, dispatch, id } = useQuestionContext();

  const handleRequiredChange = useCallback(
    () => dispatch({ type: "IS_QUESTION_REQUIRED" }),
    [dispatch],
  );

  const handleAnswerType = useCallback(
    () => setAnswerWithImage(!answerWithImage),
    [answerWithImage],
  );

  const handleMulitpleAnswer = useCallback(
    () => dispatch({ type: "CHANGE_ANSWER_TYPE" }),
    [dispatch],
  );

  const handleImageChange = useCallback(
    (image: File) => console.log(image),
    [],
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      <div className="max-w-2xl bg-white p-6 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <select className="border p-2 rounded text-gray-700 focus:outline-none">
              <option>Multiple choice</option>
              <option>Short answer</option>
            </select>
          </div>
          <Switch
            id={`required-${id}`}
            label="Required"
            checked={!!state.required}
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
            id={`image-upload-${id}`}
          />
        </div>

        <div className="mt-4 flex space-x-4">
          <Switch
            id={`answer-type-toggle-${id}`}
            label="Multiple answer"
            checked={!!state.isMultiple}
            onChange={handleMulitpleAnswer}
          />
          <Switch
            id={`answer-with-image-${id}`}
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
