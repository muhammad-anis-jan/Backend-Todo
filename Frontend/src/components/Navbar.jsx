
import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">

          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Think<span className="text-blue-500">Board</span>
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to={"/createpage"}
              className="flex items-center gap-2 px-4 py-2.5 
              rounded-xl bg-blue-600 hover:bg-blue-500 
              text-white font-semibold shadow-lg shadow-blue-600/20 
              transition-all duration-300 hover:scale-105"
            >
              <FaPlusCircle className="size-5" />
              <span>New Note</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
