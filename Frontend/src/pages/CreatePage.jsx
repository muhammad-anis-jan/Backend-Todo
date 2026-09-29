
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios"; // ✅ FIX 1: axios import karna zaroori hai


const CreatePage = () => {

  // ❌ GHALTI:
  // const [title, setTitle] = useState();
  // const [content, setContent] = useState();

  // Kyun?
  // useState() ke andar kuch nahi tha, isliye initial value undefined thi.
  // Input pehle uncontrolled tha aur baad mein controlled ho raha tha.

  // ✅ SAHI:
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(title);
    console.log(content);


    // Agar title ya content empty hai
    if (!title.trim() || !content.trim()) {
      toast.error("All Fields are required");
      return;
    }


    setLoading(true);


    try {

      // ❌ GHALTI:
      // axios use kiya tha lekin axios import nahi kiya tha.
      //
      // Error:
      // ReferenceError: axios is not defined

      // ✅ Ab axios import ho chuka hai, isliye ye chalega.
      await axios.post("http://localhost:5001/api/notes", {
        title,
        content,
      });


      toast.success("Note Created Successfully!");

      navigate("/");

    } catch (error) {

      console.log("Error creating note:", error);

      toast.error(
        "Failed to create Note! Please try again later..."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      <div className="container mx-auto px-4 py-10">

        <div className="max-w-2xl mx-auto">

          <Link
            to={"/"}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl 
            bg-white/10 hover:bg-white/20 text-white border border-white/10 
            backdrop-blur-sm transition-all duration-300 shadow-lg"
          >
            <IoMdArrowBack className="text-xl" />

            <span>Back To Notes</span>
          </Link>


          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">

            <div className="px-6 py-8 sm:px-8">

              <div className="mb-8">

                <h2 className="text-3xl font-bold text-white mb-2">
                  Create New Note
                </h2>

                <p className="text-slate-400">
                  Write down your thoughts and keep them organized.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                {/* TITLE */}

                <div className="mb-6">

                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Title
                  </label>

                  <input
                    type="text"
                    placeholder="Enter note title..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/70 
                    border border-slate-700 text-white placeholder-slate-500 
                    outline-none focus:border-blue-500 focus:ring-2 
                    focus:ring-blue-500/20 transition-all duration-300"

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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/70 
                    border border-slate-700 text-white placeholder-slate-500 
                    outline-none focus:border-blue-500 focus:ring-2 
                    focus:ring-blue-500/20 transition-all duration-300"

                    value={content}

                    onChange={(e) => setContent(e.target.value)}
                  />

                </div>


                {/* BUTTON */}

                <div className="flex justify-end">

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 
                    text-white font-semibold shadow-lg shadow-blue-600/20 
                    transition-all duration-300 hover:scale-[1.02] 
                    disabled:opacity-50 disabled:cursor-not-allowed"

                    disabled={loading}
                  >

                    {loading ? "Creating..." : "Create Note"}

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


export default CreatePage;
