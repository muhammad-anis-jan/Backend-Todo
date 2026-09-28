
import React from 'react'
import { Link } from 'react-router-dom'
import { CiPen } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatDate } from '../lib/utils';

const NoteCard = ({note}) => {
  return (
    <Link 
      to={`/note/${note._id}`}
      className='card bg-[#1A1625] hover:bg-[#211B2F] hover:shadow-[0_8px_30px_rgba(168,85,247,0.18)] transition-all duration-300 border border-[#30283D] border-t-4 border-t-[#A855F7] rounded-2xl overflow-hidden'
    >
      <div className='card-body p-5'>

        <h3 className='card-title text-[#F9FAFB] text-xl font-semibold'>
          {note.title}
        </h3>

        <p className='text-[#B8B2C5] line-clamp-3 mt-2 leading-relaxed'>
          {note.content}
        </p>

        <div className='flex card-actions justify-between items-center mt-5'>

          <span className='text-sm text-[#8F889D]'>
            {formatDate(new Date (note.createdAt))}
          </span>

          <div className='flex items-center gap-2'>

            <CiPen 
              className='size-5 text-[#A855F7] hover:text-[#EC4899] transition-colors'
            />

            <button className='btn btn-xs bg-[#2A2035] border border-[#3A2D48] text-[#EC4899] hover:bg-[#EC4899] hover:text-white hover:border-[#EC4899] transition-all duration-200'>
              <FaRegTrashAlt className='size-4' />
            </button>

          </div>

        </div>

      </div>
    </Link>
  )
}

export default NoteCard;
