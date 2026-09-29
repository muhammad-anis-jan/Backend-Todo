import React from "react";
import { Link } from "react-router-dom";
import { CiPen } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatDate } from "../lib/utils";
import  axios  from "axios";
import toast from "react-hot-toast";

const NoteCard = ({ note,setNotes }) => {

  const handleDelete = async(e , id) =>{
      e.preventDefault()
      if(!window.confirm("are you sure that you wanna to delete this note"))return;

      try {
        await axios.delete(`http://localhost:5001/api/notes/${id}`)
        setNotes((prev)=>prev.filter(note => note._id !== id))
        toast.success("Note delete Successfully!")
      } catch (error) {
        console.log("Error",error);
        
        toast.error("you note are not to be deleted")
      }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="group block bg-slate-900/80 hover:bg-slate-800/90
      border border-slate-800 hover:border-blue-500/40
      border-t-4 border-t-blue-500
      rounded-2xl overflow-hidden
      shadow-lg shadow-black/10
      hover:shadow-xl hover:shadow-blue-500/10
      transition-all duration-300
      hover:-translate-y-1"
    >
      <div className="p-5">

        <h3 className="text-xl font-semibold text-white
        group-hover:text-blue-400 transition-colors duration-300">
          {note.title}
        </h3>

        <p className="text-slate-400 line-clamp-3 mt-3 leading-relaxed">
          {note.content}
        </p>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800">

          <span className="text-sm text-slate-500">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-2">

            <CiPen
              className="size-5 text-blue-400 hover:text-blue-300
              transition-colors duration-200"
            />

            <button
            onClick={(e) => handleDelete(e,note._id)}
              className="flex items-center justify-center
              w-8 h-8 rounded-lg
              bg-slate-800 border border-slate-700
              text-red-400
              hover:bg-red-500 hover:text-white hover:border-red-500
              transition-all duration-200"
            >
              <FaRegTrashAlt className="size-4" />
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default NoteCard;

