
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  // 🔴 CHANGE 1: undefined ki jagah false
  const [isRateLimited, setIsRateLimited] = useState(false);

  // 🔴 CHANGE 2: notes ko empty array se start karo
  const [notes, setNotes] = useState([]);

  // 🔴 CHANGE 3: loading ko boolean rakho
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔴 CHANGE 4: URL ko simple string rakho
        const res = await axios.get("http://localhost:5001/api/notes");

        console.log(res.data);

        setNotes(res.data);
      } catch (error) {
        console.log("Error fetching notes", error);
      } finally {
        // 🔴 CHANGE 5: request complete hone ke baad loading false
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">

        {loading && (
          <div className="text-center text-black py-10">
            Loading Status....
          </div>
        )}

        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {notes.map((note) => (
              // 🔴 CHANGE 6: key add ki
             <NoteCard key={note._id} note={note}/>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;

