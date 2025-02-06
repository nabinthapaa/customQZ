import { useQuizContext } from "@/context/quiz";
import { memo } from "react";

interface Props {
  id: string;
  questionNumber: number;
  question: string;
  isMultiple: boolean;
}

export default memo(function Questions({
  questionNumber,
  question,
  isMultiple,
  id,
}: Props) {
  const { dispatch } = useQuizContext();

  const handleClick = () => {
    dispatch({ type: "SELECT_QUESTION", payload: { id } });
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg w-80"
    >
      <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-semibold">
        {questionNumber}
      </div>
      <div className="flex-1">
        <p className="text-gray-900 font-medium line-clamp-3 text-ellipsis text-justify">
          {question}
        </p>
        {isMultiple && (
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <input
              type="checkbox"
              checked
              className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
              readOnly
            />
            <span>Multiple choice</span>
          </div>
        )}
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        &#8226;&#8226;&#8226;
      </button>
    </div>
  );
});
