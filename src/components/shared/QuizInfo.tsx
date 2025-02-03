import { memo } from "react";
import Popup from "../ui/Popup";
import Trophy from "../ui/icons/trophy";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Info = memo(({ title, info }: { title: string; info: string }) => {
  return (
    <p className="text-lg flex gap-x-2 items-center">
      {title} -
      <span className="bg-gray-300/30 inline-block px-4 rounded-md text-center">
        {info}
      </span>
    </p>
  );
});

function QuizInfo({ isOpen, onClose }: Props) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="bg-white shadow-lg rounded-lg px-4 py-8 space-y-4">
        <div className="flex items-center justify-between">
          <p>ABC Daily Quiz</p>
          <p>Quiz ID: 10002101202</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div className="border w-full aspect-square"></div>
          <div className="space-y-10">
            <p className="font-bold text-lg flex items-center gap-x-2">
              Status:
              <span className="bg-green-300/30 text-green-600 rounded-md inline-block px-2 ">
                Completed
              </span>
            </p>
            <div className="space-y-3">
              <Info title="No of Questions" info="100" />
              <Info title="Quiz Date" info="2025-01-31" />
              <Info title="Start Timer" info="02:53 PM" />
              <Info title="End Time" info="05:43 PM" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-medium">Quiz Manager</h4>
              <div className="flex items-center gap-x-4">
                <div className="w-8 aspect-square rounded-full border border-(--primary)"></div>
                <p className="text-xl font-medium">Sujan Sapkota</p>
              </div>
            </div>
            <div>
              <button className="text-xl flex items-center gap-x-2 p-4 rounded-xl bg-gray-300/30">
                <span className="inline-block w-8 aspect-square text-yellow-400">
                  <Trophy className="fill-yellow-400" />
                </span>
                View Leaderboard
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 col-start-2">
            <button className="bg-gray-300/30 p-2 rounded-lg text-xl">
              Edit
            </button>
            <button className="bg-(--primary) text-white p-2 rounded-lg text-xl">
              Join
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default memo(QuizInfo);
