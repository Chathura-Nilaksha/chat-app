import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Chat from './pages/chat/Chat'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App
