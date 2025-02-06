import Divider from "@/components/ui/Divider";
import { Answer, useQuizContext } from "@/context/quiz";
import {
  FocusEvent,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const Choice = memo(
  ({
    type,
    value,
    onDelete,
  }: {
    type: "checkbox" | "radio";
    value: Answer;
    onDelete: (v: Answer) => void;
  }) => {
    const { state, dispatch } = useQuizContext();
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLSpanElement | null>(null);

    const handleEditToggle = useCallback(() => {
      setIsEditing(true);
    }, []);

    const handleDelete = useCallback(() => {
      onDelete(value);
    }, [onDelete, value]);

    const handleEdit = useCallback(
      (e: FocusEvent<HTMLSpanElement>) => {
        const choice = e.target.innerText.trim();
        dispatch({
          type: "UPDATE_QUESTION",
          payload: {
            id: state.selectedQuestionId!,
            choices: state.questions
              .find((q) => q.id === state.selectedQuestionId)
              ?.choices.map((c) =>
                c.id === value.id ? { ...c, value: choice } : c,
              ),
          },
        });
        setIsEditing(false);
      },
      [dispatch, state, value.id],
    );

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === "Enter" || e.key === "ESC") {
        e.preventDefault();
        setIsEditing(false);
      }
    }, []);

    useEffect(() => {
      if (inputRef.current && isEditing) {
        inputRef.current.focus();
      }
    }, [isEditing]);

    return (
      <>
        <div className="flex items-center space-x-3 w-full">
          <input
            name={
              type === "radio"
                ? `answer-${state.selectedQuestionId}`
                : undefined
            }
            type={type}
            className="w-5 h-5 cursor-pointer"
          />
          <span
            ref={inputRef}
            contentEditable={isEditing}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            onDoubleClick={handleEditToggle}
            className="text-gray-800 flex-1 bg-gray-400/20 inline-block min-h-[2.5rem] py-2 px-2 rounded-lg h-full"
            dangerouslySetInnerHTML={{ __html: String(value.value) }}
          />
          <button
            onClick={handleEditToggle}
            className="text-red-500 hover:text-red-700"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
          >
            🗑️
          </button>
        </div>
        <Divider />
      </>
    );
  },
);
