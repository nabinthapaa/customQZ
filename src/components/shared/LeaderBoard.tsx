import { memo } from "react";
import Popup from "../ui/Popup";
import Cross from "../ui/icons/Cross";
import Trophy from "../ui/icons/trophy";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RankCard = memo(() => {
  return (
    <div className="flex items-center justify-between min-w-150 p-4 rounded-lg bg-gray-300/30 shadow-lg">
      <div className="flex items-center gap-x-4">
        <div className="w-8 aspect-square rounded-full border border-(--primary)"></div>
        <p className="text-xl font-bold">Sujan Sapkota</p>
      </div>
      <div>
        <p>Your Rank</p>
        <p className="text-(--primary) text-3xl font-bold">1667</p>
      </div>
    </div>
  );
});

const Podium = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-end justify-center space-x-8 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-cyan-400 rounded-full"></div>
          <p className="text-sm text-gray-600 mt-1">user name</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 border-4 border-yellow-400 rounded-full"></div>
          <p className="text-lg font-bold mt-1">user name</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-pink-400 rounded-full"></div>
          <p className="text-sm text-gray-600 mt-1">user name</p>
        </div>
      </div>

      <div className="flex items-end justify-center space-x-2">
        <div className="w-24 h-28 grid place-items-center bg-cyan-400 text-center text-2xl font-bold text-cyan-700 pb-2">
          <p className="w-fit">2</p>
        </div>
        <div className="w-28 h-36 bg-yellow-400 grid place-items-center text-center text-2xl font-bold text-yellow-700 pb-2">
          <p className="w-fit">1</p>
        </div>
        <div className="w-20 h-24 grid place-items-center bg-pink-400 text-center text-2xl font-bold text-pink-700 pb-2">
          <p className="w-fit">3</p>
        </div>
      </div>
    </div>
  );
});

function LeaderBoard({ isOpen, onClose }: Props) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="bg-white shadow-lg rounded-lg px-4 py-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <button className="text-xl font-bold flex items-center gap-x-2">
              <span className="inline-block w-6 aspect-square text-yellow-400">
                <Trophy className="fill-yellow-400" />
              </span>
              Leaderboard
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-4xl font-bold w-8 rotate-45"
          >
            <Cross />
          </button>
        </div>
        <div>
          <Podium />
        </div>
        <RankCard />
      </div>
    </Popup>
  );
}

export default memo(LeaderBoard);
