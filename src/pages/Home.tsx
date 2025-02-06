import Idea from "@/assets/idea.png";
import LeaderBoard from "@/components/shared/LeaderBoard";
import Navbar from "@/components/shared/Navbar";
import QuizInfo from "@/components/shared/QuizInfo";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/Button";
import Cross from "@/components/ui/icons/Cross";
import Stamp from "@/components/ui/icons/Stamp";
import Upload from "@/components/ui/icons/Upload";
import { memo, useCallback, useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [isQuizInfoOpen, setIsQuizInfoOpen] = useState<boolean>(false);
  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState<boolean>(false);

  const closeLeaderBoard = useCallback(() => setIsLeaderBoardOpen(false), []);
  const closeQuizInfo = useCallback(() => setIsQuizInfoOpen(false), []);

  return (
    <>
      <Navbar />
      <main className="flex-1 grid grid-cols-[2fr_1fr] items-center container mx-auto px-2">
        <div className="space-y-4">
          <h1 className="text-6xl font-semibold leading-20">
            Create a Quiz <br /> That's uniquely yours
          </h1>
          <div className="flex  gap-x-4">
            <div className="border flex items-center justify-between w-full max-w-150 rounded-lg">
              <input
                type="text"
                className="bg-transparent px-2 outline-none"
                placeholder="Enter the quiz code or link"
              />
              <button
                onClick={() => setIsQuizInfoOpen(true)}
                className="bg-(--primary) text-white px-8 py-2 m-2 whitespace-nowrap rounded-md"
              >
                Find
              </button>
            </div>
            <Link
              to="/create-quiz"
              className="text-(--primary) flex items-center gap-x-2 whitespace-nowrap bg-white px-4 py-2 rounded-md text-xl font-medium shadow-sm"
            >
              <span className="inline-block w-6">
                <Cross />
              </span>
              <span>Create new</span>
            </Link>
          </div>
        </div>
        <div className="aspect-square">
          <img
            src={Idea}
            alt="light bulb"
            className="w-full h-full object-contain"
          />
        </div>
        <Buttons />
      </main>
      <LeaderBoard isOpen={isLeaderBoardOpen} onClose={closeLeaderBoard} />
      <QuizInfo isOpen={isQuizInfoOpen} onClose={closeQuizInfo} />
    </>
  );
}
const Buttons = memo(() => {
  return (
    <div className="flex items-center gap-x-4">
      <Button className="flex-col gap-y-2">
        <ButtonIcon>
          <Upload />
        </ButtonIcon>
        <ButtonText>
          <ButtonIcon className="w-6">
            <Cross />
          </ButtonIcon>
          Upload CSV file
        </ButtonText>
      </Button>
      <Button className="flex-col gap-y-2">
        <ButtonIcon>
          <Stamp />
        </ButtonIcon>
        <ButtonText>
          <ButtonIcon className="w-6">
            <Cross />
          </ButtonIcon>
          Create Manually
        </ButtonText>
      </Button>
    </div>
  );
});
