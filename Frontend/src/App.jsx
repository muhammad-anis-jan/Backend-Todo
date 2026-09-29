import React from 'react'
import {Routes , Route} from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div>
      {/* <button onClick={()=> toast.success("Congratulations")} className='text-red-500 p-4 bg-amber-700'>click</button> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/createpage' element={<CreatePage/>} />
        <Route path='/note/:id' element={<NoteDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App
