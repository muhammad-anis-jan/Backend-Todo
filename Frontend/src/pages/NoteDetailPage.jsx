import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

const backendUrl = import.meta.env.VITE_BACKEND_URL

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  console.log(backendUrl , "This is the backend url");
  

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`${backendUrl}notes/${id}`);

        setNote(res.data);

        // 🔴 FIX 1:
        // Note se title aur content states mein data set karna zaroori hai
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.log("Error in Fetching note", error);
        toast.error("Failed to Fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("really you wanna to delete it")) return;

    try {
      await axios.delete(`${backendUrl}notes/${id}`);

      toast.success("It is deleted Successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error deleting note :", error);

      toast.error("Failed to Delete note");
    }
  };

  const handleSave = async () => {
    // 🔴 FIX 2:
    // note.title aur note.content ki jagah
    // title aur content states ko check karo
    if (!title.trim() || !content.trim()) {
      toast.error("Please Add Title and Content");
      return;
    }

    setSaving(true);

    try {
      // ❌ PEHLE TUMHARA CODE:
      // await axios.put(`http://localhost:5001/api/notes/${id}`, note)

      // ✅ CORRECT CODE:
      await axios.put(`${backendUrl}notes/${id}`, {
        title: title,
        content: content,
      });

      toast.success("note updated successfully!");
      navigate("/");
    } catch (error) {
      console.log("Something went wrong in the updated", error);
      toast.error("note are not to be updated");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to={"/"}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl 
              bg-slate-800/70 border border-slate-700 
              text-slate-200 hover:bg-slate-700 hover:text-white 
              transition-all duration-300 shadow-lg"
            >
              <IoMdArrowBack className="h-5 w-5" />
              <span className="font-medium">Back To Notes</span>
            </Link>

            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl 
              bg-red-500/10 border border-red-500/30 
              text-red-400 hover:bg-red-500 hover:text-white 
              transition-all duration-300 shadow-lg"
            >
              <FaRegTrashAlt className="h-5 w-5" />
              <span className="font-medium">Delete Note</span>
            </button>
          </div>

          {/* NOTE CARD */}
          <div
            className="rounded-2xl overflow-hidden 
            bg-slate-900/80 backdrop-blur-xl 
            border border-slate-700/70 
            shadow-2xl"
          >
            <div className="p-6 sm:p-8">
              {/* HEADER */}
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Edit Your Note
                </h1>

                <p className="text-slate-400 mt-2">
                  Update your note and save your changes.
                </p>
              </div>

              {/* TITLE */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Enter note title..."
                  className="w-full px-4 py-3.5 rounded-xl 
                  bg-slate-800/70 
                  border border-slate-700 
                  text-white placeholder-slate-500 
                  outline-none 
                  focus:border-blue-500 
                  focus:ring-4 focus:ring-blue-500/10 
                  transition-all duration-300"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* CONTENT */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Content
                </label>

                <input
                  type="text"
                  placeholder="Write your note content..."
                  className="w-full px-4 py-3.5 rounded-xl 
                  bg-slate-800/70 
                  border border-slate-700 
                  text-white placeholder-slate-500 
                  outline-none 
                  focus:border-blue-500 
                  focus:ring-4 focus:ring-blue-500/10 
                  transition-all duration-300"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* SAVE BUTTON */}
              <div className="flex justify-end pt-5 border-t border-slate-800">
                <button
                  className="px-6 py-3 rounded-xl 
                  bg-blue-600 
                  hover:bg-blue-500 
                  text-white font-semibold 
                  shadow-lg shadow-blue-900/30 
                  hover:shadow-blue-900/50 
                  transition-all duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving...." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
