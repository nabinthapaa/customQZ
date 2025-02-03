import Logo from "@/assets/logo.png";
import { memo } from "react";
import { Link } from "react-router";
import Gear from "../ui/icons/Gear";
import Info from "../ui/icons/Info";

function Navbar() {
  return (
    <nav className="container px-2 mx-auto flex items-center justify-between py-4">
      <Link
        to="/"
        className="flex items-center gap-x-2 text-3xl text-(--primary) font-bold"
      >
        <div className="w-12 aspect-square">
          <img
            src={Logo}
            alt="customQZ"
            className="w-full h-full object-cover"
          />
        </div>
        <p>CustomQz</p>
      </Link>
      <div className="text-xl font-medium flex items-center justify-between gap-x-4">
        <div className="grid grid-cols-[repeat(3,min-content)] text-gray-600 gap-x-2">
          <button>Login</button>
          <div className="border-l-2 w-fit border-gray-600" />
          <button>Signup</button>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="w-6 aspect-square text-gray-600">
            <Info />
          </button>
          <button className="w-6 aspect-square text-gray-600">
            <Gear />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
