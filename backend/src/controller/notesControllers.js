// const Note = require("../models/Note.js")

import Note from "../models/Note.js";

console.log(Note);

export async function getAllNotes (req, res)  {
    try {
      const notes = await Note.find()
      res.status(202).json(notes)
    } catch (error) {
      console.error("Error in get All Note" , error)
      res.status(201).json({message: " Internal server is Error "})
    }
}

export async function getNoteById(req , res){
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message : "Note not found"})
      res.json(note)
  } catch (error) {
    console.error("Error in getNoteById  Note" , error)
    res.status(201).json({message: " Internal server is Error "})
  }
}

export async function createNote(req, res) {
  try {
    const {title , content} = req.body 
    console.log(title , content)
    const newNote = new Note({title , content})

    await newNote.save()

    res.status(201).json({message : "note created Successfuly"})

  } catch (error) {
    console.error("Error in created Note" , error)
      res.status(501).json({message: " Internal server is Error "})
  }
}


export async function updatedNote  (req, res) {
  try {
    const {title , content} = req.body 
    const updateNote = await Note.findByIdAndUpdate(req.params.id , {title , content},{new : true})

    if(!updateNote) return res.status(404).json({message :"the updated note is not to be found"})

    res.status(201).json({message :" The id are to be updated "})
  } catch (error) {
    console.error("Error in updated Note" , error)
    res.status(501).json({message: " Internal server is Error "})
  }
};

export async function deleteNote  (req, res)  {
  try {
    const deleteNote = await Note.findOneAndDelete(req.params.id)
    if(!deleteNote) return res.status(404).json({message :"the deleted note is not to be found "})
      res.json({message : "the note is deleted"})
  } catch (error) {
    console.error("Error in deleted Note" , error)
    res.status(501).json({message: " Internal server is Error "})
  }
};