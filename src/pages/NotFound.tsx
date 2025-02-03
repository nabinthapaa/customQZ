import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 grid place-items-center text-center">
        <div>
          <p className="text-4xl leading-40">Are You Lost?</p>
          <Link
            to="/"
            className="text-6xl font-bold text-(--primary) shadow-lg bg-white px-10 py-5 rounded-lg"
          >
            Go to home page
          </Link>
        </div>
      </main>
    </>
  );
}
