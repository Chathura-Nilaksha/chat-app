import React from 'react'
import './Chat.css'
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import ChatBox from '../../components/chatbox/chatbox'
import RightSidebar from '../../components/rightSideBar/RightSidebar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RightSidebar/>
      </div>      
    </div>
  )
}

export default Chat
