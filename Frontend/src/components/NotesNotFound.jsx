import React from "react";
import { Link } from "react-router-dom";

const NotebookIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2 6h4" />
    <path d="M2 10h4" />
    <path d="M2 14h4" />
    <path d="M2 18h4" />
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <path d="M9.5 8h5" />
    <path d="M9.5 12H16" />
    <path d="M9.5 16H14" />
  </svg>
);

export default function NotesNotFound({ onCreate = () => {} }) {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-md flex-col items-center text-center sm:max-w-lg">
        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-950/60 ring-1 ring-emerald-900/40 sm:mb-8 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
          <NotebookIcon className="h-8 w-8 text-green-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-100 sm:text-2xl lg:text-3xl">
          No notes yet
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400 sm:mt-4 sm:max-w-md sm:text-base">
          Ready to organize your thoughts? Create your first note to get started
          on your journey.
        </p>

        {/* Button */}
       <Link to={"/createpage"}>
       <button
          type="button"
          onClick={onCreate}
          className="mt-6 rounded-full bg-green-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-green-500/20 transition hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95 sm:mt-8 sm:px-8 sm:py-3 sm:text-base"
        >
          Create Your First Note
        </button>
       </Link>
      </div>
    </section>
  );
}